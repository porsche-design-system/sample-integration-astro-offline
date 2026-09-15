import { fontSizeTextXSmall } from '../../../font/deprecated/fontSizeTextXSmall.mjs';
import { _textFontPartA, _textFontPartB } from './textShared.mjs';

/** @deprecated Use {@link proseTextXsStyle} instead. This API will be removed with the next major release. */
const textXSmallStyle = {
    font: `${_textFontPartA}${fontSizeTextXSmall}${_textFontPartB}`,
};

export { textXSmallStyle };
