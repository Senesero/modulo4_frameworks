<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <h3 class="headline">Login</h3>
        </v-card-title>
        <v-card-text>
          <form-component
            :login="login"
            :login-error="loginError"
            :update-login="updateLogin"
            :login-request="loginRequest"
          />
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { FormComponent } from "./components";
import { Login, LoginError } from './viewModel'

export default Vue.extend({
  name: "LoginPage",
  components: { FormComponent },
  props: {
    login: {} as PropOptions<Login>,
    loginError: {} as PropOptions<LoginError>,
    updateLogin: {} as PropOptions<(name: string, password: string) => void>,
    loginRequest: Function,
  }
});
</script>
