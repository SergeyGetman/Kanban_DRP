import { MOCKDATA_CRASH_SERVER } from '@/mock/data';
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
    try {
      const response = await apiClient.get<IApiTask[]>('/tasks');
      console.log('this is responce is backend', response);
      return response.data;
    } catch (error) {
      console.warn('Server unavailable, using mock data', error);
      return MOCKDATA_CRASH_SERVER as IApiTask[];
    }
  },

  create: async (task: Omit<IApiTask, 'id'>): Promise<Task> => {
    const response = await apiClient.post<IApiTask>('/tasks', task);
    return response?.data;
  },
};
