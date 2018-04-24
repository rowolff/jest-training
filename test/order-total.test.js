const orderTotal = require('../src/order-total')

const emptyFunction = () => {}

it('calls vatapi.com correctly', () => {
  let isFakeFetchCalled = false
  const fakeFetch = (url) => {
    expect(url).toBe('https://vatapi.com/v1/country-code-check?code=DE')
    isFakeFetchCalled = true
  }
  return orderTotal(fakeFetch, {
    country: 'DE',
    items: [
      { name: 'Dragon candy', price: 2, quantity: 3  }
    ]
  }).then(result => {
    expect(isFakeFetchCalled).toBe(true)
  })
})

it('vatapi call returns vat if country code specified')

it('multiplies quantities', () => {
  return orderTotal(emptyFunction, {
    items: [
      { name: 'Dragon candy', price: 2, quantity: 3  }
    ]
  }).then(result => expect(result).toBe(6))
})

it('adds items with no quantities specified', () => {
  return orderTotal(emptyFunction, {
    items: [
       { name: 'Dragon candy', price: 3 }
    ]
  }).then(result => expect(result).toBe(3))
})

it('adds multiple items', () => {
  return orderTotal(emptyFunction, {
    items: [
      { name: 'Dragon food', price: 8, quantity: 1  },
      { name: 'Dragon cage (small)', price: 800, quantity: 1 },
    ]
  }).then(result => expect(result).toBe(808))
})

it('adds multiple items of different quantities', () => {
  return orderTotal(emptyFunction, {
    items: [
      { name: 'Dragon collar', price: 20, quantity: 2 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 },
    ]
  }).then(result => expect(result).toBe(80))
})
