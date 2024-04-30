import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import colors from '../../constants/colors';

const Card = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export default Card;


const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 36,
        backgroundColor: colors.primary800,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });
