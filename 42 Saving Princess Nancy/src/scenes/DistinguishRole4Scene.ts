class DistinguishRole4Scene extends eui.Component implements  eui.UIComponent {
	
	private birdImage: eui.Image;
	private person1Image: eui.Image;
	private person2Image: eui.Image;
	private person3Image: eui.Image;
	private person4Image: eui.Image;
	private person5Image: eui.Image;
	private person6Image: eui.Image;	
	private person6AlertComponent: AlertComponent;
	private person5AlertComponent: AlertComponent;
	private person4AlertComponent: AlertComponent;
	private person3AlertComponent: AlertComponent;
	private person2AlertComponent: AlertComponent;
	private person1AlertComponent: AlertComponent;

	private person3MovieClipPlayer: MovieClipPlayer;
	private person4MovieClipPlayer: MovieClipPlayer;
	private person5MovieClipPlayer: MovieClipPlayer;
	private maskRect: eui.Rect;

	private alertComponents: any;

	private audios = {
		person1: 'listening4_bridge_mp3',
		person2: 'listening4_bridge_mp3',
		person3: 'listening4_bald_mp3',
		person5: 'listening4_bald_mp3',
		person6: 'listening4_bridge_mp3',
	};

	private currentAlert: AlertComponent;

	private stickElectric2Movie: MovieClipPlayer;
	private stickElectric1Movie: MovieClipPlayer;
	private wolf1Group: eui.Group;
	private wolf2Group: eui.Group;
	private wolfNormal1Image: eui.Image;
	private wolfNormal2Image: eui.Image;
	private wolf1ElectricAnimation: egret.tween.TweenGroup;
	private wolf2ElectricAnimation: egret.tween.TweenGroup;
	private stick1Animation: egret.tween.TweenGroup;
	private stick2Animation: egret.tween.TweenGroup;
	private stick1DownAnimation: egret.tween.TweenGroup;
	private stick2DownAnimation: egret.tween.TweenGroup;
	private finishAnimation: egret.tween.TweenGroup;

	private backBootsComponent: BootsComponent;
	private listenComponent: ListenComponent;
	
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
		await this.playIntroductionMP3();
		this.alertComponents = {
					person1: this.person1AlertComponent,
					person2: this.person2AlertComponent,
					person3: this.person3AlertComponent,
					person5: this.person5AlertComponent,
					person6: this.person6AlertComponent,
		};
		this.person2Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person1Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person3Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person4Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCorrectClick, this);
		this.person5Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person6Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person3AlertComponent.addEventListener(AlertEvent.ALERT_CLOSR, this.onPerson3AlertClose, this);
		this.person5AlertComponent.addEventListener(AlertEvent.ALERT_CLOSR, this.onPerson5AlertClose, this);
		this.backBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
		
	}

	private onBackClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole3Scene());
	}

	private async onCorrectClick(): Promise<void>
	{
		this.hideCurrentAlert();
		lzlib.SoundUtility.stopCurrentSound();
		this.person4AlertComponent.visible = true;
		await lzlib.SoundUtility.playSound('listening4_correct_mp3');
		this.person4AlertComponent.visible = false;
		this.person4MovieClipPlayer.visible = true;
		this.person4MovieClipPlayer.play();
		await lzlib.ThreadUtility.sleep(1000);
		//显示鸟
		this.birdImage.visible = true;
		this.person4Image.visible = false;
		await lzlib.ThreadUtility.sleep(1000);
		this.maskRect.visible = true;
		await this.finishAnimation.playOnceAsync();
		Main.instance.gotoScene(new GoToCastleScene());
	}

	private async onPerson3AlertClose(e: egret.TouchEvent): Promise<void>
	{
		//云遮罩
		this.person3MovieClipPlayer.visible = true;
		this.person3MovieClipPlayer.play();
		await lzlib.ThreadUtility.sleep(1500);
		//显示狼
		this.wolfNormal2Image.visible = true;
		this.person3Image.visible = false;
		//显示stick
		await lzlib.ThreadUtility.sleep(1000);
		await this.stick1Animation.playOnceAsync();
		//开始电击
		this.stickElectric1Movie.visible = true;
		this.stickElectric1Movie.playLoop();

		this.wolf1Group.visible = true;
		this.wolf1ElectricAnimation.playLoopAsync();
		this.wolfNormal2Image.visible = false;
		await lzlib.ThreadUtility.sleep(2500);
		//取消电击
		this.stopElectric();
		this.person3MovieClipPlayer.play();
		this.stick1DownAnimation.play();
		await lzlib.ThreadUtility.sleep(1500);
		//隐藏狼
		this.hideWolf();
	}

	private async onPerson5AlertClose(e: egret.TouchEvent): Promise<void>
	{
		//云遮罩
		this.person5MovieClipPlayer.visible = true;
		this.person5MovieClipPlayer.play();
		await lzlib.ThreadUtility.sleep(1500);
		//显示狼
		this.wolfNormal1Image.visible = true;
		this.person5Image.visible = false;
		//显示stick
		await lzlib.ThreadUtility.sleep(1000);
		await this.stick2Animation.playOnceAsync();
		//开始电击
		this.stickElectric2Movie.visible = true;
		this.stickElectric2Movie.playLoop();

		this.wolf2Group.visible = true;
		this.wolf2ElectricAnimation.playLoopAsync();
		this.wolfNormal1Image.visible = false;
		await lzlib.ThreadUtility.sleep(2500);
		//取消电击
		this.stopElectric();
		this.person5MovieClipPlayer.play();
		this.stick2DownAnimation.play();
		await lzlib.ThreadUtility.sleep(1500);
		//隐藏狼
		this.hideWolf();
	}

	private onPersonClick(e: egret.TouchEvent): void
	{
		this.hideCurrentAlert();
		lzlib.SoundUtility.stopCurrentSound();
		lzlib.SoundUtility.playSound(this.audios[e.target.$name]);
		let currentAlert = (this.alertComponents[e.target.$name] as AlertComponent);
		currentAlert.visible = true;
		this.currentAlert = currentAlert;
	}

	private hideCurrentAlert(): void
	{
		this.currentAlert && (this.currentAlert.visible = false);
	}

	public hideWolf(): void
	{
		this.wolf1Group.visible = false;
		this.wolf2Group.visible = false;
	}

	public stopElectric(): void
	{
		this.stickElectric1Movie.visible = false;
		this.stickElectric2Movie.visible = false;
	}

	private async playIntroductionMP3(): Promise<void>
	{
		return new Promise<void>((resolve, reject)=> {
            this.listenComponent.addEventListener(Listen.LISTEN_AUDIO_COMPLETE, resolve, this);    
        });
	}
	
}