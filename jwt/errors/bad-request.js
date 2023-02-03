const CustomAPIError = require('./custom-error')
class CustomAPIError extends Error {
    constructor(message, statusCode) {
      super(message)
      this.statusCode = 400 
    }
  }
  
  module.exports = CustomAPIError
  