import { spacingFluidLarge } from './spacingFluidLarge.mjs';
import { spacingFluidMedium } from './spacingFluidMedium.mjs';
import { spacingFluidSmall } from './spacingFluidSmall.mjs';
import { spacingFluidXLarge } from './spacingFluidXLarge.mjs';
import { spacingFluidXSmall } from './spacingFluidXSmall.mjs';
import { spacingFluidXXLarge } from './spacingFluidXXLarge.mjs';

/** @deprecated This API will be removed with the next major release. Use spacing variables directly instead. */
const spacingFluid = {
    xSmall: spacingFluidXSmall,
    small: spacingFluidSmall,
    medium: spacingFluidMedium,
    large: spacingFluidLarge,
    xLarge: spacingFluidXLarge,
    xxLarge: spacingFluidXXLarge,
};

export { spacingFluid };
