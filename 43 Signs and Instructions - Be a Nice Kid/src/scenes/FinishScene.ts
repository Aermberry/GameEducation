class FinishScene extends eui.Component implements  eui.UIComponent {
	
	private contentLabel: eui.Label;
	private selectedChildImage: eui.Image;
	private ButtonComponent: ButtonComponent;

	private boyRepo = new BoyRepository();

	private startAnimation: egret.tween.TweenGroup;
	
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
		this.loadContentAndBoy();
		this.playStartAnimation();
		this.ButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonComponentClick, this);
		this.isDisplayContinueButton();
	}

	private onButtonComponentClick(e: egret.TouchEvent): void
	{
		this.boyRepo.deleteBoy(BoyRepository.currentBoy);
		Main.instance.gotoScene(new RoleSelectScene());
		
	}

	private loadContentAndBoy(): void
	{
		this.selectedChildImage.source = BoyRepository.boys[BoyRepository.currentBoy];
		this.contentLabel.text = this.boyRepo.helpSentence[BoyRepository.helpedBoys-1];
	}

	private playStartAnimation(): void
	{
		this.startAnimation.play();
	}

	private isDisplayContinueButton(): void
	{
		if(BoyRepository.helpedBoys >= BoyRepository.boys.length)
		{
			this.ButtonComponent.visible = false;
		}
	}
	
}