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
        rollMany(1, 20);
        expect(game.score).toEqual(20)
    });

    it('should return the correct score when a spare is roled', async () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(0, 17);
        expect(game.score).toEqual(16)
    });
    it('should return the correct score when a strike is roled', async () => {
        game.roll(10);
        game.roll(1);
        game.roll(1);
        rollMany(0, 17);
        expect(game.score).toEqual(14)
    });



});

function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins)
    }
}