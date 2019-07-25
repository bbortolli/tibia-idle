import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'

class Shop extends React.Component {

    /*componentDidMount() {
        this.loadShop();
    }

    loadShop = async () => {
        const res = await api.get('/shop');
        const { shop } = res;
        console.log(shop);
    }*/

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Shop </Text>
                </View>
                <Text style={styles.title}> Shop </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    content: {
      flex: 1
    },
    header: {
        backgroundColor: '#204969',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 5,
        width: '100%',
        flex: 0.05,
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#fff',
    }
});

export default Shop;