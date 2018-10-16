class DescriptionExampleScene extends eui.Component implements  eui.UIComponent {
	private cueBoxImg:eui.Image;
    private descriptionLabel:eui.Label;
	private startButton:eui.Button;
	private currentSoundChannel:egret.SoundChannel;
    private exitBtn:ExitButton;

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
        mouse.setButtonMode(this.cueBoxImg, true);
		mouse.setButtonMode(this.exitBtn, true);
		mouse.setButtonMode(this.startButton, true);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartButtonClick, this);
		this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exitGame, this);

	}

	private onStartButtonClick(): void
	{
		if (this.startButton.label == '下頁') {
			this.descriptionLabel.text = '例如：我們一起慶祝聖誕節的到來。\r這個句子中，「的到來」是多餘的部分，因爲，我們慶\r祝的是「聖誕節」，而不是慶祝這個節日「的到來」。';
			this.startButton.label = '開始';
		} else {
			Main.instance.gotoScene(new DescriptionGameplayScene());	
		}
	}

	private exitGame() {
		window.close();
	}
    
	private stopCurrentSoundChannel():void{
        if(this.currentSoundChannel != null){
               this.currentSoundChannel.stop();
        } 
    }

	
}