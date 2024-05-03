import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import colors from './constants/colors';
import * as SplashScreen from 'expo-splash-screen';
import  {useFonts} from 'expo-font'



export default function App() {

  const [userNumber, setUserNumber] = useState('')
  const [gameOver, setGameOver] = useState(false)
  const [rounds, setRounds] = useState(0)
 const [fontsLoaded] = useFonts({
    'open-sans' :  require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' :  require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const restartGame = () => {
    setUserNumber('');
    setGameOver(false);
  }


  return (
    <>
    <StatusBar style='light'/>
      <LinearGradient style={styles.rootScreen}  colors={[colors.primary700, colors.accent500]}>
        <ImageBackground 
        source={require('./assets/images/background.jpeg')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {userNumber  && !gameOver ? 
              <GameScreen userNumber={userNumber} setGameOver={setGameOver} setRounds={setRounds} rounds={rounds}/> 
              : 
              userNumber  && gameOver ? <GameOverScreen rounds={rounds} restartGame={restartGame} userNumber={userNumber}/> :
              <StartGameScreen userNumber={userNumber} setUserNumber={setUserNumber} />
            }

          </SafeAreaView>
          </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
