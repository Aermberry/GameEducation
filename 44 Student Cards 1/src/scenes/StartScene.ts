class StartScene extends eui.Component implements  eui.UIComponent {
	private titleLabel:eui.Label;
	private nextButton:eui.Button;
	private sound:egret.Sound;
	private soundChannel:egret.SoundChannel;

	private startMask: eui.Rect;
    private startButton: eui.Button;
    private loadingAnim:egret.tween.TweenGroup
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
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick,this);
	}

	private  async onStartButtonClick(): Promise<void>{
		await this.loadingAnim.play(0);
		this.startMask.visible = false;
		this.startButton.visible = false;
		let underLine=new Base();
		underLine.drawLine(this.titleLabel, this);//画线
		this.sound = RES.getRes("01_mp3");//加载音频
		this.soundChannel= this.sound.play(0, 1);//播放音频
		this.nextButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextScene,this);
	}

	private onNextScene():void{
		Main.instance.gotoScene(new MainScene());
		this.stopSound();
	}

//检测voice是否在播放，停止	
	private stopSound() {
		var channel:egret.SoundChannel=this.soundChannel;
		if(channel){
			channel.stop();
			this.soundChannel=null;
			return;
		}
	}
	
}