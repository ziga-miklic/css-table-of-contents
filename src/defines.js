const {
  h1,
  h2,
  h3,
  h4,
  h5,
  formatPrefix,
} = require('./format');

const DEFAULT_OPTIONS = {
  title: 'Table of contents',
  isOnly: false,
  indentSize: 2,
  indentStart: 3,
  isShowNumbers: false,
  isGap: true,
  prefix: formatPrefix,
  suffix: '\n*/\n\n\n',
  linePrefix: '* ',
  suffixOnly: '\n*/',
  h1,
  h2,
  h3,
  h4,
  h5,
};

module.exports = {
  DEFAULT_OPTIONS,
};
