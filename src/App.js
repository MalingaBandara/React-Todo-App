import React, { useState } from 'react';
import './App.css';

const App = () => {

    // Declare a state variable 'tasks' to hold the list of tasks and 'newTask' for the input value
    const [tasks, setTasks] = useState([]); // Initially, tasks is an empty array
    const [newTask, setNewTask] = useState(""); // Initially, newTask is an empty string

    // Function to handle adding a new task to the task list
    const addTask = () => {
        if (newTask.trim()) { // Check if the input isn't empty or just spaces
            const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;  // Generate a unique id for the new task
            const newTaskObject = {
                id: newId, // Assign the generated ID
                taskName: newTask, // Use the value of newTask as the task name
                status: 'Pending', // All new tasks will have a default status of 'Pending'
            };
            setTasks([...tasks, newTaskObject]); // Add the new task to the task list
            setNewTask(""); // Clear the input field after adding the task
        }
    };

    // Function to handle deleting a task by its id
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id)); // Remove the task with the matching ID from the task list
    };

    return (
        <div className="App">
            <h1>To-Do List</h1>

            {/* Input field for entering a new task */}
            <input
                type="text"
                placeholder="Enter task name"
                value={newTask} // The input value is controlled by the newTask state
                onChange={(e) => setNewTask(e.target.value)} // Update the newTask state on input change
            />
            {/* Button to add the task */}
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
                {tasks.length > 0 ? ( // Check if there are tasks in the list
                    tasks.map(task => ( // Iterate over tasks and display each task in a table row
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.taskName}</td>
                            <td>{task.status}</td>
                            <td>
                                <button onClick={() => deleteTask(task.id)}>Delete</button> {/* Button to delete a task */}
                            </td>
                        </tr>
                    ))
                ) : ( // If no tasks are available, display a message
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
