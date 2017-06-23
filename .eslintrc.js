const target = process.env.npm_lifecycle_event;

const config = {
  extends: ['airbnb-base'],
  parser: 'babel-eslint',
  plugins: ['html'],
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    Polymer: false,
    cy: false,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          'test/**',
          '**/*.story.jsx',
          '**/webpack*',
        ],
      },
    ],
  },
};

if (target === 'lint:javascript') {
  config.extends.push('prettier');
  config.plugins.push('prettier');
  config.rules['prettier/prettier'] = [
    'error',
    {
      printWidth: 80,
      trailingComma: 'all',
      singleQuote: true,
    },
  ];
}

module.exports = config;
