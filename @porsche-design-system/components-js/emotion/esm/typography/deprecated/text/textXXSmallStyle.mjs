import { fontSizeTextXXSmall } from '../../../font/deprecated/fontSizeTextXXSmall.mjs';
import { _textFontPartA, _textFontPartB } from './textShared.mjs';

/** @deprecated Use {@link proseText2XsStyle} instead. This API will be removed with the next major release. */
const textXXSmallStyle = {
    font: `${_textFontPartA}${fontSizeTextXXSmall}${_textFontPartB}`,
};

export { textXXSmallStyle };
