'use strict';

if (typeof ShadowRoot === 'undefined') {
  throw new Error(
    '[Porsche Design System] the testing sub package requires a DOM environment, but no `ShadowRoot` was found. Use a jsdom or browser test environment instead of plain node, for example Vitest with `environment: "jsdom"`.'
  );
}

var shadowDomTestingLibrary = require('shadow-dom-testing-library');

// The three following aliases have always accepted the container as an optional first argument, falling back to the
// whole document when it is omitted. shadow-dom-testing-library splits that into two functions instead, a standalone
// one taking a container and a document-bound one on `screen`, so dispatch on whether a container was passed.
const hasContainer = (args) => typeof args[0]?.querySelectorAll === 'function';
function getByRoleShadowed(...args) {
    return hasContainer(args)
        ? shadowDomTestingLibrary.getByShadowRole(...args)
        : shadowDomTestingLibrary.screen.getByShadowRole(...args);
}
function getByLabelTextShadowed(...args) {
    return hasContainer(args)
        ? shadowDomTestingLibrary.getByShadowLabelText(...args)
        : shadowDomTestingLibrary.screen.getByShadowLabelText(...args);
}
function getByTextShadowed(...args) {
    return hasContainer(args)
        ? shadowDomTestingLibrary.getByShadowText(...args)
        : shadowDomTestingLibrary.screen.getByShadowText(...args);
}

exports.getByLabelTextShadowed = getByLabelTextShadowed;
exports.getByRoleShadowed = getByRoleShadowed;
exports.getByTextShadowed = getByTextShadowed;
Object.keys(shadowDomTestingLibrary).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () { return shadowDomTestingLibrary[k]; }
    });
});
