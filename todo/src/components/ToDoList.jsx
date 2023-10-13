import React, { useState, useEffect } from 'react';
import './todo.css';
import './styles.css';

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTask(savedTasks);
  }, []);

  // Save tasks to local storage whenever the task state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  const addBtnClick = () => {
    if (newTask === '') {
      return alert('Please enter a task');
    } else {
      setTask([...task, { text: newTask, checked: false }]);
      setNewTask('');
    }
  }

  const taskCompleted = (index) => {
    const newTasks = [...task];
    newTasks[index].checked = !newTasks[index].checked;
    setTask(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  }

  return (
    <div className='bod'>
      <div className='main-bod'>
        <h1>To-Do-List</h1>
        <div className='container'>
          <h5>Add Tasks</h5>
          <input
            className='inBox'
            type='text'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder='Add Tasks'
          />
          <button className='addBtn' onClick={addBtnClick}>Add</button>
          <ul>
            {task.map((value, index) => (
              <li className='cards' key={index}>
                <input
                  type='checkbox'
                  checked={value.checked}
                  onChange={() => taskCompleted(index)}
                />
                <p style={{ textDecoration: value.checked ? 'line-through' : 'none' }}>
                  {value.text}
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default ToDoList;
