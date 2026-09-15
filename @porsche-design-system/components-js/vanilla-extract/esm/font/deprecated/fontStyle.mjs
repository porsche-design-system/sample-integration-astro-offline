import { fontStyleNormal } from './fontStyleNormal.mjs';
import { fontStyleItalic } from './fontStyleItalic.mjs';

/** @deprecated This API will be removed with the next major release. Use 'normal' | 'italic' instead. */
const fontStyle = {
    normal: fontStyleNormal,
    italic: fontStyleItalic,
};

export { fontStyle };
