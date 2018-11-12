class DistinguishRole6Scene extends eui.Component implements  eui.UIComponent {
	
	private shadow1Group: eui.Group;
	private shadow2Group: eui.Group;
	private shadow3Group: eui.Group;
	private thankGroup: eui.Group;
	private princessMovie: MovieClipPlayer;
	private shadow1Movie: MovieClipPlayer;
	private shadow2Movie: MovieClipPlayer;
	private shadow3Movie: MovieClipPlayer;

	private textLabel1Animation: egret.tween.TweenGroup;
	private textLabel2Animation: egret.tween.TweenGroup;
	private textLabel3Animation: egret.tween.TweenGroup;
	private thankAnimation: egret.tween.TweenGroup;

	private nextBootsComponent: BootsComponent;

	private shadowFun: any;
	
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
		await this.playShadow1();
		await this.playShadow2();
		await this.playShadow3();
		this.nextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
		this.shadow1Movie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWrongClick, this);
		this.shadow2Movie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onWrongClick, this);
		this.shadow3Movie.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCorrectClick, this);
		this.shadowFun = {
			'shadow1': this.playShadow1,
			'shadow2': this.playShadow2
		};
	}

	private onWrongClick(e: egret.TouchEvent): void
	{
		let name = e.target.$name;
		this.shadowFun[name].call(this);
		//淡出reTry框；
	}

	private async onCorrectClick(e: egret.TouchEvent): Promise<void>
	{
		this.playShadow3();
		lzlib.SoundUtility.playSound('thanks_for_saving_mp3');
		//弹出感谢框
		this.thankGroup.visible = true;
		this.thankAnimation.playOnceAsync();
		await lzlib.ThreadUtility.sleep(1000);
		this.princessMovie.visible = true;
	}

	private onNextClick(): void
	{
		Main.instance.gotoScene(new FinishScene());
	}

	private async playShadow1(): Promise<void>
	{
		lzlib.SoundUtility.playSound('help_shadow1_mp3');
		this.shadow1Group.visible = true;
		let helpLabel = this.shadow1Group.getChildByName('help') as eui.Label;
		helpLabel.visible = true;
		await lzlib.ThreadUtility.sleep(1500);
		helpLabel.visible = false;
		await this.textLabel1Animation.playOnceAsync();
		this.shadow1Group.visible = false;
	}

	private async playShadow2(): Promise<void>
	{
		lzlib.SoundUtility.playSound('help_shadow2_mp3');
		this.shadow2Group.visible = true;
		let helpLabel = this.shadow2Group.getChildByName('help') as eui.Label;
		helpLabel.visible = true;
		await lzlib.ThreadUtility.sleep(1500);
		helpLabel.visible = false;
		await this.textLabel2Animation.playOnceAsync();
		this.shadow2Group.visible = false;
	}
	
	private async playShadow3(): Promise<void>
	{
		lzlib.SoundUtility.playSound('help_shadow3_mp3');
		this.shadow3Group.visible = true;
		let helpLabel = this.shadow3Group.getChildByName('help') as eui.Label;
		helpLabel.visible = true;
		await lzlib.ThreadUtility.sleep(1500);
		helpLabel.visible = false;
		await this.textLabel3Animation.playOnceAsync();
		this.shadow3Group.visible = false;
	}
}