let headingCounters = [0, 0, 0, 0, 0];

function resetSubheadings(level) {
  for (let i = level; i < headingCounters.length; i += 1) {
    headingCounters[i] = 0;
  }
}

function resetHeadingCount() {
  headingCounters = [0, 0, 0, 0, 0];
}

function increaseHeadingCount(level) {
  headingCounters[level - 1] += 1;

  resetSubheadings(level);
}

function getHeadingNumberFormat(level) {
  const counters = headingCounters.slice(0, level);

  return `${counters.join('.')}. `;
}

function getHeadingCount(level) {
  return headingCounters[level - 1];
}

module.exports = {
  getHeadingNumberFormat,
  increaseHeadingCount,
  getHeadingCount,
  resetHeadingCount,
};
