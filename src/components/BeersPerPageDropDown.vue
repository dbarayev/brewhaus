<script setup>
import { ref } from 'vue';
//Default to 25 beers per page
const option = ref(25);
</script>
<template>
    <select v-model="option" @change="$emit('changeSelection', option)">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="75">75</option>
        <option value="80">80</option>
    </select>
</template>