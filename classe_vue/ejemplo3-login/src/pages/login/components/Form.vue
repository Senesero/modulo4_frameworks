<template>
  <form>
    <v-layout column justify-center>
      <v-text-field
        label="Name"
        name="name"
        :value="login.name"
        @input="(name) => updateLogin('name', name)"
        :rules="[() => loginError.name.succeeded || loginError.name.errorMessage]"
      ></v-text-field>
      <v-text-field
        label="Password"
        type="password"
        name="password"
        :value="login.password"
        @input="(password) => updateLogin('password', password)"
        :rules="[() => loginError.password.succeeded || loginError.password.errorMessage]"
      ></v-text-field>
    </v-layout>
    <!-- <v-btn to="/recipe" type="submit" color="info" @click.prevent="loginRequest">LOGIN</v-btn> -->
    <v-btn type="submit" color="info" @click.prevent="loginRequest">LOGIN</v-btn>
  </form>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Login, LoginError } from "../viewModel";

export default Vue.extend({
  name: "FormComponent",
  props: {
    login: {} as PropOptions<Login>,
    loginError: {} as PropOptions<LoginError>,
    updateLogin: {} as PropOptions<(name: string, password: string) => void>,
    loginRequest: Function
  }
});
</script>

<style>
</style>