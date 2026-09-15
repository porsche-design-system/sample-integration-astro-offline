import { spacingFluid } from './spacingFluid.mjs';
import { spacingStatic } from './spacingStatic.mjs';

/** @deprecated This API will be removed with the next major release. Use spacing variables directly instead. */
const spacing = {
    static: spacingStatic,
    fluid: spacingFluid,
};

export { spacing };
