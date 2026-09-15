'use strict';

var shadowMd = require('../../tokens/dist/esm/shadow/shadowMd.cjs');

/** @deprecated This API will be removed with the next major release. Use boxShadow: shadowMd instead. */
const dropShadowMediumStyle = {
    boxShadow: shadowMd.shadowMd,
};

exports.dropShadowMediumStyle = dropShadowMediumStyle;
