class NextPageScene extends eui.Component implements  eui.UIComponent {
	
	public curStep: eui.Label;
	public nextPageButton: eui.Button;
	
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
		this.curStep.text = this._text;

		this.nextPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
			this.onNextPage(this.curStep.text);
		}, this)
	}

	private onNextPage(step: string)
	{
		Main.instance.gotoScene(new GameScene());
	}

	private _text = '';

	public get text():string
	{
		return this._text;
	}
	
	public set text(step: string)
	{
		this._text = step;
	}
}