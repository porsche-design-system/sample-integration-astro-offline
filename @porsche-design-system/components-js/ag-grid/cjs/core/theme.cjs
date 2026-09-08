'use strict';

var agGridCommunity = require('ag-grid-community');
var checkboxStyles = require('../parts/checkbox-styles.cjs');
var iconSet = require('../parts/icon-set.cjs');
var inputStyles = require('../parts/input-styles.cjs');
var toggleButtonStyles = require('../parts/toggle-button-styles.cjs');
var styles = require('../styles.cjs');

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
const pdsTheme = agGridCommunity.themeQuartz
    // Light mode parameters (default)
    .withParams({
    // Component sizing
    checkboxBorderWidth: styles.pdsCheckboxBorderWidth,
    checkboxBorderRadius: styles.radiusSm,
    spacing: styles.gridSpacing,
    toggleButtonHeight: styles.pdsSwitchHeight,
    toggleButtonWidth: styles.pdsSwitchWidth,
    toggleButtonSwitchInset: styles.pdsSwitchInset,
    iconSize: styles.pdsIconSize,
    borderRadius: styles.radiusSm,
    wrapperBorderRadius: styles.radiusMd,
    // Grid structure
    headerHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 2.9)',
    rowHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 4)',
    // Typography
    fontFamily: styles.fontPorscheNext,
    fontSize: styles.typescaleSm,
    fontWeight: 'inherit',
    headerFontWeight: styles.fontWeightSemibold,
    headerFontSize: styles.typescaleXs,
    // Color scheme
    browserColorScheme: 'inherit',
    // Core Colors
    accentColor: styles.colorFocus,
    backgroundColor: styles.colorCanvas,
    foregroundColor: styles.colorPrimary,
    borderColor: styles.colorContrastLow,
    invalidColor: styles.colorErrorLow,
    // Grid colors
    headerBackgroundColor: styles.colorContrastLower,
    selectedRowBackgroundColor: styles.colorInfoLow,
    oddRowBackgroundColor: styles.colorSurface,
    modalOverlayBackgroundColor: styles.colorFrosted,
    rowHoverColor: styles.colorFrosted,
    columnHoverColor: styles.colorFrosted,
    rangeSelectionBorderColor: styles.colorFocus,
})
    // Apply custom parts
    .withPart(iconSet.pdsSvgIcons)
    .withPart(toggleButtonStyles.toggleButtonStyle)
    .withPart(checkboxStyles.checkboxStyle)
    .withPart(inputStyles.inputStyles);
const pdsThemeCompact = pdsTheme
    .withParams({
    spacing: styles.gridSpacingCompact,
    iconSize: styles.pdsIconSizeCompact,
})
    .withPart(checkboxStyles.checkboxStyleCompact)
    .withPart(toggleButtonStyles.toggleButtonStyleCompact)
    .withPart(inputStyles.inputStylesCompact);

exports.pdsTheme = pdsTheme;
exports.pdsThemeCompact = pdsThemeCompact;
