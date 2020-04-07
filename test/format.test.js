const {
  h1,
  h2,
  h3,
  h4,
  h5,
  getLevel,
  format,
  formatPrefix,
} = require('../src/format');

describe('Heading 1', () => {
  test('if empty', () => {
    expect(h1()).toBe('');
  });

  test('if valid text', () => {
    expect(h1('# test')).toBe('* TEST');
  });
});

describe('Heading 2', () => {
  test('if empty', () => {
    expect(h2()).toBe('');
  });

  test('if valid text', () => {
    expect(h2('## test')).toBe('* test');
  });
});

describe('Heading 3', () => {
  test('if empty', () => {
    expect(h3()).toBe('');
  });

  test('if valid text', () => {
    expect(h3('### test')).toBe('*   test');
  });
});

describe('Heading 4', () => {
  test('if empty', () => {
    expect(h4()).toBe('');
  });

  test('if valid text', () => {
    expect(h4('#### test')).toBe('*     test');
  });
});

describe('Heading 5', () => {
  test('if empty', () => {
    expect(h5()).toBe('');
  });

  test('if valid text', () => {
    expect(h5('##### test')).toBe('*       test');
  });
});

describe('Selecting level', () => {
  test('if empty', () => {
    expect(getLevel()).toBe(0);
  });

  test('correct level', () => {
    expect(getLevel('#')).toBe(1);
    expect(getLevel('####')).toBe(4);
  });
});

describe('Format', () => {
  const options = {
    h1: () => 'h1',
    h2: () => 'h2',
  };

  test('if empty', () => {
    expect(format()).toBe();
  });

  test('if correct function', () => {
    expect(format({ comment: '# test', options })).toBe('h1');
    expect(format({ comment: '## test', options })).toBe('h2');
  });
});

describe('Format prefix', () => {
  test('if empty', () => {
    expect(formatPrefix()).toBe('');
  });

  test('if valid text', () => {
    const title = 'test';

    expect(formatPrefix(title)).toBe(`/*\n* ${title}\n*\n*\n`);
  });
});
