import * as Vue  from 'vue';
import TidyTable from '../dist/vue-tidy-table';

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
  menuOptions: [
    ['- Action -', null],
    ['Callback 1', {callback: doSomething1}],
    ['Callback 2', {callback: doSomething2}]
  ],
  postProcess: {
    table:  doSomething3,
    column: doSomething4,
    menu:   doSomething5
  }
};

// Do something with selected results.
function doSomething1(rows) {
  document.getElementById('output').innerText = 'MENU: callback1(rows=' + rows.length + ')';
}

function doSomething2(rows) {
  document.getElementById('output').innerText = 'MENU: callback2(rows=' + rows.length + ')';
}

// Post-process DOM elements.
function doSomething3(table) {
  table.addEventListener('dblclick', function() {
    document.getElementById('output').innerText = 'TABLE: post-process(table)';
  });
}

function doSomething4(col) {
  col.addEventListener('click', function() {
    document.getElementById('output').innerText = 'COL: post-process(text="' + this.textContent + '")';
  });
}

function doSomething5(menu) {

  // Rename default option.
  menu.children[0].innerText = '- Select -';
}

const app = Vue.createApp({
  data() {
    return {
      settings,
      options
    };
  },

  template: `
    <tidy-table v-bind:settings="settings" v-bind:options="options" />
  `
});

app.component('tidy-table', TidyTable).mount('#main');
