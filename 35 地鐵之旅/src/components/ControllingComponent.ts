class ControllingComponent extends eui.Component implements  eui.UIComponent {
	
	private restartLabel: eui.Label;
	private routeMapLabel: eui.Label;
	private closeLabel: eui.Label;
	private routeBorderImage: eui.Image;
	private popupComponent: PopupComponent;

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
		mouse.setButtonMode(this.restartLabel, true);
		mouse.setButtonMode(this.closeLabel, true);
		mouse.setButtonMode(this.routeMapLabel, true);
		this.restartLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReStartClick, this);
		this.closeLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
		this.routeMapLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRouteMapClick, this);
		this.disableRoute && this.disabeRouteMButton();
	}

	private async onReStartClick(): Promise<void>
	{
		this.popupComponent.visible = true;
		let isConfirm = false;
		await new Promise<string>(resolve => {
			this.popupComponent.addEventListener(PopupEvent.POPUP_CLICK, (e: PopupEvent) => {
				isConfirm = e.isConfirm;
				resolve();
			} , this);
		});
		isConfirm && Main.instance.gotoScene(new StartScene());
	}

	private async onCloseClick(): Promise<void>
	{
		this.popupComponent.visible = true;
		let isConfirm = false;
		await new Promise<string>(resolve => {
			this.popupComponent.addEventListener(PopupEvent.POPUP_CLICK, (e: PopupEvent) => {
				isConfirm = e.isConfirm;
				resolve();
			} , this);
		});
		
		isConfirm && window.close();
	}

	private onRouteMapClick(): void
	{
		this.dispatchEvent(new ControllingEvent());
	}

	private _disableRoute = false;

	public get disableRoute(): boolean
	{
		return this._disableRoute;
	}

	public set disableRoute(status: boolean)
	{
		this._disableRoute = status;
	}

	private disabeRouteMButton(): void
	{
		this.routeMapLabel.alpha = 0.5;
		this.routeBorderImage.alpha = 0.5;
	}
	
}

class ControllingEvent extends egret.Event
{

	public static readonly ROUTE_CLICK = 'routeMap_click';

	public constructor()
	{
		super(ControllingEvent.ROUTE_CLICK);
	}
}