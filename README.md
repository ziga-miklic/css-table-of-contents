# CSS Table Of Content

Create a table of content from your comments.

## Options

| Option name     | Type               | Defaut value          | Description                                                                                     |
| --------------- | ------------------ | --------------------- | ----------------------------------------------------------------------------------------------- |
| code (required) | string             | /                     | CSS code to parse.                                                                              |
| title           | string             | `'Table of contents'` | Title of the TOC that displays at the top of the list.                                          |
| isOnly          | bool               | `false`               | If `false`, returns both the TOC and the original code. If `true`, returns only TOC.            |
| prefix          | function or string | `formatPrefix()`      | Text that is added before the TOC list. The first function parameter is `title`               . |
| suffix          | string             | `'\n*/\n\n\n'`        | Text that is added after the TOC list, if `isOnly` is `false`.                                  |
| suffixOnly      | string             | `'\n*/'`              | Text that is added after the TOC list, if `isOnly` is `true`.                                   |
| h1 - h5         | function           | `h1()` - `h5()`       | Function with formatting for each heading type. The first parameter is the unchanged line text. |