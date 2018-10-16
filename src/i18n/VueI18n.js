/* eslint-disable no-undef,no-eval */
alert("d");
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages'
import VeeValidate, {Validator} from 'vee-validate'
console.log("dx")
const locale = 'pl'

Vue.use(VeeValidate)
Validator.localize(locale, messages[locale].veevalidate)

Vue.use(VueI18n)
export default new VueI18n({
  locale: locale,
  messages
})
