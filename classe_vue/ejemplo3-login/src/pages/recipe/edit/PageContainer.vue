<template>
  <recipe-edit-page 
    :recipe="recipe" 
    :on-update-recipe="onUpdateRecipe" 
    :on-save="onSave"
    :on-add-ingredient="onAddIngredient" 
    :on-remove-ingredient="onRemoveIngredient" />
</template>

<script lang="ts">
import Vue from "vue";
import RecipeEditPage from "./Page.vue";
import { createEmptyRecipe } from "./viewModel";
import { fetchRecipeById, save } from "../../../rest-api/api/recipe";
import { mapRecipeModelToVm, mapRecipeVmToModel } from "./mappers";

export default Vue.extend({
  name: "RecipeEditPageContainer",
  components: { RecipeEditPage },
  props: {
    id: String
  },
  data: () => ({
    recipe: createEmptyRecipe()
  }),
  beforeMount() {
    const id = Number(this.id) || 0;
    fetchRecipeById(id)
      .then(recipe => {
        this.recipe = mapRecipeModelToVm(recipe);
      })
      .catch(error => console.log(error));
  },
  methods: {
    onUpdateRecipe: function(field: string, value: string) {
      this.recipe = {
        ...this.recipe,
        [field]: value
      };
    },
    onSave: function() {
      const recipe = mapRecipeVmToModel(this.recipe);
      save(recipe)
        .then(message => {
          console.log(message);
          this.$router.back();
        })
        .catch(error => console.log(error));
    },
    onAddIngredient: function(ingredient) {
      this.recipe = {
        ...this.recipe,
        ingredients: [
          ...this.recipe.ingredients,
          ingredient
        ]
      }
    },
    onRemoveIngredient: function(ingredient) {
      this.recipe = {
        ...this.recipe,
        ingredients: this.recipe.ingredients.filter(
          i => i !== ingredient
        )
      }
    }
  }
});
</script>
