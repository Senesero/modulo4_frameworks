<template>
  <form>
    <v-container>
      <v-layout>
        <v-text-field
          label="Name"
          :value="recipe.name"
          @input="(name) => onUpdateRecipe('name', name)"
          :rules="[() => true || 'Test error message']"
        />
      </v-layout>
      <v-layout column>
        <v-text-field label="Ingredients" placeholder="Add ingredient"
          :value="ingredient" @input="onUpdateIngredient"
          append-icon="add"
          @click:append="() => onAddIngredient(ingredient)" />
        <ingredient-list 
          :ingredients="recipe.ingredients" 
          :on-remove-ingredient="onRemoveIngredient"  />
      </v-layout>
      <v-layout row justify-end>
        <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>
      </v-layout>
    </v-container>
  </form>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";
import IngredientList from "./IngredientList.vue";

export default Vue.extend({
  name: "FormComponent",
  components: { IngredientList },
  props: {
    recipe: {} as PropOptions<Recipe>,
    onUpdateRecipe: Function,
    onSave: Function,
    onRemoveIngredient: Function,
    onAddIngredient: Function,
  },
  data: () => ({
    ingredient: '',
  }),
  methods: {
    onUpdateIngredient: function(value) {
      this.ingredient = value;
    }
  }
});
</script>