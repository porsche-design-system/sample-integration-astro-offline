'use strict';

var typescale5Xl = require('../../../font/typescale5Xl.cjs');
var displayShared = require('./displayShared.cjs');

/** @deprecated Use {@link proseHeading5XlStyle} instead. This API will be removed with the next major release. */
const displayLargeStyle = {
    font: `${displayShared._displayFontPartA}${typescale5Xl.typescale5Xl}${displayShared._displayFontPartB}`,
};

exports.displayLargeStyle = displayLargeStyle;
