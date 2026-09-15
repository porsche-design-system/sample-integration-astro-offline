import { typescale4Xl } from '../../../font/typescale4Xl.mjs';
import { _displayFontPartA, _displayFontPartB } from './displayShared.mjs';

/** @deprecated Use {@link proseHeading4XlStyle} instead. This API will be removed with the next major release. */
const displayMediumStyle = {
    font: `${_displayFontPartA}${typescale4Xl}${_displayFontPartB}`,
};

export { displayMediumStyle };
