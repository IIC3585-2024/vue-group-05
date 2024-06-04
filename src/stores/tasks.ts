import { ref } from 'vue';
import { supabase } from '../supabaseClient';

export function useTasksStore() {
  const tasks = ref([]);

  const fetchTasks = async (userId) => {
    const { data, error } = await supabase
      .from('tasks')
      .select()
      .eq('userId', userId);

    if (error) {
      console.error('Error fetching tasks:', error.message);
      return [];
    }

    tasks.value = data;
    return data;
  };

  const addTask = async (task) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert(task)
      .select('*');

    if (error) {
      console.error('Error adding task:', error.message);
    } else {
      tasks.value = [...tasks.value, data[0]];
    }
  };

  const deleteTask = async (id) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error removing task:', error.message);
    } else {
      tasks.value = tasks.value.filter((task) => task.id !== id);
    }
  };

  return {
    tasks,
    fetchTasks,
    addTask,
    deleteTask,
  };
}

export const tasksStore = useTasksStore();
