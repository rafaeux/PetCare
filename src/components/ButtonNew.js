import React from 'react';
import { View, StyleSheet } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

const ButtonNew = ({ focused, size }) => {
    return (
        <View style={styles.container}>
            <Entypo name="plus" size={size} color={ focused ? '#fcf4b6' : '#cccccc' } />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        marginBottom: 20,
        borderRadius: 30,
        backgroundColor: '#cb4f57',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ButtonNew;
