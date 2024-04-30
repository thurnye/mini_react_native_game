import {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Alert, FlatList } from 'react-native';
import Title from '../components/Title/Title'
import NumberContainer from '../components/Game/NumberContainer';
import PrimaryButton from  '../components/Button/PrimaryButton'
import Card from  '../components/Card/Card'
import InstructionText from  '../components/InstructionText/InstructionText'
import {Ionicons} from'@expo/vector-icons'
import GuessLogItem from '../components/Game/GuessLogItem';




const generateRandomBetween = (min, max, exclude) => {
    const rndNum =  Math.floor(Math.random() * (max -min)) + min;

    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum
    }
}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({userNumber, setGameOver, setRounds, rounds}) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    const nextGuessHandler = (direction) => {
        if(
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess > userNumber)
        ){
            Alert.alert("Don't lie", "You know that this is wrong...!",[{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess + 1;
        }

        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, userNumber);
        setCurrentGuess(newRandomNumber)
        setRounds(rounds + 1)
        setGuessRounds((prevRounds) => [
            newRandomNumber, ...prevRounds
        ])
    }

    useEffect(() => {
        minBoundary = 1,
        maxBoundary = 100
        setRounds(0)
        setGuessRounds([])
    }, [])

    useEffect(() => {
        if(parseInt(userNumber) === parseInt(currentGuess)){
            setGameOver(true)
        }
    }, [userNumber, currentGuess, setGameOver])


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess </Title>
            {/* Guess */}
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            <Ionicons name='remove' size={24} color={'white'}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() =>nextGuessHandler('greater')}>
                            <Ionicons name='add' size={24} color={'white'}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                <FlatList
                data={guessRounds}
                renderItem={(itemData, index) => <GuessLogItem roundNumber={guessRounds.length - itemData.index} guess={itemData.item}/>}
                keyExtractor={item => item}
                />
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
    instructionText:{
        marginBottom: 12
    },
    buttonsContainer:{
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
  });