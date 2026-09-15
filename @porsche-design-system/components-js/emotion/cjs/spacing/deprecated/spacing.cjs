'use strict';

var spacingFluid = require('./spacingFluid.cjs');
var spacingStatic = require('./spacingStatic.cjs');

/** @deprecated This API will be removed with the next major release. Use spacing variables directly instead. */
const spacing = {
    static: spacingStatic.spacingStatic,
    fluid: spacingFluid.spacingFluid,
};

exports.spacing = spacing;
