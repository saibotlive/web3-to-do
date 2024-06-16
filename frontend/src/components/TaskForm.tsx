import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

interface TaskFormProps {
  onCreate: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onCreate }) => {
  const [newTask, setNewTask] = useState<string>('');

  const handleSubmit = () => {
    if (newTask) {
      onCreate(newTask);
      setNewTask('');
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
      <TextField label="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} sx={{ flex: 1 }} />
      <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ height: '56px' }}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskForm;
