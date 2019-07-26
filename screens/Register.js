import * as React from 'react';
import { Alert, TextInput, Button, Text, View, StyleSheet } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import api from '../config/api'

class Register extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
        };
    };

    handleRegister = async() => {
        if(this.checkEmpty() && this.checkPasswordMatch()){
            try {
                let userData = {
                    username: this.state.userInput,
                    password: this.state.passInput ,
                    email: this.state.emailInput,
                };
                const response = await api.post('/user/register', userData);
                if (response.status === 200){
                    Alert.alert(
                        'Account created!',
                        'Enjoy!',
                        [
                          {text: 'Go back to login.'},
                        ]
                    );
                    this.props.navigation.dispatch(StackActions.pop())
                }
            }
            catch(err){
                console.log(err);
            }
        }
      };

    checkPasswordMatch = () => {
        if(! (this.state.passInput === this.state.confirmPassInput)){
            Alert.alert(
                'Verify your password!',
                'Password not matching...',
                [
                  {text: 'Got it! xD'},
                ]
            );
            return false;
        }
        else {
            return true;
        }
    }

    checkField = fieldName => {
        return fieldName === '' ? false: true;
    }

    checkEmpty = () => {
        let user = this.checkField(this.state.userInput);
        let email = this.checkField(this.state.emailInput);
        let confirmEmail = this.checkField(this.state.confirmEmailInput);
        let pass = this.checkField(this.state.passInput);
        let confirmPass = this.checkField(this.state.confirmPassInput);

        if (!(user && email && confirmEmail && pass && confirmPass)){
            Alert.alert(
                'No empty values!',
                'Verify all fields pls...',
                [
                  {text: 'Got it! xD'},
                ]
            );
            return false;

        }
        return true;
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
                            blurOnSubmit={false}
                            onSubmitEditing={() => {this.secondInput.focus()}}
                        />
                        <TextInput 
                            style={styles.inText}
                            placeholder={'Email'} 
                            placeholderTextColor={'#fff'} 
                            autoCapitalize={'none'} 
                            textContentType={'emailAddress'}
                            onChangeText={ text => (this.setState({emailInput: text})) }
                            value={this.state.emailInput}
                            ref={(input) => {this.secondInput = input;}}
                            blurOnSubmit={false}
                            onSubmitEditing={() => {this.thirdInput.focus()}}
                        />
                        <TextInput 
                            style={styles.inText}
                            placeholder={'Confirm email'} 
                            placeholderTextColor={'#fff'} 
                            autoCapitalize={'none'} 
                            textContentType={'emailAddress'}
                            onChangeText={ text => (this.setState({confirmEmailInput: text})) }
                            value={this.state.confirmEmailInput}
                            ref={(input) => {this.thirdInput = input;}}
                            blurOnSubmit={false}
                            onSubmitEditing={() => {this.fourthInput.focus()}}
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
                            ref={(input) => {this.fourthInput = input;}}
                            blurOnSubmit={false}
                            onSubmitEditing={() => {this.fifthInput.focus()}}
                        />
                        <TextInput 
                            style={styles.inText}
                            placeholder={'Confirm password'} 
                            placeholderTextColor={'#fff'} 
                            autoCapitalize={'none'} 
                            textContentType={'password'} 
                            secureTextEntry={true}
                            onChangeText={ text => (this.setState({confirmPassInput: text})) }
                            value={this.state.confirmPassInput}
                            ref={(input) => {this.fifthInput = input;}}
                        />
                    </View>
                    <View style={styles.btnContent}>
                        <Button 
                            onPress={ () => this.handleRegister()}
                            title='Done!' 
                            color='#fff'
                        />
                        <Button
                            onPress={() => {this.props.navigation.dispatch(StackActions.pop())}}
                            title='Go back!'
                            color='#fff'
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
        marginBottom: 10,
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