import HomeScreen from './containers/HomeScreen'
import Timer from './containers/Timer'
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{
          title: 'Welcome',
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
          },
        }}
        />
        <Stack.Screen 
          name="Timer" 
          component={Timer}
          options={{
          title: 'Timer',
          headerStyle: {
            backgroundColor: 'grey',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 40,
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

