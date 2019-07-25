import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'

class Hunt extends React.Component {

    /*componentDidMount() {
        this.loadHunt();
    }

    loadHunt = async () => {
        const res = await api.get('/hunt');
        const { hunt } = res;
        console.log(hunt);
    }*/

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Hunt </Text>
                </View>
                <Text style={styles.title}> Hunt </Text>
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

export default Hunt;