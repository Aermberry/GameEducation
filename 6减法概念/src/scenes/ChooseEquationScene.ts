class ChooseEquationScene extends eui.Component implements  eui.UIComponent {
    private math143Less21Rect:eui.Rect;
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
		this.math143Less21Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.location.href = '../../math143Less21/math143Less21.html', this);
	}
	
}