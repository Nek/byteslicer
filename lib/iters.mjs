// Forever generators:

// yield all available values (could be infinity)
export function* all(iter) {
  for (let v of iter) {
    yield v
  }
}

// yield in cycle forever
export function* forever(iter) {
  while (true) {
    for (let v of iter) {
      yield v
    }
  }
}

export function* zipForever(...iters) {
  const repIts = iters.map(forever)
  while (true) {
    yield repIts.map((iter) => iter.next().value)
  }
}

// Limited generators:

// yield next n values from available (could be fewer)
export function* takeAtMost(n, iter) {
  for (let v of iter) {
    yield v
    if (--n === 0) return
  }
}

export function* zipToShortest(...arrLikes) {
  let n = Math.min(...arrLikes.map((a) => a.length))
  yield* takeAtMost(n, zipForever(arrLikes))
}

export function* zipToLongest(...arrLikes) {
  let n = Math.max(...arrLikes.map((a) => a.length))
  const repIts = arrLikes.map(forever)
  while (true) {
    yield repIts.map((iter) => iter.next().value)
    if (--n === 0) return
  }
}
