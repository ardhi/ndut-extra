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
      index: true
    },
    zipCode: {
      type: String,
      length: 10,
      index: true
    },
    state: {
      type: String,
      length: 50
    },
    country: {
      type: String,
      length: 2,
      index: true
    },
    phone: {
      type: String,
      length: 50,
      index: true
    },
    email: {
      type: String,
      length: 50
    },
    website: {
      type: String,
      length: 100
    }
  }
}
