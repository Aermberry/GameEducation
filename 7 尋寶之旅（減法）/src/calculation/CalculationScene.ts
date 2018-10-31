class CalculationScene extends eui.Component implements  eui.UIComponent, ICalculationView {
	private exitGroup: eui.Group;
	private exitImage: eui.Image;
	private restartGroup: eui.Group;
	private restartImage: eui.Image;
	private degreeImage: eui.Image;
	private nextQuestionButton: ImageButton;

	private nextImage: eui.Image;
	private nextPass: eui.Group;

	private questionIndexLabel: eui.Label;
	private minuendLabel: eui.Label;
	private subtrahendLabel: eui.Label;
	private calculationGroup: eui.Group;

	private boyGroup: eui.Group;
	private boyImage: eui.Image;
	private boxOpenImage: eui.Image;
	private boxClosedImage: eui.Image;
	private boxOpenTweenGroup: egret.tween.TweenGroup;
	private strawberryImage: eui.Image;

    private boyFactory:egret.MovieClipDataFactory;
    private boyMovie:egret.MovieClip;
    private strawberryUpFactory:egret.MovieClipDataFactory;
    private strawberryUpMovie:egret.MovieClip;
    private strawberryDownFactory:egret.MovieClipDataFactory;
    private strawberryDownMovie:egret.MovieClip;

	private numberPad: NumberPad;

	private topDialogGroup: eui.Group;
	private topDialogTitleLabel: eui.Label;
	private topDialogBodyLabel: eui.Label;
	private yesButton: ImageButton;
	private noButton: ImageButton;

	private bottomDialogGroup: eui.Group;
	private bottomDialogBodyLabel: eui.Label;

	private angelGroup: eui.Group;
	private angelFactory:egret.MovieClipDataFactory;
    private angelMovie:egret.MovieClip;

	private congratulationImage: eui.Image;

	private deleteMinuend20Movie: egret.tween.TweenGroup;
	private deleteMinuend10Movie: egret.tween.TweenGroup;
	private deleteMinuend11Movie: egret.tween.TweenGroup;
	private deleteMinuend00Movie: egret.tween.TweenGroup;
	private deleteMinuendMovies = {};

	private degree: Degree;
	private presenter = new CalculationPresenter();

	public constructor(degree: Degree) {
		super();
		this.degree = degree;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.initRestartExitButton();
		this.initAngelGroup();
		this.initBoyMovie();
		this.formatDegree();
		this.deleteMinuendMovies = {
			"deleteMinuend20Movie": this.deleteMinuend20Movie,
			"deleteMinuend10Movie": this.deleteMinuend10Movie,
			"deleteMinuend11Movie": this.deleteMinuend11Movie,
			"deleteMinuend00Movie": this.deleteMinuend00Movie
		};
		this.presenter.view = this;
		this.presenter.degree = this.degree;
		this.presenter.startCalulation();
		this.nextImage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
		this.nextImage.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
		this.nextPass.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextPassClick, this);
		
	}

	private initRestartExitButton(): void
	{
		mouse.setButtonMode(this.restartImage, true);
		// this.restartImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.startCalulation, this.presenter);
		this.restartImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRestartImageClick , this);
		mouse.setButtonMode(this.exitImage, true);
		this.exitImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitImageClick , this);
	}

	private onNextPassClick(): void {
		// Main.instance.gotoScene(new CalculationScene(Degree.medium));
		switch (this.degree) {
			case Degree.junior:
			Main.instance.gotoScene(new CalculationScene(Degree.medium));
			break;

			case Degree.medium:
			Main.instance.gotoScene(new CalculationScene(Degree.senior));
			break;

		}
	}
 
	private onRollOver(): void {
		this.nextImage.source = "next_degree_selected_png";
	}
	
	private onRollOut(): void {
		this.nextImage.source = "next_degree_normal_png";
	}

	private onExitImageClick(): void {
		window.close();
	}

	private onRestartImageClick(): void {
		Main.instance.gotoScene(new StartScene());
	}

	private initAngelGroup(): void
	{
		this.angelFactory = new egret.MovieClipDataFactory(RES.getRes('angel_json'), RES.getRes('angel_png'));
		this.angelMovie = new egret.MovieClip(this.angelFactory.generateMovieClipData('angel'));
		this.angelGroup.addChild(this.angelMovie);
		this.angelMovie.play(-1);
	}
	
	private initBoyMovie(): void
	{
		this.boyFactory = new egret.MovieClipDataFactory( RES.getRes('boy_jump_json'), RES.getRes('boy_jump_png'));
		this.boyMovie = new egret.MovieClip(this.boyFactory.generateMovieClipData('boy'));
		this.boyMovie.y = 0;
		this.boyGroup.addChild(this.boyMovie);
		this.boyMovie.play(-1);

		this.strawberryDownFactory = new egret.MovieClipDataFactory( RES.getRes('strawberry_down_json'), RES.getRes('strawberry_down_png'));
		this.strawberryDownMovie = new egret.MovieClip(this.strawberryDownFactory.generateMovieClipData('strawberry_down'));
		this.strawberryDownMovie.y = 0;
		this.boyGroup.addChild(this.strawberryDownMovie);
		this.strawberryDownMovie.play(-1);

		this.strawberryUpFactory = new egret.MovieClipDataFactory( RES.getRes('strawberry_up_json'), RES.getRes('strawberry_up_png'));
		this.strawberryUpMovie = new egret.MovieClip(this.strawberryUpFactory.generateMovieClipData('strawberry_up'));
		this.strawberryUpMovie.y = 300;
		this.boyGroup.addChild(this.strawberryUpMovie);
		this.strawberryUpMovie.play(-1);
	}

	private formatDegree(): void
	{	
		switch (this.degree) {
			case Degree.junior:
			this.degreeImage.source = 'junior_normal_png';
			break;

			case Degree.medium:
			this.degreeImage.source = 'medium_normal_png';
			break;

			default:
			this.degreeImage.source = 'senior_normal_png';
			break;
		}
	}

	public set questionIndex(value: number)
	{
		this.questionIndexLabel.text = value.toString();
	}

	public set minuend(value: number)
	{
		this.minuendLabel.text = value.toString();
	}

	public set subtrahend(value: number)
	{
		this.subtrahendLabel.text = value.toString();
	}

	/** 令差的指定位进入编辑模式 */
	public changeDifferenceToEditMode(position: number): void
	{
		(this.calculationGroup.getChildByName(`difference${position}Label`) as EditableLabel).currentState = 'edit';
	}

	/** 令差的指定位进入只读模式 */
	public changeDifferenceToViewMode(position: number): void
	{
		(this.calculationGroup.getChildByName(`difference${position}Label`) as EditableLabel).currentState = 'view';
	}

	/** 令新被减数的指定位进入编辑模式 */
	public changeNewMinuendToEditMode(position: number, borrowTime: number): void
	{
		(this.calculationGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).currentState = 'edit';
	}

	/** 令新被减数的指定位进入只读模式 */
	public changeNewMinuendToViewMode(position: number, borrowTime: number): void
	{
		(this.calculationGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).currentState = 'view';
	}

	/** 读取用户输入的指定位的差 */
	public async getDifferenceAsync(position: number): Promise<string>
	{
		let char = await this.numberPad.getCharAsync();
		(this.calculationGroup.getChildByName(`difference${position}Label`) as EditableLabel).text = char;
		return char;
	}

	/** 详细提示用户输入的差是错误的 */
	public showDifferenceError(minuend: number, subtrahend: number): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogBodyLabel.visible = true;
		this.topDialogBodyLabel.text = `${minuend} - ${subtrahend} = ?`;
	}

	/** 用户输入的差是错误的，隐藏详细错误 */
	public hideDifferenceError(): void
	{
		this.topDialogGroup.visible = false;
		this.topDialogBodyLabel.visible = false;
	}

	/** 简单提示用户输入的差是错误的 */
	public changeDifferenceStatusToWrong(position: number): void
	{
		let image = (this.calculationGroup.getChildByName(`difference${position}StatusImage`) as eui.Image);
		image.source = 'dispoint_png';
		image.visible = true;
	}

	/** 简单提示用户输入的差是正确的 */
	public changeDifferenceStatusToCorrect(position: number): void
	{
		let image = (this.calculationGroup.getChildByName(`difference${position}StatusImage`) as eui.Image);
		image.source = 'tick_png';
		image.visible = true;
	}

	/** 显示是否需要借位的对话框 */
	public showNeedBorrowDialog(): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogTitleLabel.visible = true;
		this.topDialogTitleLabel.text = '要退位嗎？';
		this.yesButton.visible = true;
		this.noButton.visible = true;
		this.angelGroup.visible = true;
	}

	/** 隐藏是否需要借位的对话框 */
	public hideNeedBorrowDialog(): void
	{
		this.topDialogGroup.visible = false;
		this.topDialogTitleLabel.visible = false;
		this.yesButton.visible = false;
		this.noButton.visible = false;
	}

	/** 获取用户是否需要借位的选择 */
	public confirmNeedBorrowAsync(): Promise<boolean>
	{
		return new Promise<boolean>(resolve => {
			this.yesButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(true), this);
			this.noButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(false), this);
		});
	}
	/** 显示用户“是否借位”选择错误的提示 */
	public showNeedBorrowError(): void
	{
		this.bottomDialogGroup.visible = true;
		this.bottomDialogBodyLabel.text = '再試一次！';
	}

	/** 隐藏用户“是否借位”选择错误的提示 */
	public hideNeedBorrowError(): void
	{
		this.bottomDialogGroup.visible = false;
	}

	/** 获取用户输入的新被减数 */
	public async getNewMinuendAsync(position: number, borrowTime: number): Promise<string>
	{
		let char = await this.numberPad.getCharAsync();
		(this.calculationGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).text = char;
		return char;
	}

	/** 设置新被减数的指定位的值 */
	public setNewMinuend(value: number, position: number, borrowTime: number)
	{
		(this.calculationGroup.getChildByName(`newMinuend${position}${borrowTime}Label`) as EditableLabel).text = value.toString();
	}

	/** 简单提示用户输入的新被减数是错误的 */
	public changeNewMinuendStatusToWrong(position: number, borrowTime: number)
	{
		let image = (this.calculationGroup.getChildByName(`newMinuend${position}${borrowTime}StatusImage`) as eui.Image);
		image.source = 'dispoint_png';
		image.visible = true;
	}
	/** 简单提示用户输入的新被减数是正确的 */
	public async changeNewMinuendStatusToCorrect(position: number, borrowTime: number)
	{
		let image = (this.calculationGroup.getChildByName(`newMinuend${position}${borrowTime}StatusImage`) as eui.Image)
		image.source = 'tick_png';
		image.visible = true;
		await lzlib.ThreadUtility.sleep(2000);
		image.visible = false;
	}

	public showNewMinuendError(minuend: number, position: number): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogBodyLabel.visible = true;
		let positionString = position == 0 ? '個' : '十';
		this.topDialogBodyLabel.text = minuend.toString() + `被${positionString}位借了1後，\n還餘多少？`;
	}

	/** 十位已向百位借1，變成10，又借1給個位，變成9。*/
	public showMenuendIsTenError(): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogBodyLabel.visible = true;
		this.topDialogBodyLabel.text = '十位已向百位借1，變成10，\n又借1給個位，變成9。';
	}

	/** 隐藏新被减数错误的提示 */
	public hideNewMinuendError(): void
	{
		this.topDialogGroup.visible = false;
		this.topDialogBodyLabel.visible = false;
	}

	public async showBorrowOneFromHundredBecauseTenIsZeroTip(minuend: number): Promise<void>
	{
		this.topDialogGroup.visible = true;
		this.topDialogBodyLabel.visible = true;
		this.topDialogBodyLabel.text = '十位是0，再向百位借';
		await lzlib.ThreadUtility.sleep(2000);
		this.showNewMinuendError(minuend, 1);
	}

	public hideBorrowOneFromHundredBecauseTenIsZeroTip(): void
	{
		this.topDialogGroup.visible = false;
		this.topDialogBodyLabel.visible = false;
	}

	/** 十位借给个位后，移下多少？ */
	public showHowMuchDecadeLeftAfterUnitBorrowOneTip(): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogBodyLabel.visible = true;
		this.topDialogBodyLabel.text = '十位借給個位後，移下多少？';
	}

	/** 播放被减数被删除的动画 */
	public playMinuendDeleteMovie(position: number, borrowTime: number): void
	{
		(this.deleteMinuendMovies[`deleteMinuend${position}${borrowTime}Movie`] as egret.tween.TweenGroup).play(0);
	}

	/** 隐藏被减数被删除的动画 */
	public hideMinuendDeleteMovies(): void
	{
		for (let index = 0; index < this.calculationGroup.numChildren; index++) {
			let child = this.calculationGroup.getChildAt(index);
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

	public openBox(): void
	{
		this.boxOpenTweenGroup.play(0);
		this.boyImage.visible = false;
		this.boyMovie.visible = true;
	}

	public boyshowhie():void
	{
		this.boyImage.visible = true;
		this.boyMovie.visible = false;
	}

	public closeBox(): void
	{
		this.boxOpenImage.alpha = 0;
		this.boxClosedImage.alpha = 1;
		this.strawberryImage.alpha = 0;
	}

	/** 清除用户的输入 */
	public clearUserInput(): void
	{
		for (let index = 0; index < this.calculationGroup.numChildren; index++) {
			let child = this.calculationGroup.getChildAt(index);
			if (child instanceof EditableLabel) {
				(child as EditableLabel).currentState = 'view';
				(child as EditableLabel).text = '';
			}

			if (child instanceof eui.Image && child.name.indexOf('StatusImage') >= 0) {
				(child as eui.Image).source = '';
				child.visible = false;
			}
		}

	}

	/** 显示通关动画 */
	public startCongratulation(): void
	{

		if(this.degree ==  Degree.senior){
			this.boyImage.visible = false;
			this.boyMovie.visible = true;
			this.strawberryUpMovie.visible = true;
			this.strawberryDownMovie.visible = true;
			this.congratulationImage.visible = true;
			this.nextPass.visible = false;
		}else{
			this.boyImage.visible = false;
			this.boyMovie.visible = true;
			// this.strawberryUpMovie.visible = true;
			// this.strawberryDownMovie.visible = true;
			// this.congratulationImage.visible = true;
			this.nextPass.visible = true;
			this.boxOpenTweenGroup.play(0);
			this.angelGroup.visible = false;
		}
	}

	/** 关闭通关动画 */
	public stopCongratulation(): void
	{
		this.boyImage.visible = true;
		this.boyMovie.visible = false;
		this.strawberryUpMovie.visible = false;
		this.strawberryDownMovie.visible = false;
		this.congratulationImage.visible = false;
	}
}