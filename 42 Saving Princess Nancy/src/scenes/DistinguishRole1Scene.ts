class DistinguishRole1Scene extends eui.Component implements  eui.UIComponent {
	
	private personGroup: eui.Group;
	private correctGroup: eui.Group;

	private person3AlertComponent: AlertComponent;
	private person2AlertComponent: AlertComponent;
	private nextBootsComponent: BootsComponent;
	private backBootsComponent: BootsComponent;

	private princeAndHorseMove: egret.tween.TweenGroup;
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
		this.princeAndHorseMove.play(0);
		await this.playIntroductionMP3();
		this.initiPersonClick();
		this.nextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
		this.backBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
	}

	private onNextClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole2Scene());
	}

	private onBackClick(): void
	{
		Main.instance.gotoScene(new Task2IntroductionScene());
	}

	private initiPersonClick(): void
	{
		this.personGroup.$children.map((person) => {
			person.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		})
	}

	private onPersonClick(e: egret.TouchEvent): void
	{
		if(e.target == this.personGroup.getChildByName('person1'))
		{
			//人物选择正确
			lzlib.SoundUtility.playSound('listening_correct_mp3');
			this.correctGroup.visible = true;
			this.nextBootsComponent.visible = true;
		}else{
			//人物选择错误
			if(e.target == this.personGroup.getChildByName('person2'))
			{
				this.person2AlertComponent.visible = true;
				lzlib.SoundUtility.playSound('listening1_person2_mp3');
			}else if(e.target == this.personGroup.getChildByName('person3'))
			{
				this.person3AlertComponent.visible = true;
				lzlib.SoundUtility.playSound('listening1_person3_mp3');
			}
		}

	}

	private async playIntroductionMP3(): Promise<void>
	{
		return new Promise<void>((resolve, reject)=> {
            this.listenComponent.addEventListener(Listen.LISTEN_AUDIO_COMPLETE, resolve, this);    
        });
	}
	
}