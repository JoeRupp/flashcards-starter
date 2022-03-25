const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', () => {

  let game;
  
  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the currentRound', () => {
    game.testStart()

    expect(game.currentRound).to.be.an.instanceOf(Round)
  });

  it('should use the start method to create instances of Card', () => {
    game.testStart()

    expect(game.currentRound.deck.cards[0]).to.deep.equal(data.prototypeData[0]);
    expect(game.currentRound.deck.cards[15]).to.deep.equal(data.prototypeData[15]);
    expect(game.currentRound.deck.cards.length).to.equal(data.prototypeData.length);
  });

  it('should use the start method to create an instance of Deck', () => {
    game.testStart()

    expect(game.currentRound.deck).to.exist;
  });

  it('should use the start method to create a new Round with turns', () => {
    game.testStart()
    game.currentRound.takeTurn('wrong answer 1')

    expect(game.currentRound.turns).to.equal(1)

    game.currentRound.takeTurn('wrong answer 2')
    game.currentRound.takeTurn('wrong answer 3')

    expect(game.currentRound.turns).to.equal(3)
  });
});