<template>
  <div class="Header">
    <h1>{{msg}}</h1>
    <p>{{$store.state.author}}</p>
  </div>
</template>
<script>
import { mapState } from "Vuex";
import store from "../stores/index";
export default {
  name: "Header",
  data() {
    return store;
  },
  computed: {
    ...mapState({
      author: state => state.author
    })
    // author(){
    //     return this.$store.getters.getAuthor
  }
};
</script>