'use strict';

var fontPorscheNextJa = require('./fontPorscheNextJa.cjs');
var fontPorscheNextKo = require('./fontPorscheNextKo.cjs');
var fontPorscheNextZhHans = require('./fontPorscheNextZhHans.cjs');
var fontPorscheNextZhHant = require('./fontPorscheNextZhHant.cjs');

const getCJKFontFamilyStyle = () => {
    return {
        /* Simplified Chinese */
        '&:lang(zh-Hans), &:lang(zh-CN), &:lang(zh-SG)': {
            fontFamily: fontPorscheNextZhHans.fontPorscheNextZhHans,
        },
        /* Traditional Chinese */
        '&:lang(zh-Hant), &:lang(zh-TW), &:lang(zh-HK), &:lang(zh-MO)': {
            fontFamily: fontPorscheNextZhHant.fontPorscheNextZhHant,
        },
        /* Japanese */
        '&:lang(ja)': {
            fontFamily: fontPorscheNextJa.fontPorscheNextJa,
        },
        /* Korean */
        '&:lang(ko)': {
            fontFamily: fontPorscheNextKo.fontPorscheNextKo,
        },
    };
};

exports.getCJKFontFamilyStyle = getCJKFontFamilyStyle;
