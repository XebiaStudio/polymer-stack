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
    'class-methods-use-this': "off",
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          'test/**',
          '**/*.story.jsx',
          '**/webpack.config.js',
          '**/wct.conf.js',
        ],
      },
    ],
  },
};

if (target !== 'lint:html') {
  config.extends.push('prettier');
  config.plugins.push('prettier');
  config.rules['prettier/prettier'] = [
    'error',
    {
      trailingComma: 'all',
      singleQuote: true,
    },
  ];
}

module.exports = config;
