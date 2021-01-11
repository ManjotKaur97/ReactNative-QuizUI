import React, {Component} from 'react';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';

import {color13, color14, color15, color3} from '../ColorScheme';


export default class ScoreCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popup: false,
      quizPopUp: false,
      badgeTitle: 'null',
      headOverTo9stacks: false,
      msg: 'NA',
    };
    this.countConsecutiveFive = false;
  }
  componentDidMount() {
  }
  closePopup() {
    console.log('closwed');
    this.setState({
      quizPopUp: false,
      headOverTo9stacks: false,
    });
  }

  saveScore() {
    AsyncStorage.setItem('pointsToBeSaved', JSON.stringify(this.props.score));
    AsyncStorage.setItem('pointsCategory', JSON.stringify(this.props.category));
    this.setState({popup: true});

    console.log('SCORE SAVED', this.props.score);
  }

  scorecard(message) {
    const changeState = true;
    return (
      <View
        style={{
          backgroundColor: "#dfdfe5",
          flex: 1,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* score block */}
        <View
          style={{
            backgroundColor: "#f6f6f6",
            width: '80%',
            height: '60%',
            flexDirection: 'column',
            borderRadius:30,
            // justifyContent:'space-around',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.51,
            shadowRadius: 13.16,

            elevation: 20,
          }}>
          {/* heading message */}
          <View
            style={{
              flex: 1,
              flexGrow: 0.2,
              //  backgroundColor:'red',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20%',
            }}>
            <Text style={[styles.heading]}>Failure is the key to success.</Text>
            <Text style={[styles.heading]}>{message}!</Text>
          </View>
          {/* score board */}
          <View style={[styles.scoreboard]}>
            <Text style={[styles.yourscore]}>YOUR SCORE</Text>
            <View
              style={{
                // backgroundColor:'red',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={[styles.score]}>{this.props.score}</Text>
              <Text style={[styles.totalscore]}>/5</Text>
            </View>
          </View>

         
        </View>
        {/* buttons row */}
        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            height: '10%',
            alignItems: 'center',
            marginTop: '20%',
          }}>
          {/* <TouchableOpacity style={[styles.button]}
                                      onPress={() => {
                                          this.props.navigation.goBack()
                                      }}
                    >
                        <Text style={[styles.buttonText]}>MAIN MENU</Text>
                    </TouchableOpacity> */}
          {this.props.user === false ? (
            <TouchableOpacity
              style={[styles.button]}
              onPress={() => {
                this.saveScore();
              }}>
              <Text style={[styles.buttonText]}>SAVE SCORE</Text>
            </TouchableOpacity>
          ) : null}
        </View>

       
        {this.state.quizPopUp ? (
       
          
          <Popup
           message={this.state.msg} 
           close={this.closePopup.bind(this)}
            buttonText={"Skip"} 
            nameRequired={true}
      
            buttonMethod = {this.closePopup.bind(this)}
            ></Popup>
       
       ) : null}
          {this.state.headOverTo9stacks ? (
         <Popup 
         message={"Headover to 9stacks"}
          close={this.closePopup.bind(this)} 
          buttonText={"Skip"}
          nameRequired={true}
      
          buttonMethod = {this.closePopup.bind(this)} 
          ></Popup>
        ) : null}
        {/* <BackButton navigation={this.props.navigation} /> */}
      </View>
    );
  }
  checkBadgeDB(score) {
    const user = auth().currentUser;
    // console.log('current uid', user.uid);
    if (user!==null)
      Badges_Ref.orderByChild('uid')
        .equalTo(user.uid)
        .once('value')
        .then(snapshot => {
          var curUser = snapshot.val();
          console.log('Current User from quiz scorecard->', curUser);
          const AssignBadgesObject = new AssignBadges();
          if (curUser === null) {
            console.log('NEw LAD');
            AssignBadgesObject.initializeBadges();
          } else {
            console.log('score->',score)
            console.log('context',this.context)
            if (this.props.category === 0 && score === 5) {
              this.context.noviceScore5++;
            }
            if (this.props.category === 1 && score === 5) {
              this.context.casualScore5++;
            }
            if (this.props.category === 2 && score === 5) {
              this.context.proScore5++;
            }
            if (this.props.category === 3 && score === 5) {
              this.context.legendScore5++;
            }
            if (this.props.category === 0 && score === 0) {
              this.context.noviceScore0++;
            }
            if(this.context.noviceScore5 === 5 || 
              this.context.casualScore5 === 5 ||
              this.context.proPoker5 === 5 ||
              this.context.legendScore5 === 5||
              this.context.noviceScore0 === 5||
              this.context.casualScore0 === 5||
              this.context.proPoker0 === 5||
              this.context.legendScore0 === 5
              )
            AssignBadgesObject.checkBadges(this.context, this.props.category);
            for (const key in curUser) {
            
              if (this.context.legendScore5 === 5 && curUser[key].proPoker === false) {
                this.setState({
                  quizPopUp: true,
                  badgeTitle: 'Pro Poker',
                  msg:  "Pro Poker Unlocked"
                });
              }
             else if (this.context.noviceScore5 === 5 && curUser[key].pickingUpSteam === false) {
                this.setState({
                  quizPopUp: true,
                  badgeTitle: 'Picking Up the steam',
                  msg: "Picking Up the steam Unlocked"
                });
              }
              else if (this.context.casualScore5 === 5 && curUser[key].somewhereIntheMiddle === false) {
                this.setState({
                  quizPopUp: true,
                  badgeTitle: 'Somewhere in the Middle',
                  msg: "Somewhere in the Middle Unlocked"
                });
              }
             else  if (this.context.proScore5 === 5 && curUser[key].pokerSavvy === false) {
                this.setState({
                  quizPopUp: true,
                  badgeTitle: 'Poker Savvy',
                  msg:  "Poker Savvy Unlocked"
                });
              }
              else  if (this.context.noviceScore0 === 5 && curUser[key].tumseNaHoPayega === false) {
                this.setState({
                  quizPopUp: true,
                  badgeTitle: 'Tumse Na Ho Payega!',
                  msg: "Tumse Na Ho Payega! Unlocked"
                });
              }
            }
            
          
          }
        });
    // return false;
  }

  render() {


    if (this.props.score === 5) {
   
      return this.scorecard('Congratulations!');
    } 
    else if (this.props.score === 0) {
  
      return this.scorecard('You have long way to go!');
    } 
    else if (this.props.score === 1 || this.props.score === 2) {

      return this.scorecard('Better Luck Next Time!');
    } else {
      
     
      console.log('contextttt->',this.context)
      return this.scorecard('Well Done!');
    }
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: color13,
    height: 40,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: color14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 18,
    // width:'100%',
    // backgroundColor:'green',
  },
  heading: {
    color: "black",
   fontFamily: "Lato-BoldItalic",
    fontSize: 19,
  },
  scoreboard: {
    backgroundColor: "#000320",
    width: '60%',
    height: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    borderRadius:30,
  },
  yourscore: {
    color: 'white',
    fontFamily: "Lato-Bold",
    // fontFamily: 'Roboto',
    // fontWeight: 'bold',
    fontSize: 18,
  },
  score: {
    color: "white",
    // fontFamily: 'Roboto',
    fontFamily: "Lato-Bold",
    fontSize: 80,
    bottom: '5%',
    textAlign: 'center',
    // backgroundColor:'green',
  },
  totalscore: {
    color: "white",
    // fontFamily:'Lato',
    fontFamily: "Lato-Bold",
    fontSize: 60,
    textAlign: 'center',
    // backgroundColor:'yellow',
  },
  share: {
    backgroundColor: '#000320',
    width: '100%',
    height: '30%',
    marginTop: '10%',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //  bordertop
  },
  share_icons: {
    width: 40,
    height: 40,
  },
});
