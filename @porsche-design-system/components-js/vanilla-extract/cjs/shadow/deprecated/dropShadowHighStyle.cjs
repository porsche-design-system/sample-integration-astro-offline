'use strict';

var shadowLg = require('../../tokens/dist/esm/shadow/shadowLg.cjs');

/** @deprecated This API will be removed with the next major release. Use boxShadow: shadowLg instead. */
const dropShadowHighStyle = {
    boxShadow: shadowLg.shadowLg,
};

exports.dropShadowHighStyle = dropShadowHighStyle;
