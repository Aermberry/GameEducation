class CalculationScene extends eui.Component implements  eui.UIComponent, ICalculationView {
	private exitGroup: eui.Group;
	private exitImage: eui.Image;
	private restartGroup: eui.Group;
	private restartImage: eui.Image;
	private degreeImage: eui.Image;
	private nextQuestionButton: ImageButton;

	private questionIndexLabel: eui.Label;
	private augendLabel: eui.Label;
	private addendLabel: eui.Label;
	private calculationGroup: eui.Group;

	private decadeCarryLabel: EditableLabel;
	private hundredCarryLabel: EditableLabel;
	private decadeCarryIndicatorImage: EditableLabel;
	private hundredCarryIndicatorImage: EditableLabel;

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
		this.presenter.view = this;
		this.presenter.degree = this.degree;
		this.presenter.startCalulation();
	}

	private initRestartExitButton(): void
	{
		mouse.setButtonMode(this.restartImage, true);
		this.restartImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.startCalulation, this.presenter);
		mouse.setButtonMode(this.exitImage, true);
		this.exitImage.addEventListener(egret.TouchEvent.TOUCH_TAP, () => window.close(), this);
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

	public set addend(value: number)
	{
		this.addendLabel.text = value.toString();
	}

	public set augend(value: number)
	{
		this.augendLabel.text = value.toString();
	}

	/** 令和的指定位进入编辑模式 */
	public changeSumToEditMode(position: number): void
	{
		(this.calculationGroup.getChildByName(`sum${position}Label`) as EditableLabel).currentState = 'edit';
	}

	/** 令和的指定位进入只读模式 */
	public changeSumToViewMode(position: number): void
	{
		(this.calculationGroup.getChildByName(`sum${position}Label`) as EditableLabel).currentState = 'view';
	}

	/** 令进位的指定位进入编辑模式 */
	public changeCarryToEditMode(position: number): void
	{
		(this.calculationGroup.getChildByName(`carry${position}Label`) as EditableLabel).currentState = 'edit';
	}

	/** 令进位的指定位进入只读模式 */
	public changeCarryToViewMode(position: number): void
	{
		(this.calculationGroup.getChildByName(`carry${position}Label`) as EditableLabel).currentState = 'view';
	}

	/** 读取用户输入的指定位的和 */
	public async getSumAsync(position: number): Promise<string>
	{
		let char = await this.numberPad.getCharAsync();
		(this.calculationGroup.getChildByName(`sum${position}Label`) as EditableLabel).text = char;
		return char;
	}

	/** 详细提示用户输入的和是错误的 */
	public showSumError(addend: number, augend: number): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogBodyLabel.visible = true;
		this.topDialogBodyLabel.text = `${addend} + ${augend} + 進位 = ?`;
	}

	/** 用户输入的个位的和是错误的，显示详细错误 */
	public showFirstSumError(addend: number, augend: number): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogBodyLabel.visible = true;
		this.topDialogBodyLabel.text = `4 + 6 = 10\n\n${addend} + ${augend} = ?`;
	}

	/** 用户输入的和是错误的，隐藏详细错误 */
	public hideSumError(): void
	{
		this.topDialogGroup.visible = false;
		this.topDialogBodyLabel.visible = false;
	}

	/** 简单提示用户输入的和是错误的 */
	public changeSumStatusToWrong(position: number): void
	{
		let image = (this.calculationGroup.getChildByName(`sum${position}StatusImage`) as eui.Image);
		image.source = 'dispoint_png';
		image.visible = true;
	}

	/** 简单提示用户输入的和是正确的 */
	public changeSumStatusToCorrect(position: number): void
	{
		let image = (this.calculationGroup.getChildByName(`sum${position}StatusImage`) as eui.Image);
		image.source = 'tick_png';
		image.visible = true;
	}

	/** 显示是否需要进位的对话框 */
	public showNeedCarryDialog(): void
	{
		this.topDialogGroup.visible = true;
		this.topDialogTitleLabel.visible = true;
		this.topDialogTitleLabel.text = '要進位嗎？';
		this.yesButton.visible = true;
		this.noButton.visible = true;
	}

	/** 隐藏是否需要进位的对话框 */
	public hideNeedCarryDialog(): void
	{
		this.topDialogGroup.visible = false;
		this.topDialogTitleLabel.visible = false;
		this.yesButton.visible = false;
		this.noButton.visible = false;
	}

	/** 获取用户是否需要进位的选择 */
	public confirmNeedCarryAsync(): Promise<boolean>
	{
		return new Promise<boolean>(resolve => {
			this.yesButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(true), this);
			this.noButton.once(egret.TouchEvent.TOUCH_TAP, () => resolve(false), this);
		});
	}
	/** 显示用户“是否进位”选择错误的提示 */
	public showNeedCarryError(): void
	{
		this.bottomDialogGroup.visible = true;
		this.bottomDialogBodyLabel.text = '如果個位數相加大於或等於10，就應進1至十位';
	}

	/** 隐藏用户“是否进位”选择错误的提示 */
	public hideNeedCarryError(): void
	{
		this.bottomDialogGroup.visible = false;
	}

	/** 获取用户输入的进位数 */
	public async getCarryAsync(position: number): Promise<string>
	{
		let char = await this.numberPad.getCharAsync();
		(this.calculationGroup.getChildByName(`carry${position}Label`) as EditableLabel).text = char;
		return char;
	}

	/** 简单提示用户输入的进位是错误的 */
	public changeCarryStatusToWrong(position: number)
	{
		let image = (this.calculationGroup.getChildByName(`carry${position}StatusImage`) as eui.Image);
		image.source = 'dispoint_png';
		image.visible = true;
	}
	/** 简单提示用户输入的进位是正确的 */
	public changeCarryStatusToCorrect(position: number)
	{
		let image = (this.calculationGroup.getChildByName(`carry${position}StatusImage`) as eui.Image)
		image.source = 'tick_png';
		image.visible = true;
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
		this.boyImage.visible = false;
		this.boyMovie.visible = true;
		this.strawberryUpMovie.visible = true;
		this.strawberryDownMovie.visible = true;
		this.congratulationImage.visible = true;
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