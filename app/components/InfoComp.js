import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Modal,
    Button
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
                <Image style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} resizeMode='stretch' source={{uri: 'background'}}>
                    <Text style={{fontSize: 30}}>Тут будет информация</Text>
                </Image>
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