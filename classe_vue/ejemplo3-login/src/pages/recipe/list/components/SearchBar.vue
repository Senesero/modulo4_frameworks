<template>
    <v-text-field placeholder="Search for ingredients comma separated..."
    :value="searchText"
    @input="onSearch" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'SearchBarComponent',
    props: {
        searchText: String,
        onSearch: Function,
    }
});
</script>