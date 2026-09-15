import { fontSizeTextSmall } from '../../../font/deprecated/fontSizeTextSmall.mjs';
import { _textFontPartA, _textFontPartB } from './textShared.mjs';

/** @deprecated Use {@link proseTextSmStyle} instead. This API will be removed with the next major release. */
const textSmallStyle = {
    font: `${_textFontPartA}${fontSizeTextSmall}${_textFontPartB}`,
};

export { textSmallStyle };
