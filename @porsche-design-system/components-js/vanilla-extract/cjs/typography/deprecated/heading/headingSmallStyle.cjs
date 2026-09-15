'use strict';

var fontSizeHeadingSmall = require('../../../font/deprecated/fontSizeHeadingSmall.cjs');
var headingShared = require('./headingShared.cjs');

/** @deprecated Use {@link proseHeadingSmStyle} instead. This API will be removed with the next major release. */
const headingSmallStyle = {
    font: `${headingShared._headingFontPartA}${fontSizeHeadingSmall.fontSizeHeadingSmall}${headingShared._headingFontPartB}`,
};

exports.headingSmallStyle = headingSmallStyle;
