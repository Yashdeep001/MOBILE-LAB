import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          initialParams={{ tasks }}
          options={{ title: 'To-Do List' }}
        />
        <Stack.Screen
          name="ToDoForm"
          component={ToDoForm}
          initialParams={{ addTask }}
          options={{ title: 'Add Task' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
