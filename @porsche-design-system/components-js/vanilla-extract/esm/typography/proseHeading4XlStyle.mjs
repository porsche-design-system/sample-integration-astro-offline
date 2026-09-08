import { colorPrimary } from '../color/light-dark/colorPrimary.mjs';
import { typescale4Xl } from '../font/typescale4Xl.mjs';
import { fontPorscheNext } from '../font/fontPorscheNext.mjs';
import { fontWeightNormal } from '../font/fontWeightNormal.mjs';
import { getCJKFontFamilyStyle } from '../font/getCJKFontFamilyStyle.mjs';
import { leadingNormal } from '../font/leadingNormal.mjs';

const proseHeading4XlStyle = {
    ...getCJKFontFamilyStyle(),
    font: `${fontWeightNormal} ${typescale4Xl} / ${leadingNormal} ${fontPorscheNext}`,
    color: colorPrimary,
};

export { proseHeading4XlStyle };
