'use strict';

var fontSizeTextXXSmall = require('../../../font/deprecated/fontSizeTextXXSmall.cjs');
var textShared = require('./textShared.cjs');

/** @deprecated Use {@link proseText2XsStyle} instead. This API will be removed with the next major release. */
const textXXSmallStyle = {
    font: `${textShared._textFontPartA}${fontSizeTextXXSmall.fontSizeTextXXSmall}${textShared._textFontPartB}`,
};

exports.textXXSmallStyle = textXXSmallStyle;
