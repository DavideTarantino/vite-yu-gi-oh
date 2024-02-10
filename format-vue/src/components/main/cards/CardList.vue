<script>
    import CardFigure from './CardFigure.vue'
    import { store } from '../../../store' 

    export default {
        name: 'CardList',
        components: {
            CardFigure
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <section>
        <div>
            <CardFigure v-for="(element, index) in store.cardList" :key="index" :propsElement="element"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section{
        margin-inline: 10%;
        padding-inline: 3%;
        padding-block: 2%;
        background-color: white;
    }
    div{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        margin: 0 auto;
    }
</style>