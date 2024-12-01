<template>
  <exchange-modal :onModalSubmit="updateProfile">
    <form>
      <div class="field">
        <label class="title">Username</label>
        <input class="input" v-model="userProfile.username" />
      </div>
      <div class="field">
        <label class="title">Avatar</label>
        <input class="input" v-model="userProfile.avatar" />
      </div>
      <div class="field">
        <label class="title">Info about user</label>
        <input class="input" v-model="userProfile.info" />
      </div>
      <div class="field">
        <label class="title">Address</label>
        <input class="input" v-model="userProfile.address" />
      </div>
      <div class="field">
        <label class="title">Country</label>
        <input class="input" v-model="userProfile.country" />
      </div>
      <div class="field">
        <label class="title">Phone</label>
        <input class="input" v-model="userProfile.phone" />
      </div>
    </form>

    <template #activator>
      <button class="button is-block is-primary is-light is-fullwidth">
        Custom button
      </button>
    </template>
  </exchange-modal>
</template>

<script>
import ExchangeModal from '../components/ExchangeModal.vue'

export default {
  components: {
    ExchangeModal,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userProfile: { ...this.user },
    }
  },
  methods: {
    updateProfile({ onSuccess }) {
      this.$store.dispatch('user/updateProfile', {
        data: this.userProfile,
        onSuccess,
      })
    },
  },
}
</script>
