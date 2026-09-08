'use strict';

var agGridCommunity = require('ag-grid-community');
var styles = require('../styles.cjs');

/**
 * Input field styles for AG Grid following v35 standards
 *
 * Provides custom styling for input elements with Porsche Design System colors.
 * Supports both light and dark theme via CSS `color-scheme`.
 *
 * Includes styling for:
 * - Normal state
 * - Focus state
 * - Invalid state
 * - Disabled state
 */
const inputStyles = agGridCommunity.createPart({
    feature: 'inputStyles',
    params: {
        // Normal state
        inputBorder: `solid ${styles.borderWidthThin} ${styles.colorContrastLower}`,
        inputDisabledBackgroundColor: styles.colorCanvas,
        // Focus state
        inputFocusBorder: `solid ${styles.borderWidthThin} ${styles.colorPrimary}`,
        // Invalid state
        inputInvalidBorder: `solid ${styles.borderWidthThin} ${styles.colorErrorLow}`,
        // Disabled state
        inputDisabledBorder: `solid ${styles.borderWidthThin} light-dark(hsla(233,6.6%,23.9%,0.412),hsla(240,1.5%,61.8%,0.302))`,
    },
    css: `
    /* Custom border radius for input fields */
    .ag-text-field-input {
        border-radius: ${styles.radiusXl};
    }

    /* Reduce vertical space around the search input in the column tool panel */
    .ag-column-select-header {
        height: auto;
        padding-top: ${styles.spacingStaticXs};
        padding-bottom: ${styles.spacingStaticXs};
    }
  `,
});
const inputStylesCompact = agGridCommunity.createPart({
    feature: 'inputStylesCompact',
    css: `
  .ag-text-field-input {
      border-radius: ${styles.radiusLg};
  }

  .ag-column-select-header {
      height: auto;
      padding-top: 2px;
      padding-bottom: 2px;
  }
  `
});

exports.inputStyles = inputStyles;
exports.inputStylesCompact = inputStylesCompact;
