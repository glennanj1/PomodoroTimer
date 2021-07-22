import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          option={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
          <Button 
            style={styles.button}
            onPress={() => {
              alert('This is Sick!')
              navigation.navigate('Profile', { name: 'Pomodoro' })
            }}
            title="Pomodoro Timer"
            />
          <Text>Your the best</Text>
          <Text>The Very Best</Text>
          <StatusBar style="auto" />
      </View>
  )
}

const ProfileScreen = ({ navigation }) => {
  return (
    <Text>Profile</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: 'red'
  }
});
