import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      include: ['lib'],
      exclude: ['**/*.test.ts'],
    }),
  ],
  build: {
    lib: {
      entry: [resolve(__dirname, 'lib/core/index.ts')],
      name: 'boolchain',
      fileName: 'boolchain',
    },
  },
});
