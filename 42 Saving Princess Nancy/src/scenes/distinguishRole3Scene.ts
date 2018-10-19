class DistinguishRole3Scene extends eui.Component implements  eui.UIComponent {
	
	private personGroup: eui.Group;

	private correctAlertComponent: AlertComponent;
	private nextBootsComponent: BootsComponent;
	private alert2Component: AlertComponent;
	private alert3Component: AlertComponent;
	private stickImage: eui.Image;

	private currentAlertComponent: AlertComponent;
	
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
		this.initiPersonTap();
		this.nextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
	}

	private onNextClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole4Scene());
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
			this.correctAlertComponent.visible = true;
			this.currentAlertComponent = this.correctAlertComponent;
			this.nextBootsComponent.visible = true;
			this.stickImage.visible = true;
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
	
}