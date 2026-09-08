'use strict';

var colorPrimary = require('../color/light-dark/colorPrimary.cjs');
var fontPorscheNext = require('../font/fontPorscheNext.cjs');
var fontWeightNormal = require('../font/fontWeightNormal.cjs');
var getCJKFontFamilyStyle = require('../font/getCJKFontFamilyStyle.cjs');
var leadingNormal = require('../font/leadingNormal.cjs');
var typescaleXl = require('../font/typescaleXl.cjs');

const proseHeadingXlStyle = {
    ...getCJKFontFamilyStyle.getCJKFontFamilyStyle(),
    font: `${fontWeightNormal.fontWeightNormal} ${typescaleXl.typescaleXl} / ${leadingNormal.leadingNormal} ${fontPorscheNext.fontPorscheNext}`,
    color: colorPrimary.colorPrimary,
};

exports.proseHeadingXlStyle = proseHeadingXlStyle;
