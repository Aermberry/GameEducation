class Conjunction {
	/** 连接词的语音文件名 */
	public audioName = '';
	/** 连接词的文本 */
	public text = '';

	public static readonly BECAUSE = new Conjunction('because_mp3', '因為');
	public static readonly SO = new Conjunction('so_mp3', '所以');
	public static readonly ALTHOUGH = new Conjunction('although_mp3', '雖然');
	public static readonly BUT = new Conjunction('but_mp3', '但是');
	public static readonly IF = new Conjunction('if_mp3', '如果');
	public static readonly THEN = new Conjunction('then_mp3', '就');

	private constructor(audioName: string, text: string) {
		this.audioName = audioName;
		this.text = text;
	}
}