<template>
  <div class="sign-up-form">
    <h2>SignUp</h2>
    <p v-if="errorMessage !== ''">{{errorMessage}}</p>
    <p class="form-wrapper">
      <input v-model="formUserName" type="text" name="email" id="email" placeholder="Email">
    </p>
    <p class="form-wrapper">
      <input v-model="formPassword" type="password" name="password" id="password" placeholder="Password">
    </p>
    <p class="form-wrapper">
      <input v-model="formConfirmPassword" type="password" name="cpassword" id="cpassword" placeholder="Password(確認用)">
    </p>
    <p>
      <button type="button" @click="postUser">登録</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formUserName: '',
      formPassword: '',
      formConfirmPassword: ''
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.user.errorMessage;
    }
  },
  methods: {
    postUser() {
      this.$store.dispatch('user/postUser', {
        email: this.formUserName,
        password: this.formPassword,
        confirmationPassword: this.formConfirmPassword
      });
    }
  }
};
</script>

<style lang="sass">
.sign-up-form
  width: 300px
  margin: 0 auto
  margin-top: 96px
  box-shadow: 0px 0px 1px
  border-radius: 8px
  padding: 24px
  h2
    text-align: center
    margin-bottom: 24px
    margin-top: 0
  p
    display: flex
    justify-content: center
    input
      flex: 1
      border: 1px solid #CCC
      padding: 10px
      border-radius: 8px
    button
      background-color: transparent
      border: none
      cursor: pointer
      outline: none
      padding: 0
      appearance: none
      border: 1px solid #CCC
      padding: 5px
      border-radius: 4px

</style>
