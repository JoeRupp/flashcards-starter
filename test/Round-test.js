const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turns = require('../src/Turns');

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();

    expect(round).to.be.an.instanceOf(Round);
  });

  it('should include a deck of cards', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.deck).to.equal(deck);
  });

  it('should have a method that returns the current card being played', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card);
  });

  it('should start with 0 turns', function() {
    const round = new Round();

    expect(round.turns).to.equal(0);
  });

  it('should have an empty array of incorrect guesses to start', function() {
    const round = new Round();

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should use the takeTurn method to return "correct!" if the answer is correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const deck = new Deck([card1]);
    const round = new Round(deck);

    expect(round.takeTurn('sea otter')).to.deep.equal('correct!');
  });

  it('should use the takeTurn method to return "incorrect!" if the answer is wrong', function() {
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card2]);
    const round = new Round(deck);

    expect(round.takeTurn('spleen')).to.deep.equal('incorrect!');
  });

  it('should use the takeTurn method to update the turns count in our Round class', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.turns).to.equal(2);
  });

  it('should use the takeTurn method to update the empty array of guesses in the Round class', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);
    
    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should use the takeTurn method to make the next card in the deck the current card', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.returnCurrentCard()).to.equal(card3);
  });

  it('should have a method that calculates and returns the percentage of correct guesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');
    round.takeTurn('spleen');

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should have a method that returns "** Round over! ** You answered <>% of the questions correctly!"', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});