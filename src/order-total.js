function orderTotal(order) {
  return order.items.reduce((prev, cur) => {
    return cur.price * (cur.quantity || 1) + prev
  }, 0)
}

module.exports = orderTotal
