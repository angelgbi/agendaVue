import Vue from 'vue'
import Router from 'vue-router'
import AllContacts from './views/AllContacts.vue'
import ContactForm from './views/ContactForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: AllContacts
    },
    {
      path: '/form',
      name: 'contact form',
      component: ContactForm
    },
    {
      path: '/form/:id',
      name: 'contact update',
      component: ContactForm
    }
  ]
})
