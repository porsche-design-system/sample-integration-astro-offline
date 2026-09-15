import { typescale3Xl } from '../../../font/typescale3Xl.mjs';
import { _displayFontPartA, _displayFontPartB } from './displayShared.mjs';

/** @deprecated Use {@link proseHeading3XlStyle} instead. This API will be removed with the next major release. */
const displaySmallStyle = {
    font: `${_displayFontPartA}${typescale3Xl}${_displayFontPartB}`,
};

export { displaySmallStyle };
