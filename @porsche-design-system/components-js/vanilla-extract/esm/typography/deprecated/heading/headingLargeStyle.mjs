import { fontSizeHeadingLarge } from '../../../font/deprecated/fontSizeHeadingLarge.mjs';
import { _headingFontPartA, _headingFontPartB } from './headingShared.mjs';

/** @deprecated Use {@link proseHeadingLgStyle} instead. This API will be removed with the next major release. */
const headingLargeStyle = {
    font: `${_headingFontPartA}${fontSizeHeadingLarge}${_headingFontPartB}`,
};

export { headingLargeStyle };
