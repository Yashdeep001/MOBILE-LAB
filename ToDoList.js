import {  StyleSheet,Text, Pressable, SafeAreaView, ScrollView, View } from "react-native";
import React from 'react';
export default function ToDoList({tasks}){
    return(
        <SafeAreaView>
           
            <ScrollView>
            {tasks.map((tasks, index) => (
           
                <Pressable>
                    <View key={tasks.index} style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>{tasks}</Text>
                    </View> 
           
                </Pressable>
                ))}
            </ScrollView>
        
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    
    completed: {
        backgroundColor: '#e0e0e0',
    },
    
    taskText: {
        fontSize: 16,
    },
});