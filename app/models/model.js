const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
  vansId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  sizes: {
    type: [String]
  },
  lastUpdated: {
    type: String,
    required: true,
  }
})

modelSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Model', modelSchema)