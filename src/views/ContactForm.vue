<template>
  <div class="agenda-form">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Contact Name:"
        label-for="input-1"
        label-align="left"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Contact Phone:"
        label-for="input-2"
        label-align="left"
      >
        <b-form-input
          id="input-2"
          v-model="form.phone_number"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Contact Email:"
        label-for="input-3"
        label-align="left"
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter contact email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Contact Nickname:"
        label-for="input-4"
        label-align="left"
      >
        <b-form-input
          id="input-4"
          v-model="form.nickname"
          placeholder="Enter a Nickname"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-5"
        label="Notes:"
        label-for="input-5"
        label-align="left"
      >
        <b-form-input
          id="input-5"
          v-model="form.notes"
          placeholder="Enter notes"
        ></b-form-input>
      </b-form-group>

      <div class="agenda-form__btn-container">
        <b-button type="submit" variant="info">Save</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>
      </div>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-toast id="form-add" variant="info" solid>
      <template v-slot:toast-title>
        <strong class="mr-auto">Contact Added!</strong>
      </template>
      Your contact was added successfully!
    </b-toast>
    <b-toast id="form-update" variant="info" solid>
      <template v-slot:toast-title>
        <strong class="mr-auto">Contact Updated!</strong>
      </template>
      Your contact was updated successfully!
    </b-toast>
    <b-toast id="form-error" variant="danger" solid>
      <template v-slot:toast-title>
        <strong class="mr-auto">Error!</strong>
      </template>
      Please, try again.
    </b-toast>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone_number: '',
        email: '',
        nickname: '',
        notes: ''
      },
      show: true,
      formForAdd: true,
      contactId: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (this.formForAdd) {
        this.$axios
          .post('/', this.form)
          .then(() => {
            this.$bvToast.show('form-add')
            this.onReset(e)
          })
          .catch((e) => {
            console.log(e)
            this.$bvToast.show('form-error')
          })
      } else {
        this.$axios
          .put(this.contactId, this.form)
          .then((response) => {
            this.$bvToast.show('form-update')
            console.log(response)
          })
          .catch((e) => {
            console.log(e)
            this.$bvToast.show('form-error')
          })
      }
    },
    onReset(e) {
      e.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.phone_number = ''
      this.form.email = ''
      this.form.nickname = ''
      this.form.notes = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    getContact(id) {
      this.$axios
        .get(id)
        .then((response) => {
          this.contactId = response.data._id
          this.form.name = response.data.name
          this.form.phone_number = response.data.phone_number
          this.form.email = response.data.email
          this.form.nickname = response.data.nickname
          this.form.notes = response.data.notes
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },
  created() {
    if (this.$route.params.id) {
      this.getContact(this.$route.params.id)
      this.formForAdd = false
    }
  }
}
</script>
