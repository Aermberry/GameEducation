class GameScene extends eui.Component implements  eui.UIComponent, GameView {
	private trainGroup: eui.Group;
	private nextSentenceGroup: eui.Group;
	private conjunctionGroup: eui.Group;

	private nextSentenceButton: CircleButton;
	private currentLevelLabel: eui.Label;
	private validateButton: CircleButton;
	private trainTweenGroup: egret.tween.TweenGroup;
	private leftConjunctionContainer: ConjunctionComponent;
	private rightConjunctionContainer: ConjunctionComponent;

	private presenter = new GamePresenter();
	private sentenceIndex = 0;

	public constructor(sentenceIndex: number) {
		super();
		this.sentenceIndex = sentenceIndex;
	}

	protected async partAdded(partName:string,instance:any): Promise<void>
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated():Promise<void>
	{
		super.childrenCreated();
		this.nextSentenceButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onNextButtonClick, this.presenter);
		this.validateButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onValidationButtonClick, this.presenter);
		
		this.enableDrag(this.conjunctionGroup.$children.map(child => child.$children[0] as ConjunctionComponent));
		this.presenter.loadView(this, this.sentenceIndex);
	}

	private enableDrag(arr: ConjunctionComponent[]): void
	{
		for (let child of arr) {
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		}

		let drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.leftConjunctionContainer);
		this.leftConjunctionContainer.addEventListener(lzlib.LzDragEvent.DROP, this.onConjunctionComponentDrop, this);

		drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.rightConjunctionContainer);
		this.rightConjunctionContainer.addEventListener(lzlib.LzDragEvent.DROP, this.onConjunctionComponentDrop, this);

	}

	private onConjunctionComponentDrop(e: lzlib.LzDragEvent): void {
		e.preventDefault();
		let dragObj = e.dragObject as ConjunctionComponent;
		let targetObj = e.target as ConjunctionContainer;
		targetObj.alpha = 1;
		targetObj.addChild(dragObj);
	}

    /** 显示所有连接词 */
    public showAllConjunctions(conjunctions: Conjunction[]): void {
		this.conjunctionGroup.$children.forEach((child: ConjunctionComponent, index: number) => {
			child.text = conjunctions[index].text;
		});
	}

    /** 隐藏指定的连接词 */
    public hideConjunction(conjuctionIndex: number): void {
		this.conjunctionGroup.getChildAt(conjuctionIndex).visible = false;
	}

    /** 显示列车上的连接词占位符 */
    public showConjunctionPlaceHolderInTrain(): void {
		
	}

    /** 隐藏列车上的连接词占位符 */
    public hideConjunctionPlaceHolderInTrain(): void {

	}

    /** 显示火车上的左连接词 */
    public showLeftConjunction(text: string): void {

	}

    /** 显示火车上的右连接词 */
    public showRightConjunction(text: string): void {

	}

    /** 隐藏火车上的连接词 */
    public hideConjunctionsInTrain(): void {

	}

    /** 允许用户把连接词拖到火车上的左连接词 */
    public enableDropLeftConjunctionInTrain(): void {

	}

    /** 禁止用户把连接词拖到火车上的左连接词 */
    public disableDropLeftConjunctionInTrain(): void {

	}

    /** 允许用户把连接词拖到火车上的右连接词 */
    public enableDropRightConjunctionInTrain(): void {

	}

    /** 禁止用户把连接词拖到火车上的右连接词 */
    public disableDropRightConjunctionInTrain(): void {

	}

    public playAudioHowToPlay(): void {
		lzlib.SoundUtility.playSound('sound_step_introduce_mp3');
	}

    public async playAudioYourSentenceIsAsync(): Promise<void> {
		return lzlib.SoundUtility.playSound('sound 221_mp3');
	}

    public playAudio(audioName: string): Promise<void> {
		return lzlib.SoundUtility.playSound(audioName);
	}

    public playAudioYouCanPressValidationButton(): void {
		lzlib.SoundUtility.playSound('sound 219_mp3');
	}

    public playAudioYouAreCorrect(): void {
		lzlib.SoundUtility.playSound('sound 241_mp3');
	}

    public async playAudioYouAreWrongAsync(): Promise<void> {
		return lzlib.SoundUtility.playSound('sound 223_mp3');
	}

    /** 播放火车开动的动画 */
    public playMovieTrainGo(): void {
		this.trainTweenGroup.play(0);
	}

    public enableValidationButton(): void {
		this.validateButton.enabled = true;
	}

    public disableValidationButton(): void {
		this.validateButton.enabled = false;
	}

    public enableNextButton(): void {
		this.nextSentenceButton.enabled = true;
	}

    /** 显示当前关卡已经通过的字 */
    public showCurrentLevelFinished(): void {
		this.currentLevelLabel.text = `第${(LevelBiz.instance.currentLevel + 1).toLocaleString('zh-Hans-CN-u-nu-hanidec')}節完`;
		this.currentLevelLabel.visible = true;
	}

    public openBackgroundScene(): void {
		Main.instance.gotoScene(new BackgroundScene());
	}

    public openGameScene(sentenceIndex: number): void {
		Main.instance.gotoScene(new GameScene(sentenceIndex));
	}
}