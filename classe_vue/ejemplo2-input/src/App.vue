<template>
  <div>
    <h1>{{message}}</h1>
    <!--<input v-bind:value="message" v-on:input="message = $event.target.value">-->
    <!--<input :value="message" @input="onChange">-->
    <hello :message="message" :on-change="onChange"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hello from "./Hello.vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    message: "Hello from App"
  }),
  methods: {
    onChange: function(event) {
      this.message = event.target.value;
    }
  },
  components: { Hello }
});
</script>

<style>
</style>