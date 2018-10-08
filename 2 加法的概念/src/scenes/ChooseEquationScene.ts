class ChooseEquationScene extends eui.Component implements  eui.UIComponent {
	private plus125And53Rect: eui.Rect;
	private plus16And27Rect: eui.Rect;
	private plus165And53Rect: eui.Rect;
	private plus175And168Rect: eui.Rect;
	private plus134And168Rect: eui.Rect;

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
		mouse.setButtonMode(this.plus125And53Rect, true);
		mouse.setButtonMode(this.plus16And27Rect, true);
		mouse.setButtonMode(this.plus165And53Rect, true);
		mouse.setButtonMode(this.plus175And168Rect, true);
		mouse.setButtonMode(this.plus134And168Rect, true);
		this.plus125And53Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new Plus125And53Scene()), this);
		this.plus16And27Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new Plus16And27Scene()), this);
		this.plus165And53Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new Plus165And53Scene()), this);
		this.plus175And168Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new Plus175And168Scene()), this);
		this.plus134And168Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new Plus134And168Scene()), this);
	}
	
}