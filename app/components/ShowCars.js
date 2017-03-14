import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';


export default class ShowCars extends Component {
  constructor(props) {
    super(props);
    this.props.onPress = () => { };
    this.state = {
      one: [
        'standart_1',
        'standart_2',
        'standart_3',
        'standart_4',
        'standart_5',
        'standart_6',
        'standart_7',
        'standart_8',
        'standart_9',
        'standart_10',

      ]
    }
  }


  renderCarsImgs() {

    return this.state.one.map((item, index) => {
      return <Image key={index} style={{ flex: 1, width: 400, height: 200 }} resizeMode='center' source={{ uri: item }} />
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          {this.renderCarsImgs()}
        </View>
      </ScrollView>
    );
  }
}