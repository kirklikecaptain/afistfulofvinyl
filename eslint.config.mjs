import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import preferredImportPath from 'eslint-plugin-preferred-import-path';
import reactRenderTypes from 'eslint-plugin-react-render-types';

const importPluginConfig = {
  plugins: {
    import: importPlugin,
    'preferred-import-path': preferredImportPath,
  },

  settings: {
    // Make eslint-plugin-import understand ~/* alias
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
  },

  rules: {
    /**
     * Autofixable import grouping + sorting
     */
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
  },
};

/**
 * Forces component-to-component imports through ~/components/*
 * Keeps ./local imports allowed inside a component folder.
 */
const noRelativeImportsInComponentsConfig = {
  files: ['./src/components/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../**'],
      },
    ],
  },
};

const reactRenderTypesConfig = [
  reactRenderTypes.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
];

const ignoredFiles = globalIgnores([
  '.next/**',
  'out/**',
  'build/**',
  'next-env.d.ts',
  '_archive/**',
  'src/contentful/__generated__/**',
]);

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...reactRenderTypesConfig,
  importPluginConfig,
  noRelativeImportsInComponentsConfig,
  prettier,
  ignoredFiles,
]);

export default eslintConfig;
