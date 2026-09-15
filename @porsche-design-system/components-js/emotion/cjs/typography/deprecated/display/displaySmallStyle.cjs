'use strict';

var typescale3Xl = require('../../../font/typescale3Xl.cjs');
var displayShared = require('./displayShared.cjs');

/** @deprecated Use {@link proseHeading3XlStyle} instead. This API will be removed with the next major release. */
const displaySmallStyle = {
    font: `${displayShared._displayFontPartA}${typescale3Xl.typescale3Xl}${displayShared._displayFontPartB}`,
};

exports.displaySmallStyle = displaySmallStyle;
