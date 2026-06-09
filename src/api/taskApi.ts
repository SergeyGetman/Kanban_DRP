import { apiClient } from './axiosClient';
import { AxiosResponse } from 'axios';

export interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}

export const tasksApi = {
  getAll: async (): Promise<Task[]> => {
    const { data } = await apiClient.get<Task[]>('/tasks');
    return data;
  },

  create: async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response: AxiosResponse<Task> = await apiClient.post<Task>(
      '/tasks',
      task
    );
    return response.data;
  },
};
