<template>
  <recipe-list-page :on-search="onSearch" :search-text="searchText" :recipes="filteredRecipes"/>
</template>

<script lang="ts">
import Vue from "vue";
import { Recipe } from "./viewModel";
import RecipeListPage from "./Page.vue";
import { fetchRecipes } from "../../../rest-api/api/recipe";
import { mapRecipeListModelToVm } from "./mappers";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: { RecipeListPage },
  data: () => ({
    recipes: [] as Recipe[],
    searchText: ""
  }),
  created() {
    fetchRecipes()
      .then(recipes => {
        this.recipes = mapRecipeListModelToVm(recipes);
      })
      .catch(error => console.error(error));
  },
  methods: {
    onSearch: function(value: string) {
      this.searchText = value;
    }
  },
  computed: {
    filteredRecipes: function(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    }
  }
});
</script>
