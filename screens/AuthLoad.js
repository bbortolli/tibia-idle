import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getUserToken } from '../store/actions/tokenAction';

class AuthLoad extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {
        this._goToScreen();
    };

    _goToScreen = () => {
        //console.log(this.props.getUserToken());
        this.props.getUserToken().then(() => {
            //console.log(this.props.token);
            this.props.navigation.navigate(this.props.token !== null ? 'app' : 'authscreen'); 
        })
        .catch( err => {
            this.setState({err});
        })
    }

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

const mapStateToProps = state => ({
    token: state.token,
});


const mapDispatchToProps = dispatch => ({
    getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoad);