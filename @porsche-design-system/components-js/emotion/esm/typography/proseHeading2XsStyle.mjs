import { colorPrimary } from '../color/light-dark/colorPrimary.mjs';
import { fontPorscheNext } from '../font/fontPorscheNext.mjs';
import { fontWeightSemibold } from '../font/fontWeightSemibold.mjs';
import { getCJKFontFamilyStyle } from '../font/getCJKFontFamilyStyle.mjs';
import { leadingNormal } from '../font/leadingNormal.mjs';
import { typescale2Xs } from '../font/typescale2Xs.mjs';

const proseHeading2XsStyle = {
    ...getCJKFontFamilyStyle(),
    font: `${fontWeightSemibold} ${typescale2Xs} / ${leadingNormal} ${fontPorscheNext}`,
    color: colorPrimary,
};

export { proseHeading2XsStyle };
