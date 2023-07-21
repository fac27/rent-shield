const path = require('path');

const buildEslintCommand = () => `next lint`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
