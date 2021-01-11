import React, {Component} from 'react';
import {Card, CardItem, Text, View} from 'native-base';
import {StyleSheet} from 'react-native';
import {color1, color17, color19, color18} from '../ColorScheme';


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

  }

  componentDidUpdate() {

  }

  render() {
    const backColor = '#141414';
    const quizComponent = (
      <View
        style={{
          display: 'flex',
          backgroundColor: color19,
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}>
    
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
                  <Text style={[styles.text]}>Beginner</Text>

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
                  <Text style={[styles.text]}>Intermediate</Text>
       
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
                  <Text style={styles.text}>Advance</Text>
           
                </View>
              </CardItem>
            </Card>
          </View>
        </View>

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
    fontWeight: 'bold'
    // color:color4,
  },
});
