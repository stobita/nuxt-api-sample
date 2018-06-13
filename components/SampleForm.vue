<template>
  <div>
    <!-- <button type="button" @click="getUsers">sample</button> -->
    <ul>
      <li v-for="user in users">
        {{user}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    users() {
      return this.$store.getters.userList;
    }
  },
  methods: {
    // getUsers() {
    //   this.$store.dispatch('getUsers');
    // }
  }
};
</script>

<style>
</style>
