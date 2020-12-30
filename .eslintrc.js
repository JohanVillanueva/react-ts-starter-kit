module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier', 'jsx-a11y', 'import'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/no-use-before-define': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'import/prefer-default-export': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
};
