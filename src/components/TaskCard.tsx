import { useState } from 'react';

import { Id, Task } from '../types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import EditIcon from '../assets/icons/EditBtn';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import TrashIcon from '../assets/icons/TrashIcon';

interface ITaskCard {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

const TaskCard = ({ task, deleteTask, updateTask }: ITaskCard) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id: task.id,
    data: { type: 'Task', task },
    disabled: editMode,
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const [shwowModal, setShwowModal] = useState(false);

  const changeVisibleModal = () => {
    setShwowModal(!shwowModal);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-mainBackgroundColor opacity-30 p-2.5 h-[100px]
        min-h-[100px] items-center flex flex-left rounded-xl border-2
        border-rose-500 cursor-grab relative"
      />
    );
  }

  if (editMode) {
    return (
      <div
        {...attributes}
        {...listeners}
        ref={setNodeRef}
        style={style}
        className="bg-mainBackgroundColor p-2.5 h-[100px]
            min-h-[100px] items-center flex flex-left rounded-xl
            hover:ring-2 hover:ring-inset hover:ring-rose-500
            cursor-grab relative task"
      >
        <textarea
          className="h-[90%] w-full resize-none border-none rounded
                bg-transparent text-white focus:outline-none"
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.shiftKey && e.key == 'Enter') toggleEditMode();
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        ></textarea>
      </div>
    );
  }

  return (
    <div
      onClick={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className="bg-mainBackgroundColor p-2.5 h-[100px]
        min-h-[100px] items-center flex flex-left rounded-xl
        hover:ring-2 hover:ring-inset hover:ring-rose-500
        cursor-grab relative"
    >
      <p
        className="my-auto h-[90%] w-full overflow-y-auto
        overflow-x-hidden whitespace-pre-wrap"
      >
        {' '}
        {task.content}
      </p>

      {mouseIsOver && (
        <>
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
            className="stroke-white absolute right-4 top-16 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded"
          >
            <TrashIcon />
          </button>

          <Box style={{ display: 'block', marginLeft: '50px', zIndex: '333' }}>
            <AddIcon onClick={changeVisibleModal} />
          </Box>
        </>
      )}
    </div>
  );
};

export default TaskCard;
