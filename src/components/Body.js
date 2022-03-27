import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Product = (props) => {
    return (
        <View style={styles.product}>
            <Text style={styles.productName}>{props.name}</Text>
            <Text style={styles.productDescription}>{props.description}</Text>
            <TouchableOpacity style={styles.productPrice}>
                <Text style={styles.productPriceText}>{props.price}</Text>
            </TouchableOpacity>
        </View>
    );
}

const Body = () => {
    return (
        <View style={styles.body}>
            <Product name="Luftal" description="Este colírio deve ser utilizado 2x ao dia." price="R$ 25,00" />
            <Product name="Still" description="Este colírio deve ser utilizado 3x ao dia." price="R$ 32,90" />
            <Product name="Cerenia Zoetis" description="Este medicamento deve ser utilizado 1x ao dia." price="R$ 108,99" />
            <Product name="Fortekor" description="Este medicamento deve ser utilizado 1x ao dia." price="R$ 112,50" />
            <Product name="Spray Avert Noxxi Wall" description="Este spray deve ser utilizado 3x ao dia, se necessário." price="R$ 151,99" />
            <Product name="Agemol" description="Este é um produto teste que ainda não está para venda." price="R$ 86,99" />
            <Product name="Cyclavance" description="Este medicamento deve ser utilizado 1x por semana, se necessário." price="R$ 356,99" />
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
