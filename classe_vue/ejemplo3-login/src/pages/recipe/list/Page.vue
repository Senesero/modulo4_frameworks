<template>
  <v-container>
    <h2>Recipe List Page</h2>
    <search-bar-component :search-text="searchText" :on-search="onSearch" />
    <table-component :recipes="recipes"/>
  </v-container>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "./viewModel";
import { TableComponent, SearchBarComponent } from "./components";

export default Vue.extend({
  name: "RecipeListPage",
  components: { TableComponent, SearchBarComponent },
  props: {
    recipes: {} as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: Function,
  }
});
</script>