'use strict';

var colorPrimary = require('../color/light-dark/colorPrimary.cjs');
var fontPorscheNext = require('../font/fontPorscheNext.cjs');
var fontWeightNormal = require('../font/fontWeightNormal.cjs');
var getCJKFontFamilyStyle = require('../font/getCJKFontFamilyStyle.cjs');
var leadingNormal = require('../font/leadingNormal.cjs');
var typescaleXs = require('../font/typescaleXs.cjs');

const proseTextXsStyle = {
    ...getCJKFontFamilyStyle.getCJKFontFamilyStyle(),
    font: `${fontWeightNormal.fontWeightNormal} ${typescaleXs.typescaleXs} / ${leadingNormal.leadingNormal} ${fontPorscheNext.fontPorscheNext}`,
    color: colorPrimary.colorPrimary,
};

exports.proseTextXsStyle = proseTextXsStyle;
