<template>
  <v-layout row align-center>
    <v-chip>
      {{ingredient}}
      <v-icon right @click="() => onRemoveIngredient(ingredient)">close</v-icon>
    </v-chip>
  </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "IngredientRow",
  props: {
    ingredient: String,
    onRemoveIngredient: {} as PropOptions<(ingredient) => void>
  }
});
</script>
