class DistinguishRole5Scene extends eui.Component implements  eui.UIComponent {
	
	private person1Image: eui.Image;
	private person2Image: eui.Image;
	private person3Image: eui.Image;
	private person4Image: eui.Image;
	private person4Movie: MovieClipPlayer;
	private person2Movie: MovieClipPlayer;
	private person1Movie: MovieClipPlayer;
	private person4AlertComponent: AlertComponent;
	private person3AlertComponent: AlertComponent;
	private person2AlertComponent: AlertComponent;
	private person1AlertComponent: AlertComponent;

	private dragonMovie: MovieClipPlayer;
	private dragonGroup: eui.Group;

	private alertComponents: any;
	private cloudMovieClipPlayers: any;

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
		this.person1Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person2Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
		this.person3Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCorrectPersonClick, this);
		this.person4Image.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPersonClick, this);
	}

	private onPersonClick(e: egret.TouchEvent): void
	{
		this.hideCurrentAlertComponent();
		let name = e.target.$name;
		this.currentAlertComponent = (this.alertComponents[name] as AlertComponent);
		this.currentAlertComponent.visible = true;
		let cloud = (this.cloudMovieClipPlayers[name] as MovieClipPlayer)
		cloud.visible = true;
		cloud.play();
	}

	private onCorrectPersonClick(e: egret.TouchEvent): void
	{

	}

	private hideCurrentAlertComponent(): void
	{
		this.currentAlertComponent && (this.currentAlertComponent.visible = false);
	}

}