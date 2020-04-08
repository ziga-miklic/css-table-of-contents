const rewire = require('rewire');
const index = rewire('../src/index');

const isComment = index.__get__('isComment');
const getPrefix = index.__get__('getPrefix');
const getSuffix = index.__get__('getSuffix');

describe('Comment check', () => {
  test('if empty', () => {
    expect(isComment()).toBe(false);
  });

  test('if different type', () => {
    expect(isComment({ type: 'node' })).toBe(false);
  });

  test('if wrong comment', () => {
    expect(isComment({ type: 'comment', comment: 'test' })).toBe(false);
  });

  test('if corrent comment', () => {
    expect(isComment({ type: 'comment', comment: '### test' })).toBe(true);
  });
});

describe('Prefix check', () => {
  test('if empty', () => {
    expect(getPrefix()).toBe();
  });

  test('if text', () => {
    expect(getPrefix({ prefix: 'test' })).toBe('test');
  });

  test('if function', () => {
    const title = 'test';
    const prefix = (a) => a;

    expect(getPrefix({ prefix, title })).toBe(title);
  });
});

describe('Suffix check', () => {
  test('if empty', () => {
    expect(getSuffix()).toBe('');
  });

  test('both', () => {
    const params = {
      code: 'test',
      options: {
        isOnly: false,
        suffix: '123',
      },
    };

    expect(getSuffix(params)).toBe('123test');
  });

  test('is only', () => {
    const params = {
      code: 'test',
      options: {
        isOnly: true,
        suffixOnly: '123',
      },
    };

    expect(getSuffix(params)).toBe('123');
  });
});
