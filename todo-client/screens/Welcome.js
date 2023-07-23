import { SafeAreaView, Text, View, Image, Button } from 'react-native'
import { StatusBar } from 'react-native';
import React, { Component } from 'react'
import styles from '../stylesheets/styles';
import { useNavigation } from '@react-navigation/native';


function Welcome() {
  const navigation = useNavigation();
  function navigateToTodo() {
    return navigation.navigate('TodoPage');
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor="#1A1032" />
      <Text style={styles.welcomeTitle}>
        Manage your todo activity & everything else with
        <Text style={styles.innerText}>
          TaskApp
        </Text>
      </Text>
      <View style={styles.imageView}>
        <Image source={require('../assets/todo.png')} style={styles.welcomeImage} />

      </View>
      {/* <View style={styles.bottomWelcomeView}>
            <Text style={styles.bottomWelcomeText}>
                    When you're tired and overwhelmed with things to do, you can always count on TaskApp to help you manage tasks, remember deadlines, and organize your life.
                </Text>

        </View> */}
      <Button onPress={navigateToTodo} title="Lets's get started" accessibilityLabel="Let's get started" color="#800000"
        style={
          {
            width: '1000',
          }
        } />
    </SafeAreaView>
  )

}

export default Welcome
