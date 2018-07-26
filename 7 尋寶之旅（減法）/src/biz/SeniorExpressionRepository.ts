class SeniorExpressionRepository implements IExpressionRepository {
	public constructor() {
	}

	public getAll(): Expression[]
	{
		return [
			new Expression(400, 286),
			new Expression(473, 286),
			new Expression(452, 359),
			new Expression(456, 278),
			new Expression(822, 198),
			new Expression(334, 168),
			new Expression(100, 56),
			new Expression(500, 185),
			new Expression(415, 386),
			new Expression(647, 168)
		];
	}
}