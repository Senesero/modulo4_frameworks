<template>
  <v-app>
    <h1>{{login.name}}</h1>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { state } from './state';

export default Vue.extend({
  name: "AppComponent",
  data: () => state,
});
</script>