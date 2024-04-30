import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton'
import Title from '../components/Title/Title'
import colors from '../constants/colors'
import Card from  '../components/Card/Card'
import InstructionText from  '../components/InstructionText/InstructionText'


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
        <View style={styles.rootContainer}>
            <Title>Guess my Number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
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
            </Card>

        </View>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
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