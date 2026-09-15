'use strict';

var fontSizeHeadingMedium = require('../../../font/deprecated/fontSizeHeadingMedium.cjs');
var headingShared = require('./headingShared.cjs');

/** @deprecated Use {@link proseHeadingMdStyle} instead. This API will be removed with the next major release. */
const headingMediumStyle = {
    font: `${headingShared._headingFontPartA}${fontSizeHeadingMedium.fontSizeHeadingMedium}${headingShared._headingFontPartB}`,
};

exports.headingMediumStyle = headingMediumStyle;
