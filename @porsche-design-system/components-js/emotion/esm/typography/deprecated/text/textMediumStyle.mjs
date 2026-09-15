import { fontSizeTextMedium } from '../../../font/deprecated/fontSizeTextMedium.mjs';
import { _textFontPartA, _textFontPartB } from './textShared.mjs';

/** @deprecated Use {@link proseTextMdStyle} instead. This API will be removed with the next major release. */
const textMediumStyle = {
    font: `${_textFontPartA}${fontSizeTextMedium}${_textFontPartB}`,
};

export { textMediumStyle };
