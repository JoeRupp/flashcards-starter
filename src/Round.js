const Turns = require("./Turns");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }

  takeTurn(userAnswer) {
    const currentTurn = new Turns(userAnswer, this.returnCurrentCard())
    this.turns++
    this.returnCurrentCard()
    if (userAnswer !== currentTurn.currentCard.correctAnswer) {
      this.incorrectGuesses.push(currentTurn.currentCard.id);
    }
    return currentTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round; 