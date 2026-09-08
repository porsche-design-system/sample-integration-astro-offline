'use strict';

var colorPrimary = require('../color/light-dark/colorPrimary.cjs');
var typescale4Xl = require('../font/typescale4Xl.cjs');
var fontPorscheNext = require('../font/fontPorscheNext.cjs');
var fontWeightNormal = require('../font/fontWeightNormal.cjs');
var getCJKFontFamilyStyle = require('../font/getCJKFontFamilyStyle.cjs');
var leadingNormal = require('../font/leadingNormal.cjs');

const proseText4XlStyle = {
    ...getCJKFontFamilyStyle.getCJKFontFamilyStyle(),
    font: `${fontWeightNormal.fontWeightNormal} ${typescale4Xl.typescale4Xl} / ${leadingNormal.leadingNormal} ${fontPorscheNext.fontPorscheNext}`,
    color: colorPrimary.colorPrimary,
};

exports.proseText4XlStyle = proseText4XlStyle;
