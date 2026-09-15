import { fontSizeTextLarge } from '../../../font/deprecated/fontSizeTextLarge.mjs';
import { _textFontPartA, _textFontPartB } from './textShared.mjs';

/** @deprecated Use {@link proseTextLgStyle} instead. This API will be removed with the next major release. */
const textLargeStyle = {
    font: `${_textFontPartA}${fontSizeTextLarge}${_textFontPartB}`,
};

export { textLargeStyle };
