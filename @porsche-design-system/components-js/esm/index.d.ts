import { type ComponentsManagerData } from '@porsche-design-system/components-manager-core';
declare global {
    interface Window {
        /** @deprecated since v3 */
        PORSCHE_DESIGN_SYSTEM_CDN: 'auto' | 'cn';
    }
    interface Document {
        porscheDesignSystem: ComponentsManagerData;
    }
}
/**
 * @property prefix - the prefix used for the components
 * @property cdn - the cdn to load assets from
 */
export type LoadOptions = {
    prefix?: string;
    cdn?: 'auto' | 'cn';
};
export declare const load: (opts?: LoadOptions) => void;


export declare const componentsReady: (el?: HTMLElement, readyState?: DocumentReadyState) => Promise<number>;
