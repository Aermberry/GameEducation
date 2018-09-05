class Clause {
	/** 从句的正确连接词 */
	public conjunction: Conjunction;
	/** 从句的语音文件 */
	public audioName = '';

	public constructor(conjunction: Conjunction, audioName: string) {
		this.conjunction = conjunction;
		this.audioName = audioName;
	}
}