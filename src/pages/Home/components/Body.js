import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Body = () => {
    return (
        <View style={styles.bodyContainer}>
            <View style={styles.body}>
                <Text style={styles.title}>Seja bem-vindo ao nosso aplicativo!</Text>
                <Text style={styles.description}>Aqui você poderá controlar os gastos e os produtos que irá utilizar para os seus animais.</Text>
                <Text style={styles.description}>Quem tem animal de estimação é apaixonado pelo seu amiguinho, pois eles são companheiros, doces e muito divertidos.</Text>
                <Text style={styles.description}>Independentemente de qual seja o seu bichinho, um cachorro, um gato, calopsita dentre tantos outros, cuidar bem deles é essencial.</Text>
                <Text style={styles.finalDescription}>E por isto, aqui está um jeito fácil que preparamos para você cuidar do seu pet sem surpresas no final do mês!</Text>
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
        height: 600,
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
    },
    finalDescription: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default Body;
