import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../components/Button/PrimaryButton'
import Title from '../components/Title/Title'
import colors from '../constants/colors'
import Card from  '../components/Card/Card'
import InstructionText from  '../components/InstructionText/InstructionText'


const StartGameScreen = ({userNumber, setUserNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState(userNumber)
    const {width, height} = useWindowDimensions();

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

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;


// const deviceWidth = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    rootContainer: {
        flex: 1,
        // marginTop: deviceWidth < 380 ? 30 : 100,
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