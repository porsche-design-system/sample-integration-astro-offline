'use strict';

var colorPrimary = require('../color/light-dark/colorPrimary.cjs');
var typescale3Xl = require('../font/typescale3Xl.cjs');
var fontPorscheNext = require('../font/fontPorscheNext.cjs');
var fontWeightNormal = require('../font/fontWeightNormal.cjs');
var getCJKFontFamilyStyle = require('../font/getCJKFontFamilyStyle.cjs');
var leadingNormal = require('../font/leadingNormal.cjs');

const proseText3XlStyle = {
    ...getCJKFontFamilyStyle.getCJKFontFamilyStyle(),
    font: `${fontWeightNormal.fontWeightNormal} ${typescale3Xl.typescale3Xl} / ${leadingNormal.leadingNormal} ${fontPorscheNext.fontPorscheNext}`,
    color: colorPrimary.colorPrimary,
};

exports.proseText3XlStyle = proseText3XlStyle;
