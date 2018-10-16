// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import SubjectManagement from './SubjectManagement'
import router from './router'
import i18n from '../i18n/VueI18n'
import {ClientTable} from 'vue-tables-2'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import * as uiv from 'uiv'

Vue.use(uiv)
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)
Vue.use(ClientTable)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#subject-management',
  router,
  i18n,
  components: {
    SubjectManagement
  },
  template: '<SubjectManagement/>'
})
