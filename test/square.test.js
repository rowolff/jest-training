const decisionFactory = require('../src/square')

it('squares numbers', () => {
  expect(decisionFactory.square(4)).toBe(16)
})

it('displays nah if the sqaure is smaller than 10', () => {
  expect(decisionFactory.decide(2)).toBe('nah')
})

it('displays yeh if the square is bigger than 10', () => {
  expect(decisionFactory.decide(4)).toBe('yeh')
})
