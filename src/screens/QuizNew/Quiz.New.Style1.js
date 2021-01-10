
import React, {Component} from 'react';
import {Text, Thumbnail, View, Card, Button, CardItem, Body} from 'native-base';

import TimerButton from './Quiz.Timer';
import QuizTimerNew from './Quiz.New.Timer';
import {TouchableOpacity, ScrollView, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {RFValue} from 'react-native-responsive-fontsize';
import EIcon from 'react-native-vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import ScoreCard from './Quiz.ScoreCard';
import {color1, color3, color4, color5, color11, color6} from '../ColorScheme';
import BackButton from '../BackButton';
import {ScoreRef, NewScoreRef} from '../DatabaseRefrences';

export default class QuizNewStyle extends Component {
  constructor(props) {
    super(props);

    this.score = 0;
    this.state = {
      newGame: 0,
      id: 0,
      timerStart: true,
      colorA: color11,
      textColorA: color4,
      colorB: color11,
      textColorB: color4,
      colorC: color11,
      textColorC: color4,
      colorD: color11,
      textColorD: color4,
      explanation: false,
      explanationChoice: false,
      clickableOptionA: false,
      clickableOptionB: false,
      clickableOptionC: false,
      clickableOptionD: false,
      disabled: false,
      headOverTo9stacks: 0,
    };
  }
  loadNextQuestion(t) {
    // console.log('okurrrr');
    setTimeout(() => {
      this.setState({
        newGame: this.state.newGame + 1,
        timerStart: true,
        colorA: color11,
        textColorA: color4,
        colorB: color11,
        textColorB: color4,
        colorC: color11,
        textColorC: color4,
        colorD: color11,
        textColorD: color4,
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
      this.score += 1;
      this.setState({
        colorA: 'green',
        textColorA: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
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
      this.score += 1;
      this.setState({
        colorB: 'green',
        textColorB: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
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
      this.score += 1;
      this.setState({
        colorC: 'green',
        textColorC: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
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
      this.score += 1;
      this.setState({
        colorD: 'green',
        textColorD: 'green',

        disabled: true,
      });
      this.loadNextQuestion(1000);
    } else {
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
    // database().ref('/users')
    //     .remove();
    var user = auth().currentUser;

    var userPresent = false;
    if (user !== null) {
      const ScoreRef =    database().ref('/users/score/' + user.uid);
    
      userPresent = true;
      ScoreRef
        .once('value')
        .then(snapshot => {
          
          const userScoreNode = snapshot.val();
          console.log('/users/score: ', userScoreNode);
          if (userScoreNode) {
            database()
            .ref('/users/score/' + user.uid)
              .update({
                score: this.score+userScoreNode.score,
              })
              .then(() => console.log('Data updated.'));
          } else {
            ScoreRef
              .set({
                score: this.score,
                date: new Date().getDate(),
                time: new Date().getTime(),
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1,
              })
              .then(() => console.log('Data set.'));
          }
        });
      
    } else {
      console.log('USER', user);
      console.log('sign in first');
    }

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
    var user = auth().currentUser;
    var userPresent = false;
    if (user !== null) {
      var scoreObject = [];
      userPresent = true;
      console.log('SCORECARD', scoreObject);

      // query to select score details from current user
      database()
        .ref('/Score')
        .orderByChild('email')
        .equalTo(user.email)
        .once('value')
        .then(snapshot => {
          var curUser = snapshot.val();
          // console.log('Selected User data: ', curUser);
          if (curUser === null) {
            // user is playing for first time
            console.log('NEW');
            if (this.props.id === 0) {
              scoreObject = [
                {noviceScore: this.score},
                {casualScore: 0},
                {proScore: 0},
                {legendScore: 0},
                {email: user.email},
              ];
            } else if (this.props.id === 1) {
              scoreObject = [
                {noviceScore: 0},
                {casualScore: this.score},
                {proScore: 0},
                {legendScore: 0},
                {email: user.email},
              ];
            } else if (this.props.id === 2) {
              scoreObject = [
                {noviceScore: 0},
                {casualScore: 0},
                {proScore: this.score},
                {legendScore: 0},
                {email: user.email},
              ];
            } else if (this.props.id === 3) {
              scoreObject = [
                {noviceScore: 0},
                {casualScore: 0},
                {proScore: 0},
                {legendScore: this.score},
                {email: user.email},
              ];
            }
            database()
              .ref('/Score')
              .push({
                scoreObject: scoreObject,
                email: user.email,
              })
              .then(() => {
                // console.log('score saved');
                database()
                  .ref('/Score')
                  .once('value')
                  .then(snapshot => {
                    // console.log('Score data: ', snapshot.val());
                  });
              });
          } else {
            console.log('score exist');

            for (const key in curUser) {
              // update user score
              // console.log('cur user', curUser[key]);
              if (this.props.id === 0) {
                // if (this.score > curUser[key].scoreObject[0].noviceScore) {
                scoreObject = [
                  {
                    noviceScore:
                      this.score + curUser[key].scoreObject[0].noviceScore,
                  },
                  {casualScore: curUser[key].scoreObject[1].casualScore},
                  {proScore: curUser[key].scoreObject[2].proScore},
                  {legendScore: curUser[key].scoreObject[3].legendScore},
                  {email: user.email},
                ];
                // } else {
                //   scoreObject = oldScoreObject;
                // }
              } else if (this.props.id === 1) {
                // if (this.score > curUser[key].scoreObject[1].casualScore) {
                scoreObject = [
                  {noviceScore: curUser[key].scoreObject[0].noviceScore},
                  {
                    casualScore:
                      this.score + curUser[key].scoreObject[1].casualScore,
                  },
                  {proScore: curUser[key].scoreObject[2].proScore},
                  {legendScore: curUser[key].scoreObject[3].legendScore},
                  {email: user.email},
                ];
                // } else {
                //   scoreObject = oldScoreObject;
                // }
              } else if (this.props.id === 2) {
                // if (this.score > curUser[key].scoreObject[2].proScore) {
                scoreObject = [
                  {noviceScore: curUser[key].scoreObject[0].noviceScore},
                  {casualScore: curUser[key].scoreObject[1].casualScore},
                  {proScore: this.score + curUser[key].scoreObject[2].proScore},
                  {legendScore: curUser[key].scoreObject[3].legendScore},
                  {email: user.email},
                ];
                // } else {
                //   scoreObject = oldScoreObject;
                // }
              } else if (this.props.id === 3) {
                // if (this.score > curUser[key].scoreObject[3].legendScore) {
                scoreObject = [
                  {noviceScore: curUser[key].scoreObject[0].noviceScore},
                  {casualScore: curUser[key].scoreObject[1].casualScore},
                  {proScore: curUser[key].scoreObject[2].proScore},
                  {
                    legendScore:
                      this.score + curUser[key].scoreObject[3].legendScore,
                  },
                  {email: user.email},
                ];
                // } else {
                //   scoreObject = oldScoreObject;
                // }
              }
              // console.log('score card now', curUser[key]);
              // console.log('key', key);
              database()
                .ref('/Score')
                .child(key)
                .update({scoreObject: scoreObject})
                .then(() => {
                  database()
                    .ref('/Score')
                    .once('value')
                    .then(snapshot => {
                      // console.log('Score data: ', snapshot.val());
                    });
                });
            }
          }
        });
    } else {
      console.log('sign in first');
    }

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
            style={{width: RFValue(30), height: RFValue(35), marginRight: '2%'}}
          />
        ))}
      </View>
    );
  }
  render() {
    var questionSet = <View />;
    if (this.state.newGame < 5) {
      questionSet = (
        <View
          style={{
            backgroundColor: color1,
            flexGrow: 1,
          }}>
          <View
            style={{
              zIndex: 0,
              flexDirection: 'column',
              // alignItems:'center',
            }}>
            {/* Top strip of question no , timer, score */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: '3%',
                // backgroundColor:'pink',
                height:'15%'
              }}>
              {/* Question number */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30%',
                  // backgroundColor:'green'
                }}>
                <Text
                  style={{
                    fontSize: RFValue(25),
                    color: color6,
                  }}>
                  {this.state.newGame + 1}/5
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(20),
                    color: color6,
                  }}>
                  Questions
                </Text>
              </View>
              {/* Timer */}
              <View
                style={{
                  // backgroundColor: 'green',
                  top: '2%',
                  alignItems: 'center',
                  marginBottom: '5%',
                  width: '30%',
                }}>
                {this.state.timerStart ? (
                  <QuizTimerNew
                    nextQuestion={this.nextQuestion.bind(this)}
                    // isVisisble={this.state.timerStart}
                  />
                ) : null}
              </View>
              {/* score */}
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor:'green',
                  width: '30%',
                }}>
                <Text
                  style={{
                    fontSize: RFValue(25),
                    color: color6,
                  }}>
                  {this.score}
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(20),
                    color: color6,
                  }}>
                  Score
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                height: '75%',
                // width: '100%',
                // backgroundColor:'green',
                // flexGrow:0.2,
              }}>
              {/* Question */}
              <View
                style={{
                  // backgroundColor: 'white',
                  backgroundColor: color3,
                  width: RFValue(370),
                  height: RFValue(150),
                  borderRadius: 10,
                  marginBottom: '3%',
                  marginTop: '3%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: color5,
                  borderWidth: 3,
                }}>
                <View
                  style={{
                    // backgroundColor:'green',
                    width: '90%',
                    height: '90%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: 'Monospace',
                      fontWeight: '600',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: color4,
                    }}>
                    {this.props.cards[this.state.newGame].question}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  // backgroundColor: 'white',
                  width: '100%',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '55%',
                }}>
                {/* Options */}
                <TouchableOpacity
                  disabled={this.state.disabled}
                  style={{
                    // backgroundColor: 'white',
                    backgroundColor: color3,
                    padding: '1%',
                    borderRadius: 50,
                    alignItems: 'center',
                    marginBottom: '2%',
                    width: '80%',
                    flexDirection: 'row',
                    borderColor: this.state.colorA,
                    borderWidth: 3,
                  }}
                  onPress={() => this.optionASelected()}>
                  <Text
                    style={{
                      backgroundColor: this.state.colorA,
                      paddingVertical: '3%',
                      paddingHorizontal: '5%',
                      marginRight: '5%',
                      marginLeft: '1%',
                      borderRadius: 100,
                      color: color6,
                      fontWeight: 'bold',
                      fontSize: RFValue(15),
                    }}>
                    A
                  </Text>
                  {this.props.cards[this.state.newGame].image ? (
                    this.getImages(
                      this.props.cards[this.state.newGame].optionAimages,
                    )
                  ) : (
                    <Text
                      style={{
                        fontSize: RFValue(18),
                        // fontWeight: 'bold',
                        color: this.state.textColorA,
                      }}>
                      {this.props.cards[this.state.newGame].optionA}
                    </Text>
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={this.state.disabled}
                  style={{
                    // backgroundColor: 'white',
                    backgroundColor: color3,
                    padding: '1%',
                    borderRadius: 50,
                    alignItems: 'center',
                    marginBottom: '2%',
                    width: '80%',
                    flexDirection: 'row',
                    borderColor: this.state.colorB,
                    borderWidth: 3,
                  }}
                  onPress={() => this.optionBSelected()}>
                  <Text
                    style={{
                      backgroundColor: this.state.colorB,
                      paddingVertical: '3%',
                      paddingHorizontal: '5%',
                      marginRight: '5%',
                      marginLeft: '1%',
                      borderRadius: 100,
                      color: color6,
                      fontWeight: 'bold',
                      fontSize: RFValue(15),
                    }}>
                    B
                  </Text>
                  {/* <Text
                    style={{
                      fontSize: RFValue(18),
                      // fontWeight: 'bold',
                      color: this.state.textColorB,
                    }}
                    >
                    {this.props.cards[this.state.newGame].optionB}
                  </Text> */}
                  {this.props.cards[this.state.newGame].image ? (
                    this.getImages(
                      this.props.cards[this.state.newGame].optionBimages,
                    )
                  ) : (
                    <Text
                      style={{
                        fontSize: RFValue(18),
                        // fontWeight: 'bold',
                        color: this.state.textColorB,
                      }}>
                      {this.props.cards[this.state.newGame].optionB}
                    </Text>
                  )}
                </TouchableOpacity>
                {this.props.cards[this.state.newGame].numberOfOptions ===
                '4' ? (
                  <TouchableOpacity
                    disabled={this.state.disabled}
                    style={{
                      // backgroundColor: 'white',
                      backgroundColor: color3,
                      padding: '1%',
                      borderRadius: 50,
                      alignItems: 'center',
                      marginBottom: '2%',
                      width: '80%',
                      flexDirection: 'row',
                      borderColor: this.state.colorC,
                      borderWidth: 3,
                    }}
                    onPress={() => this.optionCSelected()}>
                    <Text
                      style={{
                        backgroundColor: this.state.colorC,
                        paddingVertical: '3%',
                        paddingHorizontal: '5%',
                        marginRight: '5%',
                        marginLeft: '1%',
                        borderRadius: 100,
                        color: color6,
                        fontWeight: 'bold',
                        fontSize: RFValue(15),
                      }}>
                      C
                    </Text>
                    {/* <Text
                      style={{
                        fontSize: RFValue(18),
                        // fontWeight: 'bold',
                        color: this.state.textColorC,
                      }}>
                      {this.props.cards[this.state.newGame].optionC}
                    </Text> */}
                    {this.props.cards[this.state.newGame].image ? (
                      this.getImages(
                        this.props.cards[this.state.newGame].optionCimages,
                      )
                    ) : (
                      <Text
                        style={{
                          fontSize: RFValue(18),
                          // fontWeight: 'bold',
                          color: this.state.textColorC,
                        }}>
                        {this.props.cards[this.state.newGame].optionC}
                      </Text>
                    )}
                  </TouchableOpacity>
                ) : null}
                {this.props.cards[this.state.newGame].numberOfOptions ===
                '4' ? (
                  <TouchableOpacity
                    disabled={this.state.disabled}
                    style={{
                      // backgroundColor: 'white',
                      backgroundColor: color3,
                      padding: '1%',
                      borderRadius: 50,
                      alignItems: 'center',
                      // marginBottom: '2%',
                      width: '80%',
                      flexDirection: 'row',
                      borderColor: this.state.colorD,
                      borderWidth: 3,
                    }}
                    onPress={() => this.optionDSelected()}>
                    <Text
                      style={{
                        backgroundColor: this.state.colorD,
                        paddingVertical: '3%',
                        paddingHorizontal: '5%',
                        marginRight: '5%',
                        marginLeft: '1%',
                        borderRadius: 100,
                        color: color6,
                        fontWeight: 'bold',
                        fontSize: RFValue(15),
                      }}>
                      D
                    </Text>

                    {this.props.cards[this.state.newGame].image ? (
                      //  <Text>{this.props.cards[this.state.newGame].images[0]}
                      //  </Text>
                      // <Image
                      // source={this.props.cards[this.state.newGame].images[3]}
                      // style={{
                      //   width:RFValue(30),
                      //   height:RFValue(35)
                      // }}
                      // >

                      // </Image>
                      this.getImages(
                        this.props.cards[this.state.newGame].optionDimages,
                      )
                    ) : (
                      <Text
                        style={{
                          fontSize: RFValue(18),
                          // fontWeight: 'bold',
                          color: this.state.textColorD,
                        }}>
                        {this.props.cards[this.state.newGame].optionD}
                      </Text>
                    )}
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
            {this.state.explanationChoice ? (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-evenly',
                //   backgroundColor: 'red',
                  // marginTop: '1%',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: color3,
                    height: RFValue(50),
                    width: RFValue(100),
                    borderRadius: 10,
                    borderColor: color4,
                    borderWidth: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.setState({explanation: true});
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: 'Monospace',
                      fontWeight: '600',
                      color: color4,

                      // backgroundColor:'green',
                    }}>
                    Explanation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: color3,
                    height: RFValue(50),
                    width: RFValue(120),
                    borderRadius: 10,
                    borderColor: color4,
                    borderWidth: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    this.loadNextQuestion(0);
                  }}>
                  <Text
                    style={{
                      fontSize: RFValue(15),
                      fontFamily: 'Monospace',
                      fontWeight: '600',
                      color: color4,

                      // backgroundColor:'green',
                    }}>
                    Next Question
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          {this.state.explanation ? (
            <View
              style={{
                backgroundColor: '#808080',
                resizeMode: 'cover',
                width: '100%',
                height: '100%',
                flexGrow: 1,
                borderRadius: 10,
                // borderColor: color4,
                // borderWidth: 6,
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                flex: 1,
                position: 'absolute',
                left: 0,
                top: 0,
                opacity: 0.9,
              }}>
              <View
                style={{
                  width: '80%',
                  backgroundColor: color3,
                  height: '60%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: color4,
                  borderWidth: 6,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: RFValue(20),
                    fontFamily: 'Monospace',
                    fontWeight: 'bold',
                    color: color4,
                    width: '90%',
                    // backgroundColor:'red',
                    marginBottom: '3%',
                    // marginTop:'2%'
                    // textAlign:'auto',
                  }}>
                  Explanation:{' '}
                </Text>
                <Text
                  style={{
                    fontSize: RFValue(15),
                    fontFamily: 'Monospace',
                    fontWeight: '600',
                    color: color4,
                    width: '90%',
                    textAlign: 'auto',
                    // backgroundColor:'green',
                  }}>
                  {this.props.cards[this.state.newGame].explanation}
                </Text>
              </View>

              <Text
                style={{
                  fontSize: RFValue(15),
                  fontFamily: 'Monospace',
                  fontWeight: 'bold',
                  color: color3,
                }}
                onPress={() => {
                  this.loadNextQuestion(0);
                }}>
                Click here for next question.
              </Text>
            </View>
          ) : null}
          <BackButton navigation={this.props.navigation} />
        </View>
      );
    } else {
      questionSet = <View />;
    }

    return this.state.newGame < 5 ? questionSet : this.generateScoreCard();
  }
}
