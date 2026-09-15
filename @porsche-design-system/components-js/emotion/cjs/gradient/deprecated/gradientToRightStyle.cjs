'use strict';

var gradientStopsFadeDark = require('../../tokens/dist/esm/gradient/gradientStopsFadeDark.cjs');

/** @deprecated This API will be removed with the next major release. background: `linear-gradient(to right, ${gradientStopsFadeDark});` instead. */
const gradientToRightStyle = {
    background: `linear-gradient(to right, ${gradientStopsFadeDark.gradientStopsFadeDark});`,
};

exports.gradientToRightStyle = gradientToRightStyle;
