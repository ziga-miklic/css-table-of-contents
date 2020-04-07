function h1(comment = '') {
  return comment.replace('# ', '* ').toUpperCase();
}

function h2(comment = '') {
  return comment.replace('## ', '* ');
}

function h3(comment = '') {
  return comment.replace('### ', '*   ');
}

function h4(comment = '') {
  return comment.replace('#### ', '*     ');
}

function h5(comment = '') {
  return comment.replace('##### ', '*       ');
}

function getLevel(comment = '') {
  const matches = comment.match(/#/g) || [];

  return matches.length;
}

function format({ comment, options } = {}) {
  const level = getLevel(comment);

  if (level > 0 && level < 6) {
    const formatFunc = options[`h${level}`];

    return formatFunc(comment);
  }

  return comment;
}

function formatPrefix(title = null) {
  if (title == null) {
    return '';
  }

  return `/*\n* ${title}\n*\n*\n`;
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
