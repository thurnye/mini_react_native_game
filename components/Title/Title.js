import {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../../constants/colors';



const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
            
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: colors.accent500,
        padding: 12
    }
  });