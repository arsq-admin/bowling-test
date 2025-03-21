const Bowling = require("./index");

test("should get 0 points after 0 pins hit on a roll", () => {
	const bowling = new Bowling();

	bowling.roll(0);

	expect(bowling.getScore()).toBe(0);
});

test("should get 1 points after 1 pin hit on a roll", () => {
	const bowling = new Bowling();

	bowling.roll(1);

	expect(bowling.getScore()).toBe(1);
});

test("should get 2 points after 2 pins hit on 2 rolls", () => {
	const bowling = new Bowling();

	bowling.roll(1);
	bowling.roll(1);

	expect(bowling.getScore()).toBe(2);
});

test("should add next roll onto previous frame after spare", () => {
	const bowling = new Bowling();

	// Frame 1
	bowling.roll(6);
	bowling.roll(4);

	// Frame 2
	bowling.roll(5);
	bowling.roll(1);

	expect(bowling.getScore()).toBe(21);
});
