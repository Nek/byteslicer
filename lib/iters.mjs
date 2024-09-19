export function* repeat(iter) {
  while (true) {
    for (let v of iter) {
      yield v
    }
  }
}

export function* take(n, iter) {
  for (let v of iter) {
    yield v
    if (--n === 0) return
  }
}

export function* zipMin(...arrLikes) {
  let n = Math.min(...arrLikes.map((a) => a.length))
  const repIts = arrLikes.map(repeat)
  while (true) {
    yield repIts.map((iter) => iter.next().value)
    if (--n === 0) return
  }
}

export function* zipMax(...arrLikes) {
  let n = Math.max(...arrLikes.map((a) => a.length))
  const repIts = arrLikes.map(repeat)
  while (true) {
    yield repIts.map((iter) => iter.next().value)
    if (--n === 0) return
  }
}

export function* zipInf(...iters) {
  const repIts = iters.map(repeat)
  while (true) {
    yield repIts.map((iter) => iter.next().value)
  }
}
