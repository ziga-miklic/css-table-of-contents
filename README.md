# CSS Table Of Contents

Create a table of contents from your comments using markdown-like comments (`## Heading 2`).

## Options

| Option        | Type               | Defaut value          | Description                                                                                              |
| ------------- | ------------------ | --------------------- | -------------------------------------------------------------------------------------------------------- |
| code          | string             | /                     | Required. CSS code to parse.                                                                             |
| title         | string             | `'Table of contents'` | Title of the TOC that displays at the top of the list.                                                   |
| isOnly        | bool               | `false`               | If `false`, returns both the TOC and the original code. If `true`, returns only TOC.                     |
| indentSize    | number             | `2`                   | Number of spaces added for each level.                                                                   |
| indentStart   | number             | `3`                   | First indented heading. For example 3 means the first indent will be added before h3 (`###`) list items. |
| isShowNumbers | bool               | `false`               | Show list numbering.                                                                                     |
| isGap         | bool               | `true`                | Show empty line before h1 (`#`) items.                                                                   |
| prefix        | function or string | `formatPrefix()`      | Text that is added before the TOC list. The first function parameter is `title`.                         |
| linePrefix    | string             | `* `                  | Text added before each line.                                                                             |
| suffix        | string             | `'\n*/\n\n\n'`        | Text that is added after the TOC list, if `isOnly` is `false`.                                           |
| suffixOnly    | string             | `'\n*/'`              | Text that is added after the TOC list, if `isOnly` is `true`.                                            |
| h1 - h5       | function           | `h1()` - `h5()`       | Function with formatting for each heading type. The first parameter is the unchanged line text.          |

## Examples

All the examples below will use the same CSS code from which the table of contents will be generated:

```css
/* app.css */

/* # Components */

/* ## Card */

.card { }

/* ### Card default */

.card--default { }

/* ### Card compact */

.card--compact { }

/* # Helpers */

/* ## Margins */

.m-t-1 { }
.m-r-1 { }

/* ## Paddings */

.p-t-1 { }
.p-r-1 { }

/* # Widgets */

/* ## Mini cart */

.mini-cart { }

/* ## Tags */

.tags { }
```

The above CSS illustrates how to add comments before your rules.

### Basic Example

### 
```js
const toc = require('css-table-of-contents');
const fs = require('fs');

const code = fs.readFileSync('./app.css').toString();

toc({
  code,
  isOnly: true,
});
```

### Result

```
/*
* Table of contents
*
*
* COMPONENTS
* Card
*   Card compact
*/
```

### Numeric Example

```js
const toc = require('css-table-of-contents');
const fs = require('fs');

const code = fs.readFileSync('./app.css').toString();

toc({
  code,
  isShowNumbers: true,
  isOnly: true,
});
```

### Result

```
/*
* Table of contents
*
*
* 1.COMPONENTS
* 1.1.Card
*   1.1.1.Card default
*   1.1.2.Card compact
*
* 2.HELPERS
* 2.1.Margins
* 2.2.Paddings
*
* 3.WIDGETS
* 3.1.Mini cart
* 3.2.Tags
*/
```