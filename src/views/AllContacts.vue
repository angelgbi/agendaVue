<template>
  <div class="contact-list">
    Contact List
    <Contact :contactData="contact" v-for="(contact, i) in contacts" :key="i" />
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  name: 'contacts',
  components: {
    Contact
  },
  data() {
    return {
      contacts: []
    }
  },
  created() {
    this.$axios.get('/').then((response) => {
      this.contacts = response.data
    })
  }
}
</script>
