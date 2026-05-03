import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  // Browser code (src)
  {
    files: ['src/**/*.{js,mjs,cjs}'],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.browser,
    },
    extends: [prettier],
  },

  // Node / config files (webpack, etc)
  {
    files: ['webpack*.js', 'eslint.config.js'],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.node,
    },
  },
]);
