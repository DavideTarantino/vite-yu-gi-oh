<script>
    import { store } from '../../store'

    export default {
        name: 'AppSearch',
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div>
        <input type="search" name="card" id="card" v-model="store.searchText" placeholder="Alien">
    </div>
</template>

<style lang="scss" scoped>
    div{
        padding: 2%;

        input{
            margin-left: 8%;
            padding: 10px;
            border-radius: 10px;
            border: none;
        }
    }
</style>