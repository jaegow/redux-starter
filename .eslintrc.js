module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['react-app', 'airbnb'],
  rules: {
    'max-len': [2, { code: 1000, tabWidth: 4, ignoreUrls: true} ],
    camelcase: "off",
    'jsx-a11y/anchor-is-valid': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': "off",
    'no-underscore-dangle': "off",
  },
};
