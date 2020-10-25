const BowlingGame = require('../src/bowling-game')

describe('kata of game bowling', () => {
    it('should return 0 for a game of all zeros', async () => {
        const game = new BowlingGame();
        game.roll(0);
        expect(game.score).toEqual(0)
    });

});