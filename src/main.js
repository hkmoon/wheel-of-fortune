import Vue from 'vue';
import App from './App';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSmileWink } from '@fortawesome/free-solid-svg-icons';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(faCircleCheck, faThumbsUp, faThumbsDown, faCircleXmark, faSmileWink, faSadTear);

import store from './store';

Vue.config.productionTip = false;

// Custom directive to autofocus when element is added.
Vue.directive('focus', {
  inserted: function(el) {
    el.focus();
  }
});

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
