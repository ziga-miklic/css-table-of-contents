const {
  increaseHeadingCount,
  getHeadingNumberFormat,
  getHeadingCount,
} = require('./numbering');

function getIndent(level, size, startLevel) {
  const times = Math.max(0, size * (level - startLevel + 1));
  return ' '.repeat(times);
}

function getCommentText(comment) {
  return comment.replace(/#/g, '').trim();
}

function getHeadingFormat({ level, comment, options }) {
  let formatted = options.linePrefix;
  formatted += getIndent(level, options.indentSize, options.indentStart);
  if (options.isShowNumbers) {
    formatted += getHeadingNumberFormat(level);
  }
  formatted += getCommentText(comment);

  return formatted;
}

function h1({ comment = '', options }) {
  let heading = getHeadingFormat({ level: 1, comment, options });

  if (getHeadingCount(1) > 1 && options.isGap) {
    heading = `${options.linePrefix}\n${heading}`;
  }

  return heading.toUpperCase();
}

function h2({ comment = '', options }) {
  return getHeadingFormat({ level: 2, comment, options });
}

function h3({ comment = '', options }) {
  return getHeadingFormat({ level: 3, comment, options });
}

function h4({ comment = '', options }) {
  return getHeadingFormat({ level: 4, comment, options });
}

function h5({ comment = '', options }) {
  return getHeadingFormat({ level: 5, comment, options });
}

function getLevel(comment = '') {
  const matches = comment.match(/#/g) || [];

  return matches.length;
}

function format({ comment, options } = {}) {
  const level = getLevel(comment);

  if (level > 0 && level < 6) {
    const formatFunc = options[`h${level}`];

    increaseHeadingCount(level);

    return formatFunc({ comment, options });
  }

  return comment;
}

function formatPrefix(title = null, linePrefix) {
  if (title == null) {
    return '';
  }

  return `/*\n${linePrefix}${title}\n${linePrefix}\n${linePrefix}\n`;
}

module.exports = {
  h1,
  h2,
  h3,
  h4,
  h5,
  format,
  formatPrefix,
  getLevel,
};
