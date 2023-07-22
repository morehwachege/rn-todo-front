import { StatusBar } from 'react-native';
import styles from '../stylesheets/styles';
import { SafeAreaView} from 'react-native';
import Welcome from './Welcome';

const WelcomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar barStyle="light-content" backgroundColor="#1A1032" />
       <Welcome />
    </SafeAreaView>
  )
}

export default WelcomePage
