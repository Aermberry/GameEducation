class DistinguishRole5Scene extends eui.Component implements  eui.UIComponent {
	
	private stickGroup1: eui.Group;
	private stickGroup2: eui.Group;
	private stickGroup4: eui.Group;
	private person1Image: eui.Image;
	private person2Image: eui.Image;
	private person3Image: eui.Image;
	private person4Image: eui.Image;
	private dragonElectricImage: eui.Image;
	private person4Movie: MovieClipPlayer;
	private person2Movie: MovieClipPlayer;
	private person1Movie: MovieClipPlayer;
	private person4AlertComponent: AlertComponent;
	private person3AlertComponent: AlertComponent;
	private person2AlertComponent: AlertComponent;
	private person1AlertComponent: AlertComponent;

	private stickMoveUp4Animation: egret.tween.TweenGroup;
	private stickMoveUp2Animation: egret.tween.TweenGroup;
	private stickMoveUp1Animation: egret.tween.TweenGroup;
	private stickMoveDown1Animation: egret.tween.TweenGroup;
	private stickMoveDown2Animation: egret.tween.TweenGroup;
	private stickMoveDown4Animation: egret.tween.TweenGroup;
	private dragonElectricAnimation: egret.tween.TweenGroup;
	private finishAnimation: egret.tween.TweenGroup;
	private nextBootsComponent: BootsComponent;

	private dragonMovie: MovieClipPlayer;
	private dragonGroup: eui.Group;

	private electricShock: any;
	private alertComponents: any;
	private cloudMovieClipPlayers: any;

	private currentAlertComponent: AlertComponent;
	private audios = {
			'person1': 'listening5_person1_mp3',
			'person2': 'listening5_person2_mp3',
			'person4': 'listening5_person4_mp3',
	};
	
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
		this.backBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
		await this.playIntroductionMP3();
		this.alertComponents = {
			'person1': this.person1AlertComponent,
			'person2': this.person2AlertComponent,
			'person4': this.person4AlertComponent,
		};
		this.cloudMovieClipPlayers = {
			'person1': this.person1Movie,
			'person2': this.person2Movie,
			'person4': this.person4Movie,
		};
		this.electricShock = {
			'person1': {'group': this.stickGroup1, 'stickAnimation': this.stickMoveUp1Animation, 'stickMoveDownAnimation': this.stickMoveDown1Animation},
			'person2': {'group': this.stickGroup2, 'stickAnimation': this.stickMoveUp2Animation, 'stickMoveDownAnimation': this.stickMoveDown2Animation},
			'person4': {'group': this.stickGroup4, 'stickAnimation': this.stickMoveUp4Animation, 'stickMoveDownAnimation': this.stickMoveDown4Animation},
		};
		this.person1Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person2Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person3Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCorrectPersonClick, this);
		this.person4Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person1AlertComponent.addEventListener(AlertEvent.ALERT_CLOSR, this.onAlertClose, this);
		this.person2AlertComponent.addEventListener(AlertEvent.ALERT_CLOSR, this.onAlertClose, this);
		this.person4AlertComponent.addEventListener(AlertEvent.ALERT_CLOSR, this.onAlertClose, this);
		this.nextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextComponentClick, this);
		this.backBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
	}

	private onBackClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole4Scene());
	}

	private onNextComponentClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole6Scene());
	}

	private async onAlertClose(e: egret.TouchEvent): Promise<void>
	{
		let name = e.target.$name
		let cloud = (this.cloudMovieClipPlayers[name] as MovieClipPlayer)
		cloud.visible = true;
		cloud.play();
		await lzlib.ThreadUtility.sleep(1500);
		this.moveDragon(name);
		//显示龙 hide dragon
		this.dragonMovie.visible = true;
		this.dragonMovie.playLoop();
		//隐藏人物 hide person
		(this.getChildByName(name) as eui.Image).visible = false;
		await lzlib.ThreadUtility.sleep(1000);	
		//开始显示 电击 start show and electric shock
		let electricObj = this.electricShock[name];
		let stickGroup = electricObj.group as eui.Group;
		let electricMovic = stickGroup.getChildByName('electric') as MovieClipPlayer;
		let stickMoveUpAnimation = electricObj.stickAnimation as egret.tween.TweenGroup;
		stickGroup.visible = true;
		await stickMoveUpAnimation.playOnceAsync();
		//隐藏正在飞行的龙  hide dragon of flying
		this.dragonMovie.visible = false;
		electricMovic.visible = true;
		this.dragonElectricImage.visible = true;
		electricMovic.playLoop();
		this.dragonElectricAnimation.playLoopAsync();
		//取消电击 stop electric shock
		await lzlib.ThreadUtility.sleep(3000);
		this.dragonElectricAnimation.stop();
		electricMovic.visible = false;
		(this.cloudMovieClipPlayers[name] as MovieClipPlayer).play();
		this.hideDragon();
		let stickMoveDownAnimation = electricObj.stickMoveDownAnimation as egret.tween.TweenGroup;
		await stickMoveDownAnimation.playOnceAsync();
		stickGroup.visible = false;
	}

	private onPersonClick(e: egret.TouchEvent): void
	{
		this.hideCurrentAlertComponent();
		let name = e.target.$name;
		this.currentAlertComponent = (this.alertComponents[name] as AlertComponent);
		this.currentAlertComponent.visible = true;
		lzlib.SoundUtility.playSound(this.audios[name]);
	}

	private async onCorrectPersonClick(e: egret.TouchEvent): Promise<void>
	{
		this.hideCurrentAlertComponent();
		this.person3AlertComponent.visible = true;
		this.nextBootsComponent.visible = true;
		await lzlib.SoundUtility.playSound('listening5_correct_mp3');
		this.finishAnimation.play();
	}

	private hideCurrentAlertComponent(): void
	{
		this.currentAlertComponent && (this.currentAlertComponent.visible = false);
	}

	private moveDragon(name: string): void
	{
		this.dragonGroup.visible = true;
		this.dragonGroup.x = this.getChildByName(name).x - 100;
	}

	private hideDragon(): void
	{
		this.dragonGroup.visible = false;
		this.dragonElectricImage.visible = false;
	}

	private async playIntroductionMP3(): Promise<void>
	{
		return new Promise<void>((resolve, reject)=> {
            this.listenComponent.addEventListener(Listen.LISTEN_AUDIO_COMPLETE, resolve, this);    
        });
	}

}