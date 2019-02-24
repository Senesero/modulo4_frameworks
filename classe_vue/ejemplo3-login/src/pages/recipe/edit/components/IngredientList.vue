<template>
  <v-layout row wrap>
    <template v-for="(ingredient, index) in ingredients">
      <ingredient-row
        :key="`${ingredient}_${index}`"
        :ingredient="ingredient"
        :on-remove-ingredient="onRemoveIngredient"
      />
    </template>
  </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import IngredientRow from "./IngredientRow.vue";

export default Vue.extend({
  name: "IngredientList",
  components: { IngredientRow },
  props: {
    ingredients: {} as PropOptions<string[]>,
    onRemoveIngredient: Function
  }
});
</script>
