import { $number, INT8_DOMAIN, fitVector, decode, mapItems, splitIntoItems, zipForever, takeAtMost, forever } from '/index.mjs'

const position = (dataBlock, { P_MIN, P_MAX }) => {
  const INT8_MIN = [INT8_DOMAIN[0]]
  const INT8_MAX = [INT8_DOMAIN[1]]
  return mapItems(new Float32Array(dataBlock), 3, (item) =>
    fitVector(item, zipForever(INT8_MIN, INT8_MAX), zipForever(P_MIN, P_MAX))
  )
}

const spec = [
  {
    name: 'COUNT',
    input: Float32Array,
    length: 1,
  },
  {
    name: 'P_MIN',
    input: Float32Array,
    length: 3,
  },
  {
    name: 'P_MAX',
    input: Float32Array,
    length: 3,
  },
  {
    name: 'P',
    input: Int8Array,
    length: $number('COUNT'),
    size: 3,
    decoder: position,
  },
]

const res = await fetch('statue.pts', { responseType: 'blob' })
const data = await res.arrayBuffer()

const { result, spec: usedSpec } = decode(spec, data)

console.log('Decoded data: ', result)
console.log('The used spec is the same one: ', spec === usedSpec)
