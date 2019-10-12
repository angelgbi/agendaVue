<template>
  <div class="contact-list">
    <h1>Contact List</h1>
    <Contact
      :contactData="contact"
      v-for="(contact, i) in contacts"
      :key="i"
      @contactDeleted="getAll"
    />
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
    this.getAll()
  },
  methods: {
    getAll() {
      this.$axios.get('/').then((response) => {
        this.contacts = response.data
      })
    }
  }
}
</script>
