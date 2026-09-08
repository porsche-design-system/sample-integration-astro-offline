'use strict';

const fontHyphenationStyle = {
    overflowWrap: 'break-word',
    // @ts-expect-error
    hyphens: 'var(--p-hyphens, auto)',
};

exports.fontHyphenationStyle = fontHyphenationStyle;
