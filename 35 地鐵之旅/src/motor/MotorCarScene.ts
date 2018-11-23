class MotorCarScene extends eui.Component implements  eui.UIComponent,MotorCarView {

	private line: Line;
	private position: number;
	private isRight: boolean;

	private peopleGroup: eui.Group;
	private pillarsGroup: eui.Group;
	private startAnimation: egret.tween.TweenGroup;
	private openRightDoorAnimation: egret.tween.TweenGroup;
	private closeRightDoorAnimation: egret.tween.TweenGroup;
	private openLeftDoorAnimation: egret.tween.TweenGroup;
	private closeLeftDoorAnimation: egret.tween.TweenGroup;
	private arrowLeft: ArrowRedComponent;
	private arrowRight: ArrowRedComponent;
	private routeComponent: RouteComponent;
	private controllingComponent: ControllingComponent;

	private presenter: MotorCarPresent;

	public constructor(line: Line, position: number, isRight: boolean) {
		super();
		this.line = line;
		this.position = position;
		this.isRight = isRight;
		this.presenter = new MotorCarPresent(this.line, this.position, this.isRight);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.arrowLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onArrowClick, this.presenter);
		this.arrowRight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.presenter.onArrowClick, this.presenter);
		this.controllingComponent.addEventListener(ControllingEvent.ROUTE_CLICK, this.onRouteClick, this);
		this.presenter.loadView(this);
	}

	private onRouteClick(): void
	{
		this.routeComponent.visible = true;
	}

	public async playStartIntroduction(): Promise<void>
	{
		await this.playGapMP3();
		await this.playMindoorMP3();	
	}

	public async playMindoorMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('sound 52 (e_minddoor.mp3)_mp3');
	}
	
	public async playGapMP3(): Promise<void>
	{
		await lzlib.SoundUtility.playSound('sound 53 (e_gap.mp3)_mp3');
	}

	public async openRightDoor(): Promise<void>
	{
		this.openRightDoorAnimation.playOnceAsync();
	}

	public async closeRightDoor(): Promise<void>
	{
		this.closeRightDoorAnimation.playOnceAsync();
	}

	public async openLeftDoor(): Promise<void>
	{
		this.openLeftDoorAnimation.playOnceAsync();
	}

	public async closeLeftDoor(): Promise<void>
	{
		this.closeLeftDoorAnimation.playOnceAsync();
	}

	public stationPillarBackground(src: string): void
	{
		this.pillarsGroup.$children.map((child) => {
			let image = child as eui.Image;
			image.source = src;
		})
	}

	public driveCar(): void
	{
		this.startAnimation.playLoopAsync();
	}

	public stopDriveCar(): void
	{
		this.startAnimation.play(0);
		this.startAnimation.stop();
	}

		public enableLeftArrow(): void
	{
		this.arrowLeft.enable();
		this.arrowLeft.enableMouse();
	}

	public disableLeftArrow(): void
	{
		this.arrowLeft.disable();
		this.arrowLeft.disableMouse();
	}

	public enableRightArrow(): void
	{
		this.arrowRight.enable();
		this.arrowRight.enableMouse();
	}

	public disableRightArrow(): void
	{
		this.arrowRight.disable();
		this.arrowRight.disableMouse();
	}

	public showPeople(personIndex: number[]): void
	{
		for(let i = 0; i < personIndex.length; i++)
		{
			(this.peopleGroup.getChildAt(personIndex[i]) as eui.Image).visible = true;
		}
	}
}