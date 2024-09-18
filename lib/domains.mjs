const vec4 = (v) => Array(4).fill(v);

export const INT8_DOMAIN = [vec4(-128), vec4(127)];

export const UINT8_DOMAIN = [vec4(0), vec4(255)];

export const GL_POSITION_DOMAIN = [vec4(-1), vec4(1)];
export const GL_COLOR_DOMAIN = [vec4(0), vec4(1)];

export const INT16_DOMAIN = [vec4(-32.768), vec4(32.768)];
