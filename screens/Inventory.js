import * as React from 'react';
import { Image, FlatList, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'

class Inventory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemList : [],
        }
    }

    componentDidMount() {
        this.loadInventory();
    }

    loadInventory = async () => {
        const userId = '5b9b6cf9cf993420cc1f0387';
        const res = await api.get(`/character/inv/${userId}`);
        const itemList = res.data;
        this.setState({itemList});
    }

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={require('../assets/icons/no-shop.png')} style={{width: 44, height: 44}}/>
            <View style={styles.dataContent}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDesc}>Power: {item.power}</Text>
                <Text style={styles.itemDesc}>Armor: {item.armor}</Text>
                <Text style={styles.itemDesc}>PAttr: {item.primaryAttr}</Text>
                <Text style={styles.itemDesc}>minLevel: {item.minLevel}</Text>
            </View>
        </View>
    );

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Inventory </Text>
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

export default Inventory;