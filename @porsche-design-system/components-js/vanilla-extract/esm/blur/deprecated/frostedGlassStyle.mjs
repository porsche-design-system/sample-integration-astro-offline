import { blurFrosted } from '../../tokens/dist/esm/blur/blurFrosted.mjs';

/** @deprecated This API will be removed with the next major release. Use backdropFilter: blurFrosted instead. */
const frostedGlassStyle = {
    WebkitBackdropFilter: blurFrosted,
    backdropFilter: blurFrosted,
};

export { frostedGlassStyle };
