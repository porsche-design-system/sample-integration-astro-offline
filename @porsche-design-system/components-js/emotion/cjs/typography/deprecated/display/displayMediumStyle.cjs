'use strict';

var typescale4Xl = require('../../../font/typescale4Xl.cjs');
var displayShared = require('./displayShared.cjs');

/** @deprecated Use {@link proseHeading4XlStyle} instead. This API will be removed with the next major release. */
const displayMediumStyle = {
    font: `${displayShared._displayFontPartA}${typescale4Xl.typescale4Xl}${displayShared._displayFontPartB}`,
};

exports.displayMediumStyle = displayMediumStyle;
