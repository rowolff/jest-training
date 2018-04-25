const orderTotal = require('../src/order-total')

it('calls vatapi.com correctly', () => {
  const fakeProcess = {
    env: {
      VAT_API_KEY: 'key123'
    }
  }
  const fakeFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      rates: {
        standard: {
          value: 19
        }
      }
    })
  }))
  return orderTotal(fakeFetch, fakeProcess, {
    country: 'DE',
    items: [
      { name: 'Dragon candy', price: 20, quantity: 2  }
    ]
  }).then(result => {
    expect(result).toBe(20*2*1.19)
    expect(fakeFetch).toBeCalledWith(
      'https://vatapi.com/v1/country-code-check?code=DE',
      { 'headers' : { 'apikey' : 'key123' } }
    )
  })
})

it('multiplies quantities', () => {
  return orderTotal(null, null, {
    items: [
      { name: 'Dragon candy', price: 2, quantity: 3  }
    ]
  }).then(result => expect(result).toBe(6))
})

it('adds items with no quantities specified', () => {
  return orderTotal(null, null, {
    items: [
       { name: 'Dragon candy', price: 3 }
    ]
  }).then(result => expect(result).toBe(3))
})

it('adds multiple items', () => {
  return orderTotal(null, null, {
    items: [
      { name: 'Dragon food', price: 8, quantity: 1  },
      { name: 'Dragon cage (small)', price: 800, quantity: 1 },
    ]
  }).then(result => expect(result).toBe(808))
})

it('adds multiple items of different quantities', () => {
  return orderTotal(null, null, {
    items: [
      { name: 'Dragon collar', price: 20, quantity: 2 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 },
    ]
  }).then(result => expect(result).toBe(80))
})
