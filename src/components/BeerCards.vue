<script setup>
import { reactive, ref } from 'vue';
import BeerPagination from './BeerPagination.vue';
import BeersPerPageDropDown from './BeersPerPageDropDown.vue';
import SearchBar from './SearchBar.vue';

const beers = ref(null);
const beersPerPage = ref(25);
const currPage = ref(1);

const searchArr = reactive([]);

const getBeers = 'https://api.punkapi.com/v2/beers';
//Fetch beers with per_page and page # params
async function fetchBeers(per_page, page_no){
    try {
        const resp = await fetch(getBeers +'?per_page='+ per_page + '&page=' + page_no);
        const data = await resp.json();
        beers.value = data;
    } catch(err) {
        alert(err);
    }
}
fetchBeers(beersPerPage.value, currPage.value);
</script>

<template>
    <div class="search-bar-container">
        <SearchBar :dataArr="beers" @beersFound="beerId=>{
            searchArr.push(beerId.value); 
            searchArr.forEach((id)=>{
                id.map(index=>{
                    beers = beers.filter(beer => beer.id == index);
                })
            });
            }">
        </SearchBar>
    </div>
    <div class="beer-card-container">
        <div class="beer-card" v-for="beer in beers" :key="beer.id" @click="$router.push({path: `/details/${beer.id}`})">
            <p class="title">{{ beer.name }}</p>
            <img class="beer-img" :src="beer.image_url"/>
        </div>
    </div>

    <div class="footer">
        <div class="footer-col">
            <p>Page Number:</p>
            <!-- User selects page # which will be used as a param for the api call -->
            <BeerPagination :noOfBeersPerPage="Number(beersPerPage)" @changePage="currentPage => {
                currPage = currentPage;
                fetchBeers(beersPerPage, currPage);
                }">
            </BeerPagination>
        </div>
        <div class="footer-col">
            <p>Beers Per Page:</p>
            <!-- User selects # of beers to view per page -->
            <BeersPerPageDropDown @changeSelection="per_page => {
                beersPerPage = per_page; 
                fetchBeers(beersPerPage, currPage);
                }">
            </BeersPerPageDropDown>
        </div>
    </div>
</template>

<style>
.search-bar-container {
    justify-content: center;
    margin: 0 0 15px 0;
}
.search-bar-container, .beer-card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.beer-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 200px;
    height: 200px;
}
.title {
    text-align: center;
}
.beer-img {
    width: 30px;
    height: 100px;
}
.footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.footer-col {
    margin: 0 10px;
    text-align: center;
}
</style>