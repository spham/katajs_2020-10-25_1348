describe('kata of game bowling', () => {
    const game = new BowblingGame();
    it('should return 0 for a game of all zeros', async () => {
        game.roll(0);
        expect(game.score).toEqual(0)
    });

});