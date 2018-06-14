<template>
  <div class="">
    <h2>Post List</h2>
    <ul>
      <li v-for="post in posts">
        <div class="post-item">
          <div class="post-title">
            {{post.title}}
          </div>
          <div class="">
            {{post.content}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    posts() {
      console.log(this.$store.getters['post/postList'])
      return this.$store.getters['post/postList']
    }
  },
}
</script>

<style lang="sass">
  .post-item
    display: flex
    flex-direction: row
    .post-title
      margin-right: 8px

</style>
