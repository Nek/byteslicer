import { $number, INT8_DOMAIN, fitVector, decode, mapItems } from '/index.mjs'

const position = (dataBlock, { P_MIN, P_MAX }) => {
  return mapItems(new Float32Array(dataBlock), 3, (item) =>
    fitVector(item, INT8_DOMAIN, [P_MIN, P_MAX])
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
