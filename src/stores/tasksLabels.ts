import { ref } from "vue";
import { supabase } from "../supabaseClient";
import type { CreateTaskLabel, TaskLabel, Task } from "../ts/interfaces";

export function createTaskLabelsStore() {
  const tasksLabels = ref<TaskLabel[]>([]);

  const fetchTaskLabels = async (taskId: string): Promise<TaskLabel[]> => {
    const { data, error } = await supabase
      .from("task_labels")
      .select()
      .eq("taskId", taskId);
    if (error) {
      console.error("Error fetching task labels:", error.message);
      return [];
    }

    tasksLabels.value = data;
    return data;
  }

  const addTaskLabel = async (taskLabel: CreateTaskLabel) => {
    const { data, error } = await supabase
      .from("task_labels")
      .insert(taskLabel)
      .select("*");
    if (error) {
      console.error("Error adding task labels:", error.message);
    } else {
      tasksLabels.value = [...tasksLabels.value, data[0]];
    }
  }

  const deleteTaskLabel = async (id: string) => {
    const { error } = await supabase
      .from("task_labels")
      .delete()
      .eq("id", id);
    if (error) {
      console.error("Error removing task labels:", error.message);
    } else {
      tasksLabels.value = tasksLabels.value.filter((taskLabel) => taskLabel.id !== id);
    }
  }

  const fetchAll = async (allTaskId: Task[]) => {
    const tasksLabelsCurrent = await Promise.all(
      allTaskId.map(async (task) => {
        return await fetchTaskLabels(task.id);
      })
    );
    tasksLabels.value = tasksLabelsCurrent.flat();
    console.log("ALL DATA", tasksLabels);
    console.log("ALL DATA", tasksLabels.value);
  };

  return {
    tasksLabels,
    addTaskLabel,
    deleteTaskLabel,
    fetchAll,
  };
}

export const tasksLabelsStores = createTaskLabelsStore();
