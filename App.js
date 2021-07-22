import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
          <Pressable 
            style={styles.button}
            onPress={() => {
              alert('This is Sick!')
              navigation.navigate('Profile', { name: 'Pomodoro' })
            }}
            title="Pomodoro Timer"
            >
              <Text style={styles.text}>Timer</Text>
            </Pressable>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',

  },
  text: {
    color: 'white'
  }
  
});
