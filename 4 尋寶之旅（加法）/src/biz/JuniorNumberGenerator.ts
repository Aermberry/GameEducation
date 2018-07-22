class JuniorNumberGenerator implements INumberGenerator {
	private maxCount = 3; //最多三位

	public constructor() {
	}

	public generate(): number[]
	{
		let addend = '';
		let augend = '';
		for (let i = 0; i < this.maxCount; i++) {
			let pair = this.generateDigitPair();
			addend = addend + pair[0];
			augend = augend + pair[1];
		}
		return [parseInt(addend, 10), parseInt(augend, 10)];
	}

	/**
	 * 生成一对没有进位的数
	 */
	private generateDigitPair(): number[]
	{
		let addend = Math.randomMinMax(0, 9);
		let augend = Math.randomMinMax(0, 10 - addend - 1);
		return [addend, augend];
	}
}