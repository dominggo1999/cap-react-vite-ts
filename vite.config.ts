import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as url from 'url';
import { resolve } from 'path';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const r = (path) => resolve(dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  resolve: {
    alias: {
      '~': r('src'),
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            'babel-plugin-styled-components',
            {
              displayName: process.env.NODE_ENV !== 'production',
            },
          ],
        ],
      },
    }),
  ],
});
