'use strict';

var colorFocusDark = require('../../tokens/dist/esm/color/dark/a11y/colorFocusDark.cjs');

/** @deprecated Use {@link colorFocus} instead. This API will be removed with the next major release. */
const themeDarkStateFocus = colorFocusDark.colorFocusDark; // it's important that focus color is the same for light and dark theme

exports.themeDarkStateFocus = themeDarkStateFocus;
