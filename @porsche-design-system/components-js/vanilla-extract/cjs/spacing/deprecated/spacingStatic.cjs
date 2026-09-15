'use strict';

var spacingStaticLarge = require('./spacingStaticLarge.cjs');
var spacingStaticMedium = require('./spacingStaticMedium.cjs');
var spacingStaticSmall = require('./spacingStaticSmall.cjs');
var spacingStaticXLarge = require('./spacingStaticXLarge.cjs');
var spacingStaticXSmall = require('./spacingStaticXSmall.cjs');
var spacingStaticXXLarge = require('./spacingStaticXXLarge.cjs');

/** @deprecated This API will be removed with the next major release. Use spacing variables directly instead. */
const spacingStatic = {
    xSmall: spacingStaticXSmall.spacingStaticXSmall,
    small: spacingStaticSmall.spacingStaticSmall,
    medium: spacingStaticMedium.spacingStaticMedium,
    large: spacingStaticLarge.spacingStaticLarge,
    xLarge: spacingStaticXLarge.spacingStaticXLarge,
    xxLarge: spacingStaticXXLarge.spacingStaticXXLarge,
};

exports.spacingStatic = spacingStatic;
