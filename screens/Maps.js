import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'

class Maps extends React.Component {

    /*componentDidMount() {
        this.loadMap();
    }

    loadMap = async () => {
        const res = await api.get('/map');
        const { map } = res;
        console.log(map);
    }*/

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Maps </Text>
                </View>
                <Text style={styles.title}> Maps </Text>
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

export default Maps;