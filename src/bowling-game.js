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

            if (this.isStrike(rollIndex)) {
                score += this.strikeBonus(rollIndex);
                rollIndex++;
                continue;
            }
            // const element = array[i];
            const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1]

            if (this.isSpare(frameScore)) {
                score += this.spareBonus(rollIndex);
            } else {
                score += frameScore;
            }
            rollIndex += 2;
        }
        // return this.runningScore;
        return score;
    }


    strikeBonus(rollIndex) {
        return 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    spareBonus(rollIndex) {
        return 10 + this.rolls[rollIndex + 2];
    }

    isSpare(frameScore) {
        return frameScore === 10;
    }
}
module.exports = BowlingGame;