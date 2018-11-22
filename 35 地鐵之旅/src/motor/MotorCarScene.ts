class MotorCarScene extends eui.Component implements  eui.UIComponent,MotorCarView {

	private line: Line;
	private position: number;
	private isRight: boolean;

	private pillarsGroup: eui.Group;
	private startAnimation: egret.tween.TweenGroup;
	private openRightDoorAnimation: egret.tween.TweenGroup;
	private closeRightDoorAnimation: egret.tween.TweenGroup;
	private openLeftDoorAnimation: egret.tween.TweenGroup;
	private closeLeftDoorAnimation: egret.tween.TweenGroup;

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
		this.presenter.loadView(this);
	}

	public async playStartIntroduction(): Promise<void>
	{
		await this.playGapMP3();
		await this.playMindoorMP3();	
	}

	private async playMindoorMP3(): Promise<void>
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
}