'use strict';

var fontSizeTextXLarge = require('../../../font/deprecated/fontSizeTextXLarge.cjs');
var textShared = require('./textShared.cjs');

/** @deprecated Use {@link proseTextXlStyle} instead. This API will be removed with the next major release. */
const textXLargeStyle = {
    font: `${textShared._textFontPartA}${fontSizeTextXLarge.fontSizeTextXLarge}${textShared._textFontPartB}`,
};

exports.textXLargeStyle = textXLargeStyle;
