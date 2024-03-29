import { Button, StyleSheet, SafeAreaView, TextInput, View } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; 

export default function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');
    const navigation = useNavigation(); 

    const handleAddTask = () => {
        if (taskText.trim().length > 0) {
            addTask(taskText);
            setTaskText('');
            navigation.goBack(); 
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a new task..."
                    onChangeText={setTaskText}
                    value={taskText}
                />
                <Button title="Add" onPress={handleAddTask} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});
