'use strict';

var borderRadius = require('./borderRadius.cjs');
var borderWidth = require('./borderWidth.cjs');

/** @deprecated This API will be removed with the next major release. Use variables directly instead. */
const border = {
    radius: borderRadius.borderRadius,
    width: borderWidth.borderWidth,
};

exports.border = border;
