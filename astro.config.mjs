import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://adventure-k.github.io',
  base: '/astro-bio',
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
