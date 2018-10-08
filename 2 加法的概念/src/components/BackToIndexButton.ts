class BackToIndexButton extends eui.Component implements  eui.UIComponent {
	private backToIndexImage: eui.Image;

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
		mouse.setButtonMode(this.backToIndexImage, true);
		this.backToIndexImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOver, this);
		this.backToIndexImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOut, this);
		this.backToIndexImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}
	
	private onMouseOver(): void
	{
		this.backToIndexImage.source = 'back_to_index_mouse_over_png';
	}

	private onMouseOut(): void
	{
		this.backToIndexImage.source = 'back_to_index_normal_png';
	}

	private onClick(): void
	{
		Main.instance.gotoScene(new ChooseEquationScene());
	}
}