class Bowling {
	constructor() {
		this.frameIndex = 0;
		this.frames = Array.from({ length: 10 }, () => []);
	}

	roll(pins) {
		const frame = this.frames[this.frameIndex];
		frame.push(pins);

		const frameFinished = frame.length === 2;
		if (frameFinished) {
			this.frameIndex += 1;
		}
	}

	getScore() {
		let score = 0;
		for (let i = 0; i < this.frames.length; i++) {
			const frame = this.frames[i];
			let spare = false;
			if (i !== 0) {
				const prevFrame = this.frames[i - 1];
				spare = prevFrame.length === 2 && prevFrame[0] + prevFrame[1] === 10;
				score += frame[0] ?? 0;
			}
			for (let j = 0; j < frame.length; j++) {
				const pins = frame[j];
				score += pins;
			}
		}
		return score;
	}
}

module.exports = Bowling;
