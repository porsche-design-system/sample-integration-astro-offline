import { colorPrimary } from '../color/light-dark/colorPrimary.mjs';
import { fontPorscheNext } from '../font/fontPorscheNext.mjs';
import { fontWeightNormal } from '../font/fontWeightNormal.mjs';
import { getCJKFontFamilyStyle } from '../font/getCJKFontFamilyStyle.mjs';
import { leadingNormal } from '../font/leadingNormal.mjs';
import { typescaleSm } from '../font/typescaleSm.mjs';

const proseTextSmStyle = {
    ...getCJKFontFamilyStyle(),
    font: `${fontWeightNormal} ${typescaleSm} / ${leadingNormal} ${fontPorscheNext}`,
    color: colorPrimary,
};

export { proseTextSmStyle };
