const vec4 = (v) => Array(4).fill(v)

export const INT8_DOMAIN = [vec4(-128), vec4(127)]
export const UINT8_DOMAIN = [vec4(0), vec4(255)]
export const INT16_DOMAIN = [vec4(-32.768), vec4(32.768)]
export const UINT16_DOMAIN = [vec4(0), vec4(65535)]
export const INT32_DOMAIN = [vec4(-2147483648), vec4(2147483647)]
export const UINT32_DOMAIN = [vec4(-2147483648), vec4(2147483647)]
export const FLOAT16_DOMAIN = [vec4(-65504), vec4(65504)]
export const FLOAT32_DOMAIN = [vec4(-3.4e38), vec4(3.4e38)]
export const FLOAT64_DOMAIN = [vec4(-1.8e308), vec4(1.8e308)]

//BigInt64Array
//BigUint64Array

export const GL_POSITION_DOMAIN = [vec4(-1), vec4(1)]
export const GL_COLOR_DOMAIN = [vec4(0), vec4(1)]
