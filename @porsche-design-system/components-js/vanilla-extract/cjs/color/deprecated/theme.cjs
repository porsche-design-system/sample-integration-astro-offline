'use strict';

var themeDark = require('./themeDark.cjs');
var themeLight = require('./themeLight.cjs');

/** @deprecated This API will be removed with the next major release. Use individual variables instead. */
const theme = {
    light: themeLight.themeLight,
    dark: themeDark.themeDark,
};

exports.theme = theme;
