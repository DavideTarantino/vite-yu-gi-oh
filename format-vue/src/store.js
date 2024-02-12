import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    selectValue: '',
    cardList: [],
    archetypesList: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0',
    selectUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
});