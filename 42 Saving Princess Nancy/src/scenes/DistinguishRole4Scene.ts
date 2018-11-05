class DistinguishRole4Scene extends eui.Component implements  eui.UIComponent {
	
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

	private alertComponents: any;

	private audios = {
		person1: 'listening4_bridge_mp3',
		person2: 'listening4_bridge_mp3',
		person3: 'listening4_bald_mp3',
		person5: 'listening4_bald_mp3',
		person6: 'listening4_bridge_mp3',
	};

	private currentAlert: AlertComponent;

	private wolf1ElectricAnimation: egret.tween.TweenGroup;
	private wolf2ElectricAnimation: egret.tween.TweenGroup;
	
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
		this.alertComponents = {
					person1: this.person1AlertComponent,
					person2: this.person2AlertComponent,
					person3: this.person3AlertComponent,
					person5: this.person5AlertComponent,
					person6: this.person6AlertComponent,
		};
		this.person2Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person1Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person3Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPerson3Click, this);
		this.person4Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCorrectClick, this);
		this.person5Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPerson5Click, this);
		this.person6Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
	}

	private onPerson3Click(e: egret.TouchEvent): void
	{
		
	}

	private onPerson5Click(e: egret.TouchEvent): void
	{

	}

	private onCorrectClick(): void
	{
		this.hideCurrentAlert();
		lzlib.SoundUtility.stopCurrentSound();
		lzlib.SoundUtility.playSound('listening4_correct_mp3');
		this.person2AlertComponent.visible = true;
		this.currentAlert = this.person2AlertComponent;
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
	
}