import React, {Component} from 'react';
import {Card, CardItem, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome5';
// 
// import {RFValue} from 'react-native-responsive-fontsize';
import {color1, color3, color4, color5, color17, color19, color18} from '../ColorScheme';
// import {ConsecutiveScore} from '../ContextList';
// import BackButton from '../BackButton'
 

export default class QuizMenuNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
      toolTipVisible: true,
    };
    // global.consecutiveScore=[];
    console.log('global 5 array created')
  }

  componentDidMount() {
    // database()
    // .ref('/Score')
    // .once('value')
    // .then(snapshot => {
    //   // console.log('Score data: ', snapshot.val());
    // }).catch(error=>{
    //   this. showToastWithGravityAndOffset(error.message);
    // })
    // analytics().setCurrentScreen('Quiz Menu', 'Quiz Menu');
    // this.props.navigation.addListener('focus', () => {
    //   this.setState({
    //     change: !this.state.change,
    //   });
    // });
  }

  componentDidUpdate() {
    // Orientation.lockToPortrait();
    // console.log('I am componentDidUpdate');
    // if (this.state.change === false) {
    //   this.setState({
    //     change: !this.state.change,
    //   });
    // }
  }

  render() {
    const backColor = '#141414';
    const quizComponent = (
      // <ConsecutiveScore.Provider value={{
      //   noviceScore5:0,
      //   proScore5:0,
      //   casualScore5:0,
      //   legendScore5:0,
      //   noviceScore0:0,
      //   proScore0:0,
      //   casualScore0:0,
      //   legendScore0:0
      // }}>
      // </ConsecutiveScore.Provider>
      <View
        style={{
          display: 'flex',
          backgroundColor: color19,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
        {/* <QuizButton navigation={this.props.navigation}/> */}
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '50%',
            // backgroundColor: quizHomeBackground,
            alignItems: 'center',
          }}>
          {/* First row */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: 280,
              // backgroundColor: 'red',
            }}>
            <Card style={[styles.card]}>
              <CardItem
                button
                onPress={() => {
                  this.props.navigation.navigate('QuizLaunchNew', {id: 0});
                }}
                style={[styles.carditem]}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    borderColor: color1,
                  }}>
                  <Text style={[styles.text]}>Novice</Text>
                  {/* <Icon name="chess-pawn" size={40} color= {color18} /> */}
                </View>
              </CardItem>
            </Card>
            <Card
              style={[styles.card]}>
              <CardItem
                button
                onPress={() => {

                  this.props.navigation.navigate('QuizLaunchNew', {id: 1});
                }}
                style={[styles.carditem]}
                >
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.text]}>Casual</Text>
                  {/* <Icon name="chess-knight" size={40} color={color18} /> */}
                </View>
              </CardItem>
            </Card>
          </View>
          {/* Second row */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width:280,

              // backgroundColor: 'red',
            }}>
            <Card
              style={[styles.card]}>
              <CardItem
                button
                onPress={() => {

                  this.props.navigation.navigate('QuizLaunchNew', {id: 2});
                }}
                style={[styles.carditem]}
                >
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={[styles.text]}>Pro</Text>
                  {/* <Icon name="chess-queen" size={40} color={color18} /> */}
                </View>
              </CardItem>
            </Card>
            <Card
              style={[styles.card]}>
              <CardItem
                button
                onPress={() => {
           
                  this.props.navigation.navigate('QuizLaunchNew', {id: 3});
                }}
                style={[styles.carditem]}
                >
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.text}>Legend</Text>
                  {/* <Icon name="chess-king" size={40} color={color18} /> */}
                </View>
              </CardItem>
            </Card>
          </View>
        </View>
        {/* <BackButton navigation={this.props.navigation}></BackButton> */}
      </View>
     
    );
    const loading = (
      <View>
        <Text>Loading</Text>
      </View>
    );
    return this.state.change ? quizComponent : loading;
  }
}
const styles = StyleSheet.create({
  card: {
    // backgroundColor: color3,
    // backgroundColor: color17,
    backgroundColor: color17,
    // borderColor: color5,
    elevation: 5,
    borderRadius:10,
    height: 120,
    width: 127,
    // borderWidth: 5,
  },
  carditem: {
    backgroundColor: color17,
    borderRadius:10,
    // backgroundColor: color3,
    // borderColor:borderColor
  },
  text: {
    // fontSize: RFValue(14),
    fontFamily: "Lato-Bold",
    color: color18,
    // color:color4,
  },
});
