'use strict';

var borderWidthBase = require('./borderWidthBase.cjs');
var borderWidthThin = require('./borderWidthThin.cjs');

/** @deprecated This API will be removed with the next major release. Use variables directly instead. */
const borderWidth = {
    base: borderWidthBase.borderWidthBase,
    thin: borderWidthThin.borderWidthThin,
};

exports.borderWidth = borderWidth;
