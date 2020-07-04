module.exports = {
  extends: ['plugin:jest/recommended', 'plugin:react/recommended', 'standard'],
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': ['error', 'never']
  },
  plugins: ['jest']

};
