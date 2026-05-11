# Porsche Design System for Astro (Offline Build v3.35.0)

## About

This repository demonstrates how to integrate the Porsche Design System with **Astro** using a specialized offline build.
This is particularly useful for applications that need to function without an internet connection.

A custom offline build of the Porsche Design System `v3.35.0` npm package is located in `./@porsche-design-system/components-js`.
This build is designed for offline use and does not retrieve assets from the global CDN (`https://cdn.ui.porsche.com` or `https://cdn.ui.porsche.cn`).

Instead, it expects all assets — such as fonts, icons, and web components — to be served from `${YOUR_BASE_URL}/assets/porsche-design-system/`.

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

Exclude Porsche Design System from Vite's cache.

```
// astro.config.mjs

export default defineConfig({
  optimizeDeps: {
    exclude: ['@porsche-design-system/components-js'],
  },
})
```

### Step 4

Add the `@porsche-design-system/components-js` npm package with version `3.35.0`.

```
npm install @porsche-design-system/components-js@3.35.0
```

### Step 5

Integrate the Porsche Design System Loader into the `<body>` section of your HTML.

```diff
// src/layouts/Layout.astro

---
+ import { getLoaderScript } from '@porsche-design-system/components-js/partials';
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>Astro Basics</title>
  </head>
  <body>
    <slot />
+   <Fragment set:html={getLoaderScript()} />
  </body>
</html>
```

### Step 6

Once the web application is built and served, open your browser's developer console.
All Porsche Design System assets should then be loaded from `${YOUR_BASE_URL}`.
