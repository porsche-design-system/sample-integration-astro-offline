import { colorPrimary } from '../color/light-dark/colorPrimary.mjs';
import { fontPorscheNext } from '../font/fontPorscheNext.mjs';
import { fontWeightSemibold } from '../font/fontWeightSemibold.mjs';
import { getCJKFontFamilyStyle } from '../font/getCJKFontFamilyStyle.mjs';
import { leadingNormal } from '../font/leadingNormal.mjs';
import { typescaleSm } from '../font/typescaleSm.mjs';

const proseHeadingSmStyle = {
    ...getCJKFontFamilyStyle(),
    font: `${fontWeightSemibold} ${typescaleSm} / ${leadingNormal} ${fontPorscheNext}`,
    color: colorPrimary,
};

export { proseHeadingSmStyle };
