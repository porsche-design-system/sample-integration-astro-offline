'use strict';

var borderRadiusSmall = require('./borderRadiusSmall.cjs');
var borderRadiusMedium = require('./borderRadiusMedium.cjs');
var borderRadiusLarge = require('./borderRadiusLarge.cjs');

/** @deprecated This API will be removed with the next major release. Use variables directly instead. */
const borderRadius = {
    small: borderRadiusSmall.borderRadiusSmall,
    medium: borderRadiusMedium.borderRadiusMedium,
    large: borderRadiusLarge.borderRadiusLarge,
};

exports.borderRadius = borderRadius;
