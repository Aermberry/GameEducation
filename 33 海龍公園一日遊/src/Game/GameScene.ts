class GameScene extends eui.Component implements  eui.UIComponent, GameView {
	private trainGroup: eui.Group;
	private nextSentenceGroup: eui.Group;
	private conjunctionGroup: eui.Group;
	private leftGirl: Girl;
	private rightGirl: Girl;
	private exitButton: CircleButton;

	private nextSentenceButton: CircleButton;
	private currentLevelLabel: eui.Label;
	private validateButton: CircleButton;
	private trainTweenGroup: egret.tween.TweenGroup;
	private leftConjunctionContainer: ConjunctionContainer;
	private rightConjunctionContainer: ConjunctionContainer;

	private presenter = new GamePresenter();

	public constructor() {
		super();
	}

	protected async partAdded(partName:string,instance:any): Promise<void>
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated():Promise<void>
	{
		super.childrenCreated();
		this.leftGirl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onLeftGirlImageClick, this.presenter);
		this.rightGirl.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onRightGirlImageClick, this.presenter);
		this.nextSentenceButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onNextButtonClick, this.presenter);
		this.validateButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onValidationButtonClick, this.presenter);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, window.close, this);
		this.initDragDrop();
		this.presenter.loadView(this);
	}

	private initDragDrop(): void
	{
		this.conjunctionGroup.$children.forEach((child, index) => child.addEventListener(egret.TouchEvent.TOUCH_BEGIN, () => this.presenter.onConjunctionTouchBegin(index), this));
		this.conjunctionGroup.$children.map(child => child as ConjunctionContainer).forEach((child, index) => child.conjunctionComponent.addEventListener(lzlib.LzDragEvent.DRAG_CANCEL, this.presenter.onConjunctionTouchCancel, this.presenter));
		this.conjunctionGroup.$children.map(child => child as ConjunctionContainer).forEach((child, index) => child.enableDrag(index));
		this.leftConjunctionContainer.enableDrop(this.presenter.onLeftConjunctionDrop, this.presenter);
		this.rightConjunctionContainer.enableDrop(this.presenter.onRightConjunctionDrop, this.presenter);
	}

    /** 显示所有连接词 */
    public showAllConjunctions(conjunctions: Conjunction[]): void {
		this.conjunctionGroup.$children.forEach((child: ConjunctionContainer, index: number) => {
			if (!child.text) {
				child.text = conjunctions[index].text;
				child.conjunctionComponent.addEventListener(lzlib.LzDragEvent.DRAG_CANCEL, this.presenter.onConjunctionTouchCancel, this.presenter);
				child.enableDrag(index);
			}
		});
	}

    /** 隐藏指定的连接词 */
    public hideConjunction(conjuctionIndex: number): void {
		this.conjunctionGroup.getChildAt(conjuctionIndex).visible = false;
	}

    /** 显示列车上的连接词占位符 */
    public blinkConjunctionBackgroundInTrain(): void {
		this.leftConjunctionContainer.blinkBackground();
		this.rightConjunctionContainer.blinkBackground();
	}

    /** 隐藏列车上的连接词占位符 */
    public hideConjunctionBackgroundInTrain(): void {
		this.leftConjunctionContainer.hideBackground();
		this.rightConjunctionContainer.hideBackground();
	}

    /** 显示火车上的左连接词 */
    public showLeftConjunction(text: string): void {
		
	}

    /** 显示火车上的右连接词 */
    public showRightConjunction(text: string): void {

	}

    /** 消除火车上的连接词 */
    public clearConjunctionsInTrain(): void {
		this.leftConjunctionContainer.conjunctionComponent = null;
		this.rightConjunctionContainer.conjunctionComponent = null;
	}

    /** 隐藏火车上的连接词 */
    public hideConjunctionsInTrain(): void {

	}

    /** 允许用户把连接词拖到火车上的左连接词 */
    public enableDropLeftConjunctionInTrain(): void {
		this.leftConjunctionContainer.enableDrop(this.presenter.onLeftConjunctionDrop, this.presenter);
	}

    /** 禁止用户把连接词拖到火车上的左连接词 */
    public disableDropLeftConjunctionInTrain(): void {
		this.leftConjunctionContainer.disableDrop();
	}

    /** 允许用户把连接词拖到火车上的右连接词 */
    public enableDropRightConjunctionInTrain(): void {
		this.rightConjunctionContainer.enableDrop(this.presenter.onRightConjunctionDrop, this.presenter);
	}

    /** 禁止用户把连接词拖到火车上的右连接词 */
    public disableDropRightConjunctionInTrain(): void {
		this.rightConjunctionContainer.disableDrop();
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

    public openGameScene(): void {
		Main.instance.gotoScene(new GameScene());
	}
}