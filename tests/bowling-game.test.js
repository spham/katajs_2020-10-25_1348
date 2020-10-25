const BowlingGame = require('../src/bowling-game')

describe('kata of game bowling', () => {

    let game;

    beforeEach(() => {
        game = new BowlingGame();
    })

    it('should return 0 for a game of all zeros', async () => {
        //    const game = new BowlingGame();
        for (let i = 0; i < 20; i++) {
            game.roll(0);

        }
        expect(game.score).toEqual(0)
    });

    it('should return 20 for a game of all one', async () => {
        //  const game = new BowlingGame();
        for (let i = 0; i < 20; i++) {
            game.roll(1);

        }
        expect(game.score).toEqual(20)
    });

});