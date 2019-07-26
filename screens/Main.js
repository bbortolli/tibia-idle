import * as React from 'react';
import { StyleSheet } from 'react-native';
import Tabs from '../config/router.js'
import api from '../config/api'
import Login from './Login.js';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store'

export default class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      _USERID : '',
      _PASSWORD : '',
      _SESSION : false,
      _TOKEN : '',
    };
  }

  /*componentDidMount() {
    this._removeData();
  }

  setSession = async () => {
    try {
      const login = await api.post('/user/login', { username: this.state._USERID, password: this.state._PASSWORD} );
      const { ...user } = login.data;
      if (user) {
        this.setState({'_SESSION': true, '_TOKEN': user.token}, () => {
          console.log(user);
          const {email, id, token, username} = user;
          this._saveData(username, id, email, token);
        });
      }
    } catch(err){
      this.setState({_SESSION: false});
    }
  };

  loginData = (user, pass) => {
    this.setState({'_USERID': user, '_PASSWORD': pass}, () => this.setSession() );
  };*/

  render() {
    return (
        this.state._SESSION ? <Tabs style={styles.content}/> : <Login triggerLogin={this.loginData}/>
    );
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});