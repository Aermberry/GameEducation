class ConjunctionRepository {
	private conjunctions = [
		Conjunction.BECAUSE, Conjunction.SO,
		Conjunction.ALTHOUGH, Conjunction.BUT,
		Conjunction.IF, Conjunction.THEN
	]

	public constructor() {
	}

	public getAll(): Conjunction[] {
		return this.conjunctions;
	}

	public get(index: number): Conjunction {
		return this.conjunctions[index];
	}
}