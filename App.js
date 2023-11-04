/**
 * My To Do List App
 *
 * @format
 */
import React from 'react';
import {View,} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
    return (
        <View>
        <ToDoList />
        <ToDoForm />
        </View>
    );
}



