import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Product = (props) => {
    return (
        <View style={styles.product}>
            <Text>{props.name}</Text>
            <Text>{props.description}</Text>
            <Text>{props.price}</Text>
        </View>
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
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
            <Product name="Teste" description="Este é um produto teste que ainda não está para venda" price="R$ 25,00" />
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
        backgroundColor: '#c6d4e1',
    },
    product: {
        backgroundColor: '#ffffff',
        padding: 10,
        elevation: 3,
        marginBottom: 20
    }
});

export default Body;
