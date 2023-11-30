<script setup>
import { computed, ref } from 'vue';

const emit = defineEmits(['beersFound']);
const props = defineProps({
    searchName: String,
    dataArr: Array
})
const search = ref('');
const searchIndexFound = ref([]); 
const searchFilter = computed(() =>{
    //iterate over dataArr prop and check to see if search string is included in beer name string 
    //If so, push the beer id into an array
    props.dataArr.map(beer=>{
        if(beer.name.includes(search.value)){
            searchIndexFound.value.push(beer.id);
            console.log(beer.id);
        }
    });
    return searchIndexFound;
})
</script>

<template>
    <input type="text" class="search-bar" placeholder="Search by beer name per page" v-model="search" />
    <button @click="emit('beersFound', searchFilter)">Search</button>
</template>

<style>
.search-bar {
    width: 50%;
    padding: 10px;
}
</style>