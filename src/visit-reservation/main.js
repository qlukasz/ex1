// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from '../i18n/VueI18n'
import { ClientTable } from 'vue-tables-2'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(ClientTable)
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#visit-reservation',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
