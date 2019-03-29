class rabbirComponent extends eui.Component implements eui.UIComponent {

	private rabbit_active: eui.Image;
	private rabbit_hover: eui.Image;

	private startTime:number=0;
	private endTime:number=0;
	private timer:number=0;

	public constructor() {
		super();

	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		if (egret.Capabilities.isMobile) {
			this.rabbit_active.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouchStartTime,this)
			this.rabbit_active.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouchEndTime,this)
		}
		else {
			this.rabbit_active.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hoverStatus, this)
			this.rabbit_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
		}
	}

	//TOUCH_BEGIN 開始時間
	private ontouchStartTime():void {
		let startSeconds=new Date();
		this.startTime = startSeconds.getTime();
	}

	//TOUCH_END 結束時間
	private ontouchEndTime():void{
		let endSeconds=new Date();
		this.endTime=endSeconds.getTime();
		this.timer=this.endTime-this.startTime;
		let touchDown:TouchDown=new TouchDown(TouchDown.EVENT)
		if(this.timer>700 || this.timer==700)
		{
			this.dispatchEvent(touchDown);
		}
		else {
			this.clickStatus();
			GameStart.optionsScene.getOptionInstance.onPauseVoice()
			GameStart.optionsScene.getOptionInstance.playVoice("sound 157_mp3");
			var timer:egret.Timer=new egret.Timer(3000,1)
			timer.addEventListener(egret.TimerEvent.TIMER,()=>{GameStart.optionsScene.getOptionInstance.toGameScene(new rabbitScene())},this);
			timer.start();
		}
	}

	public activeStatus(): void {
		this.currentState = "active";
	}

	private async hoverStatus(): Promise<void> {
		this.currentState = "hover";
		GameStart.optionsScene.getOptionInstance.playVoice("sound 157_mp3")
	}

	public clickStatus(): void {
		this.currentState = "click";
	}

	public disableMouse(): void {
		this.rabbit_hover.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}

	public ableMouse(): void {
		this.rabbit_hover.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.activeStatus, this)
	}
}