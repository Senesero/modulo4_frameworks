<template>
  <div>
    <v-layout>
      <v-text-field
        :value="organization.name"
        @input="(organization) => updateOrganizarion(organization)"
      ></v-text-field>
      <button @click="loadMembers">Load</button>
    </v-layout>
    <h2>Member Page {{organization.name}}</h2>
    <table :class="$style.table">
      <thead>
        <member-head/>
      </thead>
      <tbody>
        <template v-for="member in members">
          <member-row :key="member.id" :member="member" />
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";
import { createDefaultOrganization } from "../../model/organization";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    members: [] as Member[],
    organization: createDefaultOrganization()
  }),
  beforeMount() {
    this.loadMembers()
  },
  methods: {
    loadMembers: function() {
      getAllMembers(this.organization.name).then(members => {
        this.members = members;
      });
    },
    updateOrganizarion: function(organization) {
      this.organization.name = organization;
    }
  }
});
</script>

+ <style module>
.table {
  border-collapse: collapse;
  width: 100%;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
