<script>
import HeaderBar from './components/header/HeaderBar.vue';
import AppSearch from './components/main/AppSearch.vue' 

export default{
    components:{
        HeaderBar,
        AppSearch
    }
}
</script>

<template>
    <HeaderBar/>
    <AppSearch/>
</template>

<style lang="scss">
 @use './styles/main.scss'
</style>