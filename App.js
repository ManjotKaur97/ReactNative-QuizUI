/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import QuizMenuNew from './src/screens/QuizNew/Quiz.Menu.New';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizLaunchNew from './src/screens/QuizNew/Quiz.Launch.New';

// quiz screens 
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Quiz" component={QuizMenuNew} options={{headerShown: false}} />
        <Stack.Screen name="QuizLaunchNew" component={QuizLaunchNew} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
