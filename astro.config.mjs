import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://restaurantesantjhoane.com/',
  integrations: [sitemap(), preact()],

  vite: {
    plugins: [tailwindcss()]
  }
});