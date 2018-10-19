class DistinguishRole2Scene extends eui.Component implements  eui.UIComponent {
	
	private person1Image: eui.Image;
	private person2Image: eui.Image;
	private person3Image: eui.Image;
	private person4Image: eui.Image;
	private person5Image: eui.Image;
	private person6Image: eui.Image;

	private person5AlertComponent: AlertComponent;
	private person1AlertComponent: AlertComponent;
	private person2AlertComponent: AlertComponent;
	private person3AlertComponent: AlertComponent;
	private person6AlertComponent: AlertComponent;
	private person4AlertComponent: AlertComponent;

	private Channel: egret.SoundChannel;

	private AlertComponents: any;
	private Audios = {
		person1Image:'listening2_person1_mp3',
		person3Image:'listening2_person3_mp3',
		person4Image:'listening2_person5_mp3',
		person5Image:'listening2_person5_mp3',
		person6Image:'listening2_person6_mp3',
	};

	private nextBootsComponent: BootsComponent;
	
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
		this.AlertComponents = {
			person1Image: this.person1AlertComponent,
			person3Image: this.person3AlertComponent,
			person4Image: this.person4AlertComponent,
			person5Image: this.person5AlertComponent,
			person6Image: this.person6AlertComponent
		};
		this.person1Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person2Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCorrectClick, this);
		this.person3Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person4Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person5Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person6Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.nextBootsComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextClick, this);
	}

	private onNextClick(): void
	{
		Main.instance.gotoScene(new DistinguishRole3Scene());
	}

	private onCorrectClick(): void
	{
		this.stopMP3();
		this.Channel = (RES.getRes('listening2_correct_mp3') as egret.Sound).play(0,1);
		this.person2AlertComponent.visible = true;
		this.nextBootsComponent.visible = true;
	}

	private onPersonClick(e:egret.TouchEvent): void
	{
		this.stopMP3();
		(this.AlertComponents[e.target.$name] as AlertComponent).visible = true;
		this.Channel = (RES.getRes(this.Audios[e.target.$name]) as egret.Sound).play(0,1);
	}

	private stopMP3(): void
	{
		this.Channel && this.Channel.stop();
	}
	
}