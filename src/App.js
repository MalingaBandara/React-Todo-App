import React, { useState } from 'react';
import './App.css';

const App = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Function to handle adding a new task
    const addTask = () => {
        if (newTask.trim()) {
            const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;  // Generate a unique id
            const newTaskObject = {
                id: newId,
                taskName: newTask,
                status: 'Pending',
            };
            setTasks([...tasks, newTaskObject]);
            setNewTask("");
        }
    };

    // Function to handle deleting a task
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>

            {/* Input Field for Adding Tasks */}
            <input
                type="text"
                placeholder="Enter task name"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            {/* Task Table */}
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.taskName}</td>
                            <td>{task.status}</td>
                            <td>
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No tasks available</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default App;
