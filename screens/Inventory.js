import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'

class Inventory extends React.Component {

    /*componentDidMount() {
        this.loadInventory();
    }

    loadInventory = async () => {
        const res = await api.get('/inventory');
        const { inventory } = res;
        console.log(inventory);
    }*/

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Inventory </Text>
                </View>
                <Text style={styles.title}> Inventory </Text>
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

export default Inventory;