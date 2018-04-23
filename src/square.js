const decisionFactory = {
  square: function(num) {
    return num*num
  },
  decide: function(num) {
    return (this.square(num) > 10 ? 'yeh' : 'nah')
  }
}

module.exports = decisionFactory
