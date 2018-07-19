class EditableLabel extends eui.Component implements  eui.UIComponent {
	protected bgImage: eui.Image;
	protected userInput: eui.TextInput;
	protected resultLabel: eui.BitmapLabel;
	protected shinningTweenGroup: egret.tween.TweenGroup;

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
		this.userInput.textDisplay.left = 10;
		this.userInput.textDisplay.right = 10;
		this.userInput.textDisplay.top = 10;
		this.userInput.textDisplay.bottom = 10;
		this.userInput.textDisplay.textAlign = 'center';
		this.userInput.textDisplay.verticalAlign = 'center';
		this.userInput.text = this.text;
		this.userInput.addEventListener(egret.Event.CHANGE, this.onUserInputChange, this);
		this.resultLabel.text = this.text;
		TweenGroupUtility.playAnimation(this.shinningTweenGroup);
	}

	private onUserInputChange(): void
	{
		this._text = this.userInput.text.trim();
		this.resultLabel.text = this._text;
		this.dispatchEvent(new egret.Event(egret.Event.CHANGE, true, true, this._text));
	}

	private _text: string;

	public get text(): string
	{
		return this._text;
	}

	public set text(value: string)
	{
		this._text = value;
		this.userInput && (this.userInput.text = value);
		this.resultLabel && (this.resultLabel.text = value);
	}
}