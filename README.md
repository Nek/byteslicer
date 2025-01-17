# ByteSlicer

A JavaScript library for efficiently decoding and transforming binary data with a declarative specification format.

## Features

- Decode binary data using a declarative specification
- Transform decoded data with custom decoders
- Utilities for working with numeric arrays and vectors
- Iterator helpers for infinite/finite sequences
- Domain mapping and scaling functions
- Support for various numeric types (Int8, Uint8, Float32, etc.)

## Installation

```bash
npm install byteslicer
```

## Usage

```javascript
import { decode, $number } from 'byteslicer';

// Define a specification for your binary data
const spec = [
  {
    name: 'count',
    input: Float32Array,
    length: 1
  },
  {
    name: 'data',
    input: Int8Array,
    length: $number('count'),
    decoder: (data, env) => // custom decoding logic
  }
];

// Decode binary data according to spec
const { result } = decode(spec, arrayBuffer);
```

## License

ISC License
