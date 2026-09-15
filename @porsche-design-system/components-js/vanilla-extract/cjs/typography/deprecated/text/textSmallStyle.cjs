'use strict';

var fontSizeTextSmall = require('../../../font/deprecated/fontSizeTextSmall.cjs');
var textShared = require('./textShared.cjs');

/** @deprecated Use {@link proseTextSmStyle} instead. This API will be removed with the next major release. */
const textSmallStyle = {
    font: `${textShared._textFontPartA}${fontSizeTextSmall.fontSizeTextSmall}${textShared._textFontPartB}`,
};

exports.textSmallStyle = textSmallStyle;
