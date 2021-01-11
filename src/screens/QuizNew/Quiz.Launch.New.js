import React, {Component} from 'react';
import {Text, Thumbnail, View, Card, Button, CardItem} from 'native-base';
import QuizNewStyle from './Quiz.New.Style';




export default class QuizLaunchNew extends Component {
  constructor(props) {
    super(props);
    this.cardsParam = [];
    this.state = {
      change: true,
      levelTitle : 'null'
      // toolTipVisible: true,
    };
    this. levelTitle = 'null'
    this.noviceCards = [];
    this.tempCards = [];
    this.quesTrack = [];
    this.noviceCardsPool = [
      {
        id: 0,
        text: 'Question Title1',
        question: 'Is sky blue?',
        optionA: 'TRUE',
        optionB: 'FALSE',
        optionC: 'NONE',
        optionD: 'NONE',
        hint: 'Hint',
        image: false,
        answer: 'a',
        explanation: 'sky is always blue',
        numberOfOptions: '2',
      },
      {
        id: 1,
        text: 'Question Title2',
        question: 'What is 2+2?',
        optionA: '4',
        optionB: '5',
        optionC: '6',
        optionD: '7',
        hint: 'Hint',
        image: false,
        answer: 'a',
        explanation: '2+2 = 4',
        numberOfOptions: '4',
      },
      {
        id: 2,
        text: 'Question Title3',
        question: 'What is 3+3?',
        optionA: '6',
        optionB: '1',
        optionC: '9',
        optionD: '3',
        hint: 'Hint',
        image: false,
        answer: 'a',
        explanation: '3+3 = 6',
        numberOfOptions: '4',
      },
      {
        id: '3',
        text: 'Question Title4',
        question: 'What is 4+4? ',
        optionA: '4',
        optionB: '8',
        optionC: '9',
        optionD: '5',
        hint: 'Hint',
        image: false,
        answer: 'b',
        explanation: '4+4 = 8',
        numberOfOptions: '4',
      },
      {
        id: '4',
        text: 'Question Title5',
        question: 'What is 5+5 = ?',
        optionA: '10',
        optionB: '4',
        optionC: '33',
        optionD: '2',
        hint: 'Hint',
        image: false,
        answer: 'a',
        explanation: '5+5 = 10',
        numberOfOptions: '4',
      },
    ];
  }

 
  componentDidMount() {

   
  }
  componentDidUpdate() {

  }
  generateRandomQuiz(cards) {
    this.tempCards = cards;
    console.log('inside generate random quiz');

    var random, pos;
    for (let index = 0; index < 5; index++) {
      random = Math.floor(Math.random() * this.tempCards.length);
      this.noviceCards[index] = this.tempCards[random];

      pos = this.tempCards.indexOf(this.tempCards[random]);

      if (pos > -1) this.tempCards.splice(pos, 1);

    }

    return this.noviceCards;
  }
  render() {

    if (this.props.route.params.id === 0) {
      this.levelTitle  = "NOVICE";
      console.log('Novice');

      this.cardsParam = this.generateRandomQuiz(this.noviceCardsPool);
      // console.log('cards from novice', this.cardsParam);
    } else if (this.props.route.params.id === 1) {
      // console.log('Intermediate');
      this.levelTitle="CASUAL"
      this.cardsParam = this.generateRandomQuiz(this.IntermediateCards);
    } else if (this.props.route.params.id === 2) {
      // console.log('Pro');
      this.levelTitle = "PRO"
      this.cardsParam = this.generateRandomQuiz(this.proCards);
    } else if (this.props.route.params.id === 3) {
      // console.log('legend');
      this.levelTitle  = "LEGEND"
      this.cardsParam = this.generateRandomQuiz(this.legendCards);
    }
    const quizComponent = (
 
      <QuizNewStyle
        id={this.props.route.params.id}
        navigation={this.props.navigation}
        cards={this.cardsParam}
        quesTrack={this.quesTrack}
        level = {this.levelTitle}
      />
    );
    const loading = (
      <View>
        <Text>loading</Text>
      </View>
    );
    return (

      this.state.change ? quizComponent : loading
    );
  }
}
