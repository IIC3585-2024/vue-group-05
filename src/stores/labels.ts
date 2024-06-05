import { ref } from 'vue';
import { supabase } from '../supabaseClient';
import { Label } from '../ts/interfaces';
// import { notifications } from "../utils/notification";

function createLabelsStore() {
    const labels = ref<Label[]>([]);

    const fetchLabels = async (userId: string) : Promise<Label[]> => {
        const { data, error } = await supabase
          .from("labels")
          .select()
          .eq("userId", userId);
        if (error) {
            console.error('Error fetching labels:', error.message);
            //notifications.danger('Something went wrong getting labels', 2000)
            return [];
        }

        labels.value = data;
    }

    const addLabel = async (label: Label) => {
        const { data, error } = await supabase
            .from('labels')
            .insert(label)
            .select('*')
        if (error) {
            //notifications.danger('Something went wrong', 2000)
        } else {
            labels.value = [...labels.value, data[0]];
            //notifications.success('Label added', 2000)
        }
    }

    const deleteLabel = async (id: string) => {
        const { error } = await supabase
            .from('labels')
            .delete()
            .eq('id', id);
        if (error) {
            //notifications.danger('Something went wrong', 2000)
        } else {
            labels.value = labels.value.filter((label) => label.id !== id);
            //notifications.success('Label deleted', 2000)
        }
    }

    return {
        labels,
        fetchLabels,
        addLabel,
        deleteLabel,
    };
}

export const labelsStore = createLabelsStore();