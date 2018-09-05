class GameScene extends eui.Component implements  eui.UIComponent, GameView {
	private trainGroup: eui.Group;
	private nextSentenceGroup: eui.Group;
	private conjunctionGroup: eui.Group;

	private nextSentenceButton: CircleButton;
	private currentLevelLabel: eui.Label;
	private validateButton: CircleButton;
	private trainTweenGroup: egret.tween.TweenGroup;
	private leftConjunctionTextComponent: TextComponent;
	private rightConjunctionTextComponent: TextComponent;

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
		
		// lzlib.SoundUtility.playSound('sound_step_introduce_mp3');
		this.enableDrag(this.conjunctionGroup.$children.map(child => child as TextComponent));
		this.presenter.loadView(this, this.sentenceIndex);
	}

	private enableDrag(arr: TextComponent[]): void
	{
		for (let index = 0; index < arr.length-1; index++) {
			let child = arr[index]
			let drag = new lzlib.Drag();
			this.addChild(drag);
			drag.enableDrag(child, false);
		}

		let drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.leftConjunctionTextComponent);
		this.leftConjunctionTextComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onTextComponentDrop, this);

		drop = new lzlib.Drop();
		this.stage.addChild(drop);
		drop.enableDrop(this.rightConjunctionTextComponent);
		this.rightConjunctionTextComponent.addEventListener(lzlib.LzDragEvent.DROP, this.onTextComponentDrop, this);

	}

	private onTextComponentDrop(e: lzlib.LzDragEvent): void {
		e.preventDefault();
		let dragObj = e.dragObject as TextComponent;
		let targetObj = e.target as TextComponent;
		targetObj.alpha = 1;
		targetObj.text = dragObj.text;
		dragObj.visible = false;
		
	}

    /** 显示所有连接词 */
    public showAllConjunctions(conjunctions: Conjunction[]): void {
		this.conjunctionGroup.$children.forEach((child: TextComponent, index: number) => {
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

	}

    public playAudioYourSentenceIsAsync(): Promise<void> {

	}

    public playAudio(audioName: string): Promise<void> {

	}

    public playAudioYouCanPressValidationButton(): void {

	}

    public playAudioYouAreCorrect(): void {

	}

    public playAudioYouAreWrongAsync(): Promise<void> {

	}

    /** 播放火车开动的动画 */
    public playMovieTrainGo(): void {
		this.trainTweenGroup.play(0);
	}

    public enableValidationButton(): void {

	}

    public disableValidationButton(): void {

	}

    public enableNextButton(): void {

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

	}
}