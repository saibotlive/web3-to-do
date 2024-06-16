import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { abi } from './constants';
import { contractAddress, ethereumNetworkUrl } from './constants';

interface Task {
  id: string;
  task: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const init = async () => {
      if (!contractAddress || !ethereumNetworkUrl) {
        console.error('Contract address or Ethereum network URL is not set.');
        return;
      }

      const provider = new ethers.JsonRpcProvider(ethereumNetworkUrl);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      const taskCount = await contract.taskCount();
      const tasksArray: Task[] = [];
      for (let i = 1; i <= taskCount; i++) {
        const task = await contract.todos(i);
        const taskId = BigInt(task.id); // Convert to BigInt for comparison
        if (taskId !== BigInt(0)) {
          tasksArray.push({
            id: taskId.toString(),
            task: task.task,
            completed: task.completed,
          });
        }
      }
      setTasks(tasksArray);
    };
    init();
  }, []);

  const createTask = async (newTask: string) => {
    const provider = new ethers.JsonRpcProvider(ethereumNetworkUrl);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.createTask(newTask);
    const taskCount = await contract.taskCount();
    const task = await contract.todos(taskCount);
    setTasks([...tasks, { id: task.id.toString(), task: task.task, completed: task.completed }]);
  };

  const toggleComplete = async (id: string) => {
    const provider = new ethers.JsonRpcProvider(ethereumNetworkUrl);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.toggleComplete(id);
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const updateTask = async (id: string, taskText: string) => {
    const provider = new ethers.JsonRpcProvider(ethereumNetworkUrl);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.updateTask(id, taskText);
    setTasks(tasks.map((task) => (task.id === id ? { ...task, task: taskText } : task)));
  };

  const deleteTask = async (id: string) => {
    const provider = new ethers.JsonRpcProvider(ethereumNetworkUrl);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    await contract.deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Decentralized To-Do List</h1>
      <TaskForm onCreate={createTask} />
      <TaskList tasks={tasks} onToggle={toggleComplete} onUpdate={updateTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
