import { spacingStaticLarge } from './spacingStaticLarge.mjs';
import { spacingStaticMedium } from './spacingStaticMedium.mjs';
import { spacingStaticSmall } from './spacingStaticSmall.mjs';
import { spacingStaticXLarge } from './spacingStaticXLarge.mjs';
import { spacingStaticXSmall } from './spacingStaticXSmall.mjs';
import { spacingStaticXXLarge } from './spacingStaticXXLarge.mjs';

/** @deprecated This API will be removed with the next major release. Use spacing variables directly instead. */
const spacingStatic = {
    xSmall: spacingStaticXSmall,
    small: spacingStaticSmall,
    medium: spacingStaticMedium,
    large: spacingStaticLarge,
    xLarge: spacingStaticXLarge,
    xxLarge: spacingStaticXXLarge,
};

export { spacingStatic };
