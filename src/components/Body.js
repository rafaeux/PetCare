import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Product = (props) => {
    return (
        <TouchableOpacity style={styles.product}>
            <Text style={styles.productName}>{props.name}</Text>
            <Text style={styles.productDescription}>{props.description}</Text>
            <TouchableOpacity style={styles.productPrice}>
                <Text style={styles.productPriceText}>{props.price}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const Body = () => {
    return (
        <View style={styles.body}>
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
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
    product: {
        backgroundColor: '#ffffff',
        padding: 15,
        elevation: 3,
        marginBottom: 20,
        height: 150
    },
    productName: {
        flex: 1,
        fontSize: 24,
        fontWeight: 'bold',
    },
    productDescription: {
        flex: 1,
        fontSize: 16,
        color: '#B5B5B5'
    },
    productPrice: {
        flex: 1,
        backgroundColor: '#cb4f57',
        width: '20%',
        justifyContent: 'center',
        elevation: 3
    },
    productPriceText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Body;
