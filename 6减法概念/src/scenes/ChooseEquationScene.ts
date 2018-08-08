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
		this.math143Less21Rect.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>window.location.href = '../../math143Less21/math143Less21.html', this);
	}
	
}