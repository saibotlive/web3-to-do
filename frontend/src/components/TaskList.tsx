import React from 'react';
import { List } from '@mui/material';
import TaskItem from './TaskItem';

interface Task {
  id: string;
  task: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onUpdate: (id: string, task: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onUpdate, onDelete }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          task={task.task}
          completed={task.completed}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default TaskList;
