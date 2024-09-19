export const $ = (f) => (name) => (env) => f(env[name])
export const id = (id) => id
export const $number = $((v) => v[0])
export const $vec2 = $((v) => v.subarray(0, 2))
export const $vec3 = $((v) => v.subarray(0, 3))
export const $vec4 = $((v) => v.subarray(0, 4))
export const $array = $(id)
export const $length = $((v) => v.length)
