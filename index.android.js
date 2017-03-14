/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Modal
} from 'react-native';
import Communications from 'react-native-communications';
import ImageComp from './app/components/ImageComp';
import PhoneComp from './app/components/PhoneComponent';
import InfoComp from './app/components/InfoComp';
import MapComp from './app/components/MapComp';
import AutoComp from './app/components/AutoComp';

export default class Riks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneModal: false,
      infoModal: false,
      mapModal: false,
      autoModal: false
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={{ flex: 1 }} resizeMode='stretch' source={{uri :'background'}}>
          <View style={{ flex: 2, marginTop: 15, paddingBottom: 20 }}>
            <Image style={{ flex: 1, }} resizeMode='center' source={{ uri: 'riks_logo' }} />
          </View>
          <TouchableOpacity style={styles.callBtn} onPress={() => {
            this.setState({ phoneModal: !this.state.phoneModal })
          }}
          >
            <Image style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} source={{ uri: 'call_button' }} resizeMode='center' />
          </TouchableOpacity>
          <View style={{ flex: 1, }}>

          </View>
          <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ mapModal: true })}>
              <Image style={{ flex: 1 }} resizeMode='center' source={{ uri: 'map_button' }} />
            </TouchableOpacity>
            <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ autoModal: true })}>
              <Image style={{ flex: 1 }} resizeMode='center' source={{ uri: 'auto_button' }} />
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => Communications.web('http://rikstaxi.lg.ua')}>
              <Image style={{ flex: 1 }} resizeMode='center' source={{ uri: 'info_button' }} />
            </TouchableOpacity>
          </View>
        </Image>
        <PhoneComp isVisible={this.state.phoneModal} showText={'some test text'} imgUri={'background'} closeFunc={() => this.setState({ phoneModal: false })} />
        <InfoComp isVisible={this.state.infoModal} onPress={() => { this.setState({ infoModal: false }) }} />
        <MapComp isVisible={this.state.mapModal} onPress={() => { this.setState({ mapModal: false }) }} />
        <AutoComp isVisible={this.state.autoModal} onPress={() => { this.setState({ autoModal: false }) }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  callBtn: {
    flex: 3,
    borderColor: 'black',
    borderWidth: 0,
    marginTop: 0,
    marginLeft: 60,
    marginRight: 60,
    borderRadius: 200
  }
});

AppRegistry.registerComponent('RIKS', () => Riks);
