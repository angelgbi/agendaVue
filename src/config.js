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
axiosInstance.defaults.timeout = 1500

Vue.prototype.$axios = axiosInstance
