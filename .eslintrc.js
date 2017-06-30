const target = process.env.npm_lifecycle_event;

const config = {
  extends: ['airbnb-base', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  plugins: ['html', 'flowtype'],
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    Polymer: false,
    cy: false,
  },
  rules: {
    'class-methods-use-this': 'off',
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
    'flowtype/no-types-missing-file-annotation': 'off',
  },
};

if (target !== 'lint:html') {
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
