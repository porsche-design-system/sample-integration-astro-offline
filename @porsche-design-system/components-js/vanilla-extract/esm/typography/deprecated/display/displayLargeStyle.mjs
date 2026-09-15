import { typescale5Xl } from '../../../font/typescale5Xl.mjs';
import { _displayFontPartA, _displayFontPartB } from './displayShared.mjs';

/** @deprecated Use {@link proseHeading5XlStyle} instead. This API will be removed with the next major release. */
const displayLargeStyle = {
    font: `${_displayFontPartA}${typescale5Xl}${_displayFontPartB}`,
};

export { displayLargeStyle };
