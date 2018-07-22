class EasyCastle extends eui.Component implements  eui.UIComponent {
	private displayLabel: eui.Label;

	private hole1Image: eui.Image;
	private smoke1Image: eui.Image;

	private hole2Image: eui.Image;
	private smoke2Image: eui.Image;

	private hole3Image: eui.Image;
	private smoke3Image: eui.Image;

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
		
	}
	
	private $blood = 20;

	public get blood(): number
	{
		return this.$blood;
	}

	public set blood(value: number)
	{
		this.$blood = value;
		this.showSmoke();
	}

	private showSmoke(): void
	{
		this.hole1Image.visible = this.smoke1Image.visible = this.hole2Image.visible = this.smoke2Image.visible = this.blood <= 18;
		this.hole3Image.visible = this.smoke3Image.visible = this.blood <= 16;
	}

	 /** 城堡被炮弹击中，显示击中效果，城堡血减一 */
	public markShot(): void
	{
		this.blood -= 1;
	}

	public set label(value: string)
	{
		this.displayLabel.text = value;
	}

	/** 城堡血量>0, 返回true, 否则返回false */
	public get isGood(): boolean
	{
		return this.blood > 0;
	}
}