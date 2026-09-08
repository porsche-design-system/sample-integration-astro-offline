import { colorPrimary } from '../color/light-dark/colorPrimary.mjs';
import { fontPorscheNext } from '../font/fontPorscheNext.mjs';
import { fontWeightNormal } from '../font/fontWeightNormal.mjs';
import { getCJKFontFamilyStyle } from '../font/getCJKFontFamilyStyle.mjs';
import { leadingNormal } from '../font/leadingNormal.mjs';
import { typescaleLg } from '../font/typescaleLg.mjs';

const proseHeadingLgStyle = {
    ...getCJKFontFamilyStyle(),
    font: `${fontWeightNormal} ${typescaleLg} / ${leadingNormal} ${fontPorscheNext}`,
    color: colorPrimary,
};

export { proseHeadingLgStyle };
