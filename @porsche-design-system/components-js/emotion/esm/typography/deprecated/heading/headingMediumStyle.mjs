import { fontSizeHeadingMedium } from '../../../font/deprecated/fontSizeHeadingMedium.mjs';
import { _headingFontPartA, _headingFontPartB } from './headingShared.mjs';

/** @deprecated Use {@link proseHeadingMdStyle} instead. This API will be removed with the next major release. */
const headingMediumStyle = {
    font: `${_headingFontPartA}${fontSizeHeadingMedium}${_headingFontPartB}`,
};

export { headingMediumStyle };
