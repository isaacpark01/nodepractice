class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message)
  
  }
}

module.exports = CustomAPIError
  this.statusCode = statusCode