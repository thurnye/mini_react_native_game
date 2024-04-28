import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton'
import colors from '../constants/colors'


const StartGameScreen = ({userNumber, setUserNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState(userNumber)


    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if(
            isNaN(chosenNumber) || 
            chosenNumber <=0 ||
            chosenNumber > 99
            ){
                Alert.alert(
                    'Invalid Number!', 
                    'Number has to be a number between 1 and 99.',
                    [{text: 'Okay', style: 'destructive', onPress: setEnteredNumber('')}]
                )
                return;
        }
        setUserNumber(enteredNumber)
    }


    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.numberInput} 
            maxLength={2} 
            keyboardType='number-pad' 
            autoCapitalize='none' 
            autoCorrect={false} 
            value={enteredNumber}
            onChangeText={setEnteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() =>setUserNumber('')}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        backgroundColor: colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.accent500,
        borderBottomWidth: 2,
        color: colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold'
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
  });