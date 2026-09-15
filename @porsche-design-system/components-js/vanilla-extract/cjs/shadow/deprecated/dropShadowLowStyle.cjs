'use strict';

var shadowSm = require('../../tokens/dist/esm/shadow/shadowSm.cjs');

/** @deprecated This API will be removed with the next major release. Use boxShadow: shadowSm instead. */
const dropShadowLowStyle = {
    boxShadow: shadowSm.shadowSm,
};

exports.dropShadowLowStyle = dropShadowLowStyle;
