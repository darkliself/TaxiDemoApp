import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Modal,
    Button,
    WebView
} from 'react-native';


export default class PhoneComponent extends Component {
    constructor(props) {
        super(props);
        this.props.isVisible = false;
        this.props.onPress = function () {};
      
    }



    render() {
        const isVisible = this.props.isVisible;
        const onPress = this.props.onPress;
        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={isVisible}
                onRequestClose={onPress}
            >
               
                   <WebView style={{flex: 1}} source={{uri: 'https://www.google.ru/maps/@48.9369469,38.4966016,14z'}}/>
               
            </Modal>
        );
    }


}

const styles = {
    base: {
        flex: 1,
    },
    pos: {
        position: 'absoulte'
    }
}