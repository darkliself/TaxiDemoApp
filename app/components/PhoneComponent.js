import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Modal,
    Button
} from 'react-native';

import Communications from 'react-native-communications';


export default class PhoneComponent extends Component {
    constructor(props) {
        super(props);
        this.props.isVisible = false;
        this.props.showText = '';
        this.props.imgUri = '';
        this.props.closeFunc = {};
    }



    render() {
        const style1 = { base, pos, borders, margins } = styles;
        const swichedVisibality = this.props.isVisible;
        const text = this.props.showText;
        const img = this.props.imgUri;
        const onPress = this.props.closeFunc;

        return (
            <Modal
                animationType='slide'
                transparent={false}
                visible={swichedVisibality}
                onRequestClose={onPress}
            >
                <Image style={styles.base} resizeMode='stretch' source={{ uri: img }}>
                    <TouchableOpacity style={[base, borders, margins]} onPress={() => {
                        Communications.phonecall('+380955522555', false)
                    }}>
                        <Image style={styles.base} resizeMode='center' source={{ uri: 'phone_vodophone' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[base, borders, margins]} onPress={() => {
                        Communications.phonecall('+380965522555', false)
                    }}>
                        <Image style={styles.base} resizeMode='center' source={{ uri: 'phone_kievstar' }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[base, borders, margins]} onPress={() => {
                        Communications.phonecall('+380735522555', false)
                    }}>
                        <Image style={styles.base} resizeMode='center' source={{ uri: 'phone_life' }} />
                    </TouchableOpacity>
                </Image>
            </Modal>
        );
    }


}

const styles = {
    base: {
        flex: 1
    },
    pos: {
        position: 'absoulte'
    },
    margins: {
        marginTop: 60,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 60
    },
    borders: {
        borderColor: 'black',
        borderWidth: 0
    },
    

}