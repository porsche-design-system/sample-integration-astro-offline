'use strict';

var fontSizeTextLarge = require('./fontSizeTextLarge.cjs');
var fontSizeTextMedium = require('./fontSizeTextMedium.cjs');
var fontSizeTextSmall = require('./fontSizeTextSmall.cjs');
var fontSizeTextXLarge = require('./fontSizeTextXLarge.cjs');
var fontSizeTextXSmall = require('./fontSizeTextXSmall.cjs');
var fontSizeTextXXSmall = require('./fontSizeTextXXSmall.cjs');

/** @deprecated This API will be removed with the next major release. Use typescale variables instead. */
const fontSizeText = {
    xxSmall: fontSizeTextXXSmall.fontSizeTextXXSmall,
    xSmall: fontSizeTextXSmall.fontSizeTextXSmall,
    small: fontSizeTextSmall.fontSizeTextSmall,
    medium: fontSizeTextMedium.fontSizeTextMedium,
    large: fontSizeTextLarge.fontSizeTextLarge,
    xLarge: fontSizeTextXLarge.fontSizeTextXLarge,
};

exports.fontSizeText = fontSizeText;
