const css = require('css');
const {
  h1,
  h2,
  h3,
  h4,
  h5,
  format,
  formatPrefix,
} = require('./src/format');

function isComment({ type, comment = '' } = {}) {
  return type === 'comment' && comment.includes('#');
}

function getCommentContent(rule) {
  return rule.comment.trim();
}

function getPrefix({ prefix, title } = {}) {
  if (typeof prefix === 'function') {
    return prefix(title);
  }

  return prefix;
}

function getSuffix({ code, options = null } = {}) {
  if (options) {
    if (!options.isOnly) {
      return options.suffix + code;
    }

    return options.suffixOnly;
  }

  return '';
}

function getTOC({ code, options } = {}) {
  const codeObject = css.parse(code);

  const commentRules = codeObject.stylesheet.rules.filter(isComment);
  const comments = commentRules.map(getCommentContent);
  const formatComment = (comment) => format({ comment, options });
  const toc = comments.map(formatComment).join('\n');

  return `${getPrefix(options)}${toc}${getSuffix({ code, options })}`;
}

function getOptions(userOptions) {
  const DEFAULT_OPTIONS = {
    title: 'Table of contents',
    isOnly: false,
    prefix: formatPrefix,
    suffix: '\n*/\n\n\n',
    suffixOnly: '\n*/',
    h1,
    h2,
    h3,
    h4,
    h5,
  };

  return Object.assign(
    DEFAULT_OPTIONS,
    userOptions,
  );
}

function init({ code, ...userOptions } = {}) {
  const options = getOptions(userOptions);

  if (code) {
    return getTOC({ code, options });
  }

  return null;
}

module.exports = init;
