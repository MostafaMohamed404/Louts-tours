// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://lotustours-eg.com', // مهم جدًا

  integrations: [
    sitemap() // دي اللي هتولد sitemap
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});