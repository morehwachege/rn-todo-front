import { Text, View } from 'react-native'
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import styles from '../stylesheets/styles';

export class Todo extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#1A1032" />
        <Text style={styles.todoTitle}>Todo</Text>
        <Text style={styles.belowTitle}>Your Start something today, 15 incomplete tasks</Text>
      </View>
    )
  }
}

export default Todo
