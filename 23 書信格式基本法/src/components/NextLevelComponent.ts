class NextLevelComponent extends eui.Component implements  eui.UIComponent {
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