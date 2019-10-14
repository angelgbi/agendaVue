/* ============
 * Config File
 * ============
 *
 * Will configure and bootstrap the application
 */
import Vue from 'vue'

/* ============
 * Styling
 * ============
 *
 * Require the application styling.
 */
require('./assets/styles/main.scss')

/* ============
 * BootstrapVue
 * ============
 *
 * BootstrapVue, based on Bootstrap v4, for building responsive,
 * mobile-first sites using Vue.js.
 */
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

/* ============
 * Axios
 * ============
 *
 * https://github.com/mzabriskie/axios
 */
import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = process.env.VUE_APP_API_LOCATION
axiosInstance.defaults.headers.common.Accept = 'application/json'
axiosInstance.defaults.timeout = 5000
axiosInstance.defaults.headers.common.Authorization = `Basic ${window.btoa(
  process.env.VUE_APP_USER
)}`

Vue.prototype.$axios = axiosInstance

/* ============
 * Vee-validate
 * ============
 *
 * VeeValidate is a template-based validation library for Vue.js.
 * https://logaretm.github.io/vee-validate/
 */
import { extend } from 'vee-validate'
import { required, email, alpha_spaces, min } from 'vee-validate/dist/rules'

// Add the required rule
extend('required', {
  ...required,
  message: 'This field is required'
})
extend('email', email)
extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Only alphabetic characters and spaces are allowed'
})
extend('min', {
  ...min,
  message: 'The {_field_} field must be at least {length} characters'
})
