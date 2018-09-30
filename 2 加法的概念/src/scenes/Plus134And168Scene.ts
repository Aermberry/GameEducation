class Plus134And168Scene extends eui.Component implements  eui.UIComponent {
	private pauseButton: PauseButton;
	private angelGroup: eui.Group;
	private boyGroup: eui.Group;
	private backToIndexButton: BackToIndexButton;
	private mcFactory: egret.MovieClipDataFactory;
	private tg0: egret.tween.TweenGroup;
	private tg1: egret.tween.TweenGroup;
	private tg2: egret.tween.TweenGroup;
	private tg3: egret.tween.TweenGroup;
	private tg4: egret.tween.TweenGroup;
	private tg5: egret.tween.TweenGroup;
	private tg6: egret.tween.TweenGroup;
	private tg7: egret.tween.TweenGroup;
	private tg8: egret.tween.TweenGroup;
	private tg9: egret.tween.TweenGroup;
	private tg10: egret.tween.TweenGroup;
	private tg11: egret.tween.TweenGroup;
	private tg12: egret.tween.TweenGroup;
	private tg13: egret.tween.TweenGroup;
	private tg14: egret.tween.TweenGroup;
	private tg15: egret.tween.TweenGroup;
	private tg16: egret.tween.TweenGroup;
	private tg17: egret.tween.TweenGroup;
	private tg18: egret.tween.TweenGroup;
	private tg19: egret.tween.TweenGroup;
	private tg20: egret.tween.TweenGroup;
	private tg21: egret.tween.TweenGroup;
	private tg22: egret.tween.TweenGroup;
	private tg23: egret.tween.TweenGroup;
	private tg24: egret.tween.TweenGroup;
	private tg25: egret.tween.TweenGroup;

	private currentTweenGroup: egret.tween.TweenGroup;
	private currentSoundName: string; //当前音频文件的名称
	private currentSoundChannel: egret.SoundChannel; //当前音频声道
	private pausedSoundPosition: number; //暂停播放的音频时间，单位是秒
	private currentSoundCompleteHandler: Function;

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
		this.pauseButton.once(egret.TouchEvent.TOUCH_TAP, this.onPauseButtonClick, this);
		this.mcFactory = new egret.MovieClipDataFactory( RES.getRes('animations_json'), RES.getRes("animations_png") );
		this.playAngelAnimation();
		this.playBoyJumAnimation();
		this.playCalculationAnimation();
	}

	private onPauseButtonClick(): void
	{
		this.pauseButton.title = "繼續";
		this.currentTweenGroup && this.currentTweenGroup.pause();
		this.pausedSoundPosition = this.currentSoundChannel.position;
		this.currentSoundChannel.stop();
		this.pauseButton.once(egret.TouchEvent.TOUCH_TAP, this.onResumeButtonClick, this);
	}

	private onResumeButtonClick(): void
	{
		this.pauseButton.title = "暫停";
		this.currentTweenGroup && this.currentTweenGroup.play();
		this.currentSoundChannel = (RES.getRes(this.currentSoundName) as egret.Sound).play(this.pausedSoundPosition, 1);
		this.currentSoundChannel.once(egret.Event.SOUND_COMPLETE, this.currentSoundCompleteHandler, this);
		this.pauseButton.once(egret.TouchEvent.TOUCH_TAP, this.onPauseButtonClick, this);
	}

	private playAngelAnimation(): void
	{
		var mc1:egret.MovieClip = new egret.MovieClip( this.mcFactory.generateMovieClipData( "angel" ) );
		this.angelGroup.addChild( mc1 );
		mc1.play(-1);
	}

	private playBoyJumAnimation(): void
	{
		var mc1:egret.MovieClip = new egret.MovieClip( this.mcFactory.generateMovieClipData( "jump" ) );
		this.boyGroup.addChild( mc1 );
		mc1.play(-1);
	}
	
	private async playCalculationAnimation(): Promise<void>
	{
		await this.playTweenGroupAndSound(this.tg0, 'add5_streamsound 0_mp3');
		await this.playTweenGroupAndSound(this.tg1, 'add5_streamsound 1_mp3');
		await this.playTweenGroupAndSound(null, 'add5_streamsound 2_mp3');
		await this.playTweenGroupAndSound(this.tg2, 'add5_streamsound 3_mp3');
		await this.playTweenGroupAndSound(this.tg3, 'add5_streamsound 4_mp3');
		await this.playTweenGroupAndSound(this.tg4, 'add5_streamsound 5_mp3');
		await this.playTweenGroupAndSound(this.tg5, 'add5_streamsound 6_mp3');
		await this.playTweenGroupAndSound(this.tg6, 'add5_streamsound 7_mp3');
		await this.playTweenGroupAndSound(this.tg7, 'add5_streamsound 8_mp3');
		await this.playTweenGroupAndSound(this.tg8, 'add5_streamsound 9_mp3');
		await this.playTweenGroupAndSound(this.tg9, 'add5_streamsound 10_mp3');
		await this.playTweenGroupAndSound(this.tg10, 'add5_streamsound 11_mp3');
		await this.playTweenGroupAndSound(this.tg11, 'add5_streamsound 12_mp3');
		await this.playTweenGroupAndSound(null, 'add5_streamsound 13_mp3');
		await this.playTweenGroupAndSound(this.tg12, 'add5_streamsound 14_mp3');
		await this.playTweenGroupAndSound(this.tg13, 'add5_streamsound 15_mp3');
		await this.playTweenGroupAndSound(this.tg14, 'add5_streamsound 16_mp3');
		await this.playTweenGroupAndSound(this.tg15, 'add5_streamsound 17_mp3');
		await this.playTweenGroupAndSound(this.tg16, 'add5_streamsound 18_mp3');
		await this.playTweenGroupAndSound(this.tg17, 'add5_streamsound 19_mp3');
		await this.playTweenGroupAndSound(this.tg18, 'add5_streamsound 20_mp3');
		await this.playTweenGroupAndSound(this.tg19, 'add5_streamsound 21_mp3');
		this.tg20.play();
		await ThreadUtility.sleep(1000);
		await this.playTweenGroupAndSound(this.tg21, 'add5_streamsound 22_mp3');
		await this.playTweenGroupAndSound(this.tg22, 'add5_streamsound 23_mp3');
		await this.playTweenGroupAndSound(null, 'add5_streamsound 24_mp3');
		await this.playTweenGroupAndSound(null, 'add5_streamsound 25_mp3');
		await this.playTweenGroupAndSound(this.tg23, 'add5_streamsound 26_mp3');
		await this.playTweenGroupAndSound(null, 'add5_streamsound 27_mp3');
		await this.playTweenGroupAndSound(this.tg24, 'add5_streamsound 28_mp3');
		await this.playTweenGroupAndSound(null, 'add5_streamsound 29_mp3');
		await this.playTweenGroupAndSound(null, 'add5_streamsound 30_mp3');
		await this.playTweenGroupAndSound(this.tg25, 'add5_streamsound 31_mp3');
		this.backToIndexButton.parent.setChildIndex(this.backToIndexButton, this.backToIndexButton.parent.numChildren - 1);
		this.backToIndexButton.enabled = true;
	}

	private playTweenGroupAndSound(tweenGroup: egret.tween.TweenGroup, soundName: string): Promise<void>
	{
		this.currentTweenGroup = tweenGroup;
		this.currentTweenGroup && this.currentTweenGroup.play(0);
		this.currentSoundName = soundName;
		this.currentSoundChannel = (RES.getRes(soundName) as egret.Sound).play(0, 1);
		return new Promise<void>((resolve, reject)=> {
			this.currentSoundCompleteHandler = resolve;
			this.currentSoundChannel.once(egret.Event.SOUND_COMPLETE, this.currentSoundCompleteHandler, this);
		});
	}
}