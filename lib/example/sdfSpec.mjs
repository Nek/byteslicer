import { $length, $number } from "../props.mjs";
import { fitScalar, fitVector, mapItems } from "../arrays.mjs";
import { INT8_DOMAIN } from "../domains.mjs";

export const intToUIntColorDecoder = (dataBlock) =>
  new Uint8Array(dataBlock).map((v) => fitScalar(v, [-128, 127], [0, 255]));
export const intToFloatPositionDecoder = (dataBlock) =>
  new Float32Array(dataBlock).map((v) => fitScalar(v, [-128, 127], [-1, 1]));
const sdfItemDecoder = (dataBlock, env) => {
  const { sdfMin, sdfMax } = env;
  const itemLength = sdfMin.length;
  return mapItems(new Float32Array(dataBlock), itemLength, (item) =>
    fitVector(item, INT8_DOMAIN, [sdfMin, sdfMax]),
  );
};
const sdfSpec = [
  {
    name: "count",
    input: Float32Array,
    length: 1,
  },
  {
    name: "posMin",
    input: Float32Array,
    length: 3,
  },
  {
    name: "posMax",
    input: Float32Array,
    length: 3,
  },
  {
    name: "sdfMin",
    input: Float32Array,
    length: 4,
  },
  {
    name: "sdfMax",
    input: Float32Array,
    length: 4,
  },
  {
    name: "position",
    input: Int8Array,
    length: $number("count"),
    size: $length("posMin"),
    decoder: intToFloatPositionDecoder,
  },
  {
    name: "SDF",
    input: Int8Array,
    length: $number("count"),
    size: $length("sdfMin"),
    decoder: sdfItemDecoder,
  },
];

export default sdfSpec;
