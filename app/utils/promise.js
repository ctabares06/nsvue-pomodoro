export const promisify = (data, timeout, fail = false) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (fail) {
      return reject("base error")
    }
    return resolve(data)
  }, timeout)
})