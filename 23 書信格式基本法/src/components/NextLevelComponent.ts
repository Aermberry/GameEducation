class NextLevelComponent extends eui.Component implements  eui.UIComponent {
	
	private textLabel: eui.Label;

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
		this.textLabel.text = this._text;
		mouse.enable(this.stage);
		mouse.setButtonMode(this, true);
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseMove, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		// this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		// this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
	}

	private onMouseMove(): void
	{
		this.currentState = 'move';
	}

	private onMouseOut(): void
	{
		this.currentState = 'normal';
	}

	private _text = '下一題';

	public get text(): string
	{
		return this._text;
	}

	public set text(text: string)
	{
		this._text = text;
		this.textLabel && (this.textLabel.text = this._text)
	}

	
	// private onBegin(): void
	// {
	// 	console.log('begin');
	// 	this.y+=8;
		
	// }

	// private onEnd(): void
	// {
	// 	console.log('end');
	// 	this.y-=8;
		
	// }
}