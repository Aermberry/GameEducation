class MediumExpressionRepository implements IExpressionRepository {
	private maxCount = 3; //最多三位

	public constructor() {
	}

	public getAll(): Expression[]
	{
		return [
			new Expression(328, 137),
			new Expression(352, 137),
			new Expression(628, 456),
			new Expression(522, 117),
			new Expression(764, 348),
			new Expression(726, 508),
			new Expression(755, 584),
			new Expression(406, 386),
			new Expression(949, 390),
			new Expression(718, 209)
		];
	}
}