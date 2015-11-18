# ml-gaussian-kernel

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]

The gaussian (radial basis function) kernel

## Installation

`$ npm install ml-gaussian-kernel`

## Usage

### new GaussianKernel(options)

__Options__

* `sigma` - value for the sigma parameter (default: 1).

### kernel.compute(x, y)

Returns the dot product between `x` and `y` in feature space.

## License

  [MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-gaussian-kernel.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-gaussian-kernel
[travis-image]: https://img.shields.io/travis/mljs/gaussian-kernel/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/gaussian-kernel
[david-image]: https://img.shields.io/david/mljs/gaussian-kernel.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/gaussian-kernel
[download-image]: https://img.shields.io/npm/dm/ml-gaussian-kernel.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-gaussian-kernel
