class JuniorExpressionRepository implements IExpressionRepository {
	private maxCount = 3; //最多三位

	public constructor() {
	}

	public getAll(): Expression[]
	{
		return [
			new Expression(158, 117),
			new Expression(228, 104),
			new Expression(348, 322),
			new Expression(721, 300),
			new Expression(935, 524),
			new Expression(483, 312),
			new Expression(666, 620),
			new Expression(718, 207),
			new Expression(446, 231),
			new Expression(456, 122)
		];
	}
}