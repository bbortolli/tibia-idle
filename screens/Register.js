import * as React from 'react';
import { Alert, TextInput, Button, Text, View, StyleSheet } from 'react-native';

class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {

        return(
            <View>
                <Text> Oie </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#204969',
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inContent: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
    },
    inText: {
        paddingTop: 10,
        paddingHorizontal: 5,
        paddingBottom: 5,
        borderColor: '#fff',
        borderBottomWidth: 1,
        marginBottom: 15,
        color: '#fff',
        width: 220,
    },
    btnContent: {
        flexDirection: 'row',
        fontSize: 25,
        color: '#fff',
        paddingTop: 10,
    },
    emptyWarn: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
});

export default Register;