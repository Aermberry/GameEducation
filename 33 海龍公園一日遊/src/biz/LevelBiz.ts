class LevelBiz {
	private constructor() {
	}

	public static readonly instance = new LevelBiz();

	/** 当前节（关卡），以0为初始节 */
	public currentLevel = 0;

	/** 当前level的当前问题index，以0为初始问题 */
	public currentQuestionIndex = 0;
}