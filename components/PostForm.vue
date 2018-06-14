<template>
  <div class="post-form">
    <h2>Post Create</h2>
    <p class="form-wrapper">
      <input v-model="formPostTitle" type="text" name="title" placeholder="Title"/>
    </p>
    <p class="form-wrapper">
      <input v-model="formPostContent" type="text" name="title" placeholder="Content"/>
    </p>
    <p>
      <button type="button" @click="postContent">投稿する</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formPostTitle: '',
      formPostContent: ''
    }
  },
  methods: {
    postContent() {
      this.$store.dispatch('post/postContent', {
        title: this.formPostTitle,
        content: this.formPostContent
      })
    }
  }
}
</script>

<style lang="sass">
h2
  text-align: center
.post-form
  width: 300px
  margin: 0 auto
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
