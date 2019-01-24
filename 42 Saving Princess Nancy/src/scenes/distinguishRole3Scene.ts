class DistinguishRole3Scene extends eui.Component implements  eui.UIComponent {
	
	private personGroup: eui.Group;

	private correctGroup: eui.Group;
	private nextBootsComponent: BootsComponent;
	private alert2Component: AlertComponent;
	private alert3Component: AlertComponent;
	private stickImage: eui.Image;

	private currentAlertComponent: AlertComponent;
	private backBootsComponent: BootsComponent;

	private correctAnimation: egret.tween.TweenGroup;
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
		lzlib.SoundUtility.stopCurrentSound();
		await this.playIntroductionMP3();
		this.initiPersonTap();
		this.nextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
		this.backBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
	}

	private onNextClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole4Scene());
	}

	private onBackClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole2Scene());
	}

	private initiPersonTap(): void
	{
		this.personGroup.$children.map((person) => {
			person.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		});
	}

	private onPersonClick(e: egret.TouchEvent): void
	{
		this.hideCurrentAlert();
		if(e.target == this.personGroup.getChildByName('person1'))
		{
			//人物选择正确
			lzlib.SoundUtility.playSound('listening3_correct_mp3');
			this.correctGroup.visible = true;
			this.nextBootsComponent.visible = true;
			this.stickImage.visible = true;
			this.correctAnimation.play(0);
		}else{
			//人物选择错误
			if(e.target == this.personGroup.getChildByName('person2'))
			{
				this.alert2Component.visible = true;
				this.currentAlertComponent = this.alert2Component;
				lzlib.SoundUtility.playSound('listening3_person2_mp3');
			}else if(e.target == this.personGroup.getChildByName('person3'))
			{
				this.alert3Component.visible = true;
				this.currentAlertComponent = this.alert3Component;
				lzlib.SoundUtility.playSound('listening3_person3_mp3');
			}
		}
	}

	private hideCurrentAlert(): void
	{
		this.currentAlertComponent && (this.currentAlertComponent.visible = false);
	}

	private async playIntroductionMP3(): Promise<void>
	{
		return new Promise<void>((resolve, reject)=> {
            this.listenComponent.addEventListener(Listen.LISTEN_AUDIO_COMPLETE, resolve, this);    
        });
	}
	
}
