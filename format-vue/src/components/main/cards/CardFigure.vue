<script>
    export default {
        name: 'CardFigure',
        props:[
            'propsElement'
        ],
        data(){
            return{}
        }
    }
</script>

<template>
    <div>
        <figure>
            <div>
                <img :src="propsElement.card_images[0].image_url" alt="card image">
                <h3 id="card-name">{{ propsElement.name}}</h3>
                <p>{{ propsElement.archetype }}</p>
            </div>
        </figure>
    </div>
</template>

<style lang="scss" scoped>
    div{
        display: flex;
        flex-direction: column;
        background-color: #D48F38;
        width: 220px;
        height: 400px;
        justify-content: center;
        align-items: center;

        #card-name{
            text-align: center;
            margin-bottom: 10px;
            color: white;
        }
    }
    img{
        width: 200px;
    }
</style>