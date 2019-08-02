import * as React from 'react';
import { Image, FlatList, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'

class Hunt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            huntList : [],
        }
    }

    componentDidMount() {
        this.loadHunt();
    }

    loadHunt = async () => {
        const location = 1;
        const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJyeiIsInBhc3N3b3JkIjoiYnJ6IiwiaWF0IjoxNTY0NjkyNDQxLCJleHAiOjE1NjQ3Mjg0NDF9.U1AUu85X6Q3EtSELsi179ClbKwjJpp6pJFy7qDpYQnA'
        const res = await api.get(`/hunt/${location}`, {
            headers: {
                Authorization: authToken }
        });
        console.log(res.data);
        const huntList = res.data;
        this.setState({huntList})
        //console.log(huntList);
    }

    renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={require('../assets/icons/no-hunt.png')} style={{width: 90, height: 90}}/>
            <View style={styles.dataContent}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDesc}>EXP: {item.expPerStamina}</Text>
                <Text style={styles.itemDesc}>GOLD: {item.goldPerStamina}</Text>
                <Text style={styles.itemDesc}>POWER: {item.power}</Text>
                <Text style={styles.itemDesc}>DROPS: {item.itemDrop}</Text>
            </View>
        </View>
    );

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Hunt </Text>
                </View>
                <FlatList
                    data={this.state.huntList}
                    keyExtractor={item => item.id.toString()}
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
        flex: 1,
        paddingLeft: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
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

export default Hunt;