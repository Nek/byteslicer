export function fitVector(vector, domain, range) {
  return vector.map((v) =>
    fitScalar(v, domain.next().value, range.next().value)
  )
}

export function fitScalar(value, domain, range) {
  const [dl, du] = domain
  const [rl, ru] = range
  return ((value - dl) / (du - dl)) * (ru - rl) + rl
}

export function zipMap(f, a, b) {
  const res = []
  for (let i = 0; i < a.length; i++) {
    res.push(f(a[i], b[i]))
  }
  return res
}

export function range(arr, itemLength) {
  const itemsNum = arr.length / itemLength
  let min = Array.from({ length: itemLength }).fill(0)
  let max = [...min]
  for (let i = 0; i < itemsNum; i++) {
    const offset = i * itemLength
    const item = arr.subarray(offset, offset + itemLength)
    min = zipMap(Math.min, min, item)
    max = zipMap(Math.max, max, item)
  }
  return [min, max]
}

export function mapByItem(arr, res, itemLength, f) {
  const length = arr.length / itemLength
  const newItemLength = res.length / length
  for (let i = 0; i < length; i++) {
    const offset = i * itemLength
    const item = arr.subarray(offset, offset + itemLength)
    const r = f(item)
    res.set(r, i * newItemLength)
  }
  return res
}

export function mapItems(arr, itemLength, f) {
  const itemsNum = arr.length / itemLength
  const res = arr.slice(0)
  for (let i = 0; i < itemsNum; i++) {
    const offset = i * itemLength
    const item = arr.subarray(offset, offset + itemLength)
    const r = f(item)

    res.set(r, offset)
  }
  return res
}

export function* splitIntoItems(arr, itemLength) {
  const itemsNum = arr.length / itemLength
  for (let i = 0; i < itemsNum; i++) {
    const offset = i * itemLength
    const item = arr.subarray(offset, offset + itemLength)
    yield [item, offset]
  }
}

export function* mapItems2(itemsIter, f) {
  for (let [item, offset] of itemsIter) {
    yield [f(item), offset]
  }
}
