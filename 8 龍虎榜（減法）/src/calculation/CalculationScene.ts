class CalculationScene extends eui.Component implements  eui.UIComponent, ICalculationView {
	private correctLabel: eui.Label;
	private nextQuestionButton: ImageButton;

	//question group
	private questionIndexLabel: eui.Label;
	private answerMinuendLabel: eui.Label;
	private answerSubtrahendLabel: eui.Label;
	private questionGroup: eui.Group;
	private answerStatusImage: eui.Image;
	private answerMinuendGroup: eui.Group;
	private answerDifferenceGroup: eui.Group;

	//Correct Group
	private correctGroup: eui.Group;
	private correctMinuendLabel: eui.Label;
	private correctSubtrahendLabel: eui.Label;
	private correctMinuendGroup: eui.Group;
	private correctDifferenceGroup: eui.Group;

	private boyGroup: eui.Group;
	private boyImage: eui.Image;
	private boxOpenImage: eui.Image;
	private boxClosedImage: eui.Image;
	private boxOpenTweenGroup: egret.tween.TweenGroup;
	private strawberryImage: eui.Image;

	private numberPad: NumberPad;

	private topDialogGroup: eui.Group;
	private topDialogTitleLabel: eui.Label;
	private yesButton: ImageButton;
	private noButton: ImageButton;
	private finishButton:ImageButton;
	private finishTipsGroup: eui.Group;

	private angelGroup: eui.Group;
	private angelFactory:egret.MovieClipDataFactory;
    private angelMovie:egret.MovieClip;

	private answerDeleteMinuend20Movie: egret.tween.TweenGroup;
	private answerDeleteMinuend10Movie: egret.tween.TweenGroup;
	private answerDeleteMinuend11Movie: egret.tween.TweenGroup;
	private answerDeleteMinuend00Movie: egret.tween.TweenGroup;
	private answerDeleteMinuendMovies = {};

	private correctDeleteMinuend20Movie: egret.tween.TweenGroup;
	private correctDeleteMinuend10Movie: egret.tween.TweenGroup;
	private correctDeleteMinuend11Movie: egret.tween.TweenGroup;
	private correctDeleteMinuend00Movie: egret.tween.TweenGroup;
	private correctDeleteMinuendMovies = {};

	private confirmInputBorrowDialogGroup: eui.Group;
	private yesButton2: ImageButton;
	private noButton2: ImageButton;

	private operationGroup: eui.Group;
	private restartImage: eui.Image;
	private closeImage: eui.Image;

	private presenter = new CalculationPresenter();

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.restartImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRestartClick, this);
		this.closeImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
		this.restartImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRestartOver, this);
		this.restartImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRestartOut, this);
		this.closeImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onCloseOver, this);
		this.closeImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onCloseOut, this);
		this.numberPad.addEventListener(EraserEvent.ERASER_CLICK, this.presenter.onEraserClick, this.presenter);
		this.initAngelGroup();
		this.onChangeFinshButtonTexutre();
		this.answerDeleteMinuendMovies = {
			"deleteMinuend20Movie": this.answerDeleteMinuend20Movie,
			"deleteMinuend10Movie": this.answerDeleteMinuend10Movie,
			"deleteMinuend11Movie": this.answerDeleteMinuend11Movie,
			"deleteMinuend00Movie": this.answerDeleteMinuend00Movie
		};

		this.correctDeleteMinuendMovies = {
			"deleteMinuend20Movie": this.correctDeleteMinuend20Movie,
			"deleteMinuend10Movie": this.correctDeleteMinuend10Movie,
			"deleteMinuend11Movie": this.correctDeleteMinuend11Movie,
			"deleteMinuend00Movie": this.correctDeleteMinuend00Movie
		};

		this.presenter.loadView(this);
	}

	private onRestartClick(): void
	{
		Main.instance.gotoScene(new StartScene());
	}

	private onCloseClick(): void
	{
		window.close();
	}

	private onRestartOver(): void
	{
		this.restartImage.source = 'restart_selected_png'
	}

	private onRestartOut(): void
	{
		this.restartImage.source = 'restart_normal_png'
	}

	private onCloseOver(): void
	{
		this.closeImage.source = 'close_selected_png'
	}

	private onCloseOut(): void
	{
		this.closeImage.source = 'close_normal_png'
	}


	private initAngelGroup(): void
	{
		this.angelFactory = new egret.MovieClipDataFactory(RES.getRes('angel_json'), RES.getRes('angel_png'));
		this.angelMovie = new egret.MovieClip(this.angelFactory.generateMovieClipData('angel'));
		this.angelGroup.addChild(this.angelMovie);
		this.angelMovie.play(-1);
	}

	public getNameAsync(): Promise<string>
	{
		return new Promise<string>(resolve => resolve(''));
	}

	/** 向用户确认是是否要输入退位，在游戏一开始的时候出现。
	 * 如果用户选择是，在做题的每一步系统都会咨问用户是否要退位。
	 * 如果用户选择否，系统就不会再问用户是否要退位 */
	public confirmInputBorrowNeedAsync(): Promise<boolean>
	{
		return new Promise<boolean>(resolve => {
			this.yesButton2.once(egret.TouchEvent.TOUCH_TAP, () => {
				this.confirmInputBorrowDialogGroup.visible = false;
				resolve(true);
			}, this);
			this.noButton2.once(egret.TouchEvent.TOUCH_TAP, () => {
				this.confirmInputBorrowDialogGroup.visible = false;
				resolve(false);
			}, this);
		});
	}

	public set questionIndex(value: number)
	{
		this.questionIndexLabel.text = value.toString();
	}

	public get questionIndex(): number
	{
		return parseInt(this.questionIndexLabel.text);
	}

	public set correctAnswerCount(value: number)
	{
		this.correctLabel.text = `答對題數：${value}         題`;
	}

	public set minuend(value: number)
	{
		this.answerMinuendLabel.text = this.correctMinuendLabel.text = value.toString();
	}

	public set subtrahend(value: number)
	{
		this.answerSubtrahendLabel.text = this.correctSubtrahendLabel.text = value.toString();
	}

	/** 令差的指定位进入编辑模式 */
	public changeAnswerDifferenceToEditMode(position: number): void
	{
		(this.questionGroup.getChildByName(`difference${position}Label`) as EditableLabel).currentState = 'edit';
	}

	/** 令差的指定位进入只读模式 */
	public changeAnswerDifferenceToViewMode(position: number): void
	{
		(this.questionGroup.getChildByName(`difference${position}Label`) as EditableLabel).currentState = 'view';
	}

	/** 令新被减数的指定位进入编辑模式 */
	public changeAnswerNewMinuendToEditMode(position: number, borrowTime: number): void
	{
		(this.questionGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).currentState = 'edit';
	}

	/** 令新被减数的指定位进入只读模式 */
	public changeAnswerNewMinuendToViewMode(position: number, borrowTime: number): void
	{
		(this.questionGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).currentState = 'view';
	}

	/** 读取用户输入的指定位的差 */
	public async getDifferenceAsync(position: number): Promise<number>
	{
		let char = await this.numberPad.getCharAsync();
		(this.questionGroup.getChildByName(`difference${position}Label`) as EditableLabel).text = char;
		return parseInt(char, 10);
	}

	public setAnswerDifference(value: string, position: number): void
	{
		(this.questionGroup.getChildByName(`difference${position}Label`) as EditableLabel).text = value;
	}

	/** 获取用户是否需要借位的选择 */
	public confirmBorrowNeedAsync(): Promise<boolean>
	{
		this.topDialogGroup.visible = true;
		this.angelGroup.visible=true;
		return new Promise<boolean>(resolve => {
			this.yesButton.once(egret.TouchEvent.TOUCH_TAP, () => {
				resolve(true);
				this.topDialogGroup.visible = false;
				this.angelGroup.visible=false;
			}, this);
			this.noButton.once(egret.TouchEvent.TOUCH_TAP, () => {
				resolve(false);
				this.topDialogGroup.visible = false;
				this.angelGroup.visible=false;
			}, this);
		});
	}

	/** 获取用户输入的新被减数 */
	public async getNewMinuendAsync(position: number, borrowTime: number): Promise<number>
	{
		let char = await this.numberPad.getCharAsync();
		(this.questionGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).text = char;
		return parseInt(char, 10);
	}

	/** 设置新被减数的指定位的值 */
	public setAnswerNewMinuend(value: string, position: number, borrowTime: number): void
	{
		(this.questionGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).text = value;
	}

	/** 播放被减数被删除的动画 */
	public playAnswerMinuendDeleteMovie(position: number, borrowTime: number): void
	{
		(this.answerDeleteMinuendMovies[`deleteMinuend${position}${borrowTime}Movie`] as egret.tween.TweenGroup).play(0);
	}

	/** 隐藏被减数被删除的动画 */
	public hideAnswerMinuendDeleteMovies(): void
	{
		for (let index = 0; index < this.questionGroup.numChildren; index++) {
			let child = this.questionGroup.getChildAt(index);
			if (child instanceof eui.Image && (child as eui.Image).source == 'red_line_png') {
				child.width = child.height = 0;
			}
		}
	}

	/** 设置指定位的差 */
	public setCorrectDifference(value: string, position: number): void
	{
		(this.correctGroup.getChildByName(`difference${position}Label`) as EditableLabel).text = value.toString();
	}

	/** 设置指定位的退位 */
	public setCorrectNewMinuend(value: string, position: number, borrowTime: number): void
	{
		(this.correctGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).text = value.toString();
	}

	/** 播放被减数被删除的动画 */
	public playCorrectMinuendDeleteMovie(position: number, borrowTime: number): void
	{
		(this.correctDeleteMinuendMovies[`deleteMinuend${position}${borrowTime}Movie`] as egret.tween.TweenGroup).play(0);
	}

	/** 隐藏被减数被删除的动画 */
	public hideCorrectMinuendDeleteMovies(): void
	{
		for (let index = 0; index < this.correctGroup.numChildren; index++) {
			let child = this.correctGroup.getChildAt(index);
			if (child instanceof eui.Image && (child as eui.Image).source == 'red_line_png') {
				child.width = child.height = 0;
			}
		}
	}

	public showAngle(): void
	{
		this.angelGroup.visible = true;
	}

	public hideAngel(): void
	{
		this.angelGroup.visible = false;
	}

	public showNextQuestionButton(): void
	{
		this.nextQuestionButton.visible = true;
	}

	public hideNextQuestionButton(): void
	{
		this.nextQuestionButton.visible = false;
	}

	/** 等待用户点击“下一题" */
	public nextQuestionButtonClickAsync(): Promise<void>
	{
		return new Promise<void>(resolver => {
			this.nextQuestionButton.once(egret.TouchEvent.TOUCH_TAP, resolver, this);
		});
	}

	public alertAnswerCorrect(): void
	{
		this.answerStatusImage.visible = true;
		this.answerStatusImage.source = 'tick_png';
	}

	public alertAnswerWrong(): void
	{
		this.answerStatusImage.visible = true;
		this.answerStatusImage.source = 'dispoint_png';
	}

	public onChangeFinshButtonTexutre():void{
		this.finishButton.mouseOverSource="finish_selected_png"
	}

	public hideAnswerStatus(): void
	{
		this.answerStatusImage.visible = false;
	}

	public showCorrectGroup(): void
	{
		this.correctGroup.visible = true;
	}

	public hideCorrectGroup(): void
	{
		this.correctGroup.visible = false;
	}

	public openBox(): void
	{
		this.boxOpenTweenGroup.play(0);
		
	}
	public closeBox(): void
	{
		this.boxOpenImage.alpha = 0;
		this.boxClosedImage.alpha = 1;
		this.strawberryImage.alpha = 0;
	}

	/** 显示完成按钮的提示 */
	public async alertFinishTips(): Promise<void>
	{
		this.finishTipsGroup.visible = true;
		await lzlib.ThreadUtility.sleep(3000);
		this.finishTipsGroup.visible = false;
	}

	/** 等待用户点击"完成按钮" */
	public confirmFinishButtonClick(): Promise<void>
	{
		return new Promise<void>(resolver => {
			this.finishButton.once(egret.TouchEvent.TOUCH_TAP, resolver, this);
		});
	}

	/** 清除用户的输入 */
	public clearUserInput(): void
	{
		for (let index = 0; index < this.questionGroup.numChildren; index++) {
			let child = this.questionGroup.getChildAt(index);
			if (child instanceof EditableLabel) {
				(child as EditableLabel).clear();
			}
		}

		for (let index = 0; index < this.correctGroup.numChildren; index++) {
			let child = this.correctGroup.getChildAt(index);
			if (child instanceof EditableLabel) {
				(child as EditableLabel).clear();
			}
		}
	}

	public showOperation(): void
	{
		this.operationGroup.visible = true;
	}
}