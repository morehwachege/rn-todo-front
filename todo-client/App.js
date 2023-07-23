import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TodoPage from './screens/TodoPage';
import WelcomePage from './screens/WelcomePage';


function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomePage} options={{title: 'Welcome', headerTitleAlign: 'center', headerShown: false}}/>

        <Stack.Screen
          name="TodoPage"
          component={TodoPage}
          options={{ title: 'Todo', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
