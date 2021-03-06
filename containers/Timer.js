import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ConfettiCannon from 'react-native-confetti-cannon';



export default function Timer() {

    let [pressed, setPressed] = useState(false);
    let [time, setTime] = useState(1200);
    let [stopped, setStopped] = useState(false);

    let seconds = (time - Math.floor(time / 60) * 60);

    useEffect(() => {
        console.log(seconds);
        console.log(seconds.toString().length);
        if (pressed) {
            let timer = setInterval(() => {
                setTime(time - 1);
            }, 1000);
            return ()=> {
                clearInterval(timer);
            };
        } else if (stopped) {
            console.log('stopped');
            setTime(time);
            setPressed(false);
        }
    });

    return (
        <View style={styles.container} >

            <Text style={styles.header}>Pomodoro Timer</Text>

            {pressed ? (<ConfettiCannon count={200} origin={{x: -10, y: 0}} />) : null }

            
            {pressed ? (<Text style={styles.header3}>▶️</Text>):(<Text style={styles.header3}>⏸</Text>)}
            
            <Text style={styles.header}>{(Math.floor(time / 60)+':'+(seconds.toString().length === 1 ? ('0' + seconds):(seconds)))}</Text>
     
            {pressed ? (
                <Pressable 
                style={styles.button}
                onPress={() => {
                    //start timer
                    setPressed(false);
                    setStopped(true);
                    setTime(time);
                }}
                >
                    <Text style={styles.text}>Stop 🛑</Text>
                </Pressable>
            ) : (
                <Pressable 
                style={styles.button}
                onPress={() => {
                    //start timer
                    setPressed(true);
                }}
                >
                <Text style={styles.text}>Begin 🏁</Text>
            </Pressable>   
            )}         
        
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
        textAlign: 'center',
    },
    header2: {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 20,
        padding: 20, 
    }, 
    header3: {
        fontWeight: 'bold',
        width: '80%',
        fontSize: 50,
        padding: 10, 
        textAlign: 'center',
    }
  });