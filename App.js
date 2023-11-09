/**
 * My To Do List App
 *
 * @format
 */
import React, { useState } from 'react';
import {View,} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {

    const [tasks,setTasks]=useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ])

    
    
    return (
        <View>
        <ToDoList />
        <ToDoForm />
        </View>
    );
}



