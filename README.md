# Vue Tidy Table [![npm version](https://badge.fury.io/js/vue-tidy-table.svg)](https://badge.fury.io/js/vue-tidy-table) [![](https://img.shields.io/npm/dm/vue-tidy-table)](https://www.npmjs.com/package/vue-tidy-table)

Create a HTML table that can be sorted, selected, and post-processed.

![Preview](https://raw.githubusercontent.com/nuxy/tidy-table/master/package.gif)

## Features

- Extensible HTML/CSS interface.
- Compatible with all modern desktop and mobile web browsers.
- Fully responsive layout with touch event support.
- Easy to set-up and customize.
- Customizable callback functions for post-processing selected results.
- Post-process options for manipulating table/column/menu elements.
- Fast and lightweight (JavaScript plug-in *only 4 kB)

Checkout the [demo](https://nuxy.github.io/tidy-table) for examples of use.

## Dependencies

- [Node.js](https://nodejs.org)

## Installation

Add to an existing [Vue](https://vuejs.org) project using [YARN](https://yarnpkg.com).

    $ yarn add vue-tidy-table

## Usage

```javascript
import * as Vue  from 'vue';
import TidyTable from 'vue-tidy-table'; // or '../dist/vue-tidy-table';

const options = {
  enableCheckbox: true,
  enableMenu:     true,
  reverseSortDir: true,
  responsive:     true
};

const settings = {
  columnTitles: ['Rank', 'Programming Language', 'Ratings Jan 2012', 'Delta Jan 2012', 'Status'],
  columnValues: [
    ['1', 'Java', '17.479%', '-0.29%', 'A'],
    ['2', 'C', '16.976%', '+1.15%', 'A'],
    ['3', 'C#', '8.781%', '+2.55%', 'A'],
    ['4', 'C++', '8.063%', '-0.72%', 'A'],
    ['5', 'Objective-C', '6.919%', '+3.91%','A']
  ],

  // Add menu options to bind result events.
  menuOptions: [
    ['- Action -', null],
    ['Callback 1', {callback: (rows) => {}}],
    ['Callback 2', {callback: (rows) => {}}]
  ],

  // Post-process rendered HTML output.
  postProcess: {
    table:  (HTMLTableElement)     => {},
    column: (HTMLTableCellElement) => {},
    menu:   (HTMLTableElement)     => {}
  },

  // Pre-process column values before sort.
  sortByPattern: function(colNum, val) {
    if (colNum !== 1) return val;

    return val?.replace(/\$|%|#/g, '');
  }
};

const app = Vue.createApp({
  data() {
    return {
      table: null
    };
  },

  template: `
    <TidyTable v-bind:settings="settings" v-bind:options="options" />
  `
});

app.component('tidy-table', TidyTable).mount('#main');
```

## Component Props

| Name     | Type   | Description         |
|----------|--------|---------------------|
| settings | Object | Main configuration. |
| options  | Object | Override table [defaults](https://github.com/nuxy/tidy-table#table-options). |

## Documentation

- [Post-processing examples](https://github.com/nuxy/tidy-table#post-processing-examples)
- [Table options](https://github.com/nuxy/tidy-table#table-options)

## Developers

### CLI options

Run [ESLint](https://eslint.org) on project sources:

    $ npm run lint

Transpile ES6 sources (using [Babel](https://babeljs.io)) and minify to a distribution:

    $ npm run build

Bundle [demo](https://github.com/nuxy/vue-tidy-table/tree/master/demo) sources (using [Webpack](https://webpack.js.org)):

    $ npm run webpack

## Contributions

If you fix a bug, or have a code you want to contribute, please send a pull-request with your changes. (Note: Before committing your code please ensure that you are following the [Node.js style guide](https://github.com/felixge/node-style-guide))

## Versioning

This package is maintained under the [Semantic Versioning](https://semver.org) guidelines.

## License and Warranty

This package is distributed in the hope that it will be useful, but without any warranty; without even the implied warranty of merchantability or fitness for a particular purpose.

_vue-tidy-table_ is provided under the terms of the [MIT license](http://www.opensource.org/licenses/mit-license.php)

## Author

[Marc S. Brooks](https://github.com/nuxy)
