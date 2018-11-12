class StartScene extends eui.Component implements  eui.UIComponent {
	private startButton: eui.Image;
	private exitButton: eui.Image;
	private exit:eui.Image;
	private startSoundChannel: egret.SoundChannel
	private StartMask:eui.Rect;
	private startButton2:eui.Button;
	private loadingAnim:egret.tween.TweenGroup;

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
		mouse.enable(this.stage);
		mouse.setButtonMode(this.startButton, true);
		mouse.setButtonMode(this.exitButton, true);
		mouse.setButtonMode(this.startButton2, true);
		
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onStartButtonRollOver, this);
		this.startButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onStartButtonRollOut, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onStartButtonTouchBegin, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.exitButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitButtonClick, this);
		this.startButton2.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick2,this);
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
		this.exitButton.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);

	}

	private onRollOver():void {
		this.exit.visible = true;
		this.exitButton.scaleX = this.exitButton.scaleY = 1.1;
	}

	private onRollOut(): void{
		this.exit.visible = false;
		this.exitButton.scaleX = this.exitButton.scaleY = 1;
	}


	private async onStartButtonClick2(): Promise<void> {
		await this.loadingAnim.play(0);
		this.StartMask.visible = false;
		this.startButton2.visible = false;
		await this.loadMusic();
	}

	private loadMusic():void {
		this.startSoundChannel = (RES.getRes('sound 124_mp3') as egret.Sound).play(0, 1);
	}
	
	private onStartButtonRollOver(e: mouse.MouseEvent): void
	{
		this.startButton.source = 'start_button_mouse_over_png';
	}

	private onStartButtonRollOut(e: mouse.MouseEvent): void
	{
		this.startButton.source = 'start_button_normal_png';
	}

	private onStartButtonTouchBegin(e: egret.TouchEvent): void
	{
		this.startButton.source = 'start_button_mouse_down_png';
	}

	private onStartButtonClick(e: egret.TouchEvent): void
	{
		this.startSoundChannel.stop();
		Main.instance.gotoScene(new Question1Scene());
	}

	private onExitButtonClick(e: egret.TouchEvent): void
	{
		window.close();
	}
}