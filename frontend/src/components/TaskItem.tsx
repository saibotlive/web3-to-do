import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface TaskItemProps {
  id: string;
  task: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onUpdate: (id: string, task: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, task, completed, onToggle, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editTaskText, setEditTaskText] = useState<string>(task);

  const handleUpdate = () => {
    onUpdate(id, editTaskText);
    setIsEditing(false);
  };

  return (
    <ListItem role={undefined} dense button>
      <Checkbox edge="start" checked={completed} tabIndex={-1} disableRipple onClick={() => onToggle(id)} />
      {isEditing ? (
        <TextField
          value={editTaskText}
          onChange={(e) => setEditTaskText(e.target.value)}
          onBlur={handleUpdate}
          onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
        />
      ) : (
        <ListItemText primary={task} />
      )}
      <IconButton edge="end" onClick={() => setIsEditing(true)}>
        <EditIcon />
      </IconButton>
      <IconButton edge="end" onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TaskItem;
