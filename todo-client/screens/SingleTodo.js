import { View, Text } from 'react-native'
import React from 'react';
import styles from '../stylesheets/styles';

const SingleTodo = ({todo}) => {

  return (
      <View style={styles.singleContainer}>
        <Text style={styles.singleTodo}>{todo.title}</Text>
      </View>
  )
}

export default SingleTodo
