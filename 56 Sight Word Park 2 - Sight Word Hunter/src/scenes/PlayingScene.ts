class PlayingScene extends eui.Component implements  eui.UIComponent {
	private backImage: eui.Image;
	private speakerImage: eui.Image;
	private targets: TargetButton[] = [];
	private cannon: Cannon;
	private minutesLabel: eui.Label;
	private secondsLabel: eui.Label;
	private timeLeftInRoundImage: eui.Image;
	private timeLeftInRoundImageOriginalHeight = 658;
	private tipLabel: eui.Label;
	private hurryTweenGroup: egret.tween.TweenGroup;
	private tipTweenGroup: egret.tween.TweenGroup;
	private readyTweenGroup: egret.tween.TweenGroup;

	private readonly secondsInTotalGame = 120;
	private secondsLeftInTotal = 0; //本游戏还剩多少秒

	private readonly secondsPerRound = 20; //一轮的总秒数
	private secondsLeftInRound = 0;  ////本轮秤还剩多少秒

	private tickInterval: number; //
	private secondsToHurry = 6; //当本轮的剩余秒数低于该值时，系统显示Hurry提示
	private hurryIsAlerting = false; //正在显示Hurry提示
	private passedCurrentRound = false; //用户是否答对题目，通过本轮游戏？
	private stoppedFire = false; //用户答对题目，暂时停火，等下一轮再开火

	private allWords: string[] = []; //词库中的所有单词
	private desktopWords = []; //从词库中选到桌子上的单词，用于解决桌面上出现重复词的问题
	private spokenWord = 'a'; //语音播报出来的单词，需要用户选中该单词才能进入下一关。
	private wordRepo: WordRepository;

	public constructor(wordRepo: WordRepository) {
		super();
		this.wordRepo = wordRepo;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.enable(this.stage);
		this.initTargets();
		this.initSpeakerButton();
		this.initReadyTweenGroup();
		this.initHurryTweenGroup();
		this.initBackButton();
		this.startGame();
	}

	private speakCurrentWord(): void
	{
		(RES.getRes(this.spokenWord + '_mp3') as egret.Sound).play(0, 1);
	}

	private initTargets()
	{
		for(let index = 0; index < this.numChildren; index++) {
			let child = this.getChildAt(index);
			if (child instanceof TargetButton) {
				this.targets.push(child as TargetButton)
			}
		} 

		for (let target of this.targets) {
			target.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onTargetMouseOver, this);
			target.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTargetClick, this);
		}
	}

	private initSpeakerButton()
	{
		this.speakerImage.addEventListener(mouse.MouseEvent.ROLL_OVER, ()=>this.speakerImage.source = 'speaker_selected_svg', this);
		this.speakerImage.addEventListener(mouse.MouseEvent.ROLL_OUT, ()=>this.speakerImage.source = 'speaker_normal_svg', this);
		this.speakerImage.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>this.speakCurrentWord(), this);
	}

	private initReadyTweenGroup()
	{
		this.readyTweenGroup.addEventListener(egret.Event.COMPLETE, this.onReadyTweenGroupComplete, this);
	}

	private onReadyTweenGroupComplete()
	{
		this.secondsLeftInTotal = this.secondsInTotalGame;
		this.startNewRound();
		this.tickInterval = egret.setInterval(this.intervalHandler, this, 100);
	}

	private initHurryTweenGroup()
	{
		this.hurryTweenGroup.addEventListener(egret.Event.COMPLETE, this.onHurryTweenGroupComplete, this);
	}

	private onHurryTweenGroupComplete(): void
	{
		if (this.hurryIsAlerting) {
			this.playHurryAnimation();
		}
	}

	private initBackButton(): void
	{
		this.backImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackImageClick, this);
	}

	private onBackImageClick(e: egret.TouchEvent): void
	{
		Main.instance.gotoScene(new StartScene());
	}

	public startGame(): void
	{
		this.allWords = this.wordRepo.getAll();
		this.readyTweenGroup.play(0);
	}

	private resetTargetWords() {
		this.desktopWords = [];
		for (let target of this.targets) {
			target.reset();
			let candidate = '';
			do {
				candidate = this.getRandomWord();
			} while (this.desktopWords.indexOf(candidate) >= 0);
			this.desktopWords.push(candidate);
			target.setLabel(candidate);
		}
		this.spokenWord = this.desktopWords[Math.randomMinMax(0, this.targets.length - 1)];
		this.speakCurrentWord();
	}

	private getRandomWord(): string
	{
		let randomIndex = Math.randomMinMax(0, this.allWords.length - 1)
		return this.allWords[randomIndex];
	}

	private onTargetMouseOver(e: egret.Event): void
	{
		this.cannon.setCurrentState((e.target as TargetButton).leftOrRight);
	}

	private async onTargetClick(e: egret.TouchEvent): Promise<void>
	{
		if (this.stoppedFire) {
			return;
		}

		let target = e.target as TargetButton;
		this.shootAt(target);
		if (this.spokenWord == target.label) {
			this.stoppedFire = true;
			this.playTipAnimation("Good job!");
			this.disableAllTargets();
			await ThreadUtility.sleep(2000);
			this.passedCurrentRound = true;
		} else {
			this.playTipAnimation("Try Again!");
		}
	}

	private shootAt(target: TargetButton)
	{
		let bullseyeX = target.x;
		let bullseyeY = target.y + target.height / 2;

		let cannonball = this.createCannonball();
		this.addChild(cannonball);
		egret.Tween.get(cannonball)
		.to({ x: bullseyeX, y: bullseyeY }, 100)
		.call(() => target.playShootedAnimation(), this)
		.call(() => this.playBullseyeSound(target), this)
		.to({ x: target.cannonballExitX, y: target.cannonballExitY}, 100)
		.call(() => this.removeChild(cannonball), this);
	}

	/**
	 * 播放炮弹击中靶子的声音
	 */
	private async playBullseyeSound(target: TargetButton): Promise<void>
	{
		if (this.spokenWord == target.label) {
			(RES.getRes('sound_effect_jiu_mp3') as egret.Sound).play(0, 1);
			(RES.getRes('sound_effect_ling_mp3') as egret.Sound).play(0, 1);
		} else {
			(RES.getRes('sound_effect_dindum_mp3') as egret.Sound).play(0, 1);
		}
	}

	private createCannonball(): eui.Image
	{
		let cannonball = new eui.Image('cannonball_svg')
		cannonball.scaleY = cannonball.scaleX = 0.7;
		cannonball.x = this.width / 2;
		cannonball.y = this.height;
		cannonball.anchorOffsetX = cannonball.width / 2;
		cannonball.anchorOffsetY = cannonball.height / 2;
		return cannonball;
	}

	private intervalHandler(): void
	{
		this.timeLeftInRoundImage.height = this.timeLeftInRoundImageOriginalHeight * this.secondsLeftInRound / this.secondsPerRound;
		this.secondsLeftInRound -= 0.1;
		this.secondsLeftInTotal -= 0.1;
		
		if (this.secondsLeftInTotal <= 0) {
			egret.clearInterval(this.tickInterval);
			(RES.getRes('sound_effect_win_mp3') as egret.Sound).play(0, 1);
			this.showResultScene();
			return;
		}

		this.showTimeLeftInTotal();
		
		if (this.secondsLeftInRound < this.secondsToHurry && !this.hurryIsAlerting) {
			this.hurryIsAlerting = true;
			this.playHurryAnimation();
		}

		//本轮时间到，进入下一轮
		if (this.secondsLeftInRound <= 0) {
			console.log('时间到，进入下一轮');
			this.disableAllTargets();
			//用户在本轮游戏时间内没有答对问题，跳过本轮，进入下一题。
			this.playTipAnimation('Next Question!');
			this.startNewRound();
		}

		//用户答对，进入下一轮
		if (this.passedCurrentRound) {
			console.log('用户答对进入下一轮');
			this.passedCurrentRound = false;
			this.startNewRound();
		}
	}

	/**
	 * 开始新一轮游戏
	**/	
	private async startNewRound(): Promise<void>
	{
		this.hurryIsAlerting = false;
		this.resetTargetWords();
		this.secondsLeftInRound = this.secondsPerRound;
		this.stoppedFire = false;
		await ThreadUtility.sleep(2000);
		this.enableAllTargets();
	}

	private showTimeLeftInTotal(): void
	{
		this.minutesLabel.text = Math.floor((this.secondsLeftInTotal / 60)).toString();
		this.secondsLabel.text = Math.floor((this.secondsLeftInTotal % 60)).toString();
	}

	private playHurryAnimation(): void
	{
		this.hurryTweenGroup.play(0);
	}
	
	private playTipAnimation(tip: string): void
	{
		this.tipLabel.text = tip;
		this.tipTweenGroup.play(0);
	}

	private showResultScene()
	{
		this.addChild(new ResultScene(this));
	}

	private enableAllTargets(): void
	{
		this.targets.forEach(x => x.enabled = true);
	}

	private disableAllTargets(): void
	{
		this.targets.forEach(x => x.enabled = false);
	}
}