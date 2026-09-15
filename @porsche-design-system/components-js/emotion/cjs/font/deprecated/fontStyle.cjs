'use strict';

var fontStyleNormal = require('./fontStyleNormal.cjs');
var fontStyleItalic = require('./fontStyleItalic.cjs');

/** @deprecated This API will be removed with the next major release. Use 'normal' | 'italic' instead. */
const fontStyle = {
    normal: fontStyleNormal.fontStyleNormal,
    italic: fontStyleItalic.fontStyleItalic,
};

exports.fontStyle = fontStyle;
