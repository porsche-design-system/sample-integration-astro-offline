'use strict';

var colorPrimary = require('../color/light-dark/colorPrimary.cjs');
var fontPorscheNext = require('../font/fontPorscheNext.cjs');
var fontWeightSemibold = require('../font/fontWeightSemibold.cjs');
var getCJKFontFamilyStyle = require('../font/getCJKFontFamilyStyle.cjs');
var leadingNormal = require('../font/leadingNormal.cjs');
var typescaleSm = require('../font/typescaleSm.cjs');

const proseHeadingSmStyle = {
    ...getCJKFontFamilyStyle.getCJKFontFamilyStyle(),
    font: `${fontWeightSemibold.fontWeightSemibold} ${typescaleSm.typescaleSm} / ${leadingNormal.leadingNormal} ${fontPorscheNext.fontPorscheNext}`,
    color: colorPrimary.colorPrimary,
};

exports.proseHeadingSmStyle = proseHeadingSmStyle;
