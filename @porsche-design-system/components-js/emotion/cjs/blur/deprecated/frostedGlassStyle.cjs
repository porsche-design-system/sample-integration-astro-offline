'use strict';

var blurFrosted = require('../../tokens/dist/esm/blur/blurFrosted.cjs');

/** @deprecated This API will be removed with the next major release. Use backdropFilter: blurFrosted instead. */
const frostedGlassStyle = {
    WebkitBackdropFilter: blurFrosted.blurFrosted,
    backdropFilter: blurFrosted.blurFrosted,
};

exports.frostedGlassStyle = frostedGlassStyle;
