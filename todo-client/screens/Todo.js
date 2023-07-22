import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component, useState } from 'react';
import { StatusBar } from 'react-native';
import styles from '../stylesheets/styles';
import SingleTodo from './SingleTodo';

function Todo() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  function handleTextChange(inputText) {
    setText(inputText);
  };
  function handleButtonPress() {
    console.log(text);
    setText('');
  }
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => setTodos(data));
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor="#1A1032" />
      <Text style={styles.todoTitle}>Todo</Text>
      <Text style={styles.belowTitle}>Start something today, 15 incomplete tasks</Text>
      <View style={styles.todoInputView}>
        <TextInput
          style={styles.todoInput}
          value={text}
          onChangeText={handleTextChange}
          onSubmitEditing={handleButtonPress}
          placeholder="Type something here..."
          placeholderTextColor="#F5FFFA"
        />
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={styles.todoInputButton}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.single}>

          {todos.map(todo => {
            return <SingleTodo todo={todo} />
          })}
      </ScrollView>
    </View>
  )
}

export default Todo
