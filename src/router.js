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
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
})
