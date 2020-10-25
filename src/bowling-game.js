class BowlingGame {
    constructor() {
        // this.runningScore = 0;
        this.rolls = [];
    }
    roll(pins) {
        // this.runningScore += pins;
        this.rolls.push(pins);
    }
    get score() {
        let score = 0;
        let rollIndex = 0;
        for (let i = 0; i < 10; i++) {
            // const element = array[i];
            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]

            if (frameScore === 10) {
                score += 10 + this.rolls[rollIndex + 2];
            } else {
                score += frameScore;
            }
            rollIndex += 2;
        }
        // return this.runningScore;
        return score;
    }

}
module.exports = BowlingGame;