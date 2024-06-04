import { ref } from 'vue';
import { supabase } from '../supabaseClient';

export function createProjectsStore() {
  let projects = ref([]);

  const fetchProjects = async (userId) => {
    const { data, error } = await supabase
      .from('projects')
      .select()
      .eq('userId', userId);

    if (error) {
      console.error('Error fetching projects:', error.message);
      return [];
    }

    projects.value = data;
  };

  const addProject = async (project) => {
    const { data, error } = await supabase
      .from('projects')
      .insert(project)
      .select('*');

    if (error) {
      console.error('Error adding project:', error.message);
    } else {
      projects.value = [...projects.value, data[0]];
    }
  };

  const deleteProject = async (id) => {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error removing project:', error.message);
    } else {
      projects.value = projects.value.filter((project) => project.id !== id);
    }
  };

  return {
    projects,
    fetchProjects,
    addProject,
    deleteProject,
  };
}

export const projectsStore = createProjectsStore();
