<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const data = ref([]);

async function fetchBeerData(){
    try {
        //Get a Single Beer using the id
        const resp = await fetch('https://api.punkapi.com/v2/beers/'+ route.params.id);
        data.value = await resp.json();
    } catch(err) {
        alert(err);
    }
}
fetchBeerData();
</script>
<template>
    <div v-for="(value, key) of data[0]" :key="value.id">
        <p><strong>{{ key }}:</strong> {{ value }}</p>
    </div>
</template>