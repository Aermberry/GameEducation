class StartScene extends eui.Component implements  eui.UIComponent {
	private splashTweenGroup: egret.tween.TweenGroup;
	private juniorImage: eui.Image;
	private mediumImage: eui.Image;
	private seniorImage: eui.Image;
	private startButton2: eui.Image;
	private startMask: eui.Rect;

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
		mouse.setButtonMode(this.startButton2, true);
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

		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButton2Click, this);
		
	}

	private onStartButton2Click(): void
	{
		this.splashTweenGroup.play(0);
		this.startMask.visible = false;
		this.startButton2.visible = false;
	}

	private onJuniorImageClick(): void
	{
		Main.instance.gotoScene(new CalculationScene(Degree.junior));
	}

	private onMediumImageClick(): void
	{
		Main.instance.gotoScene(new CalculationScene(Degree.medium));
	}

	private onSeniorImageClick(): void
	{
		Main.instance.gotoScene(new CalculationScene(Degree.senior));
	}
}