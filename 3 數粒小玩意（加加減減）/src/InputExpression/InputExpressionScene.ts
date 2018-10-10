class InputExpressionScene extends eui.Component implements  eui.UIComponent, IInputExpressionView {
	private exitButton: ImageButton;
	private numberPad: NumberPad;
	private expressionLabel: eui.Label;
	private submitButton: ImageButton;
	private startButton2: eui.Image;
	private startMask: eui.Rect;
	

	private presenter = new InputExpressionPresenter();

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

		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => window.close(), this);
		this.numberPad.addEventListener(KeyDownEvent.EVENT, this.presenter.onNumberPadKeyDown, this.presenter);
		this.submitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onSubmitButtonClick, this.presenter);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);

		
	}

	private onStartButton2Click(): void
	{
		this.startMask.visible = false;
		this.startButton2.visible = false;
		this.presenter.loadView(this);
	}

	public set expression(value: string)
	{
		this.expressionLabel.text = value;
	}

	public openAddCalculationScene(addend: number, augend: number): void
	{
		Main.instance.gotoScene(new AddCalculationScene(addend, augend));
	}

	public openSubtractCalculationScene(minuend: number, subtrahend: number): void
	{
		Main.instance.gotoScene(new SubtractCalculationScene(minuend, subtrahend));
	}
}