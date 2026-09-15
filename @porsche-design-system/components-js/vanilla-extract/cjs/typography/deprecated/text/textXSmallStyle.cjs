'use strict';

var fontSizeTextXSmall = require('../../../font/deprecated/fontSizeTextXSmall.cjs');
var textShared = require('./textShared.cjs');

/** @deprecated Use {@link proseTextXsStyle} instead. This API will be removed with the next major release. */
const textXSmallStyle = {
    font: `${textShared._textFontPartA}${fontSizeTextXSmall.fontSizeTextXSmall}${textShared._textFontPartB}`,
};

exports.textXSmallStyle = textXSmallStyle;
