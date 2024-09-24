import {  takeAtMost, zipToShortest, zipToLongest, zipForever, all, forever } from '/lib/iters.mjs'

const assert = (iter, test) => {
  const {status, message, output} = test(iter)
  if (status) {
    console.info(`%cPassed ${message} with: ${JSON.stringify(output)}`, 'color: #118800')
  } else {
    console.error(`%c${message} failed with: ${JSON.stringify(output)}`, 'background: #AA1122; color: #FFFFFF')
  }
}

const lengthEquals = (n) => (iter) => {
  const output = [...iter]
  const status = output.length === n
  return {
    status,
    message: `"Length equals ${n}"`,
    output,
  }
}

// This should hang
// assert(take(zip([1],[1,2,3],[1,2,3,4,5])), lengthEquals(5))
// Any combination of take, zip, repeat hangs

assert(takeAtMost(10, [1,2,3]), lengthEquals(3))
assert(zipToShortest([1],[1,2,3],[1,2,3,4,5]), lengthEquals(1))
assert(zipToLongest([1],[1,2,3],[1,2,3,4,5]), lengthEquals(5))
assert(takeAtMost(5, zipForever([1],[1,2,3],[1,2,3,4,5])), lengthEquals(5))
assert(takeAtMost(10, zipForever([1],[1,2,3],[1,2,3,4,5])), lengthEquals(10))
assert(takeAtMost(5, zipToShortest([1],[1,2,3],[1,2,3,4,5])), lengthEquals(1))
assert(all(zipToShortest([1],[1,2,3],[1,2,3,4,5])), lengthEquals(1))
assert(all(zipToLongest([1],[1,2,3],[1,2,3,4,5])), lengthEquals(5))
assert(takeAtMost(2, forever([1])), lengthEquals(2))
assert(takeAtMost(2, forever([1,2,3])), lengthEquals(2))
