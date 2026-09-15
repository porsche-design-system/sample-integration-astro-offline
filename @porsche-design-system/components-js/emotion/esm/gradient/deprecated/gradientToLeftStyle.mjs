import { gradientStopsFadeDark } from '../../tokens/dist/esm/gradient/gradientStopsFadeDark.mjs';

/** @deprecated This API will be removed with the next major release. Use background: `linear-gradient(to left, ${gradientStopsFadeDark});` instead. */
const gradientToLeftStyle = {
    background: `linear-gradient(to left, ${gradientStopsFadeDark});`,
};

export { gradientToLeftStyle };
