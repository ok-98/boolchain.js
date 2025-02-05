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
      external: ['only-utils', 'only-types', 'better-optional'],

      output: {
        globals: {
          'only-utils': 'onlyUtils',
          'better-optional': 'betterOptional',
        },
        exports: 'named',
        name,
      },
    },
  },
});
