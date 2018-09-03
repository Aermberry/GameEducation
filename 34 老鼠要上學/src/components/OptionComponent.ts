class OptionComponent extends eui.Component implements  eui.UIComponent {
	
	private textLabel: eui.Label;
	private correct: eui.Label;
	private wrong: eui.Label;

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
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStageBegin, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onStageEnd, this);
		this.textLabel.text = this._text;
	}

	private onStageBegin(): void
	{
		this.scaleX = 0.7;
		this.scaleY = 0.7;
	}

	private onStageEnd(): void
	{
		this.scaleX = 1;
		this.scaleY = 1;
	}

	private _text = '';

	public get text(): string
	{
		return this._text;
	}

	public set text(text: string)
	{
		this._text = text;
		this.textLabel && (this.textLabel.text = this._text);
	}

	public showCorrect(): void
	{
		this.correct.alpha = 1;
	}

	public showWrong(): void
	{
		this.wrong.alpha = 1;
	}
	
}