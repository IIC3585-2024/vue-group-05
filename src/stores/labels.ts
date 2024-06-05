import { ref } from 'vue';
import { supabase } from '../supabaseClient';

export function createLabelsStore() {
    const labels = ref([]);

    const fetchLabels = async (userId) => {
        const { data, error } = await supabase
            .from("labels")
            .select()
            .eq("userId", userId);

        if (error) {
            console.error('Something went wrong getting labels', error);
            return [];
        }

        labels.value = data;
    }

    const addLabel = async (label) => {
        const { data, error } = await supabase
            .from('labels')
            .insert(label)
            .select('*');

        if (error) {
            console.error('Something went wrong', error);
        } else {
            labels.value = [...labels.value, data[0]];
        }
    }

    const deleteLabel = async (id) => {
        const { error } = await supabase
            .from('labels')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Something went wrong', error);
        } else {
            labels.value = labels.value.filter((label) => label.id !== id);
            console.log('Label deleted');
        }
    }

    return {
        labels,
        addLabel,
        deleteLabel,
        fetchLabels
    };
}

export const labelsStore = createLabelsStore();
