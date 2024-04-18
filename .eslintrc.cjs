const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    root: true,
    env: {
      browser: true,
      es2022: true,
      node: true,
    },
    extends: [
      'xo',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.mjs'],
    overrides: [
      {
        env: {
          node: true,
        },

        files: ['.eslintrc.{js,cjs}', 'vite.config.ts'],
        parserOptions: {
          sourceType: 'script',
        },
      },
      {
        extends: ['xo-typescript'],
        files: ['src/**/*.ts'],
      },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: [],
    rules: {
      'prettier/prettier': true,
      'arrow-body-style': false,
      'prefer-arrow-callback': false,
      'object-curly-spacing': ['error', 'always'],
      'object-curly-newline': ['off', 'never'],
      indent: ['error', 2],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error', // Or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];
