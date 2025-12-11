import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
// ----------------------------------------
// 1. Importe a configuração do Prettier
import prettierConfig from 'eslint-config-prettier';
// ----------------------------------------

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // ----------------------------------------
  // 2. Adicione o Prettier como o último item
  prettierConfig,
  // ----------------------------------------
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',

    'next-env.d.ts',
  ]),
]);

export default eslintConfig;
