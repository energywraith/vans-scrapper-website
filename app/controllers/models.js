const modelsRouter = require('express').Router()
const Model = require('../models/model')

modelsRouter.get('/', async (request, response) => {
  const models = await Model.find({})
  response.json(models)
})

module.exports = modelsRouter