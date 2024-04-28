import {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Title from '../components/Title/Title'

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess </Title>
            <View>
                <Text>Higher or lower?</Text>
            </View>
            <View>
                <Text>Log rounds</Text>
            </View>

        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
   
  });