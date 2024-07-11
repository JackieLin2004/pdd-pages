import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useNameStore = defineStore('name', () => {
    const selectedName = ref<string | null>(null);
    const setSelectedName = (name: string) => {
        selectedName.value = name;
    };

    return {selectedName, setSelectedName};
});
