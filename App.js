import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import colors from './constants/colors';




export default function App() {

  const [userNumber, setUserNumber] = useState('12')


  return (
    <LinearGradient style={styles.rootScreen}  colors={[colors.primary700, colors.accent500]}>
      <ImageBackground 
      source={require('./assets/images/background.jpeg')} 
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {userNumber ? 
            <GameScreen/> 
            : 
            <StartGameScreen userNumber={userNumber} setUserNumber={setUserNumber}/>
          }

        </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // justifyContent:'center',
    // alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.15
  }
});
