module.exports = function pCall(ctx, fn, ...args) {
  return new Promise((resolve, reject) => {
    fn = typeof fn === 'function' ? fn : ctx[fn]
    fn.call(ctx, ...args, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}
