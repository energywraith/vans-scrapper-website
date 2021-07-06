# Vans Scrapper Website
Official Vans website is bugged (e.g. after filtering the shoes by size, shows the shoes that are not even available to buy) what makes the page unpleasant to use. To solve that problem I have decided to create my own page with assumption it will be faster and nicer to use.

### [Live version of the page](https://vans-scrapper-website.herokuapp.com/)
First load may take a while, because the page goes idle when there is no traffic for a while.

## To run the app:
> :warning: Locally app may not work as intended, because I do not share mongodb url for security reasons.
* `$ cd app`
* `$ npm install`
* `$ npm start`
* Go to http://localhost:3001

## Technologies used:
* React
* React Redux
* Styled Components
* Express
* Mongoose
* Puppeteer

### Features:
* You can add shoe to favorites to save it for later.
* To keep data up to date I set node-cron that runs the [puppeteer scrap script](app/utils/vansScrapper.js) at 00:00 everyday.
