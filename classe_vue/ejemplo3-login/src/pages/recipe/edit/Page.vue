<template>
  <form-component :recipe="recipe" :on-up-date-recipe="onUpdateRecipe" :on-save="onSave"
    :on-add-ingredient="onAddIngredient" :on-remove-ingredient="onRemoveIngredient" />
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "./viewModel";
import { FormComponent } from "./components";

export default Vue.extend({
  name: "RecipeEditPage",
  components: { FormComponent },
  props: {
    recipe: {} as PropOptions<Recipe>,
    onUpdateRecipe: Function,
    onSave: Function,
    onRemoveIngredient: Function,
    onAddIngredient: Function,
  },
});
</script>
