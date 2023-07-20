module.exports = {
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'import', '@next/next'],
  extends: [
    'eslint:recommended',
    'plugin:@next/next/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
