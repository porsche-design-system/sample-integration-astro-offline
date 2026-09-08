import { ShadowSelectorMatcherParams, ScreenShadowSelectorMatcherParams, ShadowRoleMatcherParams, ScreenShadowRoleMatcherParams } from 'shadow-dom-testing-library';
export * from 'shadow-dom-testing-library';

declare function getByRoleShadowed<T extends HTMLElement>(...args: ShadowRoleMatcherParams): T;
declare function getByRoleShadowed<T extends HTMLElement>(...args: ScreenShadowRoleMatcherParams): T;
declare function getByLabelTextShadowed<T extends HTMLElement>(...args: ShadowSelectorMatcherParams): T;
declare function getByLabelTextShadowed<T extends HTMLElement>(...args: ScreenShadowSelectorMatcherParams): T;
declare function getByTextShadowed<T extends HTMLElement>(...args: ShadowSelectorMatcherParams): T;
declare function getByTextShadowed<T extends HTMLElement>(...args: ScreenShadowSelectorMatcherParams): T;

export { getByLabelTextShadowed, getByRoleShadowed, getByTextShadowed };
