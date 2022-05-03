module.exports = {
  properties: {
    address1: {
      type: String,
      length: 150
    },
    address2: {
      type: String,
      length: 150
    },
    city: {
      type: String,
      length: 50,
      required: true
    },
    zipCode: {
      type: String,
      length: 10
    },
    state: {
      type: String,
      length: 50
    },
    country: {
      type: String,
      length: 2,
      required: true
    },
    phone: {
      type: String,
      length: 50
    }
  }
}
