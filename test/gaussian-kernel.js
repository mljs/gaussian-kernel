'use strict';

var gaussianKernel = require('..');

describe('gaussian kernel', function () {
    it('one vector', function () {
        Array.from(gaussianKernel([[1, 2]], [[1, 2]])).should.eql([[1]]);
    });
});
