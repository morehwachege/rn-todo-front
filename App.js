import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';
import{View,Text, TouchableOpacity, TextInput, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login'

function HomeScreen() {
  const navigation = useNavigation();
  return(
   
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<Image
          source={require("./teau.jpg")}
          style={{width:100, height:100}}
        />
<Text style={{fontSize:28, fontWeight:'bold',margin:10, color:'black'}}>The East Afrian University</Text>
<Text style={{fontSize:20,margin:10, color:'green'}}>Login to Teau Library</Text>
        <Text style={{ fontSize: 20, color: 'green', textAlign: "center" }}/>
        <View style={{ position: 'relative', marginBottom: 10 }}>
      <FontAwesome5 name="user-edit" size={20} color="#900" style={{ position: 'absolute',alignItems:'center' ,color:'green', top: 20, left: 10, zIndex: 1,}} />      
<TextInput style={{ height: 40, width: 200,  marginTop: 10,borderColor: 'gray',backgroundColor: "lightgray",borderRadius: 3, paddingLeft:40 }} placeholder="Stdent Name"/>
</View>
<View style={{ position: 'relative', marginBottom: 10 }}>
      <FontAwesome5 name="user-graduate" size={20} color="#900" style={{ position: 'absolute',alignItems:'center' ,color:'green', top: 20, left: 10, zIndex: 1,}} />
      <TextInput style={{height: 40, marginTop: 10, width: 200, backgroundColor: 'lightgray', borderColor: 'gray', borderRadius: 3, paddingLeft: 40,}}placeholder="Admission Number" />
        </View> 
        <View style={{ position: 'relative', marginBottom: 10 }}>
    <MaterialCommunityIcons name="account-lock" size={20} color="#900" style={{position:'absolute', alignItems:'center', color:'green',top:20, left:10, zIndex:1,}}/>
    <TextInput style={{ height: 40, marginTop:10,backgroundColor: "lightgray", width: 200, borderColor: 'gray', borderRadius: 3,paddingLeft: 40, }}
       
       secureTextEntry={true} placeholder="Password"/>
</View>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, marginRight: 10 }}  onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'white' }} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'green', padding: 10 }} onPress={() => console.log('Sign Up pressed')}>
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>

    
   
</View>
);
}
const Stack = createStackNavigator();
function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TEAU LIBRARY" component={HomeScreen} options={{title: 'TEAU LIBRARY', headerTitleAlign: 'center'}}/>
      
        <Stack.Screen
          name="Login"
          component={Login} // Assuming Login is the component for the Login screen
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
