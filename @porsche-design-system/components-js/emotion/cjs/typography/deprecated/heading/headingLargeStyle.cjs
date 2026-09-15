'use strict';

var fontSizeHeadingLarge = require('../../../font/deprecated/fontSizeHeadingLarge.cjs');
var headingShared = require('./headingShared.cjs');

/** @deprecated Use {@link proseHeadingLgStyle} instead. This API will be removed with the next major release. */
const headingLargeStyle = {
    font: `${headingShared._headingFontPartA}${fontSizeHeadingLarge.fontSizeHeadingLarge}${headingShared._headingFontPartB}`,
};

exports.headingLargeStyle = headingLargeStyle;
