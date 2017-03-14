import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  Button,
  Navigator
} from 'react-native';
import ShowCars from './ShowCars';

export default class PhoneComponent extends Component {
  constructor(props) {
    super(props);
    this.props.isVisible = false;
 
    this.props.onPress = function () { };
    this.state ={
      showCase: 0,
      count : 0
    }
    
  }

  letTestThis() {
    
    if (this.state.count == 0) {
      try {
        this.setState({ showCase: 0});
      this.setState({ count: 1});
      } catch (error) {

      }
      
    }
    switch(this.state.showCase) {
      case 1: 
        return <Text>this is route 1</Text>
      case 2: 
        return <Text>this is route 2</Text>
      case 3: 
        return <Text>this is route 3</Text>
      case 4: 
        return <Text>this is route 4</Text>
    }
  }

  someFunction1(route, navigator, routes) {
    switch (route.index) {


      case 0:
        return <View style={{ flex: 1 }}>
          <Button title={'standart 1'} onPress={() => {
           
           
            navigator.push(routes[1]);
             this.setState({ showCase: 1})
          }} />
          <Button title={'standart 2'} onPress={() => {
           
           
            navigator.push(routes[1]);
             this.setState({ showCase: 2})
            
          }} />
          <Button title={'standart 3'} onPress={() => {
            
           
            navigator.push(routes[1]);
            this.setState({ showCase: 3})
          }} />
          <Button title={'standart 4'} onPress={() => {
            
            navigator.push(routes[1]);
            this.setState({ showCase: 4})
          }} />
        </View>

      default:
        return <View>
          {this.letTestThis()}
          <Button title={route.title} onPress={() => {
            this.setState({ showCase: 0})
            navigator.pop();
          }} />
        </View>

    }
  }

  push1Func() {
    return <Text>some text here for push 1 func</Text>
  }

  render() {
    const isVisible = this.props.isVisible;
    const onPress = this.props.onPress;
    const routes = [
      { title: 'menu', index: 0, func: this.state.showCase},
      { title: 'one', index: 1, func: this.state.sh},
    ];
    return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={isVisible}
        onRequestClose={onPress}
      >
        <View style={{ flex: 1 }}>
          <Navigator
            style={{ flex: 1 }}
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={(route, navigator) =>
              <Image style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode='stretch' source={{ uri: 'background' }}>
                {this.someFunction1(route, navigator, routes)}
              </Image>
            }

          >

          </Navigator>




        </View>
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