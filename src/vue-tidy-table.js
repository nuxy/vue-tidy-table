/**
 *  Vue Tidy Table
 *  Create a HTML table that can be sorted, selected and
 *  post-processed.
 *
 *  Copyright 2023, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import {ref}     from 'vue';
import TidyTable from 'tidy-table';
import 'tidy-table/dist/tidy-table.min.css';

/**
 * Provides Vue Component wrapper.
 */
export default {
  setup() {
    const elRef = ref(null);

    return {elRef};
  },

  mounted() {
    this.table = new TidyTable(
      this.$el,
      this.settings,
      this.options
    );
  },

  data() {
    return {
      table: null
    };
  },

  props: {
    id: {
      default: 'tidy-table',
      type: String
    },
    options: {
      default: () => ({}),
      type: Object
    },
    settings: {
      type: Object
    }
  },

  template: `
    <div v-bind:id="id" ref="wrapper"></div>
  `
};
