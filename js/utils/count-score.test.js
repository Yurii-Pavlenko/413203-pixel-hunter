import countScore from "./count-score";
import * as assert from "assert";

describe(`COUNT SCORE FUNCTION`, () => {

  const fullLives = 3;
  const twoLives = 2;
  const oneLive = 1;
  const noUnusedLives = 0;
  const falsyArray = [12, 15, 26, 18, 28, 30, -15, -21, -25, -8]; // game is loser
  const truthyArray = [10, 11, 12, 15, 13, 14, 17, 18, 16, 19]; // 1000 score
  const truthyFastArray = [10, 11, 9, 12, 13, 14, 15, 6, 16, 17]; // 1100 score
  const oneFalseAnswerArray = [-6, 14, 12, 19, 10, 13, 17, 15, 12, 18]; // 900 score
  const threeFalseOneFastAnswerArray = [-3, -7, -28, 3, 12, 10, 11, 13, 14, 15]; // 750 score
  const oneFalseTwoSlowTwoFastAnswerArray = [-25, 18, 9, 3, 15, 12, 20, 17, 28, 14]; // 950 score
  const allSlowAnswerArray = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]; // 500 score
  const allSlow3MissedAnswerArray = [-21, -22, 23, 24, 25, 26, 27, 28, 29, 30]; // 400 score

  it(`should return "- 1" if answers < 10 and lives = 0`, () => {
    assert.equal(countScore([3, 5, 26, 28], 0), -1); // player lost
  });

  it(`should return "- 1" if amount of false answers > 3`, () => {
    assert.equal(countScore(falsyArray, noUnusedLives), -1);
  });

  it(`should return 1150 if all answers are right. With full of unused lives`, () => {
    assert.equal(countScore(truthyArray, fullLives), 1150);
  });

  it(`should return 1250 if all answers are right and two answers fast. With full of unused lives`, () => {
    assert.equal(countScore(truthyFastArray, fullLives), 1250);
  });

  it(`should return 1000 if only one answer is false. With two unused lives`, () => {
    assert.equal(countScore(oneFalseAnswerArray, twoLives), 1000);
  });

  it(`should return 750 if three answers are false and two answers are fast. Without unused lives`, () => {
    assert.equal(countScore(threeFalseOneFastAnswerArray, noUnusedLives), 750);
  });

  it(`should return 1050 if one answer is false, two answers are fast and two answers are slow. With two of unused lives`, () => {
    assert.equal(countScore(oneFalseTwoSlowTwoFastAnswerArray, twoLives), 1050);
  });

  it(`should return 650 if all answers are slow. With one of unused lives`, () => {
    assert.equal(countScore(allSlowAnswerArray, fullLives), 650);
  });

  it(`should return 450 if all answers are slow. With one unused lives`, () => {
    assert.equal(countScore(allSlow3MissedAnswerArray, oneLive), 450);
  });

});
