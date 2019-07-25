import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'

class Friends extends React.Component {

    /*componentDidMount() {
        this.loadFriends();
    }

    loadFriends = async () => {
        const res = await api.get('/friends');
        const { friends } = res;
        console.log(friends);
    }*/

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Friends </Text>
                </View>
                <Text style={styles.title}> Friends </Text>
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

export default Friends;