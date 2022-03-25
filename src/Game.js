const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
  };

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  };

  printQuestion(round) {
      util.main(round);
  };

  testStart() {
    const cards = prototypeQuestions.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
  };

  start() {
    this.testStart();
    const deck = this.currentRound.deck;
    const round = this.currentRound;
    this.printMessage(deck, round);
    this.printQuestion(round);
  };
};

module.exports = Game;