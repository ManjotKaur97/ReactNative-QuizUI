
import React, {Component, useState} from 'react';
import {

  Text,

} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import { RFValue } from 'react-native-responsive-fontsize';
import {color6} from '../../screens/ColorScheme'
export default class Timer extends Component {
  constructor(props) {
    super(props);
  }
  // componentDidUpdate(){

  // }
  getTimer(duration=30){
    try {
      return(
        <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={[['#004777', 0.4], ['#F7B801', 0.4], ['#A30000', 0.2]]}
        size= {RFValue(100)}
        onComplete={() => {

          try {
            console.log('finished');
            this.props.onTimeElapsed();
            return [false, 0];
          } catch (error) {
            console.log('Timer ERROR')
          }
        // repeat animation in 1.5 seconds
        }}>
        {({remainingTime, animatedColor}) => (
          <Text style={{
            fontSize:RFValue(20),
            color:color6,
            fontWeight:'bold'
          }}>{remainingTime}</Text>
        )}
      </CountdownCircleTimer>
      )
    } catch (error) {
      console.log('ERROR TIMER')
    }
  }
  render() {
    return this.getTimer()

  }
}
