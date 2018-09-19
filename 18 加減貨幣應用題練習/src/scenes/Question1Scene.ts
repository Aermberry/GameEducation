class Question1Scene extends eui.Component implements eui.UIComponent {
	private questionLabel: eui.Label;
	private titleLabel: eui.Label;
	private ColorAnimation: egret.tween.TweenGroup;
	private Beers: egret.tween.TweenGroup;
	private worldsGroup: eui.Group;
	private nextQuestionButton: Ui.NextQuestion;
	private expressionLabel: eui.Label;
	private numberPad: NumberPad;
	private nextStepButton: ui.nextStepButton;

	public constructor() {
		super();
	}

	protected partAdded(partName: string, instance: any): void {

		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
		mouse.enable(this.stage);

		this.playBackMusic();
		this.DisplayAnimation();

		this.nextQuestionButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextQuestionPage, this)
		this.numberPad.addEventListener(KeyDownEvent.EVENT, this.onNumberPadKeyDown, this);
		this.nextStepButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextStep, this);
		this.expressionLabel.text = this.expression;
	}

	private _expression: string;
	public set expression(value: string) {
		this._expression = value;
	}

	public get expression() {
		return this._expression;
	}

	private onNumberPadKeyDown(e: KeyDownEvent): void {
		if (e.char == '' && this.expression.length > 0) {
			this._expression = this.expression.substr(0, this.expression.length - 1);
		}
		else {
			this._expression += e.char;
		}
		console.log(this._expression);
	}

	private nextStep(): void {

	}


	public openAddCalculationScene(addend: number, augend: number): void {

	}

	public openSubtractCalculationScene(minuend: number, subtrahend: number): void {

	}



	private async DisplayAnimation(): Promise<void> {
		await lzlib.ThreadUtility.sleep(500);
		this.questionLabel.visible = true;
		this.ColorAnimation.play(0);
	}
	private async playBackMusic(): Promise<void> {
		await lzlib.SoundUtility.playSound("scene01_mp3");
		this.titleLabel.visible = true;
		lzlib.ThreadUtility.sleep(1000);
		await lzlib.SoundUtility.playSound("think_mp3");
		await this.Beers.play(0);
		setTimeout(() => { this.worldsGroup.visible = true; }, 1000);
		await lzlib.ThreadUtility.sleep(3000);
		this.nextStepButton.visible = true;
		this.expressionLabel.visible = true;
	}

	private onNextQuestionPage(): void {
		Base.gotoNextScene(new Question2Scene);
	}
}