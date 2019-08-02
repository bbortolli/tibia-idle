import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

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

    handleBuyItem = async (id) => {
        
        const res = await api.post('/item/buy', {characterId: '5b9b6cf9cf993420cc1f0387', itemId: id});
        console.log(res.data);

    }

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/icons/no-shop.png')} style={{width: 55, height: 55}}/>
                <View style={styles.dataContent}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemDesc}>Tipo: {item.type}</Text>
                    <Text style={styles.itemDesc}>Preço: {item.buyPrice}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => this.handleBuyItem(item._id)}>
                <Image source={require('../assets/icons/mark.png')} style={{width: 30, height: 30}}/>
            </TouchableOpacity>
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
        borderWidth: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
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
    },
});

export default Shop;