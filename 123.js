const toc = require('./dist/index');

const code = `/* app.css */

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

.tags { }`;

console.log(toc({
  code,
  isOnly: true,
  indentSize: 0,
  isShowNumbers: true,
}));
