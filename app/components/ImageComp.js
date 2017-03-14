import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';


export default class ImageComp extends Component {
  constructor(props) {
    super(props);
    this.props.imgUri= '';
    this.props.onPress= function() {};
    this.state ={
      test: this.props.imgUri
    }
  }



  getUri() {
    return this.props.imgUri;
  }
  render() {
    const onPressFunc = this.props.onPress;
    return (
      <TouchableOpacity  style={{flex: 1}} onPress={onPressFunc}>
        <Image style={styles.base} resizeMode='center' source={{uri: this.state.test}}/>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  border: {
    borderColor: 'black',
    borderWidth: 2
  },
  sizes: {
    width: 100,
    height: 100
  }
});