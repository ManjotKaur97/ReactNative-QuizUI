import React, {Component} from 'react';
import {Text, Thumbnail, View, Card, Button, CardItem, Body} from 'native-base';
import QuizTimerNew from './Quiz.New.Timer';
import {TouchableOpacity, ScrollView, Image, Modal} from 'react-native';
import EIcon from 'react-native-vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import ScoreCard from './Quiz.ScoreCard';
import {color11, color17, color18} from '../ColorScheme';
import AIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class QuizNewStyle extends Component {
  constructor(props) {
    super(props);

    this.score = 0;
    this.state = {
      newGame: 0,
      id: 0,
      timerStart: true,
      colorA: color11,
      textColorA: 'grey',
      colorB: color11,
      textColorB: 'grey',
      // textColorB: color4,
      colorC: color11,
      textColorC: 'grey',
      colorD: color11,
      textColorD: 'grey',
      explanation: false,
      explanationChoice: false,
      clickableOptionA: false,
      clickableOptionB: false,
      clickableOptionC: false,
      clickableOptionD: false,
      disabled: false,
      headOverTo9stacks: 0,
      firstTrack: 'dot-single',
      secondTrack: 'dot-single',
      thirdTrack: 'dot-single',
      fourthTrack: 'dot-single',
      fifthTrack: 'dot-single',
      firstTrackColor: 'grey',
      secondtTrackColor: 'grey',
      thirdTrackColor: 'grey',
      fourthTrackColor: 'grey',
      fifthTrackColor: 'grey',
    };
  }
  loadNextQuestion(t) {
    this.syncTrack();
    // console.log('okurrrr');
    setTimeout(() => {
      this.setState({
        newGame: this.state.newGame + 1,
        timerStart: true,
        colorA: color11,
        textColorA: 'grey',
        colorB: color11,
        textColorB: 'grey',
        colorC: color11,
        textColorC: 'grey',
        colorD: color11,
        textColorD: 'grey',
        explanation: false,
        explanationChoice: false,

        disabled: false,
      });
    }, t);
  }
  showCorrectAns() {
    if (this.props.cards[this.state.newGame].answer === 'a') {
      this.setState({
        colorA: 'green',
        textColorA: 'green',
        // explanation: true,
        explanationChoice: true,
      });
    } else if (this.props.cards[this.state.newGame].answer === 'b') {
      this.setState({
        colorB: 'green',
        textColorB: 'green',
        // explanation: true,
        explanationChoice: true,
      });
    } else if (this.props.cards[this.state.newGame].answer === 'c') {
      this.setState({
        colorC: 'green',
        textColorC: 'green',
        explanationChoice: true,
      });
    } else if (this.props.cards[this.state.newGame].answer === 'b') {
      this.setState({
        colorD: 'green',
        textColorD: 'green',
        explanationChoice: true,
      });
    }
  }
  optionASelected() {
    if (this.props.cards[this.state.newGame].answer === 'a') {
      this.props.quesTrack.push('1');
      console.log('ques track', this.props.quesTrack);
      this.score += 1;
      this.setState({
        colorA: 'green',
        textColorA: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
      this.props.quesTrack.push('-1');
      console.log('ques track', this.props.quesTrack);
      this.setState({
        colorA: 'red',
        textColorA: 'red',

        disabled: true,
      });
      this.showCorrectAns();
    }

    setTimeout(() => {
      this.setState({
        timerStart: false,
      });
    }, 200);
  }
  optionBSelected() {
    if (this.props.cards[this.state.newGame].answer === 'b') {
      this.props.quesTrack.push('1');
      this.score += 1;
      this.setState({
        colorB: 'green',
        textColorB: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
      this.props.quesTrack.push('-1');
      this.setState({
        colorB: 'red',
        textColorB: 'red',

        disabled: true,
      });
      this.showCorrectAns();
    }

    setTimeout(() => {
      this.setState({
        timerStart: false,
      });
    }, 200);
  }
  optionCSelected() {
    if (this.props.cards[this.state.newGame].answer === 'c') {
      this.props.quesTrack.push('1');
      this.score += 1;
      this.setState({
        colorC: 'green',
        textColorC: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
      this.props.quesTrack.push('-1');
      this.setState({
        colorC: 'red',
        textColorC: 'red',

        disabled: true,
      });
      this.showCorrectAns();
    }

    setTimeout(() => {
      this.setState({
        timerStart: false,
      });
    }, 200);
  }
  optionDSelected() {
    if (this.props.cards[this.state.newGame].answer === 'd') {
      this.props.quesTrack.push('1');
      this.score += 1;
      this.setState({
        colorD: 'green',
        textColorD: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
      this.props.quesTrack.push('-1');
      this.setState({
        colorD: 'red',
        textColorD: 'red',

        disabled: true,
      });
      this.showCorrectAns();
    }

    setTimeout(() => {
      this.setState({
        timerStart: false,
      });
    }, 200);
  }
  // when timer ends then load question
  nextQuestion() {
    this.setState({
      timerStart: false,
    });
    setTimeout(() => {
      this.setState({
        newGame: this.state.newGame + 1,
        timerStart: true,
      });
    }, 100);
  }
  generateScoreCard() {


    var userPresent = false;


    const scoreCard = (
      <ScoreCard
        score={this.score}
        navigation={this.props.navigation}
        user={userPresent}
        category={this.props.id}
      />
    );
    return scoreCard;
  }
  generateScoreCard1() {
    //  database()
    //     .ref('/Score')
    //     .remove();
    // var user = auth().currentUser;
    // var userPresent = false;
    // if (user !== null) {
    //   var scoreObject = [];
    //   userPresent = true;
    //   console.log('SCORECARD', scoreObject);

    //   // query to select score details from current user
    //   database()
    //     .ref('/Score')
    //     .orderByChild('email')
    //     .equalTo(user.email)
    //     .once('value')
    //     .then(snapshot => {
    //       var curUser = snapshot.val();
    //       // console.log('Selected User data: ', curUser);
    //       if (curUser === null) {
    //         // user is playing for first time
    //         console.log('NEW');
    //         if (this.props.id === 0) {
    //           scoreObject = [
    //             {noviceScore: this.score},
    //             {casualScore: 0},
    //             {proScore: 0},
    //             {legendScore: 0},
    //             {email: user.email},
    //           ];
    //         } else if (this.props.id === 1) {
    //           scoreObject = [
    //             {noviceScore: 0},
    //             {casualScore: this.score},
    //             {proScore: 0},
    //             {legendScore: 0},
    //             {email: user.email},
    //           ];
    //         } else if (this.props.id === 2) {
    //           scoreObject = [
    //             {noviceScore: 0},
    //             {casualScore: 0},
    //             {proScore: this.score},
    //             {legendScore: 0},
    //             {email: user.email},
    //           ];
    //         } else if (this.props.id === 3) {
    //           scoreObject = [
    //             {noviceScore: 0},
    //             {casualScore: 0},
    //             {proScore: 0},
    //             {legendScore: this.score},
    //             {email: user.email},
    //           ];
    //         }
    //         database()
    //           .ref('/Score')
    //           .push({
    //             scoreObject: scoreObject,
    //             email: user.email,
    //           })
    //           .then(() => {
    //             // console.log('score saved');
    //             database()
    //               .ref('/Score')
    //               .once('value')
    //               .then(snapshot => {
    //                 // console.log('Score data: ', snapshot.val());
    //               });
    //           });
    //       } else {
    //         console.log('score exist');

    //         for (const key in curUser) {
    //           // update user score
    //           // console.log('cur user', curUser[key]);
    //           if (this.props.id === 0) {
    //             // if (this.score > curUser[key].scoreObject[0].noviceScore) {
    //             scoreObject = [
    //               {
    //                 noviceScore:
    //                   this.score + curUser[key].scoreObject[0].noviceScore,
    //               },
    //               {casualScore: curUser[key].scoreObject[1].casualScore},
    //               {proScore: curUser[key].scoreObject[2].proScore},
    //               {legendScore: curUser[key].scoreObject[3].legendScore},
    //               {email: user.email},
    //             ];
    //             // } else {
    //             //   scoreObject = oldScoreObject;
    //             // }
    //           } else if (this.props.id === 1) {
    //             // if (this.score > curUser[key].scoreObject[1].casualScore) {
    //             scoreObject = [
    //               {noviceScore: curUser[key].scoreObject[0].noviceScore},
    //               {
    //                 casualScore:
    //                   this.score + curUser[key].scoreObject[1].casualScore,
    //               },
    //               {proScore: curUser[key].scoreObject[2].proScore},
    //               {legendScore: curUser[key].scoreObject[3].legendScore},
    //               {email: user.email},
    //             ];
    //             // } else {
    //             //   scoreObject = oldScoreObject;
    //             // }
    //           } else if (this.props.id === 2) {
    //             // if (this.score > curUser[key].scoreObject[2].proScore) {
    //             scoreObject = [
    //               {noviceScore: curUser[key].scoreObject[0].noviceScore},
    //               {casualScore: curUser[key].scoreObject[1].casualScore},
    //               {proScore: this.score + curUser[key].scoreObject[2].proScore},
    //               {legendScore: curUser[key].scoreObject[3].legendScore},
    //               {email: user.email},
    //             ];
    //             // } else {
    //             //   scoreObject = oldScoreObject;
    //             // }
    //           } else if (this.props.id === 3) {
    //             // if (this.score > curUser[key].scoreObject[3].legendScore) {
    //             scoreObject = [
    //               {noviceScore: curUser[key].scoreObject[0].noviceScore},
    //               {casualScore: curUser[key].scoreObject[1].casualScore},
    //               {proScore: curUser[key].scoreObject[2].proScore},
    //               {
    //                 legendScore:
    //                   this.score + curUser[key].scoreObject[3].legendScore,
    //               },
    //               {email: user.email},
    //             ];
    //             // } else {
    //             //   scoreObject = oldScoreObject;
    //             // }
    //           }
    //           // console.log('score card now', curUser[key]);
    //           // console.log('key', key);
    //           database()
    //             .ref('/Score')
    //             .child(key)
    //             .update({scoreObject: scoreObject})
    //             .then(() => {
    //               database()
    //                 .ref('/Score')
    //                 .once('value')
    //                 .then(snapshot => {
    //                   // console.log('Score data: ', snapshot.val());
    //                 });
    //             });
    //         }
    //       }
    //     });
    // } else {
    //   console.log('sign in first');
    // }

    // const scoreCard = (
    //   <ScoreCard
    //     score={this.score}
    //     navigation={this.props.navigation}
    //     user={userPresent}
    //     category={this.props.id}
    //   />
    // );
    // return scoreCard;
  }
  getImages(imagesArray) {
    return (
      <View
        style={{
          flexDirection: 'row',
          // backgroundColor:'red',
          // width:'80%',
          // justifyContent:'space-around'
        }}>
        {imagesArray.map(img => (
          <Image
            source={img}
            style={{
              width: 30,
              height: 35,
              marginRight: '2%',
              borderWidth: 1,
              borderColor: 'black',
            }}
          />
        ))}
      </View>
    );
  }
  syncTrack() {
    if (this.props.quesTrack.length > 0 && this.props.quesTrack[0] == 1) {
      this.setState({
        firstTrack: 'check',
        firstTrackColor: '#4eff4e',
      });
    } else if (
      this.props.quesTrack.length > 0 &&
      this.props.quesTrack[0] == -1
    ) {
      this.setState({
        firstTrack: 'cross',
        firstTrackColor: 'red',
      });
    }
    if (this.props.quesTrack.length > 0 && this.props.quesTrack[1] == 1) {
      this.setState({
        secondTrack: 'check',
        secondtTrackColor: '#4eff4e',
      });
    } else if (
      this.props.quesTrack.length > 0 &&
      this.props.quesTrack[1] == -1
    ) {
      this.setState({
        secondTrack: 'cross',
        secondtTrackColor: 'red',
      });
    }
    if (this.props.quesTrack.length > 0 && this.props.quesTrack[2] == 1) {
      this.setState({
        thirdTrack: 'check',
        thirdTrackColor: '#4eff4e',
      });
    } else if (
      this.props.quesTrack.length > 0 &&
      this.props.quesTrack[2] == -1
    ) {
      this.setState({
        thirdTrack: 'cross',
        thirdTrackColor: 'red',
      });
    }
    if (this.props.quesTrack.length > 0 && this.props.quesTrack[3] == 1) {
      this.setState({
        fourthTrack: 'check',
        fourthTrackColor: '#4eff4e',
      });
    } else if (
      this.props.quesTrack.length > 0 &&
      this.props.quesTrack[3] == -1
    ) {
      this.setState({
        fourthTrack: 'cross',
        fourthTrackColor: 'red',
      });
    }
    if (this.props.quesTrack.length > 0 && this.props.quesTrack[4] == 1) {
      this.setState({
        fifthTrack: 'check',
        fifthTrackColor: '#4eff4e',
      });
    } else if (
      this.props.quesTrack.length > 0 &&
      this.props.quesTrack[4] == -1
    ) {
      this.setState({
        fifthTrack: 'cross',
        fifthTrackColor: 'red',
      });
    }
  }
  render() {
    var questionSet = <View />;
    if (this.state.newGame < 5) {
      questionSet = (
        <View
          style={{
            backgroundColor: color17,
            width: '100%',
            height: '100%',
            zIndex: 0,
            flexDirection: 'column',
            // flexGrow: 1,
          }}>
          {/* Top strip of question no , timer, score */}
          <View
            style={{
              backgroundColor: color18,

              width: '100%',
              height: '40%',
              // borderBottomLeftRadius: 190,
              // borderBottomRightRadius: 190,
              // justifyContent: 'space-evenly',
              // justifyContent:'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <View
              style={{
                width: '100%',
                height: '20%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  // backgroundColor: 'blue',
                  width: '20%',
                  height: '100%',
                  marginLeft: '3%',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  {/* <Icon name="rocket" size={30} color="#900" /> */}
                <AIcon
                  name="arrowleft"
                  color={'white'}
                  size={30}
                  // style={{marginLeft: '3%'}}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                />
              </View>
              <View style={{
                // backgroundColor:'green',
                width:'53%',
                height:'100%',
                alignSelf:'center',
                justifyContent:"center",
                alignItems:'center'
              }}>

              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  alignSelf:'center',
                  // fontWeight: 'bold',
                  fontFamily: 'Lato-Black',
                }}>
                {this.props.level}
              </Text>
              </View>


              <View
                style={{
                  // backgroundColor: 'blue',
                  width: '20%',
                  height: '100%',
                  marginRight: '3%',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 28,
                  
                    fontFamily: 'Lato-Black',
                    // width:'80%'
                  }}>
                  {this.state.newGame + 1}/5
                </Text>
              </View>

              {/* <EIcon
              name="dots-three-horizontal"
              color={'white'}
              size={RFValue(30)}
              style={{marginRight: '3%'}}
            /> */}
            </View>
            {/* dots */}
            <View
              style={{
                // backgroundColor: 'black',
                // opacity:0.5,
                // backgroundColor:'yellow',
                width: '100%',
                height: '20%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderRadius: 20,
              }}>
              <EIcon
                name={this.state.firstTrack}
                color={this.state.firstTrackColor}
                size={25}
              />
              <EIcon
                name={this.state.secondTrack}
                color={this.state.secondtTrackColor}
                size={25}
              />
              <EIcon
                name={this.state.thirdTrack}
                color={this.state.thirdTrackColor}
                size={25}
              />
              <EIcon
                name={this.state.fourthTrack}
                color={this.state.fourthTrackColor}
                size={25}
              />
              <EIcon
                name={this.state.fifthTrack}
                color={this.state.fifthTrackColor}
                size={25}
              />
            </View>
            {/* ques */}
            <View
              style={{
                // backgroundColor:'red',
                width: '80%',
                height: '50%',
                justifyContent: 'center',
                alignItems: 'center',
                // marginTop: '3%',
              }}>
              <Text
                style={{
                  color: 'white',

                  textAlign: 'center',
                  fontSize: 15,

                  fontFamily: 'Lato-Black',
                  letterSpacing: 2,
                  // fontWeight: '400',
                }}>
                {this.props.cards[this.state.newGame].question}
              </Text>
            </View>
            {/* timer */}
            {this.state.timerStart ? (
              <View
                style={{
                  backgroundColor: '#f6f6f6',
                  position: 'absolute',
                  top: '83%',
                  borderRadius: 100,
                  padding: '1%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <QuizTimerNew
                  nextQuestion={this.nextQuestion.bind(this)}
                  // isVisisble={this.state.timerStart}
                />
              </View>
            ) : null}
          </View>

          {/* bottom block */}

          <View
            style={{
              backgroundColor: '#f6f6f6',
              width: '100%',
              height: '50%',
              marginTop: '10%',
              alignItems: 'center',
              // justifyContent:'center'
              justifyContent: 'space-evenly',
            }}>
            {/* options */}

            {/* Options */}
            <TouchableOpacity
              disabled={this.state.disabled}
              style={{
                backgroundColor: 'white',
                // backgroundColor: '#F8F8FF',
                width: '80%',
                height: '20%',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.51,
                shadowRadius: 13.16,

                elevation: 20,
                borderWidth: 3,
                borderColor: this.state.colorA,
              }}
              onPress={() => this.optionASelected()}>
              {this.props.cards[this.state.newGame].image ? (
                this.getImages(
                  this.props.cards[this.state.newGame].optionAimages,
                )
              ) : (
                <Text
                  style={{
                    fontSize: 18,
                    // fontWeight: 'bold',
                    fontFamily: 'Lato-Bold',
                    color: this.state.textColorA,
                  }}>
                  {this.props.cards[this.state.newGame].optionA}
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              disabled={this.state.disabled}
              style={{
                backgroundColor: 'white',
                // backgroundColor: '#F8F8FF',
                width: '80%',
                height: '20%',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.51,
                shadowRadius: 13.16,

                elevation: 20,
                borderWidth: 3,
                borderColor: this.state.colorB,
              }}
              onPress={() => this.optionBSelected()}>
              {this.props.cards[this.state.newGame].image ? (
                this.getImages(
                  this.props.cards[this.state.newGame].optionBimages,
                )
              ) : (
                <Text
                  style={{
                    fontSize: 18,
                    // fontWeight: 'bold',
                    fontFamily: 'Lato-Bold',
                    color: this.state.textColorB,
                  }}>
                  {this.props.cards[this.state.newGame].optionB}
                </Text>
              )}
            </TouchableOpacity>
            {this.props.cards[this.state.newGame].numberOfOptions === '4' ? (
              <TouchableOpacity
                disabled={this.state.disabled}
                style={{
                  backgroundColor: 'white',
                  // backgroundColor: '#F8F8FF',
                  width: '80%',
                  height: '20%',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.51,
                  shadowRadius: 13.16,

                  elevation: 20,
                  borderWidth: 3,
                  borderColor: this.state.colorC,
                }}
                onPress={() => this.optionCSelected()}>
                {this.props.cards[this.state.newGame].image ? (
                  this.getImages(
                    this.props.cards[this.state.newGame].optionCimages,
                  )
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      // fontWeight: 'bold',
                      fontFamily: 'Lato-Bold',
                      color: this.state.textColorC,
                    }}>
                    {this.props.cards[this.state.newGame].optionC}
                  </Text>
                )}
              </TouchableOpacity>
            ) : null}
            {this.props.cards[this.state.newGame].numberOfOptions === '4' ? (
              <TouchableOpacity
                disabled={this.state.disabled}
                style={{
                  backgroundColor: 'white',
                  // backgroundColor: '#F8F8FF',
                  width: '80%',
                  height: '20%',
                  borderRadius: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.51,
                  shadowRadius: 13.16,

                  elevation: 20,
                  borderWidth: 3,
                  borderColor: this.state.colorD,
                }}
                onPress={() => this.optionDSelected()}>
                {this.props.cards[this.state.newGame].image ? (
                  this.getImages(
                    this.props.cards[this.state.newGame].optionDimages,
                  )
                ) : (
                  <Text
                    style={{
                      fontSize: 18,
                      // fontWeight: 'bold',
                      color: this.state.textColorD,
                      fontFamily: 'Lato-Bold',
                    }}>
                    {this.props.cards[this.state.newGame].optionD}
                  </Text>
                )}
              </TouchableOpacity>
            ) : null}
          </View>
          {this.state.explanationChoice ? (
            <Modal
              transparent={true}
              animationType="fade"
              // onRequestClose={() => {
              //   console.log('banner closed');
              //   this.props.close();
              // //   this.setState({popup: !this.state.popup});
              // }}
            >
              <View
                style={{
                  flex: 1,
                  flexGrow: 1,
                  backgroundColor: 'black',
                  opacity: 0.9,

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    // flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-evenly',
                    // backgroundColor: 'pink',
                    height: '70%',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // marginTop: '1%',
                  }}>
                  <Text
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontFamily: 'Lato-Black',
                    }}>
                    Wrong
                  </Text>
                  <Text
                    style={{
                      fontSize: 60,
                      color: 'white',
                      fontFamily: 'Lato-Black',
                    }}>
                    Answer
                  </Text>
                  <EIcon
                    name={'circle-with-cross'}
                    color="red"
                    size={80}
                  />
                  <Text
                    style={{
                      fontSize: 30,
                      color: 'white',
                      fontFamily: 'Lato-BoldItalic',
                    }}>
                    Want to know why?
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      height: 50,
                      width: 200,
                      borderRadius: 30,
                      borderColor: '000320',
                      borderWidth: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.setState({explanation: true,explanationChoice:false});
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: 'Lato-Black',
                        // fontWeight: '600',
                        color: 'black',

                        // backgroundColor:'green',
                      }}>
                      Explanation
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 30,
                      color: 'white',
                      fontFamily: 'Lato-BoldItalic',
                    }}>
                    Move on to next question
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'white',
                      height: 50,
                      width: 200,
                      borderRadius: 30,
                      borderColor: '000320',
                      borderWidth: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      this.loadNextQuestion(0);
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: 'Lato-Black',
                        // fontWeight: '600',
                        color: 'black',

                        // backgroundColor:'green',
                      }}>
                      Next Question
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          ) : null}

          {this.state.explanation ? (
            <Modal
              transparent={true}
              animationType="fade"
              // onRequestClose={() => {
              //   console.log('banner closed');
              //   this.props.close();
              // //   this.setState({popup: !this.state.popup});
              // }}
            >
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.9,
                  width: '100%',
                  height: '100%',
                  flexGrow: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                  flex: 1,
                  position: 'absolute',
                  left: 0,
                  top: 0,
                
                }}>
                <View
                  style={{
                    width: '80%',
                    backgroundColor: '#4a4a4c',
                    height: '50%',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    // borderColor: "grey",
                    // borderWidth: 6,
                    flexDirection:'column',
                    borderRadius: 10,
                  }}>
                      <EIcon
                    name={'light-bulb'}
                    color="yellow"
                    size={80}
                  />
                  <Text
                    style={{
                      fontSize: 40,
                      fontFamily: 'Lato-Black',
                      color: 'white',
                      width: '90%',
                      textAlign:'center',
                      // backgroundColor:'red',
                      marginBottom: '3%',
                      // marginTop:'2%'
                      // textAlign:'auto',
                    }}>
                    Explanation:{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: 'Lato-Regular',
                      color: 'white',
                      width: '90%',
                      textAlign: 'justify',
                      // backgroundColor:'green',
                    }}>
                    {this.props.cards[this.state.newGame].explanation}
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: 'Lato-Black',
                    color: 'white',
                    marginTop:"5%"
                  }}
                  onPress={() => {
                    this.loadNextQuestion(0);
                  }}>
                  Click here for next question.
                </Text>
              </View>
            </Modal>
          ) : null}
          {/* <BackButton navigation={this.props.navigation} /> */}
        </View>
      );
    } else {
      questionSet = <View />;
    }

    return this.state.newGame < 5 ? questionSet : this.generateScoreCard();
  }
}
