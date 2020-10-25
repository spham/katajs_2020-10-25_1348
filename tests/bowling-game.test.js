const BowlingGame = require('../src/bowling-game')


let game;

beforeEach(() => {
    game = new BowlingGame();
})

describe('kata of game bowling', () => {

    it('should return 0 for a game of all zeros', async () => {
        //    const game = new BowlingGame();
        // for (let i = 0; i < 20; i++) {
        //     game.roll(0);

        // }
        rollMany(0, 20);
        expect(game.score).toEqual(0)
    });

    it('should return 20 for a game of all one', async () => {
        //  const game = new BowlingGame();
        // for (let i = 0; i < 20; i++) {
        //     game.roll(1);

        // }
        rollMany(1, 20);
        expect(game.score).toEqual(20)
    });

});

function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins)
    }
}