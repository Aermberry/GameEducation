class CalculationScene extends eui.Component implements  eui.UIComponent, ICalculationView {
	private correctLabel: eui.Label;
	private nextQuestionButton: ImageButton;

	//Question Group
	private questionGroup: eui.Group;
	private questionIndexLabel: eui.Label;
	private questionAugendLabel: eui.Label;
	private questionAddendLabel: eui.Label;
	private answerStatusImage: eui.Image;
	private answerCarryGroup: eui.Group;
	private answerSumGroup: eui.Group;

	//Correct Group
	private correctGroup: eui.Group;
	private correctAddendLabel: eui.Label;
	private correctAugendLabel: eui.Label;
	private correctCarryGroup: eui.Group;
	private correctSumGroup: eui.Group;

	private boyGroup: eui.Group;
	private boyImage: eui.Image;
	private boxOpenImage: eui.Image;
	private boxClosedImage: eui.Image;
	private boxOpenTweenGroup: egret.tween.TweenGroup;
	private strawberryImage: eui.Image;
	private finishImage: eui.Image;

	private numberPad: NumberPad;

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
		mouse.setButtonMode(this.finishImage, true);
		this.finishImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onFinishOver, this);
		this.finishImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onFinishOut, this);
		this.finishImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFinishClick, this);
		this.presenter.loadView(this);
	}

	private onFinishClick(e: egret.TouchEvent): void
	{
		this.presenter.onInputFinish();
	}

	private onFinishOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Image).source = 'finish_over_png';
	}

	private onFinishOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Image).source = 'finish_normal_png';
	}

	public set questionIndex(value: number)
	{
		this.questionIndexLabel.text = value.toString();
	}

	public set correctAnswerCount(value: number)
	{
		this.correctLabel.text = `答對題數：${value}         題`;
	}

	public set addend(value: number)
	{
		this.questionAddendLabel.text = this.correctAddendLabel.text = value.toString();
	}

	public set augend(value: number)
	{
		this.questionAugendLabel.text = this.correctAugendLabel.text = value.toString();
	}

	/** 令和的指定位进入只读模式 */
	public changeAnswerSumToViewMode(position: number): void
	{
		(this.answerSumGroup.getChildAt(position) as EditableLabel).currentState = 'view';
	}

	public getNameAsync(): Promise<string>
	{
		return new Promise<string>(resolve => resolve(''));
	}

	public confirmCarryNeedAsync(): Promise<boolean>
	{
		return new Promise<boolean>(resolve => resolve(true));
	}

	/** 令和的指定位进入编辑模式 */
	public changeAnswerSumToEditMode(position: number): void
	{
		(this.answerSumGroup.getChildAt(position) as EditableLabel).currentState = 'edit';
	}

	/** 获取用户输入的和 */
	public async getSumAsync(position: number): Promise<number>
	{
		let char = await this.numberPad.getCharAsync();
		(this.answerSumGroup.getChildAt(position) as EditableLabel).text = char;
		return parseInt(char, 10);
	}

	public setAnswerSum(sum: string, position: number): void
	{
		(this.answerSumGroup.getChildAt(position) as EditableLabel).text = sum;
	}

	/** 令进位的指定位进入编辑模式 */
	public changeAnswerCarryToEditMode(position: number): void
	{
		(this.answerCarryGroup.getChildAt(position) as EditableLabel).currentState = 'edit';
	}

	/** 令进位的指定位进入只读模式 */
	public changeAnswerCarryToViewMode(position: number): void
	{
		(this.answerCarryGroup.getChildAt(position) as EditableLabel).currentState = 'view';
	}

	/** 获取用户输入的进位数 */
	public async getCarryAsync(position: number): Promise<string>
	{
		let char = await this.numberPad.getCharAsync();
		if (char != '0') {
			(this.answerCarryGroup.getChildAt(position) as EditableLabel).text = char;
		}
		return char;
	}

	/** 令和的指定位进入编辑模式 */
	public changeCorrectSumToEditMode(position: number):void
	{
		(this.correctSumGroup.getChildAt(position) as EditableLabel).currentState = 'edit';
	}

	/** 令和的指定位进入只读模式 */
	public changeCorrectSumToViewMode(position: number): void
	{
		(this.correctSumGroup.getChildAt(position) as EditableLabel).currentState = 'view';
	}

	/** 设置指定位的和 */
	public setCorrectSum(sum: string, position: number): void
	{
		(this.correctSumGroup.getChildAt(position) as EditableLabel).text = sum;
	}

	/** 令进位的指定位进入编辑模式 */
	public changeCorrectCarryToEditMode(position: number): void
	{
		(this.correctCarryGroup.getChildAt(position) as EditableLabel).currentState = 'edit';
	}

	/** 令进位的指定位进入只读模式 */
	public changeCorrectCarryToViewMode(position: number): void
	{
		(this.correctCarryGroup.getChildAt(position) as EditableLabel).currentState = 'view';
	}

	/** 设置指定位的进位 */
	public setCorrectCarry(carry: string, position: number): void
	{
		(this.correctCarryGroup.getChildAt(position) as EditableLabel).text = carry;
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

	public hideAnswerStatus(): void
	{
		this.answerStatusImage.visible = false;
	}

	public showCorrectGroup(): void
	{
		this.correctGroup.visible = true;
	}

	public showFinishImage(): void
	{
		this.finishImage.visible = true;
	}

	public hideFinishImage(): void
	{
		this.finishImage.visible = false;
	}

	public enableFinishImage(): void
	{
		this.finishImage.touchEnabled = true;
	}

	public disableFinishImage(): void
	{
		this.finishImage.touchEnabled = false;
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

	/** 清除用户的输入 */
	public clearUserInput(): void
	{
		this.answerCarryGroup.$children.forEach(x => (x as EditableLabel).text = '');
		this.answerSumGroup.$children.forEach(x => (x as EditableLabel).text = '');
		this.correctCarryGroup.$children.forEach(x => (x as EditableLabel).text = '');
		this.correctSumGroup.$children.forEach(x => (x as EditableLabel).text = '');
	}

}