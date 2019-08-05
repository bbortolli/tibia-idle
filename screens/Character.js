import * as React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import api from '../config/api'
import * as SecureStore from 'expo-secure-store'
import { removeUserToken, getUserToken } from '../store/actions/tokenAction'

class Character extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userToken: '',
            userId: ''
        }
    }

    /*componentDidMount() {
        this.setData();
    }*/

    setData = () =>
        //console.log(this.props);
        //const userToken = await SecureStore.getItemAsync('userToken');
        //const userId = await SecureStore.getItemAsync('userId');
        //this.setState({userToken, userId});
        this.props.getUserToken().then(() => {
            console.log(this.props.token);
        })
        .catch( err => {
            this.setState({err});
        })

    handleLogout = () => 
        this.props.removeUserToken().then(() => {
            console.log(this.props.token);
            this.props.navigation.navigate('authscreen');
        })
        .catch( err => {
            this.setState({err});
        })

    render() {
        this.setData();
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

const mapStateToProps = state => ({
    token: state.token,
});

const mapDispatchToProps = dispatch => ({
    removeUserToken: () => dispatch(removeUserToken()),
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);