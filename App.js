import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import trashIcon from './images/trash.png';

export default function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
    setSelectedTodo(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My To-Do List</Text>

      <TextInput
        placeholder="Enter a to-do item"
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
        style={styles.input}
      />
      <Button
        title="Add"
        onPress={handleAddTodo}
        color="hotpink" 
      />
      <View style={styles.container}>
            {todos.map((todo, index) => (
        <Text key={index} style={styles.todoText}>
          <Button
          title="Delete"
          onPress={() => handleDeleteTodo(index)}
          color="hotpink"
        />
          {todo}
        </Text>
      ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  todoText: {
    marginBottom: 10, 
  },
  input: {
    marginBottom: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    width: '100%',
  },
});
