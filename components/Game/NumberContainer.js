
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import colors from '../../constants/colors';



const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
            
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold',
        color: colors.accent500,
        textAlign: 'center',
    }
  });