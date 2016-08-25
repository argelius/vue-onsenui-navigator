import Vue from 'vue';
import App from './App';

import VueOnsen from 'vue-onsenui';
import ons from 'onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import { MainPage, SecondPage } from './components';

Vue.use(VueOnsen, {
  components: {
    MainPage,
    SecondPage
  }
});

ons.ready(() => {
  /* eslint-disable no-new */
  new Vue({
    el: 'body',
    components: { App }
  });
});
