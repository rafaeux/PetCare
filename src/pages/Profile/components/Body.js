import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Animal = (props) => {
    return (
        <View style={styles.animal}>
            <Text style={styles.animalName}>{props.name} ({props.type})</Text>
            <Text style={styles.animalDescription}>{props.description}</Text>
        </View>
    );
}

const Body = () => {
    return (
        <View style={styles.body}>
            <Animal name="Tom" type="Gato" description="Persa em processo de recuperação"/>
            <Animal name="Ty" type="Gato" description="Persa himalaio recém operado"/>
            <Animal name="Thor" type="Cachorro" description="Resgatado de maus tratos"/>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: '#7a1745',
    },
    animal: {
        backgroundColor: '#ffffff',
        padding: 15,
        elevation: 3,
        marginBottom: 20,
        height: 150
    },
    animalName: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
    },
    animalType: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    animalDescription: {
        flex: 1,
        fontSize: 16,
        color: '#B5B5B5'
    }
});

export default Body;
