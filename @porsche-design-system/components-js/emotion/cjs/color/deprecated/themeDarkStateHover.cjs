'use strict';

var colorFrostedDark = require('../../tokens/dist/esm/color/dark/background/colorFrostedDark.cjs');

/** @deprecated Use {@link colorFrosted} instead. This API will be removed with the next major release. */
const themeDarkStateHover = colorFrostedDark.colorFrostedDark; // it's important that hover color is the same for light and dark theme

exports.themeDarkStateHover = themeDarkStateHover;
