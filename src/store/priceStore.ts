import {defineStore} from 'pinia';
import {ref} from 'vue';

export const usePriceStore = defineStore('price', () => {
    const selectedPrice = ref<number | null>(null);
    const setSelectedPrice = (price: number) => {
        selectedPrice.value = price;
    };

    return {selectedPrice, setSelectedPrice};
});
