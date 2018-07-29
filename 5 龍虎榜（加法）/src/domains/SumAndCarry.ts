class SumAndCarry {
	public constructor(sum: number, carry: number) 
	{
		this.sum = sum;
		this.carry = carry;
	}

	public sum: number;
	public carry: number;

	public equals(other: SumAndCarry, compareCarry: boolean): boolean
	{
		return compareCarry
		? this.sum == other.sum && this.carry == other.carry
		: this.sum == other.sum;
	}
}