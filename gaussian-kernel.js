'use strict';

const Matrix = require('ml-matrix');
const squaredEuclidean = require('ml-euclidean-distance').squared;

module.exports = gaussianKernel;

const defaultOptions = {
    sigma: 1
};

function gaussianKernel(inputs, landmarks, options) {
    options = Object.assign({}, defaultOptions, options);

    const divisor = 2 * options.sigma * options.sigma;
    const kernel = new Matrix(inputs.length, landmarks.length);

    for (var i = 0; i < inputs.length; i++) {
        for (var j = 0; j < landmarks.length; j++) {
            var distance = squaredEuclidean(inputs[i], landmarks[j]);
            kernel[i][j] = Math.exp(-distance/divisor);
        }
    }

    return kernel;
}
