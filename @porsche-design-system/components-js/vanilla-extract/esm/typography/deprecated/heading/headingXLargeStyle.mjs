import { fontSizeHeadingXLarge } from '../../../font/deprecated/fontSizeHeadingXLarge.mjs';
import { _headingFontPartA, _headingFontPartB } from './headingShared.mjs';

/** @deprecated Use {@link proseHeadingXlStyle} instead. This API will be removed with the next major release. */
const headingXLargeStyle = {
    font: `${_headingFontPartA}${fontSizeHeadingXLarge}${_headingFontPartB}`,
};

export { headingXLargeStyle };
