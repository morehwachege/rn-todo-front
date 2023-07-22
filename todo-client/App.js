import { StatusBar } from 'react-native';
import styles from './stylesheets/styles';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Todo from './screens/Todo';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor="#1A1032" />
      <Todo />
      {/* <Welcome /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

