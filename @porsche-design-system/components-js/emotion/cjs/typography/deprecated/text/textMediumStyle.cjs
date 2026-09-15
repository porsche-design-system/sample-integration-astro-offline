'use strict';

var fontSizeTextMedium = require('../../../font/deprecated/fontSizeTextMedium.cjs');
var textShared = require('./textShared.cjs');

/** @deprecated Use {@link proseTextMdStyle} instead. This API will be removed with the next major release. */
const textMediumStyle = {
    font: `${textShared._textFontPartA}${fontSizeTextMedium.fontSizeTextMedium}${textShared._textFontPartB}`,
};

exports.textMediumStyle = textMediumStyle;
