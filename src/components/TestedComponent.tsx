import React, { FC, useEffect, useState } from 'react';
import { IApiTask, tasksApi } from '@/api/taskApi';
import { Task } from '@/types';

export interface ITestedComponent {
  text: string;
}

type TaskPreview = Pick<IApiTask, 'id' | 'title' | 'status'>;

type TaskPreviewArray = Array<Pick<IApiTask, 'id' | 'title' | 'status'>>;

const TestedComponent: FC<ITestedComponent> = ({ text }) => {
  const [dataPick, setDataPick] = useState<TaskPreviewArray>([]);

  const objPick = {} as TaskPreview;
  useEffect(() => {
    tasksApi
      .getAll()
      .then(tasks => {
        const pickedTasks: TaskPreviewArray = tasks.map(task => ({
          id: task.id,
          title: task.title,
          status: task.status,
        }));

        setDataPick(pickedTasks);
        console.log('Данные успешно получены:', pickedTasks);
      })
      .catch(err => {
        console.error('Ошибка при получении данных:', err);
      });
  }, []);

  return (
    <>
      <button onClick={() => confirm('added your data')}>Count: {text}</button>

      <ul>
        {dataPick.map(task => (
          <li key={task.id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TestedComponent;
