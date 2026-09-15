'use strict';

var fontWeightRegular = require('./fontWeightRegular.cjs');
var fontWeightSemiBold = require('./fontWeightSemiBold.cjs');
var fontWeightBold = require('../fontWeightBold.cjs');

/** @deprecated This API will be removed with the next major release. Use variables directly instead. */
const fontWeight = {
    regular: fontWeightRegular.fontWeightRegular,
    semiBold: fontWeightSemiBold.fontWeightSemiBold,
    bold: fontWeightBold.fontWeightBold,
};

exports.fontWeight = fontWeight;
