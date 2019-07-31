import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export default class App extends React.Component {

    constructor(props){
        super(props);
    }

    _goToScreen = async () => {
        const userToken = await SecureStore.getItemAsync('userToken');
        console.log(userToken);
        this.props.navigation.navigate(userToken === null ? 'authscreen' : 'app');
    }

    componentDidMount() {
        this._goToScreen();
    };

    render() {
        return (
            <View style={styles.content}>
                <Text> Tela AuthLoading !</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  }
});