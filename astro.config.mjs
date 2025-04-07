import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://restaurantesantjhoane.com/',
  integrations: [tailwind(), sitemap(), preact()]
});