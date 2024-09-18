export function fitVector(vector, domain, range) {
  return vector.map((v, i) =>
    fitScalar(v, [domain[0][i], domain[1][i]], [range[0][i], range[1][i]]),
  );
}

export function fitScalar(value, domain, range) {
  return (
    ((value - domain[0]) / (domain[1] - domain[0])) * (range[1] - range[0]) +
    range[0]
  );
}

export function zipMap(f, a, b) {
  const res = [];
  for (let i = 0; i < a.length; i++) {
    res.push(f(a[i], b[i]));
  }
  return res;
}

export function range(arr, itemLength) {
  const itemsNum = arr.length / itemLength;
  let min = Array.from({ length: itemLength }).fill(0);
  let max = [...min];
  for (let i = 0; i < itemsNum; i++) {
    const offset = i * itemLength;
    const item = arr.subarray(offset, offset + itemLength);
    min = zipMap(Math.min, min, item);
    max = zipMap(Math.max, max, item);
  }
  return [min, max];
}

export function mapItems(arr, itemLength, f) {
  const itemsNum = arr.length / itemLength;
  const res = arr.slice(0);
  for (let i = 0; i < itemsNum; i++) {
    const offset = i * itemLength;
    const item = arr.subarray(offset, offset + itemLength);
    res.set(f(item), offset);
  }
  return res;
}
