<template>
  <div class="">
    <post-form/>
    <post-list/>
  </div>
</template>

<script>
import PostForm from '~/components/PostForm.vue'
import PostList from '~/components/PostList.vue'
export default {
  fetch ({store}) {
    store.dispatch('post/getPosts')
  },
  components: {
    PostList,
    PostForm
  }
}
</script>

<style lang="sass">
</style>
