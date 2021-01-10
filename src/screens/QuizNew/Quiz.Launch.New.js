import React, {Component} from 'react';
import {Text, Thumbnail, View, Card, Button, CardItem} from 'native-base';
// import Quiz from './quiz';



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
        question: 'Poker is a skill game not gambling?',
        optionA: 'TRUE',
        optionB: 'FALSE',
        optionC: 'NONE',
        optionD: 'NONE',
        hint: 'Hint',
        image: false,
        answer: 'a',
        explanation: 'knowledge of probability + adjustment = poker',
        numberOfOptions: '2',
      },
      {
        id: 1,
        text: 'Question Title2',
        question: 'How many cards are there in a poker deck?',
        optionA: '52',
        optionB: '48',
        optionC: '33',
        optionD: '21',
        hint: 'Hint',
        image: false,
        answer: 'a',
        explanation: '13(types)*4(suits)=52',
        numberOfOptions: '4',
      },
      {
        id: 2,
        text: 'Question Title3',
        question: 'How many suits are there in a poker deck?',
        optionA: '4',
        optionB: '2',
        optionC: '1',
        optionD: '3',
        hint: 'Hint',
        image: false,
        answer: 'a',
        explanation: 'Hearts,Spades,Clubs,Diamond',
        numberOfOptions: '4',
      },
      {
        id: '3',
        text: 'Question Title4',
        question: 'Which of the following combination wins? ',
        optionA: 'Straight',
        optionB: 'Flush',
        optionC: 'Pair',
        optionD: 'Three of a kind ',
        hint: 'Hint',
        image: false,
        answer: 'b',
        explanation: 'see poker hand ranking',
        numberOfOptions: '4',
      },
      {
        id: '4',
        text: 'Question Title5',
        question: 'Which of the following is a high card? ',
        optionA: 'A',
        optionB: 'J',
        optionC: 'K',
        optionD: 'Q',
        hint: 'Hint',
        image: false,

        // optionAimages: [hearts_a],
        // optionBimages: [hearts_j],
        // optionCimages: [hearts_k],
        // optionDimages: [hearts_q],
        answer: 'a',
        explanation: 'A,s rank is high followed by K,Q,J,T.9.8.7.6.........,2',
        numberOfOptions: '4',
      },
    ];
    // this.IntermediateCards = [
    //   {
    //     text: 'Question Title1',
    //     question:
    //       'Which of the following two cards have more probability to win?',
    //     optionA: 'AS7D',
    //     optionB: 'KHQH',
    //     optionC: 'AH6D',
    //     optionD: 'KD10D',
    //     hint: 'Hint',
    //     image: true,
    //     optionAimages: [spade_a, di_7],
    //     optionBimages: [hearts_k, hearts_q],
    //     optionCimages: [hearts_a, di_6],
    //     optionDimages: [di_k, di_10],
    //     answer: 'a',
    //     explanation: 'winning % of AsTd=53.2, KhQh= 46.08 ',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title2',
    //     question: 'Which one of the following combination wins?',
    //     optionA: '2222A',
    //     optionB: 'AAAKK',
    //     optionC: 'AAKKQ',
    //     optionD: 'KKKAA',
    //     hint: 'Hint',
    //     image: true,
    //     optionAimages: [di_2, spade_2, clubs_2, hearts_2, di_a],
    //     optionBimages: [hearts_a, di_a, spade_a, hearts_k, clubs_k],
    //     optionCimages: [hearts_a, di_a, spade_k, clubs_k, clubs_q],
    //     optionDimages: [spade_k, di_k, clubs_k, hearts_a, spade_a],
    //     answer: 'a',
    //     explanation: 'Four of a kind ranked higer than full house',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title3',
    //     question:
    //       'In poker an early position gets to act first, is that an advantage?',
    //     optionA: 'TRUE',
    //     optionB: 'FALSE',
    //     optionC: 'NONE',
    //     optionD: 'NONE',
    //     hint: 'Hint',

    //     answer: 'b',
    //     explanation:
    //       'The primary advantage held by a player in late position is that he will have more information with which to make better decisions than players in early position, who will have to act first, without the benefit of this extra information',
    //     numberOfOptions: '2',
    //   },
    //   {
    //     text: 'Question Title4',
    //     question: 'What is the second highest combination in Poker?',
    //     optionA: 'Four of a Kind',
    //     optionB: 'Straight Flush',
    //     optionC: 'Flush',
    //     optionD: 'Full house',
    //     hint: 'Hint',

    //     answer: 'b',
    //     explanation: 'see poker hand ranking',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title5',
    //     question: 'Which if the following has a higher probability of winning?',
    //     optionA: '33',
    //     optionB: 'AK',
    //     optionC: 'A5',
    //     optionD: 'KQ',
    //     hint: 'Hint',
    //     image: true,
    //     optionAimages: [di_3, spade_3],
    //     optionBimages: [hearts_a, spade_k],
    //     optionCimages: [hearts_a, spade_5],
    //     optionDimages: [hearts_k, spade_q],
    //     answer: 'a',
    //     explanation: 'pair of 3',
    //     numberOfOptions: '4',
    //   },
    // ];
    // this.proCards = [
    //   {
    //     text: 'Question Title1',
    //     question:
    //       'How many card from deck can help you to win in case of open-ender? example 10h-Jd-8c-9c',
    //     optionA: '8',
    //     optionB: '10',
    //     optionC: '9',
    //     optionD: '11',
    //     hint: 'Hint',

    //     answer: 'a',
    //     explanation:
    //       'Open ender completes with two types of card , where we have four suits = 2*4=8. Example ans: 7h,7d,7c,7s , Qh,qd,qc,qs completes the straight ',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title2',
    //     question:
    //       'How many card from deck can help you to win in case of open-ender flush draw? example 10h-Jh-8h-9h',
    //     optionA: '15',
    //     optionB: '17',
    //     optionC: '14',
    //     optionD: '16',
    //     hint: 'Hint',

    //     answer: 'a',
    //     explanation:
    //       'For open ender to complete= 8, for flush to complete = 9 , two cards which complete straigh and flush both will be counted twice. So the answer = 9+8-2=15',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title3',
    //     question:
    //       'You are playing 100/200 blinds (200BB effective, you raise from the cut-off with 10h9h and the big blind calls. The board comes [10h-Kh-3d] and the big blind checks to you. What should you do?',
    //     optionA: 'Check',
    //     optionB: 'Raise',
    //     optionC: 'All-in',
    //     optionD: 'Fold',
    //     hint: 'Hint',

    //     answer: 'b',
    //     explanation:
    //       'You have straight flush draw , where 15 cards from the dec helps you make the strong hand, so you can raise here.',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title4',
    //     question:
    //       'From which position do starting hands like small pocket pairs and suited connectors play best?',
    //     optionA: 'Middle',
    //     optionB: 'Late',
    //     optionC: 'Small Blind',
    //     optionD: 'Big blind',
    //     hint: 'Hint',

    //     answer: 'b',
    //     explanation:
    //       'Small pockets or suited connected are best to play from late position as you can have more information as most of the players will play before you.',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title5',
    //     question:
    //       "What is the term that's used to describe when a hand that is made with both the turn and the river cards.",
    //     optionA: 'Runner-Runner',
    //     optionB: 'Double belly buster',
    //     optionC: 'Floped',
    //     optionD: 'Turned',
    //     hint: 'Hint',

    //     answer: 'a',
    //     explanation:
    //       "Runner-Runner is used to describe catching running cards on the turn and river in Hold'em and Omaha",
    //     numberOfOptions: '4',
    //   },
    // ];
    // this.legendCards = [
    //   {
    //     text: 'Question Title1',
    //     question: 'Which has better probability to win the hand?',
    //     optionA: '7S6S',
    //     optionB: '8H2D',
    //     optionC: '2S7H',
    //     optionD: '2S7S',
    //     hint: 'Hint',
    //     image: true,
    //     optionAimages: [spade_7, spade_6],
    //     optionBimages: [hearts_8, di_2],
    //     optionCimages: [spade_2, hearts_7],
    //     optionDimages: [spade_2, spade_7],
    //     answer: 'a',
    //     explanation:
    //       'Probability of suited cards is more than non suited cards and after that rank of card is considered',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title2',
    //     question: 'Which has better probability to win the hand?',
    //     optionA: '7S6S',
    //     optionB: '8D2D',
    //     optionC: '2S7H',
    //     optionD: '2S7S',
    //     hint: 'Hint',
    //     image: true,
    //     optionAimages: [spade_7, spade_6],
    //     optionBimages: [di_8, di_2],
    //     optionCimages: [spade_2, hearts_7],
    //     optionDimages: [spade_2, spade_7],
    //     answer: 'b',
    //     explanation:
    //       'Probability of suited cards is more than non suited cards and after that rank of card is considered',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title3',
    //     question:
    //       'What is the approx probability of winning of KCQC over AD8D? ',
    //     optionA: '43',
    //     optionB: '39',
    //     optionC: '53',
    //     optionD: '35',
    //     hint: 'Hint',

    //     answer: 'a',
    //     explanation: ' The probability of winning of KcQc over Ad8d is 43.41%',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title4',
    //     question:
    //       'With 19 big blinds effective, the Button min-raises and you call in the big blind with 8d10d. The flop comes [9d-4h-7d]. You check and the BTN bets 3 big blinds. What should you do?',
    //     optionA: 'Call',
    //     optionB: 'Jam',
    //     optionC: 'Fold',
    //     optionD: 'Re-Raise',
    //     hint: 'Hint',

    //     answer: 'b',
    //     explanation:
    //       'You have straight flush draw , where 15 cards from the dec helps you make the strong hand, so you can jam here.  JAm is better than raise as you have small stack',
    //     numberOfOptions: '4',
    //   },
    //   {
    //     text: 'Question Title5',
    //     question:
    //       'With 100BBs effective stack, you have 9h8h in the big blind. The LoJack raises to 3BBs, the Cut-Off, Button and you call in the big blind. The board comes [Tc-Jc-2s]. You check, the LoJack bets 8.5BBs, the Cut-Off calls and the Button raises to 32BBs. What should you do?',
    //     optionA: 'Call',
    //     optionB: 'Fold',
    //     optionC: 'Jam',
    //     optionD: 'Re-Raise',
    //     hint: 'Hint',

    //     answer: 'b',
    //     explanation:
    //       'You have straight draw , where only 8 cards will help you win but all others are not making a strong hand, also there are two players who are showing strwength so, folding is a good option here',
    //     numberOfOptions: '4',
    //   },
    // ];
  }
  deleteDatabase() {
    database()
      .ref('/TEST-BADGES')
      .remove();
  }
 
  componentDidMount() {
  //  this.deleteDatabase();
   
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
  generateRandomQuiz(cards) {
    this.tempCards = cards;
    console.log('inside generate random quiz');
    // console.log('temp cards', this.noviceCardsPool);
    // console.log('novice cards pool',noviceCardsPool)
    var random, pos;
    for (let index = 0; index < 5; index++) {
      random = Math.floor(Math.random() * this.tempCards.length);
      this.noviceCards[index] = this.tempCards[random];
      // console.log('random',tempCards[random])
      pos = this.tempCards.indexOf(this.tempCards[random]);
      //  console.log('pos',pos)
      if (pos > -1) this.tempCards.splice(pos, 1);
      // console.log('now temp',tempCards)
    }
    // console.log('\n\n\n\ntemp cards',noviceCards)
    return this.noviceCards;
  }
  render() {
    // console.log('novice caards',noviceCards[0])
    // console.log('novice caards',noviceCards[1])
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
      <View></View>
      //    <Quiz cards={this.cardsParam} id={this.props.route.params.id} navigation={this.props.navigation}/>
      // <QuizNewStyle
      //   id={this.props.route.params.id}
      //   navigation={this.props.navigation}
      //   cards={this.cardsParam}
      //   quesTrack={this.quesTrack}
      //   level = {this.levelTitle}
      // />
    );
    const loading = (
      <View>
        <Text>loading</Text>
      </View>
    );
    return (
      // <View></View>
      this.state.change ? quizComponent : loading
    );
  }
}
