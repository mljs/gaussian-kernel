'use strict';

const GaussianKernel = require('..');

describe('gaussian kernel', function () {
  it('default options', function () {
    const kernel = new GaussianKernel();
    expect(kernel.compute([1, 2], [1, 2])).toBe(1);
  });
});
