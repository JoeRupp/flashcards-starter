const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Game', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;
  
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the currentRound', function() {
    // game.start()

    expect().to.equal();
  });

  it.skip('should use the start method to create Cards', function() {
    
    expect().to.equal();
  });

  it.skip('should use the start method to put the Cards in a Deck', function() {
    
    expect().to.equal();
  });

  it.skip('should use the start method to create a new Round using the Deck', function() {
    
    expect().to.equal();
  });

  it.skip('should use the start method to invoke the pintMessage to display on the CLI', function() {
    
    expect().to.equal();
  });

  it.skip('should use the start method to invoke the pintQuestion to kick off our helper functions that allow interaction via the CLI', function() {
    
    expect().to.equal();
  });
});