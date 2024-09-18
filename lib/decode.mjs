export default function decode(ab, spec, env) {
  const oldEnv = env;
  let newEnv = {};
  let offset = 0;
  let itemsPerDataBlock;
  let elementsPerItem;
  for (const { name, input, length, decoder, size } of spec) {
    const env = { ...oldEnv, ...newEnv };
    if (typeof length !== "undefined") {
      if (length instanceof Function) {
        itemsPerDataBlock = length(env);
      } else {
        itemsPerDataBlock = length;
      }
    }

    elementsPerItem = 1;
    if (typeof size !== "undefined") {
      if (size instanceof Function) {
        elementsPerItem = size(env);
      } else {
        elementsPerItem = size;
      }
    }

    const elementsPerDataBlock = itemsPerDataBlock * elementsPerItem;
    const dataBlock = new input(ab, offset, elementsPerDataBlock);
    const decoded =
      decoder instanceof Function ? decoder(dataBlock, env) : dataBlock;

    newEnv[name] = decoded;
    offset += itemsPerDataBlock * input.BYTES_PER_ELEMENT;
  }

  return { result: newEnv, offset, spec };
}
