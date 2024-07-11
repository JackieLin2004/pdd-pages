import {defineStore} from 'pinia';
import {ref, computed} from 'vue';
import {useQuantityStore} from '@/store/quantityStore';

export const usePriceStore = defineStore('price', () => {
    const selectedPrice = ref<number | null>(null);
    const quantityStore = useQuantityStore();

    const setSelectedPrice = (price: number) => {
        selectedPrice.value = price;
    };

    const finalPrice = computed(() => {
        if (selectedPrice.value !== null && quantityStore.quantity >= 2) {
            return selectedPrice.value * quantityStore.quantity * 0.99;
        } else {
            return selectedPrice.value;
        }
    });

    return {selectedPrice, setSelectedPrice, finalPrice};
});
