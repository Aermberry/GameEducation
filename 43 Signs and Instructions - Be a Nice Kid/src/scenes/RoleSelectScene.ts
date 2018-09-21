class RoleSelectScene extends eui.Component implements  eui.UIComponent {
	
	private ListenGroup: eui.Group;
	private ChooseGroup: eui.Group;
	private childrenGroup: eui.Group;
	private needHelpGroup: eui.Group;
	private startImage: eui.Image;
	private selectedChildImage: eui.Image;
	private backgroundChildImage: eui.Image;

	private rollAnimation: egret.tween.TweenGroup;
	
	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected async childrenCreated(): Promise<void>
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		await this.handleMP3AndShow();
		this.handleMouseAndClickOnChild();
		this.startImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartImageClick, this)
	}

	private async handleMP3AndShow(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('streamsound1_0_mp3');
		this.rollAnimation.play();
		await lzlib.SoundUtility.playSound('streamsound1_1_mp3');
	}

	private handleMouseAndClickOnChild(): void
	{
		this.childrenGroup.$children.map((child) => {
			mouse.setButtonMode(child, true);
			child.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMouseOverChild, this);
			child.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMouseOutChild, this);
			child.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChildClick, this);
		})
	}

	private onChildClick(e: egret.TouchEvent): void
	{
		let targetImage = e.target as eui.Image;
		this.selectedChildImage.x = targetImage.x;
		this.selectedChildImage.y = targetImage.y;
		this.selectedChildImage.source = targetImage.source;
		egret.Tween.get(this.selectedChildImage).to({x:857,y:302},500);
		this.hideComponent();
		this.showStartAndMP3();
	}

	private onMouseOverChild(e: egret.TouchEvent): void
	{
		lzlib.SoundUtility.playSound('sound13_idel_to_over_mp3');
		e.target.alpha = 0.6;
	}

	private onMouseOutChild(e: egret.TouchEvent): void
	{
		e.target.alpha = 1;
	}

	private onStartImageClick(e: egret.TouchEvent): void
	{
		Main.instance.gotoScene(new QuestionScene());
	}

	private hideComponent(): void
	{
		this.childrenGroup.visible = false;
		this.backgroundChildImage.visible = false;
		this.ChooseGroup.visible = false;
	}

	private showStartAndMP3(): void
	{
		this.ListenGroup.visible = true;
		this.startImage.visible = true;
		lzlib.SoundUtility.playSound('streamsound1_7_mp3');
	}
	
}