const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card;
  let turn1;
  let turn2;
  
  beforeEach(() => {
    card = new Card(1, 'Test question', ['Correct Aaswer', 'Wrong answer'], 'Correct answer');
    turn1 = new Turn('Correct answer', card);
    turn2 = new Turn('Wrong answer', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn1).to.be.an.instanceOf(Turn);
  });

  it('should take in the arguments for the user guess and the current Card object in play', () => {
    expect(turn1.userAnswer).to.equal('Correct answer');
    expect(turn1.currentCard).to.equal(card);
  });

  it('should have a method that returns the guess', () => {
    turn1.returnGuess();

    expect(turn1.returnGuess()).to.equal('Correct answer');
  });

  it('should have a method that returns the Card', () => {
    turn1.returnCard();

    expect(turn1.returnCard()).to.equal(card);
  });

  it('should have a method that returns a boolean indicating if the user\'s guess matches the correct answer on the card', () => {
    turn1.evaluateGuess();

    expect(turn1.evaluateGuess()).to.be.a('boolean');
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('should have a method that returns either "incorrect!" or "correct!" based on whether the guess is correct or not', () => {
    turn1.giveFeedback();
    turn2.giveFeedback();
    
    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});