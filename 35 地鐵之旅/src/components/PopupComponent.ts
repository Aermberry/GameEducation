class PopupComponent extends eui.Component implements  eui.UIComponent {
	
	private yesButton: eui.Rect;
	private noButton: eui.Rect;
	
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
		this.yesButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onYesClick, this);
		this.noButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNoClick, this);
	}

	private onYesClick(): void
	{
		this.dispatchEvent(new PopupEvent(true));
		this.visible = false;
	}

	private onNoClick(): void
	{
		this.dispatchEvent(new PopupEvent(false));
		this.visible = false;
	}
	
}

class PopupEvent extends egret.Event
{
	public static readonly POPUP_CLICK = 'popup_click';

	public isConfirm = true;

	public constructor(status: boolean)
	{
		super(PopupEvent.POPUP_CLICK);
		this.isConfirm = status;
	}
}