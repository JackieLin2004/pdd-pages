import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useQuantityStore = defineStore('quantity', () => {
    const quantity = ref<number>(1);

    const increment = () => {
        quantity.value += 1;
    };

    const decrement = () => {
        if (quantity.value > 1) {
            quantity.value -= 1;
        }
    };

    return {quantity, increment, decrement};
});
