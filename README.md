# Porsche Design System for Astro (Offline Build v4.6.0)

## About

This repository demonstrates how to integrate the Porsche Design System with **Astro** using a specialized offline build.
This is particularly useful for applications that need to function without an internet connection.

A custom offline build of the Porsche Design System `v4.6.0` npm package is located in `./@porsche-design-system/components-js`.
This build is designed for offline use and does not retrieve assets from the global CDN (`https://cdn.ui.porsche.com` or `https://cdn.ui.porsche.cn`).

Runtime assets, such as icons, flags, and web components, are served from `${YOUR_BASE_URL}/assets/porsche-design-system/`.
The mandatory global stylesheet includes bundled Porsche Next fonts, which Astro copies into its generated `_astro/` assets.

> With the upcoming version 5 of the Porsche Design System, a new solution will be available that works out of the box in offline contexts, making this workflow obsolete.

## Integration

### Step 1

Copy the `./@porsche-design-system` folder and its contents from this repository into the **root directory** of **your** Astro project.

Next, copy the `./public/assets/porsche-design-system` directory into the **same location** in **your** project.

### Step 2

Extend the **scripts** section of your `package.json` file.

```
// package.json

"scripts": {
  "postinstall": "npm run copy:@porsche-design-system/components-js",
  "copy:@porsche-design-system/components-js": "rm -rf ./node_modules/@porsche-design-system/components-js && cp -r ./@porsche-design-system/components-js/. ./node_modules/@porsche-design-system/components-js",
  …
}
```

### Step 3

Exclude Porsche Design System from Vite's cache and disable Lightning CSS's
[`light-dark()` polyfill](https://github.com/porsche-design-system/porsche-design-system/issues/4257).
PDS provides its own fallback.

```sh
npm install --save-dev lightningcss
```

```js
// astro.config.mjs

import { defineConfig } from 'astro/config';
import { Features } from 'lightningcss';

export default defineConfig({
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        exclude: Features.LightDark,
      },
    },
    optimizeDeps: {
      exclude: ['@porsche-design-system/components-js'],
    },
  },
})
```

### Step 4

Add the `@porsche-design-system/components-js` npm package with the exact version `4.6.0`.
The copy script replaces the published package with the custom offline build copied in Step 1.
Run it explicitly after installing an individual package; a regular `npm install` or `npm ci` also invokes it via postinstall.

```
npm install --save-exact @porsche-design-system/components-js@4.6.0
npm run copy:@porsche-design-system/components-js
```

### Step 5

Import the mandatory v4 global stylesheet, set a color scheme, and integrate the loader into the `<body>` section.
The removed v3 `getInitialStyles()` and `getFontFaceStyles()` partials are replaced by CSS. Font preloads from
`getFontLinks()` are unnecessary here because the stylesheet uses bundled fonts.

Set the document base URL so the offline build's relative asset URLs also work on nested pages and under
`ASTRO_PUBLIC_BASE_PATH` (used by `npm run build:ci`).

In `src/layouts/Layout.astro`:

```astro
---
import '@porsche-design-system/components-js/index.css';
import { getLoaderScript } from '@porsche-design-system/components-js/partials';

const baseUrl = `${import.meta.env.BASE_URL.replace(/\/$/, '')}/`;
---
<!doctype html>
<html lang="en" class="scheme-light">
  <head>
    <meta charset="UTF-8" />
    <base href={baseUrl} />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href={`${baseUrl}favicon.svg`} />
    <meta name="generator" content={Astro.generator} />
    <title>Astro Basics</title>
  </head>
  <body>
    <slot />
    <Fragment set:html={getLoaderScript()} />
  </body>
</html>

<style is:global>
  :not(:defined) {
    visibility: hidden;
  }
</style>
```

### Step 6

Once the web application is built and served, open your browser's developer console.
All Porsche Design System assets should then be loaded from `${YOUR_BASE_URL}`.
