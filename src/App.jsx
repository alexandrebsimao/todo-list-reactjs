import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header'
import TaskDetails from './components/TaskDatails';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10').then(response => {
        const data = response.data;
        setTasks(data);
      });
    }
    fetchTasks();
  }, [])


  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: true
    }]
    
    setTasks(newTask);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }
  
  const List = () => {
    return (
      <div>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
      </div>
    )
  }

  return (
    <div className="container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<List />} />
          <Route path="/:taskTitle" element={<TaskDetails />}/>
        </Routes> 
      </Router>
    </div>

  )
}

export default App;