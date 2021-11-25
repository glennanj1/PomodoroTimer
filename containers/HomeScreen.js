import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function HomeScreen ({ navigation }) {
    return (
        <View style={styles.container} >
              <Text style={styles.header}>Pomodoro Timer</Text>
            
            <Text style={styles.header2}>A lightweight React Native Demo</Text>
           
            <Pressable 
              style={styles.button}
              onPress={() => {
                navigation.navigate('Timer')
              }}
              >
                <Text style={styles.text}>Enter</Text>
              </Pressable>
        
            <StatusBar style="auto" />

        </View>

    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      
    },
    button: {
      position: 'absolute',
      bottom: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 100,
      fontSize: 40,
      borderRadius: 10,
      backgroundColor: 'darkgrey',
      margin: 10, 
      padding: 10,
    },
    text: {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    },
    header: {
        fontWeight: 'bold',
        width: '80%',
        fontSize: 50,
        padding: 10, 
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
    },
    header2: {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 20,
        padding: 20, 
    }, 
  });