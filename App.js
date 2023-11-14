import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ]);
    const addTask = (taskText) => {
        if (!tasks.includes(taskText)) {
            setTasks([...tasks, taskText]);
        }
    };

    return (
        <View>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
        </View>
    );
}
