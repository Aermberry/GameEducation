/**
 * 用户输入的差和新被减数
 */
class DifferenceAndNewMinuend {
	public constructor(difference: number, newMinuend: number[][]) 
	{
		this.difference = difference;
		this.newMinuend = newMinuend;
	}

	public difference: number;
	public newMinuend: number[][];

	public equals(other: DifferenceAndNewMinuend, compareNewMinuend: boolean): boolean
	{
		return compareNewMinuend
		? this.difference == other.difference && JSON.stringify(this.newMinuend) == JSON.stringify(other.newMinuend)
		: this.difference == other.difference;
	}

	public setFirstNumber(num: string): void
	{
		let arr = this.difference.toString().split("");
		arr[0] = num;
		this.difference = parseInt(arr.join(''), 10);
	}
}