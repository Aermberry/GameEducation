class SubtractCalculationScene extends eui.Component implements  eui.UIComponent, ISubtractCalculationView {
	private startButton: eui.Button;
	private restartGroup: eui.Group;
	private exitGroup: eui.Group;

	private minuendLabel: eui.BitmapLabel;
	private subtrahendLabel: eui.BitmapLabel;
	private expressionHighlightGroup: eui.Group;
	private newMinuendGroup: eui.Group;
	private differenceGroup: eui.Group;

	private demoGroup: eui.Group;
	private demoHighlightGroup: eui.Group;
	private minuendGroup: eui.Group;
	private subtrahendGroup: eui.Group;

	private confirmDialogGroup: eui.Group;
	private yesButton: eui.Button;
	private noButton: eui.Button;

	private boyGroup: eui.Group;
	private boyImage: eui.Image;
	private boyFactory: egret.MovieClipDataFactory;
	private boyMovie: egret.MovieClip;

	private deleteMinuend20Movie: egret.tween.TweenGroup;
	private deleteMinuend10Movie: egret.tween.TweenGroup;
	private deleteMinuend11Movie: egret.tween.TweenGroup;
	private deleteMinuend00Movie: egret.tween.TweenGroup;
	private deleteMinuendMovies = {};

	private numberPad: NumberPad;
	private thinkCarefullyGroup: eui.Group;
	private thinkCarefullyLabel: eui.Label;

	private presenter: SubtractCalculationPresenter;

	private alertBackgroundImage: eui.Image;
	
	public constructor(minuend: number, subtrahend: number) {
		super();
		this.presenter = new SubtractCalculationPresenter(minuend, subtrahend);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	
	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.deleteMinuendMovies = {
			"deleteMinuend20Movie": this.deleteMinuend20Movie,
			"deleteMinuend10Movie": this.deleteMinuend10Movie,
			"deleteMinuend11Movie": this.deleteMinuend11Movie,
			"deleteMinuend00Movie": this.deleteMinuend00Movie
		};
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onStartButtonClick, this.presenter);
		this.restartGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onRestartButtonClick, this.presenter);
		this.exitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onExitButtonClick, this.presenter);

		this.presenter.loadView(this);
	}
	
	public set minuend(value: number)
	{
		this.minuendLabel.text = value.toString();
		for (let position = 0; position < 3; position++) {
			(this.minuendGroup.getChildAt(position) as IParticleComponent).digit = this.presenter.getDigitAtPosition(value, position);
		}
	}
	
	public set subtrahend(value: number)
	{
		this.subtrahendLabel.text = value.toString();
		for (let position = 0; position < 3; position++) {
			(this.subtrahendGroup.getChildAt(position) as IParticleComponent).digit = this.presenter.getDigitAtPosition(value, position);
		}
	}

	public hideStartButton(): void
	{
		this.startButton.visible = false;
	}

	public showRestartButton(): void
	{
		this.restartGroup.visible = true;
	}

	/** highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	public highlightOperand(position: number): void
	{
		this.expressionHighlightGroup.getChildAt(position).visible = this.demoHighlightGroup.getChildAt(position).visible = true;
	}

	/** 不再highlight操作数，包括expressionGroup和demoGroup里的操作数 */
	public normalizeOperand(position: number): void
	{
		this.expressionHighlightGroup.getChildAt(position).visible = this.demoHighlightGroup.getChildAt(position).visible = false;
	}

	/** 借位 */
	public borrowOneFromMinuend(position: number): IParticleComponent
	{
		return (this.minuendGroup.getChildAt(position) as IParticleComponent).borrowOne();
	}

	/** 把借位移动到被减数的左边 */
	public async moveBorrowToLeftOfMinuend(borrow: IParticleComponent, position: number): Promise<void>
	{
		borrow.moveToLeftOf(this.minuendGroup.getChildAt(position) as IParticleComponent);
		await lzlib.ThreadUtility.sleep(1000);
	}
	
	/** 把借位移动到减数的后边 */
	public async moveBorrowToBehideOfMinuend(borrow: IParticleComponent, position: number): Promise<void>
	{
		borrow.moveToBehideOf(this.minuendGroup.getChildAt(position) as IParticleComponent);
		await lzlib.ThreadUtility.sleep(1000);
	}

	/** 从借位移动指定数字到被减数 */
	public async moveAmountOfBorrowToMinuend(borrow: IParticleComponent, position: number, amount: number): Promise<void>
	{
		borrow.digit -= amount;
		(this.minuendGroup.getChildAt(position) as IParticleComponent).digit += amount;
		await lzlib.ThreadUtility.sleep(1000);
	}
	
	/** 把借位移动到减数的左边 */
	public async moveBorrowToLeftOfSubstrahend(borrow: IParticleComponent, position: number): Promise<void>
	{
		borrow.moveToLeftOf(this.subtrahendGroup.getChildAt(position) as IParticleComponent);
		await lzlib.ThreadUtility.sleep(1000);
	}
	
	/** 把被减数移动到减数的右边 */
	public async moveMinuendToRightOfSubstrahend(position: number): Promise<void>
	{
		(this.minuendGroup.getChildAt(position) as IParticleComponent).moveToRightOf(this.subtrahendGroup.getChildAt(position) as IParticleComponent);
		await lzlib.ThreadUtility.sleep(1000);
	}
	
	/** 把被减数移动到减数的后边 */
	public async moveMinuendToBehideOfSubstrahend(position: number): Promise<void>
	{
		(this.minuendGroup.getChildAt(position) as IParticleComponent).moveToBehideOf(this.subtrahendGroup.getChildAt(position) as IParticleComponent);
		await lzlib.ThreadUtility.sleep(1000);
	}

	/** 令借位的状态变成Separated */
	public async setBorrowStateToSeparated(borrow: IParticleComponent): Promise<void>
	{
		borrow.currentState = 'separated';
		await lzlib.ThreadUtility.sleep(1000);
	}
	
	/** 令被减数和减数变成半透明 */
	public translucientMinuendAndSubstrahend(position: number, tranlucientAmount: number): void
	{
		(this.minuendGroup.getChildAt(position) as IParticleComponent).translucent(tranlucientAmount);
		(this.subtrahendGroup.getChildAt(position) as IParticleComponent).translucent(tranlucientAmount);
	}

	/** 设置新被减数 */
	public setNewMinuend(minuend: number, position: number, borrowTime: number): void
	{
		((this.newMinuendGroup.getChildAt(position) as eui.Group).getChildAt(borrowTime) as EditableLabel).text = minuend.toString();
	}

	/** 令和的指定位进入编辑模式 */
	public changeDifferenceToEditMode(position: number): void
	{
		(this.differenceGroup.getChildAt(position) as EditableLabel).currentState = 'edit';
	}

	/** 令和的指定位进入只读模式 */
	public changeDifferenceToViewMode(position: number): void
	{
		(this.differenceGroup.getChildAt(position) as EditableLabel).currentState = 'view';
	}

	/** 读取用户输入的指定位的和 */
	public async getDifferenceAsync(position: number): Promise<string>
	{
		this.numberPad.visible = true;
		let char = await this.numberPad.getCharAsync();
		(this.differenceGroup.getChildAt(position) as EditableLabel).text = char;
		this.numberPad.visible = false;
		return char;
	}

	/** 显示仔细想一想的提示 */
	public async alertThingCarefully(): Promise<void>
	{
		this.thinkCarefullyGroup.visible = true; 
		this.thinkCarefullyLabel.text = '想清楚，再試一次！';
		await lzlib.ThreadUtility.sleep(1500);
		this.thinkCarefullyGroup.visible = false;
	}

	/** 显示是否需要退位的对话框 */
	public showNeedBorrowDialog(): void
	{
		this.confirmDialogGroup.visible = true;
	}

	/** 隐藏是否需要退位的对话框 */
	public hideNeedBorrowDialog(): void
	{
		this.confirmDialogGroup.visible = false;
	}

	/** 获取用户是否需要退位的选择 */
	public confirmNeedBorrowAsync(): Promise<boolean>
	{
		return new Promise<boolean>(resolve => {
			this.yesButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(true), this);
			this.noButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(false), this);
		});
	}

	/** 显示提示“十位是0, 再向百位借” */
	public async alertBorrowOneFromHundredBecauseTenIsZeroTip(minuend: number): Promise<void>
	{
		this.thinkCarefullyGroup.visible = true;
		this.thinkCarefullyLabel.text = '十位是零，再向百位借。';
		await lzlib.ThreadUtility.sleep(1500);
		this.thinkCarefullyGroup.visible = false;
	}

	/** 播放被减数被删除的动画 */
	public playMinuendDeleteMovie(position: number, borrowTime: number): void
	{
		(this.deleteMinuendMovies[`deleteMinuend${position}${borrowTime}Movie`] as egret.tween.TweenGroup).play(0);
	}

	public openInputExpressoionScene(): void
	{
		Main.instance.gotoScene(new InputExpressionScene());
	}

	public exit(): void
	{
		window.close();
	}
	
	/** 显示通关动画 */
	public async startCongratulation(): Promise<void>
	{
		this.boyImage.visible = false;
		this.playBoyMovie();
		this.alertBackgroundImage.visible = true;
		await lzlib.ThreadUtility.sleep(1500);
		this.alertBackgroundImage.visible = false;
	}
	
	private playBoyMovie(): void
	{
		this.boyFactory = new egret.MovieClipDataFactory( RES.getRes('boy_jump_json'), RES.getRes('boy_jump_png'));
		this.boyMovie = new egret.MovieClip(this.boyFactory.generateMovieClipData('boy'));
		this.boyMovie.y = 0;
		this.boyGroup.addChild(this.boyMovie);
		this.boyMovie.play(-1);
	}
}