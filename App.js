import * as React from 'react';
import { StyleSheet } from 'react-native';
import Main from './config/router'

export default class App extends React.Component {

  render() {

    return (
      <Main style={styles.content}/>
    );
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  }
});