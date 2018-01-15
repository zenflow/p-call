module.exports = function pCall(ctx, fn /* , ...args */) {
  const args = Array.prototype.slice.call(arguments, 2)
  fn = typeof fn === 'function' ? fn : ctx[fn]
  return new Promise(function (resolve, reject) {
    fn.apply(ctx, args.concat(callback))
    function callback (error, result) {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    }
  })
}
