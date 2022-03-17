import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader}>PetCare</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#44749d',
        alignItems: 'center',
        padding: 16
    },
    textHeader: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});

export default Header;
