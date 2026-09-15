'use strict';

var gradientStopsFadeDark = require('../../tokens/dist/esm/gradient/gradientStopsFadeDark.cjs');

/** @deprecated This API will be removed with the next major release. background: `linear-gradient(to top, ${gradientStopsFadeDark});` instead. */
const gradientToTopStyle = {
    background: `linear-gradient(to top, ${gradientStopsFadeDark.gradientStopsFadeDark});`,
};

exports.gradientToTopStyle = gradientToTopStyle;
