class StartScene extends eui.Component implements  eui.UIComponent {
	private splashTweenGroup: egret.tween.TweenGroup;
	private juniorImage: eui.Image;
	private mediumImage: eui.Image;
	private seniorImage: eui.Image;
	private startButton: eui.Image;
	private startMask: eui.Rect;

	private currentSoundChannel: egret.SoundChannel;

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
		
		mouse.setButtonMode(this.juniorImage, true);
		mouse.setButtonMode(this.startButton, true);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.juniorImage.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.juniorImage.source = 'junior_selected_png', this);
		this.juniorImage.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.juniorImage.source = 'junior_normal_png', this);
		this.juniorImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJuniorImageClick, this);

		mouse.setButtonMode(this.mediumImage, true);
		this.mediumImage.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.mediumImage.source = 'medium_selected_png', this);
		this.mediumImage.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.mediumImage.source = 'medium_normal_png', this);
		this.mediumImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onMediumImageClick, this);

		mouse.setButtonMode(this.seniorImage, true);
		this.seniorImage.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.seniorImage.source = 'senior_selected_png', this);
		this.seniorImage.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.seniorImage.source = 'senior_normal_png', this);
		this.seniorImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSeniorImageClick, this);

	}

	private onStartButtonClick(): void
	{
		this.startButton.visible = false;
		this.startMask.visible = false;
		this.playSplash();
	}

	private async playSplash(): Promise<void>
	{
		await this.splashTweenGroup.playOnceAsync();
		this.currentSoundChannel = (RES.getRes('select_degree_mp3') as egret.Sound).play(0, 1);
	}

	private onJuniorImageClick(): void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new CalculationScene(Degree.junior));
	}

	private onMediumImageClick(): void
	{
		this.stopCurrentSoundChannel();
		Main.instance.gotoScene(new CalculationScene(Degree.medium));
	}

	private onSeniorImageClick(): void
	{
		Main.instance.gotoScene(new CalculationScene(Degree.senior));
	}

	private stopCurrentSoundChannel(): void
	{
		this.currentSoundChannel && this.currentSoundChannel.stop();
	}
}