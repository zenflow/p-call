# p-call
Call a legacy async method and return a promise

Very similar to [promisify-call](https://github.com/bojand/promisify-call) but always promisifies the call, rather than guessing if it should.

---

### Example

Instead of using the legacy error-first callback API ...

```js
object.method(argument, (error, result) => {
  if (error) {
    throw error
  }
  console.log(result)
})
```

Use the Promise API ...

```js
const result = await pCall(object, object.method, argument)
console.log(result)

// Or, specify the function as a property key of `object`...
const result = await pCall(object, 'method', argument)
console.log(result)
```
