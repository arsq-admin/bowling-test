const Bowling = require("./index");

test("should get 0 points after 0 pins hit on a roll", () => {
  const bowling = new Bowling();

  bowling.roll(0);

  expect(bowling.getScore()).toBe(3);
});
