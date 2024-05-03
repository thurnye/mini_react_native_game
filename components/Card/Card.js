import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import colors from '../../constants/colors';

const Card = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: deviceWidth < 380 ? 18 : 36,
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
