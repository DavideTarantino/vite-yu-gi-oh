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
        <select
        name=""
        id=""
        v-model="store.selectValue"
        >
            <option
            :value="element.archetype_name"
            v-for="(element, index) in store.archetypesList"
            :key="index"
            >
            {{ element.archetype_name }}</option>
        </select>
        <button
            @click.prevent="$emit('ricerca')"
        >Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
    div{
        padding: 2%;

        select{
            margin-left: 8%;
            padding: 10px;
            border-radius: 10px;
            border: none;
        }

        button{
            padding: 1%;
            background-color: aqua;
            border: none;
            border-radius: 10px;
            margin-left: 10px;
            cursor: pointer;
        }
    }
</style>