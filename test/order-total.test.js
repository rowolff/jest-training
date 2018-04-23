const orderTotal = require('../src/order-total')

it('multiplies quantities', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon candy', price: 2, quantity: 3  }
    ]
  })).toBe(6)
})

it('adds items with no quantities specified', () => {
  expect(orderTotal({
    items: [
       { name: 'Dragon candy', price: 3 }
    ]
  })).toBe(3)
})

it('adds multiple items', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon food', price: 8, quantity: 1  },
      { name: 'Dragon cage (small)', price: 800, quantity: 1 },
    ]
  })).toBe(808)
})

it('adds multiple items of different quantities', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon collar', price: 20, quantity: 2 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 },
    ]
  })).toBe(80)
})
