import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = () => {
    return (
        <View style={styles.bodyContainer}>
            <View style={styles.body}>
                <Text style={styles.title}>Seja bem-vindo ao nosso aplicativo!</Text>
                <Text style={styles.description}>Aqui você poderá controlar os gastos e os produtos que irá utilizar para os seus animais.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7a1745'
    },
    body: {
        height: 200,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 34,
        fontWeight: 'bold',
    },
    description: {
        color: '#fcf4b6',
        fontSize: 18
    }
});

export default Body;
