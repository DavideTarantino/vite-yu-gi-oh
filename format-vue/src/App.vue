<script>
import HeaderBar from './components/header/HeaderBar.vue';
import AppSearch from './components/main/AppSearch.vue';
import CardList from './components/main/cards/CardList.vue'; 

import{ store } from './store'
import axios from 'axios'

export default{
    components:{
        HeaderBar,
        AppSearch,
        CardList
    },
    data(){
        return{
            store
        }
    },
    methods: {
        getCards(){

            axios.get( store.apiUrl )
            .then( res => {
                console.log(res.data)

                store.cardList = res.data.data

            } )
        }
    },
    mounted() {
        this.getCards()
    }
}
</script>

<template>
    <HeaderBar/>
    <main>
        <AppSearch/>
        <CardList/>
    </main>
</template>

<style lang="scss">
 @use './styles/main.scss';

 main{
    background-color: #D48F38; 
 }
</style>