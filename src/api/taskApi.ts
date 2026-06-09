// tasksApi.ts
import { apiClient } from './axiosClient';
import type { AxiosResponse } from 'axios';

export interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}

export const tasksApi = {
  getAll: async (): Promise<Task[]> => {
    const response: AxiosResponse<Task[]> =
      await apiClient.get<Task[]>('/tasks');
    return response.data;
  },

  create: async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response: AxiosResponse<Task> = await apiClient.post<Task>(
      '/tasks',
      task
    );
    return response.data;
  },
};
