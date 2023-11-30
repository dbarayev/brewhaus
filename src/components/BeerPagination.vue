<script setup>
import { ref } from 'vue';
//Pagination
//Requests that return multiple items will be limited to 25 results by default. 
//You can access other pages using the ?page paramater, 
//you can also increase the amount of beers returned in each request by changing the ?per_page paramater. per_page max = 80
const props = defineProps({
    noOfBeersPerPage: Number,
    pageNo: Number,
})
const currPage = ref(1);
const onPageClick = (page) => {
    currPage.value = page;
}
</script>
<template>
    <!-- 
        Set arbitrary max pages to be shown = 10
        Max items per page = 80 from api
        which sets total items = 800 max
    -->
    <vue-awesome-paginate
    :total-items="800" 
    :max-pages-shown="10"
    :items-per-page="props.noOfBeersPerPage"
    v-model="currPage"
    :on-click="onPageClick"
    @click="$emit('changePage', currPage)"
    >
    </vue-awesome-paginate>
</template>