<template>
    <input :value="message" @input="onChange" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Hola',
    props: {
        message: String,
        onChange: Function,
    }
});
</script>