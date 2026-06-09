import { apiClient } from './axiosClient';
import { Task } from '@/types';

type statusRequest = 'todo' | 'in-progress' | 'done';
type statusPriority = 'low' | 'medium' | 'high';

export interface IApiTask {
  id: number;
  title: string;
  status: statusRequest;
  priority: statusPriority;
  assignee: string;
}

export const tasksApi = {
  getAll: async (): Promise<IApiTask[]> => {
    const response = await apiClient.get<IApiTask[]>('/tasks');
    console.log('this is responce is backend', response);
    return response?.data;
  },

  create: async (task: Omit<IApiTask, 'id'>): Promise<Task> => {
    const response = await apiClient.post<IApiTask>('/tasks', task);
    return response?.data;
  },
};
