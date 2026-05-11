import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: process.env.ASTRO_PUBLIC_BASE_PATH || '',
  optimizeDeps: {
    exclude: ['@porsche-design-system/components-js'],
  },
});
