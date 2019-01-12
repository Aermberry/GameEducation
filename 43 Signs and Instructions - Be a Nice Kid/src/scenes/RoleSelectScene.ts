class RoleSelectScene extends eui.Component implements  eui.UIComponent {
	
	private ListenGroup: eui.Group;
	private ChooseGroup: eui.Group;
	private childrenGroup: eui.Group;
	private needHelpGroup: eui.Group;
	private startImage: eui.Image;
	private selectedChildImage: eui.Image;
	private backgroundChildImage: eui.Image;
	private startButton2: eui.Image;
	private startMask: eui.Rect;

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
		this.handleHelpedBoy();//根据当前是否还没帮助小孩，如果否，隐藏开始按钮直接开始
		this.loadBoys();
		this.startImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartImageClick, this)
		this.startImage.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onStartImageOver, this)
		this.startImage.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onStartImageOut, this)
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
	}

	private async onStartButton2Click(): Promise<void>
	{
		this.startButton2.visible = false;
		this.startMask.visible = false;;
		await this.handleMP3AndShow();
		this.handleMouseAndClickOnChild();
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

	private loadBoys(): void
	{
		let index = 0;
		this.childrenGroup.$children.map((child) => {
			(child as eui.Image).source = BoyRepository.boys[index];
			index++;
		})
	}

	private onChildClick(e: egret.TouchEvent): void
	{
		BoyRepository.helpedBoys++;
		BoyRepository.currentBoy = this.childrenGroup.getChildIndex(e.target);
		let targetImage = e.target as eui.Image;
		this.selectedChildImage.x = targetImage.x;
		this.selectedChildImage.y = targetImage.y;
		this.selectedChildImage.source = targetImage.source;
		egret.Tween.get(this.selectedChildImage).to({x:857,y:302},500);
		this.hideComponent();
		this.showStartAndMP3();
	}

	private onStartImageOver(e: egret.TouchEvent): void
	{
		(e.target as eui.Image).source = 'start_over_png';
	}

	private onStartImageOut(e: egret.TouchEvent): void
	{
		(e.target as eui.Image).source = 'start_normal_png';
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

	private async showStartAndMP3(): Promise<void>
	{
		this.ListenGroup.visible = true;
		this.startImage.visible = true;
		await lzlib.SoundUtility.playSound('streamsound1_7_mp3');
		this.ListenGroup.visible = false;
	}

	private async handleHelpedBoy() : Promise<void>
	{
		if(BoyRepository.helpedBoys != 0)
		{
			this.startButton2.visible = false;
			this.startMask.visible = false;
			await this.handleMP3AndShow();
			this.handleMouseAndClickOnChild();
		}
	}
	
}