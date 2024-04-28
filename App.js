import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';





export default function App() {
  return (
    <LinearGradient style={styles.rootScreen}  colors={['#4e0329', '#ddb52f']}>
      <ImageBackground 
      source={require('./assets/images/background.jpeg')} 
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgrounImage}
      >
        <StartGameScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  backgrounImage: {
    opacity: 0.15
  }
});
