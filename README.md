# ByteSlicer

[![npm version](https://badge.fury.io/js/byteslicer.svg)](https://badge.fury.io/js/byteslicer)

A ES6 library for efficiently decoding and transforming binary data with a declarative specification format.

## Features

- Decode binary data using a declarative specification
- Transform decoded data with custom decoders
- Utilities for working with numeric arrays and vectors
- Iterator helpers for infinite/finite sequences
- Domain mapping and scaling functions
- Support for various numeric types (Int8, Uint8, Float32, etc.)

## Benefits & Drawbacks

It's mostly convention based, very minimal, synchronous only and isn't typed. Still, it works very well for decoding raw binary data for WebGL based projects.

## Installation

```bash
npm install byteslicer
```

## Usage

```javascript
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
    decoder: position, // Custom decoding logic
  },
]

// Decode binary data according to spec
const { result: {P_MIN, P_MAX, P} } = decode(spec, arrayBuffer);
```

Full example [example/index.mjs](example/index.mjs).

## License

MIT License
