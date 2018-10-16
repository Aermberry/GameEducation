class ChooseEquationScene extends eui.Component implements  eui.UIComponent {
    private math143Less21Rect:eui.Group;
	private math134Less115Rect:eui.Rect;
	private math315Less123Rect:eui.Rect;
	private math321Less125Rect:eui.Rect;
	private math203Less24Rect:eui.Rect;

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
		mouse.setButtonMode(this.math143Less21Rect, true);
		mouse.setButtonMode(this.math134Less115Rect, true);
		mouse.setButtonMode(this.math315Less123Rect, true);
		mouse.setButtonMode(this.math321Less125Rect, true);
		mouse.setButtonMode(this.math203Less24Rect, true);
		this.math143Less21Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMath143Less21RectClick, this);
		this.math134Less115Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMath134Less115RectClick, this);
		this.math315Less123Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMath315Less123RectClick, this);
		this.math321Less125Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMath321Less125RectClick , this);
		this.math203Less24Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMath203Less24RectClick, this);
	}
	private onMath143Less21RectClick():void
	{	
		initOne();
	}

	private onMath134Less115RectClick():void
	{
		initTwo();
	}

	private onMath315Less123RectClick(): void
	{
		initThree();
	}

	private onMath321Less125RectClick(): void
	{
		initFour();
	}

	private onMath203Less24RectClick(): void
	{
		initFive();
	}
}