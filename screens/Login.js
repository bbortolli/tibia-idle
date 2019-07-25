import * as React from 'react';
import { Alert, TextInput, Button, View, StyleSheet } from 'react-native';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            passInput: '',
        };
    }

    render() {

        return(
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.inContent}>
                        <TextInput 
                            style={styles.inText}
                            placeholder={'UserID'} 
                            placeholderTextColor={'#fff'} 
                            autoCapitalize={'none'} 
                            textContentType={'username'}
                            onChangeText={ text => (this.setState({userInput: text})) }
                            value={this.state.userInput}
                        />
                        <TextInput 
                            style={styles.inText}
                            placeholder={'Password'} 
                            placeholderTextColor={'#fff'} 
                            autoCapitalize={'none'} 
                            textContentType={'password'} 
                            secureTextEntry={true}
                            onChangeText={ text => (this.setState({passInput: text})) }
                            value={this.state.passInput}
                        />
                    </View>
                    <View style={styles.btnContent}>
                        <Button 
                            onPress={ () => {
                                if (this.state.userInput === '' || this.state.passInput === '') {
                                    Alert.alert(
                                        'EMPTY FIELDS!',
                                        'Username or password is missing...',
                                        [
                                          {text: 'Got it! xD'},
                                        ]
                                      );
                                    return;                                
                                }
                                else {
                                    return this.props.triggerLogin(this.state.userInput, this.state.passInput);
                                }
                            }
                            }  
                            title='Sign in' 
                            color='#fff'
                        />
                        <Button
                            onPress={() => {}}
                            title='Register'
                            color='#fff'
                            disabled
                        />
                    </View>
                </View>
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

export default Login;