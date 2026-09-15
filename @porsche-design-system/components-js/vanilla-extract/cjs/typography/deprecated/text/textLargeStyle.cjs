'use strict';

var fontSizeTextLarge = require('../../../font/deprecated/fontSizeTextLarge.cjs');
var textShared = require('./textShared.cjs');

/** @deprecated Use {@link proseTextLgStyle} instead. This API will be removed with the next major release. */
const textLargeStyle = {
    font: `${textShared._textFontPartA}${fontSizeTextLarge.fontSizeTextLarge}${textShared._textFontPartB}`,
};

exports.textLargeStyle = textLargeStyle;
