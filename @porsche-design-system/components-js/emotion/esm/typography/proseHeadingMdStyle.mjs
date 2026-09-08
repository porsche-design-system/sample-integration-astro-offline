import { colorPrimary } from '../color/light-dark/colorPrimary.mjs';
import { fontPorscheNext } from '../font/fontPorscheNext.mjs';
import { fontWeightNormal } from '../font/fontWeightNormal.mjs';
import { getCJKFontFamilyStyle } from '../font/getCJKFontFamilyStyle.mjs';
import { leadingNormal } from '../font/leadingNormal.mjs';
import { typescaleMd } from '../font/typescaleMd.mjs';

const proseHeadingMdStyle = {
    ...getCJKFontFamilyStyle(),
    font: `${fontWeightNormal} ${typescaleMd} / ${leadingNormal} ${fontPorscheNext}`,
    color: colorPrimary,
};

export { proseHeadingMdStyle };
