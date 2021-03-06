import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import moment from 'moment'
import { ipcRenderer } from 'electron';
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility);

Vue.config.productionTip = false;


Vue.filter('formatDate', function(value) {
  if (value && !String(value).includes("-0001")) {
    return moment(String(value)).format(i18n.t('locale.dateFormat'))
  }
});

window.VueRoot = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');