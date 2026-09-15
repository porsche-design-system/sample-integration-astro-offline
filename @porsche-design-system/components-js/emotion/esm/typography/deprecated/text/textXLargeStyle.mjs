import { fontSizeTextXLarge } from '../../../font/deprecated/fontSizeTextXLarge.mjs';
import { _textFontPartA, _textFontPartB } from './textShared.mjs';

/** @deprecated Use {@link proseTextXlStyle} instead. This API will be removed with the next major release. */
const textXLargeStyle = {
    font: `${_textFontPartA}${fontSizeTextXLarge}${_textFontPartB}`,
};

export { textXLargeStyle };
