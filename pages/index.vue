<template>
  <div class="">
    <p><nuxt-link to="/signup" >新規会員登録</nuxt-link></p>
    <p><nuxt-link to="/signin" >ログイン</nuxt-link></p>
    <p><nuxt-link to="/post" >投稿</nuxt-link></p>
    <sample-form />
  </div>
</template>

<script>
import SampleForm from '~/components/SampleForm.vue';

export default {
  components: {
    SampleForm
  }
};
</script>
