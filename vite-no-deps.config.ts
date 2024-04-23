import { resolve } from 'path';
import { defineConfig } from 'vite';

const name = 'boolchain';

export default defineConfig({
  build: {
    lib: {
      entry: [resolve(__dirname, 'lib/boolchain.ts')],
      name,
      fileName: (format) =>
        format === 'es' ? `${name}.nodeps.js` : `${name}.nodeps.${format}.js`,
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['better-optional', 'only-utils'],

      output: {
        globals: {
          'only-utils': 'onlyUtils',
          'better-optional': 'Optional',
        },
        exports: 'named',
        name,
      },
    },
  },
});
