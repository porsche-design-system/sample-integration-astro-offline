import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import { Features } from 'lightningcss';

// https://astro.build/config
export default defineConfig({
  base: process.env.ASTRO_PUBLIC_BASE_PATH || '',

  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        // PDS supplies its own fallback for light-dark().
        exclude: Features.LightDark,
      },
    },
    optimizeDeps: {
      exclude: ['@porsche-design-system/components-js'],
    },
  },

  integrations: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('p-'),
        },
      },
    }),
  ],
});