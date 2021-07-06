require('dotenv').config()
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const path = require('path')

const modelsRouter = require('./controllers/models')
const mongoose = require('mongoose')

const cron = require('node-cron');
const vansScrapperService = require('./utils/vansScrapper')

const MongoDB_URL = process.env.MONGODB_URL

mongoose.connect(MongoDB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/getVansData', modelsRouter)

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, 'build/index.html'));
});

// Refresh database at 00:00 every day
// Takes about 10 min to get it done
cron.schedule("0 0 0 * * *", () => {
  console.log("Scrapping")
  vansScrapperService.scrap()
})

module.exports = app