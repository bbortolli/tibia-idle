import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Main from './config/router'
import { Provider } from 'react-redux';
import store from './store/index';

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <View style={styles.content}>
          <Main/>
        </View>
      </Provider>
    );
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  }
});