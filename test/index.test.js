const toc = require('../index');

describe('Main', () => {
  test('changed title, is only, custom h2', () => {
    const code = `
/* # test */
/* ## test */
/* ### test */`;

    const result = `/*
* Testing code
*
*
* TEST
* test
* --- test
*/`;

    const params = {
      code,
      isOnly: true,
      title: 'Testing code',
      h3: (line) => line.replace('###', '* ---'),
    };

    expect(toc(params)).toBe(result);
  });

  test('code only', () => {
    const code = `
/* # test 1 */
/* ## test 2 */
/* ### test 3 */
/* #### test 4 */
/* ##### test 5 */
`;

    const result = `/*
* Table of content
*
*
* TEST 1
* test 2
*   test 3
*     test 4
*       test 5
*/



/* # test 1 */
/* ## test 2 */
/* ### test 3 */
/* #### test 4 */
/* ##### test 5 */
`;

    expect(toc({ code })).toBe(result);
  });
});
