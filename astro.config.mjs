import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@components': path.join(__dirname, 'src/components'),
        '@layouts': path.join(__dirname, 'src/layouts'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/variables" as *; @use "src/styles/mixins" as *;`,
        },
      },
    },
  },
});
