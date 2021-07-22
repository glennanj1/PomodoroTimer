import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen ({ navigation }) {
    return (
      <View style={styles.container}>
            <Pressable 
              style={styles.button}
              onPress={() => {
                navigation.navigate('Timer', { name: 'Pomodoro' })
              }}
              >
                <Text style={styles.text}>Timer</Text>
              </Pressable>
            <StatusBar style="auto" />
        </View>
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