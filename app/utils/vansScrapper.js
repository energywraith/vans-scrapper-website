const puppeteer = require('puppeteer');
const bluebird = require("bluebird");
const mongoose = require('mongoose')
const Model = require('../models/model')

const url =
  'mongodb+srv://fullstack:YSCOF90YGCKwQOnD@cluster0.zcpop.mongodb.net/vans-page?retryWrites=true&w=majority'

const withBrowser = async (fn) => {
	const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
	try {
		return await fn(browser);
	} finally {
		await browser.close();
	}
}

const withPage = (browser) => async (fn) => {
	const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on('request', (req) => {
    (req.resourceType() == 'font' || req.resourceType() == 'image')
      ? req.abort()
      : req.continue()
  });

	try {
		return await fn(page);
	} finally {
		await page.close();
	}
}

const vansPageUrl = 'https://www.vans.pl/shop/pl/vans-pl/mczyni-najpopularniejsze-outlet-outlet-mczyn#banner=WK0.OutletMen.Image.PLPOutlet_Secondary1&orderBy=FSM_ReleaseDate:desc&beginIndex=0&categoryId=0&esp_cf=CATEGORY&esp_filter_CATEGORY=Buty&esp_filter_DEPARTMENT=M%C4%99%C5%BCczy%C5%BAni&esp_sort=FSM_ReleaseDate&esp_order=desc'

const scrap = async () => {
  const currentDate = new Date().toLocaleString()
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  let lastData = await Model.find({});

  await withBrowser(async (browser) => {
    const items = await withPage(browser)(async (page) => {
      await page.goto(vansPageUrl)

      if (await page.waitForSelector("#onetrust-accept-btn-handler", { timeout: 5000 })) {
        await page.click("#onetrust-accept-btn-handler");
      }

      let loadMoreVisible = await isElementVisible(page, "#LoadMoreButton");
      while (loadMoreVisible) {
        await page.waitForTimeout(1000)
        await page
          .click("#LoadMoreButton")
          .catch(() => {});
        loadMoreVisible = await isElementVisible(page, "#LoadMoreButton");
      }

      return await page.evaluate(() => 
        Array.from(document.querySelectorAll(".product-block"))
          .map(d => [
            d.getAttribute("data-part-number"), 
            d.querySelector("a").href,
            d.querySelector("img").srcset,
            d.querySelector(".product-price-js").innerText.slice(3)
        ])
      )
    })

    // Vans page doesnt show the model in case it has no sizes
    // If there are models that doesnt appear on the vans page, set their sizes to empty array
    lastData = lastData.map(lastDataItem => 
      items.some(newDataItem => newDataItem[0] === lastDataItem.vansId)
        ? lastDataItem
        : {...lastDataItem, sizes: [], lastUpdated: currentDate }
    )
    
    await withBrowser(async (browser) => {
      return bluebird.map(items, async (item) => {
        return withPage(browser)(async (page) => {
          let [id, url, img, price] = item
          let storedItemData = lastData.find(shoe => shoe.vansId === id)

          await page.goto(url, {waitUntil: 'networkidle2'});
          await page.waitForSelector('.attr-container.swatches')
          
          let sizes = await page.evaluate(() => 
            Array.from(document.querySelectorAll(".attr-container.swatches button:not(.out-of-stock)"))
              .map(d => d.innerText)
          )

          let differenceInSizes = []
          if (storedItemData) {
            differenceInSizes = storedItemData.sizes
              .filter(x => !sizes.includes(x))
              .concat(sizes.filter(x => !storedItemData.sizes.includes(x)));
          }
          
          // Update the model if there are any size differences
          if(differenceInSizes.length > 0) {
            // Object.assign(lastData.find(model => model.vansId === id), { sizes, lastUpdated: currentDate });
            Model.findOneAndUpdate({ vansId: storedItemData.vansId },
              { sizes, lastUpdated: currentDate}
            ).then(result => console.log(`Updated ${id}`))
            
          // Add the model to database if its new
          } else if (!storedItemData) {
            let name = await page.evaluate(el => el.textContent, await page.$('.product-info h1'));
          
            let newModel = new Model({
              vansId: id,
              name,
              price,
              url,
              img,
              sizes,
              lastUpdated: currentDate
            });
          
            newModel.save().then(result => {
              console.log(`Added ${id}`)
            })
          }
        });
      }, {concurrency: 5});
    });

    console.log("success")
  });
}

const isElementVisible = async (page, cssSelector) => {
  let visible = true;
  await page
    .waitForSelector(cssSelector, { visible: true, timeout: 4000 })
    .catch(() => {
      visible = false;
    });
  return visible;
};

module.exports = { scrap };