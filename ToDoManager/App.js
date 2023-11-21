import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from './components/styles';

const storeTodo = async (newTodo, navigation) => {
  try {
    await AsyncStorage.setItem("newTodo", newTodo);
    navigation.navigate("Home");
  } catch (e) {
    Alert.alert("Error! While saving ToDo");
  }
};

export default function App({ navigation }) {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      storeTodo(newTodo, navigation);
      setNewTodo('');
    } else {
      Alert.alert("ToDo is required.");
    }
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

      <View>
        {todos.map((todo, index) => (
          <View key={index} style={styles.todoContainer}>
            <View style={styles.todos}>
              <View style={styles.todosLeft}>
                <TouchableOpacity style={styles.deleteTodos}></TouchableOpacity>
                <Text key={index} style={styles.todoText}>
                  {todo}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
    
  );
}


