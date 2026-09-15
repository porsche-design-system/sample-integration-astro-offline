'use strict';

var gradientStopsFadeDark = require('../../tokens/dist/esm/gradient/gradientStopsFadeDark.cjs');

/** @deprecated This API will be removed with the next major release. Use background: `linear-gradient(to bottom, ${gradientStopsFadeDark});` instead. */
const gradientToBottomStyle = {
    background: `linear-gradient(to bottom, ${gradientStopsFadeDark.gradientStopsFadeDark});`,
};

exports.gradientToBottomStyle = gradientToBottomStyle;
