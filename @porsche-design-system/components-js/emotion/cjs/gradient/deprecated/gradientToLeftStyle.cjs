'use strict';

var gradientStopsFadeDark = require('../../tokens/dist/esm/gradient/gradientStopsFadeDark.cjs');

/** @deprecated This API will be removed with the next major release. Use background: `linear-gradient(to left, ${gradientStopsFadeDark});` instead. */
const gradientToLeftStyle = {
    background: `linear-gradient(to left, ${gradientStopsFadeDark.gradientStopsFadeDark});`,
};

exports.gradientToLeftStyle = gradientToLeftStyle;
