import { fontSizeHeadingSmall } from '../../../font/deprecated/fontSizeHeadingSmall.mjs';
import { _headingFontPartA, _headingFontPartB } from './headingShared.mjs';

/** @deprecated Use {@link proseHeadingSmStyle} instead. This API will be removed with the next major release. */
const headingSmallStyle = {
    font: `${_headingFontPartA}${fontSizeHeadingSmall}${_headingFontPartB}`,
};

export { headingSmallStyle };
