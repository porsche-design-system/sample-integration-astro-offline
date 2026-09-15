'use strict';

var fontSizeHeadingXLarge = require('../../../font/deprecated/fontSizeHeadingXLarge.cjs');
var headingShared = require('./headingShared.cjs');

/** @deprecated Use {@link proseHeadingXlStyle} instead. This API will be removed with the next major release. */
const headingXLargeStyle = {
    font: `${headingShared._headingFontPartA}${fontSizeHeadingXLarge.fontSizeHeadingXLarge}${headingShared._headingFontPartB}`,
};

exports.headingXLargeStyle = headingXLargeStyle;
