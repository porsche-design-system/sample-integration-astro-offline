import { themeDark } from './themeDark.mjs';
import { themeLight } from './themeLight.mjs';

/** @deprecated This API will be removed with the next major release. Use individual variables instead. */
const theme = {
    light: themeLight,
    dark: themeDark,
};

export { theme };
