<template>
  <div class="sign-in-form">
    <p v-if="errorMessage !== ''">{{errorMessage}}</p>
    <p class="form-wrapper">
      <label for="email">Email</label>
      <input v-model="formUserName" type="text" name="email" id="email">
    </p>
    <p class="form-wrapper">
      <label for="password">Password</label>
      <input v-model="formPassword" type="password" name="password" id="password">
    </p>
    <p>
      <button type="button" @click="signInUser">ログイン</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formUserName: '',
      formPassword: ''
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.user.errorMessage
    }
  },
  methods: {
    signInUser() {
      this.$store.dispatch('user/signInUser', {
        name: this.formUserName,
        password: this.formPassword
      })
    }
  }
};
</script>
<style>
/* .sign-in-form {
  background: #333;
} */
.form-wrapper {
  display: flex;
  width: 300px;
}
label,
input {
  flex: 1;
}
</style>
