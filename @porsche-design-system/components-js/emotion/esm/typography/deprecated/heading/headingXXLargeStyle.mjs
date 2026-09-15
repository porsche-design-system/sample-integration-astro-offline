import { fontSizeHeadingXXLarge } from '../../../font/deprecated/fontSizeHeadingXXLarge.mjs';
import { _headingFontPartA, _headingFontPartB } from './headingShared.mjs';

/** @deprecated Use {@link proseHeading2XlStyle} instead. This API will be removed with the next major release. */
const headingXXLargeStyle = {
    font: `${_headingFontPartA}${fontSizeHeadingXXLarge}${_headingFontPartB}`,
};

export { headingXXLargeStyle };
