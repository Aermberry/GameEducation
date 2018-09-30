class FinishScene extends eui.Component implements  eui.UIComponent {
	
	private contentLabel: eui.Label;
	private printLabel: eui.Label;
	private certificateLabel: eui.Label;
	private selectedChildImage: eui.Image;
	private ButtonComponent: ButtonComponent;
	private printGroup: eui.Group;

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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.printLabel, true);
		mouse.setButtonMode(this.certificateLabel, true);
		this.loadContentAndBoy();
		this.playStartAnimation();
		this.ButtonComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonComponentClick, this);
		this.ButtonComponent.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onButtonOver, this);
		this.ButtonComponent.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onButtonOut, this);
		this.printGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPrintGroupClick, this);
		this.printGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onPrintGroupOver, this);
		this.printGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onPrintGroupOut, this);
		this.isDisplayContinueButton();
	}

	private onButtonComponentClick(e: egret.TouchEvent): void
	{
		this.boyRepo.deleteBoy(BoyRepository.currentBoy);
		Main.instance.gotoScene(new RoleSelectScene());
		
	}

	private onButtonOver(e: egret.TouchEvent): void
	{
		(e.target.parent as ButtonComponent).background = 'background_button_blue_png';
	}

	private onButtonOut(e: egret.TouchEvent): void
	{
		(e.target.parent as ButtonComponent).background = 'background_button_png';
	}

	private onPrintGroupClick(e: egret.TouchEvent): void
	{
		window.print();
	}

	private onPrintGroupOver(e: egret.TouchEvent): void
	{
		let parent = e.target.parent as eui.Group;
		(parent.$children[0] as eui.Image).source = 'background_button_blue_png'
	}

	private onPrintGroupOut(e: egret.TouchEvent): void
	{
		let parent = e.target.parent as eui.Group;
		(parent.$children[0] as eui.Image).source = 'background_button_png'
	}

	private loadContentAndBoy(): void
	{
		this.selectedChildImage.source = this.boyRepo.cleanBoys[BoyRepository.currentBoy];
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