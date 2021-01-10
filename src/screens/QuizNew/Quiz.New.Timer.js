import React, {Component} from 'react';

import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
// import Timer from '../Timer/TimerExternal';
import Timer from '../Timer/Timer';
export default class QuizTimerNew extends Component {
  screenHeight;
  screenWidth;
  constructor(props) {
    super(props);
    this.screenWidth = Math.round(Dimensions.get('screen').width);
    this.screenHeight = Math.round(Dimensions.get('screen').height);
    console.log('TIMER ANIMATION STARTED');
    this.state = {
      isVisible: true,
      delay: 11000,
    };
  }

  f() {
    console.log('finished');
    this.setState({isVisible:false})
    this.props.nextQuestion();
  }
  componentDidMount() {
      console.log('inside timer did mount')
    this.setState({isVisible:true})
  }
  componentWillUnmount() {
    this.setState({isVisible: false})
  }
  timerElapsed(){
    console.log('Timer elapsed from set table');
    this.setState({isVisible:false})
    // this.getConsole.bind(this);
  }
  onClickoption(){
    console.log('click option');
    this.setState({isVisible:false})
    // this.props.nextQuestion();
  }
// componentWillMount(){
//     console.log('22')
//     this.setState({isVisible:true})
// }
  render() {
      console.log('inside timer render');
    return (
      <View>
          {this.state.isVisible ?(
     
        // <Timer onTimeElapsed={this.f.bind(this)}></Timer>
        <Timer
        size={110}
        strokeWidth={15}
        duration = {20}
        color = {'grey'}
        strokeColor = {'#ffbf00'}
        fill = {"black"}
        fillOpacity={0.5}
        onTimerElapsed = {this.f.bind(this)}
        onClickOption = {this.onClickoption.bind(this)}
        noOfRotations ={1}
        firstText={true}
        firstTextColor={'white'}
        firstTextString={'BIG'}
        firstTextSize={20}
        firstX={40}
        firstY={48}
        secondText={false}
        secondTextColor={'white'}
        secondTextString={'BLIND'}
        secondTextSize={18}
        secondX={40}
        secondY={70}
        ></Timer>
        ):null}
        
      </View>
    );
  }
}
