const chai = require('chai');
const expect = chai.expect;

const Turns = require('../src/Turns');
const Card = require('../src/Card');

describe('Turns', function() {

  it('should be a function', function() {
    const turns = new Turns();

    expect(Turns).to.be.a('function');
  });

  it('should be an instance of Turns', function() {
    const turns = new Turns();

    expect(turns).to.be.an.instanceOf(Turns);
  });

  it('should take in the arguments for the user guess and the current Card object in play', function() {
    const card = new Card(1, 'Test question', ['Correct Aaswer', 'Wrong answer'], 'Correct answer')
    const turns = new Turns('Correct answer', card);

    expect(turns.userAnswer).to.equal('Correct answer');
    expect(turns.currentCard).to.equal(card);
  });

  it('should have a method that returns the guess', function() {
    const card = new Card(1, 'Test question', ['Correct Aaswer', 'Wrong answer'], 'Correct answer')
    const turns = new Turns('Correct answer', card);

    turns.returnGuess();

    expect(turns.returnGuess()).to.equal('Correct answer');
  });

  it('should have a method that returns the Card', function() {
    const card = new Card(1, 'Test question', ['Correct Aaswer', 'Wrong answer'], 'Correct answer')
    const turns = new Turns('Correct answer', card);

    turns.returnCard();

    expect(turns.returnCard()).to.equal(card);
  });

  it('should have a method that returns a boolean indicating if the user\'s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'Test question', ['Correct Aaswer', 'Wrong answer'], 'Correct answer')
    const turns = new Turns('Correct answer', card);

    turns.evaluateGuess();

    expect(turns.evaluateGuess()).to.be.a('boolean');
    expect(turns.evaluateGuess()).to.equal(true);
  });

  it('should have a method that returns either "incorrect!" or "correct!" based on whether the guess is correct or not', function() {
    const card = new Card(1, 'Test question', ['Correct Aaswer', 'Wrong answer'], 'Correct answer')
    const turns1 = new Turns('Correct answer', card);
    const turns2 = new Turns('Wrong answer', card);

    turns1.giveFeedback();
    turns2.giveFeedback();
    

    expect(turns1.giveFeedback()).to.equal('correct!');
    expect(turns2.giveFeedback()).to.equal('incorrect!');
  });
});