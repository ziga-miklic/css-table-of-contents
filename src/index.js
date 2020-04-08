const css = require('css');
const { format } = require('./format');
const { DEFAULT_OPTIONS } = require('./defines');
const { resetHeadingCount } = require('./numbering');

function isComment({ type, comment = '' } = {}) {
  return type === 'comment' && comment.includes('#');
}

function getCommentContent(rule) {
  return rule.comment.trim();
}

function getPrefix({ prefix, title, linePrefix } = {}) {
  if (typeof prefix === 'function') {
    return prefix(title, linePrefix);
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
  resetHeadingCount();
  const formatComment = (comment) => format({ comment, options });
  const toc = comments.map(formatComment).join('\n');

  return `${getPrefix(options)}${toc}${getSuffix({ code, options })}`;
}

function getOptions(userOptions) {
  return {
    ...DEFAULT_OPTIONS,
    ...userOptions,
  };
}

function init({ code, ...userOptions } = {}) {
  const options = getOptions(userOptions);

  if (code) {
    return getTOC({ code, options });
  }

  return null;
}

module.exports = init;
