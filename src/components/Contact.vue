<template>
  <b-card class="overflow-hidden contact-item">
    <b-row no-gutters>
      <b-col xs="6" md="4">
        <b-card-img
          :src="require('../assets/placeholder.png')"
          class="contact-item__img"
          alt="placeholder logo"
        ></b-card-img>
      </b-col>
      <b-col xs="6" md="8">
        <b-card-body>
          <b-card-title title-tag="h2"> {{ contactData.name }} </b-card-title>
          <b-card-sub-title
            sub-title-tag="h3"
            class="mb-2"
            v-if="contactData.nickname"
          >
            {{ contactData.nickname }}
          </b-card-sub-title>
          <b-card-text>
            <strong>Phone:</strong> {{ contactData.phone_number }}
          </b-card-text>
          <b-card-text>
            <strong>Email:</strong> {{ contactData.email }}
          </b-card-text>
          <b-card-text v-if="contactData.notes">
            <strong>Notes:</strong> {{ contactData.notes }}
          </b-card-text>
        </b-card-body>
        <div class="contact-item__btn-container">
          <b-button
            pill
            :to="{ name: 'contact update', params: { id: contactData._id } }"
            variant="info"
            class="contact-item__btn"
          >
            Edit
          </b-button>
          <b-button
            pill
            variant="danger"
            class="contact-item__btn"
            @click="deleteContact"
          >
            Delete
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    contactData: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteContact() {
      this.$axios
        .delete(this.contactData._id)
        .then(() => {
          this.$emit('contactDeleted')
        })
        .catch((e) => console.log(e))
    }
  }
}
</script>
