class Turn {
  constructor(userAnswer, currentCard) {
    this.userAnswer = userAnswer;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userAnswer;
  }
  
  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return this.userAnswer === this.currentCard.correctAnswer;
  }

  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;