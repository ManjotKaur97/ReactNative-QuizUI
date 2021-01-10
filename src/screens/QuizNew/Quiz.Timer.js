import React, {Component} from 'react';

import {StyleSheet, Text, View, Animated, Dimensions,} from 'react-native';

import analytics from '@react-native-firebase/analytics';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export default class TimerButton extends Component {
  screenHeight;
  screenWidth;
  constructor(props) {
    super(props);
    this.screenWidth = Math.round(Dimensions.get('screen').width);
    this.screenHeight = Math.round(Dimensions.get('screen').height);
    console.log('TIMER ANIMATION STARTED')
    this.state = {
      isVisible: true,
      delay : 11000,
    };
  }

  f() {
    console.log('\n')
    console.log('\n')
    console.log('\n')
    console.log('\n')
    console.log('\ninside f')
      this.setState({
        isVisible: false, 
      });
      this.props.nextCard()
  }
  componentDidMount() {

    console.log('props.swiped: ', this.props.swiped);
    // if(!this.props.swiped){
      // setTimeout(() => {
      //   this.setState({
      //     isVisible: false, 
      //   });
        
      //   this.props.nextCard()
      // }, this.state.delay) 
    // }
}
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }
  render() {
    return (
      <View 
      style={{
        width:this.screenWidth, 
        height : this.screenHeight,
        position:'absolute',
        // backgroundColor:'yellow',
      }}
      >
        {this.state.isVisible ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              // backgroundColor: 'pink',
              display: 'flex',
              flexDirection: 'row',
              position:'absolute',
          //     position: 'absolute',
          //     top: '30%',
          //     left: '50%',
        }}
            >
            <View
              style={
                {
                  // width: '100%',
                  // height: '100%',
                  // backgroundColor: 'green',
                  position:'absolute',
                  top: '0%',
                  // top:0,
                  left: '0%',
                }
              }>
             
            </View>
          
          </View>
        ) :null}
      </View>
    );
  }
}
