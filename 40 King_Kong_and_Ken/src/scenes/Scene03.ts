class Scene03 extends eui.Component implements  eui.UIComponent {
	private diplayTweenGroup:egret.tween.TweenGroup;
	private btnNext:eui.Button;
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
		this.btnNext.addEventListener(
			egret.TouchEvent.TOUCH_TAP,this.onNextBtnClick,this);
			this.playBackgroundMusic();
			this.diplayTweenGroup.play(0);
	}

	private async playBackgroundMusic():Promise<void> {
		await lzlib.SoundUtility.playSound('04_mp3')
		this.btnNext.visible = true;
	}

	private onNextBtnClick():void {
		Main.instance.gotoScene(new Scene04());
	}
	
}