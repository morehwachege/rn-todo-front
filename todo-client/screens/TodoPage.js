import { StatusBar } from 'react-native';
import styles from '../stylesheets/styles';
import { SafeAreaView} from 'react-native';
import Todo from './Todo';

const TodoPage = () => {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor="#1A1032" />
       <Todo />
    </SafeAreaView>
  )
}

export default TodoPage
