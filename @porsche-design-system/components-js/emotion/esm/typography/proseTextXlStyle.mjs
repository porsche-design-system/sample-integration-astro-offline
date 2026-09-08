import { colorPrimary } from '../color/light-dark/colorPrimary.mjs';
import { fontPorscheNext } from '../font/fontPorscheNext.mjs';
import { fontWeightNormal } from '../font/fontWeightNormal.mjs';
import { getCJKFontFamilyStyle } from '../font/getCJKFontFamilyStyle.mjs';
import { leadingNormal } from '../font/leadingNormal.mjs';
import { typescaleXl } from '../font/typescaleXl.mjs';

const proseTextXlStyle = {
    ...getCJKFontFamilyStyle(),
    font: `${fontWeightNormal} ${typescaleXl} / ${leadingNormal} ${fontPorscheNext}`,
    color: colorPrimary,
};

export { proseTextXlStyle };
