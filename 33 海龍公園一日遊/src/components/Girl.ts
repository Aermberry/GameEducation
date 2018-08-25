class Girl extends eui.Component implements  eui.UIComponent {
	private girlNormalImage: eui.Image;
	private girlSmileImage: eui.Image;
	private listenLabel: eui.Label;

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
		this.girlNormalImage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onGirlTouchBegin, this);
		this.girlNormalImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGirlTouchTap, this);
		this.girlNormalImage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onGirlTouchTap, this);
	}

	private onGirlTouchBegin(): void
	{
		this.girlNormalImage.visible = false;
		this.listenLabel.visible = false;
		this.girlSmileImage.visible = true;
	}

	private onGirlTouchTap(e: egret.TouchEvent): void
	{
		this.girlNormalImage.visible = true;
		this.listenLabel.visible = true;
		this.girlSmileImage.visible = false;
		this.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP, true, true));
	}
}