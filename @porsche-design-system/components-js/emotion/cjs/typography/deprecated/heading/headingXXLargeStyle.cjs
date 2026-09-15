'use strict';

var fontSizeHeadingXXLarge = require('../../../font/deprecated/fontSizeHeadingXXLarge.cjs');
var headingShared = require('./headingShared.cjs');

/** @deprecated Use {@link proseHeading2XlStyle} instead. This API will be removed with the next major release. */
const headingXXLargeStyle = {
    font: `${headingShared._headingFontPartA}${fontSizeHeadingXXLarge.fontSizeHeadingXXLarge}${headingShared._headingFontPartB}`,
};

exports.headingXXLargeStyle = headingXXLargeStyle;
