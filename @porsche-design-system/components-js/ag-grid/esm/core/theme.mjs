import { themeQuartz } from 'ag-grid-community';
import { checkboxStyle, checkboxStyleCompact } from '../parts/checkbox-styles.mjs';
import { pdsSvgIcons } from '../parts/icon-set.mjs';
import { inputStyles, inputStylesCompact } from '../parts/input-styles.mjs';
import { toggleButtonStyle, toggleButtonStyleCompact } from '../parts/toggle-button-styles.mjs';
import { colorFocus, colorFrosted, colorSurface, colorInfoLow, colorContrastLower, colorErrorLow, colorContrastLow, colorPrimary, colorCanvas, typescaleXs, fontWeightSemibold, typescaleSm, fontPorscheNext, radiusMd, radiusSm, pdsIconSize, pdsSwitchInset, pdsSwitchWidth, pdsSwitchHeight, gridSpacing, pdsCheckboxBorderWidth, pdsIconSizeCompact, gridSpacingCompact } from '../styles.mjs';

/**
 * Porsche Design System theme for AG Grid v35
 *
 * This theme extends the Quartz theme with Porsche Design System styling.
 * It supports both light and dark modes via CSS `color-scheme`.
 *
 * Features:
 * - Custom Porsche Design System colors
 * - PorscheNext font family
 * - Custom checkbox, toggle, and input styling
 * - Optimized spacing and sizing
 * - Full dark mode support
 *
 * Usage:
 * ```typescript
 * import { pdsTheme } from '@porsche-design-system/utilities/ag-grid';
 *
 * const gridOptions = {
 *   theme: pdsTheme,
 *   // ... other options
 * };
 * ```
 *
 * For dark mode, set `color-scheme` on a parent element:
 * ```html
 * <body style="color-scheme: dark;">
 *   <!-- Grid will render in dark mode -->
 * </body>
 * ```
 *
 * For light dark mode, set `color-scheme` on a parent element:
 * ```html
 * <body style="color-scheme: light dark;">
 *   <!-- Grid will render in light or dark mode depending on OS settings -->
 * </body>
 * ```
 */
const pdsTheme = themeQuartz
    // Light mode parameters (default)
    .withParams({
    // Component sizing
    checkboxBorderWidth: pdsCheckboxBorderWidth,
    checkboxBorderRadius: radiusSm,
    spacing: gridSpacing,
    toggleButtonHeight: pdsSwitchHeight,
    toggleButtonWidth: pdsSwitchWidth,
    toggleButtonSwitchInset: pdsSwitchInset,
    iconSize: pdsIconSize,
    borderRadius: radiusSm,
    wrapperBorderRadius: radiusMd,
    // Grid structure
    headerHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 2.9)',
    rowHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 4)',
    // Typography
    fontFamily: fontPorscheNext,
    fontSize: typescaleSm,
    fontWeight: 'inherit',
    headerFontWeight: fontWeightSemibold,
    headerFontSize: typescaleXs,
    // Color scheme
    browserColorScheme: 'inherit',
    // Core Colors
    accentColor: colorFocus,
    backgroundColor: colorCanvas,
    foregroundColor: colorPrimary,
    borderColor: colorContrastLow,
    invalidColor: colorErrorLow,
    // Grid colors
    headerBackgroundColor: colorContrastLower,
    selectedRowBackgroundColor: colorInfoLow,
    oddRowBackgroundColor: colorSurface,
    modalOverlayBackgroundColor: colorFrosted,
    rowHoverColor: colorFrosted,
    columnHoverColor: colorFrosted,
    rangeSelectionBorderColor: colorFocus,
})
    // Apply custom parts
    .withPart(pdsSvgIcons)
    .withPart(toggleButtonStyle)
    .withPart(checkboxStyle)
    .withPart(inputStyles);
const pdsThemeCompact = pdsTheme
    .withParams({
    spacing: gridSpacingCompact,
    iconSize: pdsIconSizeCompact,
})
    .withPart(checkboxStyleCompact)
    .withPart(toggleButtonStyleCompact)
    .withPart(inputStylesCompact);

export { pdsTheme, pdsThemeCompact };
