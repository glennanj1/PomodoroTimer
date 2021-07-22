import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container} >
            <Text style={styles.header}>Welcome to Pomodoro Timer</Text>
            <Text style={styles.header2}>Click below to get started!</Text>
           
            <Pressable 
              style={styles.button}
              onPress={() => {
                navigation.navigate('Timer')
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
      backgroundImage: 'url(https://media.giphy.com/media/3oxRmvU3GAJay6F60g/giphy.gif)',
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
    },
    header: {
        border: 'solid',
        backgroundColor: 'red',
        marginBottom: '30px',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        fontFamily: 'roboto'
    },
    header2: {
        marginBottom: '10px',
        fontSize: '15px',
        fontWeight: '500',
    
    }
    
  });