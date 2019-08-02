import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'
import { FlatList } from 'react-native-gesture-handler';

class Shop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList : [],
        }
    }

    componentDidMount() {
        this.loadShop();
    }

    loadShop = async () => {
        const lvl = 5;
        const res = await api.get(`/item/shop/${lvl}`);
        const itemList = res.data;
        this.setState({itemList});
        console.log(itemList);
    }

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={require('../assets/icons/no-shop.png')} style={{width: 55, height: 55}}/>
            <View style={styles.dataContent}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDesc}>Tipo: {item.type}</Text>
                <Text style={styles.itemDesc}>Preço: {item.buyPrice}</Text>
            </View>
        </View>
    );

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Shop </Text>
                </View>
                <FlatList
                    data={this.state.itemList}
                    keyExtractor={item => item._id.toString()}
                    renderItem={this.renderItem}
                />
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
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: '#fff',
    },
    listItem: {
        flexDirection: 'row',
        backgroundColor: '#204969',
        padding: 8,
        borderColor: '#f9e090',
        borderWidth: 5
    },
    dataContent: {
        flexDirection: 'column',
        paddingLeft: 5,
    },
    itemTitle: {
        color: '#fff',
        fontWeight: 'bold'
    },
    itemDesc: {
        color: '#fff',
        fontWeight: '400'
    }
});

export default Shop;