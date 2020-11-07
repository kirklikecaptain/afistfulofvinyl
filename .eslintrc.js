module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  globals: {
    __PATH_PREFIX__: true, // Gatsby requirement
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxSingleQuote: true,
        singleQuote: true,
        tabWidth: 2,
      },
    ],
  },
};
