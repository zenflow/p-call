/* eslint-env jest */

const pCall = require('./index')

class MyNumber {
  constructor(value) {
    this.value = value
  }
  add(value, cb) {
    setImmediate(() => {
      if (typeof value !== 'number') {
        cb(new TypeError())
      } else {
        cb(null, this.value + value)
      }
    })
  }
}

test('works given a property key for the function', async () => {
  const myNumber = new MyNumber(3)
  const sum = await pCall(myNumber, 'add', 4)
  expect(sum).toBe(7)
})

test('works given an actual function for the function', async () => {
  const myNumber = new MyNumber(5)
  const sum = await pCall(myNumber, myNumber.add, 6)
  expect(sum).toBe(11)
})

test('propagates errors', async () => {
  const myNumber = new MyNumber(3)
  let error
  try {
    await pCall(myNumber, 'add', 'not a number')
  } catch (_error) {
    error = _error
  }
  expect(error).toBeInstanceOf(TypeError)
})
