import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            token : '',
        };
    }

    _goToScreen = () => {
        this.props.navigation.navigate(this.state.token === '' ? 'authscreen' : 'app');
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