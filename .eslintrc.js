module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'prettier',
  ],
  rules: {
    camelcase: 'off',
    noImplicitAny: 'off',
    'import/no-unresolved': 'error',
    // '@typescript-eslint/naming-convention': [
    //   'error',
    //   {
    //     selector: 'interface',
    //     format: ['PascalCase'],
    //     custom: {
    //       regex: '^I[A-Z]',
    //       match: true,
    //     },
    //   },
    // ],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-console': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'lines-between-class-members': 'off',
    'no-param-reassign': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.js'],
      },
    ],
    // 'prettier/prettier': ['error', { singleQuote: true }],
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn'],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-restricted-globals': 'off',
    'no-case-declarations': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
