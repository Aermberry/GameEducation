class NextQuestionComponent extends eui.Component implements  eui.UIComponent {
	
	private BackgroundImage: eui.Image;
	private nextQuestionGroup: eui.Group;
	
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
		this.BackgroundImage.source = this._source;
		this.nextQuestionGroup.x = this._nextQuestionX;
		this.nextQuestionGroup.y = this._nextQuestionY;
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

	private _source = '';

	public get source() : string
	{
		return this._source;
	}

	public set source(str: string)
	{
		this._source = str;
		this.BackgroundImage && (this.BackgroundImage.source = str);
	}

	private _nextQuestionX = 25;

	public get nextQuestionX() : number
	{
		return this._nextQuestionX;
	}

	public set nextQuestionX(num: number)
	{
		this._nextQuestionX = num;
	}

	private _nextQuestionY = 0;

	public get nextQuestionY() : number
	{
		return this._nextQuestionY;
	}

	public set nextQuestionY(num: number)
	{
		this._nextQuestionY = num;
	}
	
}