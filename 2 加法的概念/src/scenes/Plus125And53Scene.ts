class Plus125And53Scene extends eui.Component implements  eui.UIComponent {
	private pauseLabel: eui.Label;
	private pauseRect: eui.Rect;
	private angelGroup: eui.Group;
	private boyGroup: eui.Group;
	private backToIndexImage: eui.Image;
	private mcFactory: egret.MovieClipDataFactory;
	private add53TweenGroup: egret.tween.TweenGroup;
	private angelHelpTweenGroup: egret.tween.TweenGroup;
	private angelGoodTweenGroup: egret.tween.TweenGroup;
	private oneChunkTweenGroup: egret.tween.TweenGroup;
	private oneBarTweenGroup: egret.tween.TweenGroup;
	private oneParticleTweenGroup: egret.tween.TweenGroup;
	private num125IsOneChunkTweenGroup: egret.tween.TweenGroup;
	private twoBarsRedTweenGroup: egret.tween.TweenGroup;
	private fiveParticlesRedTweenGroup: egret.tween.TweenGroup;
	private fiveBarsGreenTweenGroup: egret.tween.TweenGroup;
	private threeParticlesGreenTweenGroup: egret.tween.TweenGroup;
	private whatIsTheSumOfThemTweenGroup: egret.tween.TweenGroup;
	private theScatteredParticlesAreTheUnitTweenGroup: egret.tween.TweenGroup;
	private barsAreDecadesTweenGroup: egret.tween.TweenGroup;
	private chunksAreHundredsTweenGroup: egret.tween.TweenGroup;
	private weAlignUnitAndUnitTweenGroup: egret.tween.TweenGroup;
	private weAlignDecadeAndDecade: egret.tween.TweenGroup;
	private wePutParticlesTogetherTweenGroup: egret.tween.TweenGroup;
	private youAreCorrectTweenGroup: egret.tween.TweenGroup;
	private letMeCountHowMuchScatteredBarsNowTweenGroup: egret.tween.TweenGroup;
	private youAreCorrectDacadeTweenGroup: egret.tween.TweenGroup;
	private howMuchLeftFinallyTweenGroup: egret.tween.TweenGroup;
	private youAreCorrectHundredTweenGroup: egret.tween.TweenGroup;
	private iKnownIts178TweenGroup: egret.tween.TweenGroup;
	private youAreCorrectAllTweenGroup: egret.tween.TweenGroup;
	private menuAppearTweenGroup: egret.tween.TweenGroup;

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


	protected childrenCreated(): void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.pauseRect.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onPauseLabelMouseOver, this);
		this.pauseRect.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onPauseLabelMouseOut, this);
		this.pauseLabel.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onPauseLabelMouseOver, this);
		this.pauseLabel.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onPauseLabelMouseOut, this);

		this.pauseRect.once(egret.TouchEvent.TOUCH_TAP, this.onPauseRectClick, this);
		this.pauseLabel.once(egret.TouchEvent.TOUCH_TAP, this.onPauseRectClick, this);

		this.backToIndexImage.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.backToIndexImage.source = 'back_to_index_mouse_over_png', this);
		this.backToIndexImage.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.backToIndexImage.source = 'back_to_index_normal_png', this);
		this.backToIndexImage.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>Main.instance.gotoScene(new ChooseEquationScene()), this);

		this.mcFactory = new egret.MovieClipDataFactory( RES.getRes('animations_json'), RES.getRes("animations_png") );
		this.playAngelAnimation();
		this.playBoyJumAnimation();
		this.playCalculationAnimation();
	}

	private onPauseLabelMouseOver(e: mouse.MouseEvent): void
	{
		this.pauseLabel.textColor = 0xffffff;
	}

	private onPauseLabelMouseOut(e: mouse.MouseEvent): void
	{
		this.pauseLabel.textColor = 0x010C5A;
	} 

	private onPauseRectClick(): void
	{
		this.pauseLabel.text = "繼續";
		this.currentTweenGroup && this.currentTweenGroup.pause();
		this.pausedSoundPosition = this.currentSoundChannel.position;
		this.currentSoundChannel.stop();
		this.pauseRect.once(egret.TouchEvent.TOUCH_TAP, this.onResumeRectClick, this);
		this.pauseLabel.once(egret.TouchEvent.TOUCH_TAP, this.onResumeRectClick, this);
	}

	private onResumeRectClick(): void
	{
		this.pauseLabel.text = "暫停";
		this.currentTweenGroup && this.currentTweenGroup.play();
		this.currentSoundChannel = (RES.getRes(this.currentSoundName) as egret.Sound).play(this.pausedSoundPosition, 1);
		this.currentSoundChannel.once(egret.Event.SOUND_COMPLETE, this.currentSoundCompleteHandler, this);
		this.pauseRect.once(egret.TouchEvent.TOUCH_TAP, this.onPauseRectClick, this);
		this.pauseLabel.once(egret.TouchEvent.TOUCH_TAP, this.onPauseRectClick, this);
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
		await this.playTweenGroupAndSound(null, 'num_125_mp3');
		await this.playTweenGroupAndSound(this.add53TweenGroup, 'add_53_mp3');
		await this.playTweenGroupAndSound(this.angelHelpTweenGroup, 'angel_help_mp3');
		await this.playTweenGroupAndSound(this.angelGoodTweenGroup, 'angel_good_mp3');
		await this.playTweenGroupAndSound(this.oneChunkTweenGroup, 'one_chunk_mp3');
		await this.playTweenGroupAndSound(this.oneBarTweenGroup, 'one_bar_mp3');
		await this.playTweenGroupAndSound(this.oneParticleTweenGroup, 'one_particle_mp3');
		await this.playTweenGroupAndSound(this.num125IsOneChunkTweenGroup, 'num_125_is_one_chunk_mp3');
		await this.playTweenGroupAndSound(this.twoBarsRedTweenGroup, 'two_bars_mp3');
		await this.playTweenGroupAndSound(this.fiveParticlesRedTweenGroup, 'five_particles_mp3');
		await this.playTweenGroupAndSound(this.fiveBarsGreenTweenGroup, 'num_53_is_five_bars_mp3');
		await this.playTweenGroupAndSound(this.threeParticlesGreenTweenGroup, 'and_three_particles_mp3');
		await this.playTweenGroupAndSound(this.whatIsTheSumOfThemTweenGroup, 'what_is_sum_of_them_mp3');
		await this.playTweenGroupAndSound(null, 'a_let_me_think_mp3');
		await this.playTweenGroupAndSound(null, 'you_are_smart_mp3');
		await this.playTweenGroupAndSound(this.theScatteredParticlesAreTheUnitTweenGroup, 'scattered_particles_are_the_units_mp3');
		await this.playTweenGroupAndSound(this.barsAreDecadesTweenGroup, 'bars_are_decades_mp3');
		await this.playTweenGroupAndSound(this.chunksAreHundredsTweenGroup, 'chunks_are_hundreds_mp3');
		await this.playTweenGroupAndSound(this.weAlignUnitAndUnitTweenGroup, 'we_align_unit_and_unit_mp3');
		await this.playTweenGroupAndSound(this.weAlignDecadeAndDecade, 'we_align_decade_and_decade_mp3');
		await this.playTweenGroupAndSound(this.wePutParticlesTogetherTweenGroup, 'we_put_particles_together_mp3');
		await this.playTweenGroupAndSound(null, 'let_me_see_carefully_mp3');
		await this.playTweenGroupAndSound(this.youAreCorrectTweenGroup, 'you_are_correct_mp3');
		await this.playTweenGroupAndSound(this.letMeCountHowMuchScatteredBarsNowTweenGroup, 'let_me_count_how_much_scattered_bars_now_mp3');
		await this.playTweenGroupAndSound(null, 'two_add_five_is_seven_mp3');
		await this.playTweenGroupAndSound(this.youAreCorrectDacadeTweenGroup, 'you_are_correct_decade_mp3');
		await this.playTweenGroupAndSound(this.howMuchLeftFinallyTweenGroup, 'how_much_left_finally_mp3');
		await this.playTweenGroupAndSound(null, 'there_is_one_chunk_left_mp3');
		await this.playTweenGroupAndSound(this.youAreCorrectHundredTweenGroup, 'you_are_correct_hundred_mp3');
		await this.playTweenGroupAndSound(null, 'how_much_is_125_add_53_mp3');
		await this.playTweenGroupAndSound(this.iKnownIts178TweenGroup, 'i_know_its_178_mp3');
		await this.playTweenGroupAndSound(this.youAreCorrectAllTweenGroup, 'you_are_correct_all_mp3');
		await this.playTweenGroupAndSound(null, 'i_know_now_mp3');
		await this.playTweenGroupAndSound(null, 'angel_say_goodbye_mp3');
		await this.playTweenGroupAndSound(null, 'boy_say_goodbye_mp3');
		this.menuAppearTweenGroup.play(0);
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