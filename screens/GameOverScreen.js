import { StyleSheet, Text, TextInput, View, Alert, Image } from 'react-native';
import Title from '../components/Title/Title';
import PrimaryButton from  '../components/Button/PrimaryButton'
import colors from '../constants/colors'



const GameOverScreen = ({rounds,userNumber, restartGame}) => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.ImageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}/>
            </View>
            <Text  style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            <PrimaryButton onPress={restartGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;


const styles = StyleSheet.create({
    rootContainer : {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ImageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image:{
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        textAlign:'center',
        marginBottom: 24
    },
    highlight: {
        color: colors.primary500
    }
});