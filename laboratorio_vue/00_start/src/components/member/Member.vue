<template>
  <v-layout>
    <v-btn flat icon @click.prevent="goBack">
      <v-icon>Volver</v-icon>
    </v-btn>
    <v-container>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <h1>{{member.name}}</h1>
          </v-card-title>
          <v-card-text>            
            <h3>{{member.company}} ({{member.location}})</h3>
            <img :src="member.avatar_url" :class="$style.image">
            <h3>bio: {{member.bio}}</h3>
            <h3>blog: {{member.blog}}</h3>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import { getMember } from "../../api/memberAPI";
import { Member } from "../../model/member";

export default Vue.extend({
  name: "MemberComponent",
  props: {
    login: String
  },
  data: () => ({
    member: {} as Member
  }),
  beforeMount() {
    this.loadMember();
  },
  methods: {
    goBack: function() {
      this.$router.back();
    },
    loadMember: function() {
      getMember(this.login).then(member => {
        this.member = member;
      });
    }
  }
});
</script>

<style module>
.image {
  max-width: 10rem;
}
</style>

