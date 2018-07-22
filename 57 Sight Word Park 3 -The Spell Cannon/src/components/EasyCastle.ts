class EasyCastle extends eui.Component implements  eui.UIComponent {
	private displayLabel: eui.Label;

	private hole1Image: eui.Image;
	private smoke1Image: eui.Image;

	private hole2Image: eui.Image;
	private smoke2Image: eui.Image;

	private hole3Image: eui.Image;
	private smoke3Image: eui.Image;

	private hole4Image: eui.Image;
	private smoke4Image: eui.Image;

	private smoke5Image: eui.Image;

	private hole6Image: eui.Image;
	private smoke6Image: eui.Image;

	private hole7Image: eui.Image;
	private smoke7Image: eui.Image;

	private hole8Image: eui.Image;
	private smoke8Image: eui.Image;

	private hole9Image: eui.Image;
	private smoke9Image: eui.Image;

	private leftDoorImage: eui.Image;
	private smoke10Image: eui.Image;

	private castleBottomImage: eui.Image;

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
	
	private $blood = 0;

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
		this.hole4Image.visible = this.smoke4Image.visible = this.blood <= 14;
		this.smoke5Image.visible = this.blood <= 12;
		this.hole6Image.visible = this.smoke6Image.visible = this.blood <= 10;
		this.hole7Image.visible = this.smoke7Image.visible = this.blood <= 8;
		this.hole8Image.visible = this.smoke8Image.visible = this.blood <= 6;
		this.hole9Image.visible = this.smoke9Image.visible = (1 <= this.blood && this.blood <= 4);
		this.leftDoorImage.visible = this.smoke10Image.visible = this.castleBottomImage.visible = this.blood <= 0;
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