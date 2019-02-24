// sts crea toda la structura
<template>
  <login-page
    :login="login"
    :login-error="loginError"
    :update-login="updateLogin"
    :login-request="loginRequest"
  />
</template>

<script lang="ts">
import Vue from "vue";
import LoginPage from "./Page.vue";
import { createEmptyLogin, createEmptyLoginError } from "./viewModel";
import { mapLoginVmToModel } from "./mapper";
import { loginRequest } from "../../rest-api/api/login";
import { state } from "../../state";
import { validations } from "./validations";

export default Vue.extend({
  name: "LoginPageContainer",
  components: { LoginPage },
  // data: () => state,
  data: () => ({
    login: createEmptyLogin(),
    loginError: createEmptyLoginError()
  }),
  methods: {
    updateLogin: function(field, value) {
      this.login = {
        ...this.login,
        [field]: value
      };

      validations.validateField(this.login, field, value).then(result => {
        this.loginError = {
          ...this.loginError,
          [field]: result
        };
      });
    },
    loginRequest: function() {
      validations.validateForm(this.login)
      .then(result => {
        if (result.succeeded) {
          const loginModel = mapLoginVmToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              this.$router.push("/recipe");
            })
            .catch(error => console.log(error));
        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors
          };
        }
      })
      .catch(error => console.log(error));
    }
  }
});
</script>