import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import api from '../config/api'
import * as SecureStore from 'expo-secure-store'

class Character extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userToken: '',
            userId: ''
        }
    }

    componentDidMount() {
        this.setData();
    }

    setData = async () => {
        const userToken = await SecureStore.getItemAsync('userToken');
        const userId = await SecureStore.getItemAsync('userId');
        this.setState({userToken, userId});
    }

    handleLogout = async () => {
        await SecureStore.deleteItemAsync('userToken');
        this.props.navigation.navigate('authload');
    };

    render() {
        return(
            <View style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.title}> Character </Text>
                </View>
                <TouchableOpacity onPress={this.handleLogout}>
                    <Text style={styles.logoutText}>Sair da conta!</Text>
                </TouchableOpacity>
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
    },
    logoutText: {
        color: '#204969',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Character;