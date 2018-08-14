class ResultScene extends eui.Component implements  eui.UIComponent {
	private playAgainImage: eui.Image;
	private playAgainLabel: eui.Label;
	private exitImage: eui.Image;
	private exitLabel: eui.Label;
	private contentGroupShowTweenGroup: egret.tween.TweenGroup;
	private playingScene: EasyGameScene;

	private currentSoundChannel: egret.SoundChannel;

	public constructor(playingScene: EasyGameScene) {
		super();
		this.playingScene = playingScene;
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		mouse.setButtonMode(this.playAgainImage, true);
		mouse.setButtonMode(this.exitImage, true);
		this.playAgainLabel.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onPlayAgainLabelMouseOver, this);
		this.playAgainLabel.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onPlayAgainLabelMouseOut, this);
		this.playAgainLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayAgainLabelClick, this);
		
		this.exitLabel.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onExitLabelMouseOver, this);
		this.exitLabel.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onExitLabelMouseOut, this);
		this.exitLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitLabelClick, this);

		this.contentGroupShowTweenGroup.play(0);
		this.currentSoundChannel = (RES.getRes('congratulation_mp3') as egret.Sound).play(0, 1);
	}

	private onPlayAgainLabelMouseOver(e: mouse.MouseEvent): void
	{
		this.playAgainImage.visible = true;
	}

	private onPlayAgainLabelMouseOut(e: mouse.MouseEvent): void
	{
		this.playAgainImage.visible = false;
	}

	private onPlayAgainLabelClick(e: egret.TouchEvent): void
	{
		this.stopCurrentSoundChannel();
		this.parent.removeChild(this);
		this.playingScene.startGame();
	}

	private onExitLabelMouseOver(e: mouse.MouseEvent): void
	{
		this.exitImage.visible = true;
	}

	private onExitLabelMouseOut(e: mouse.MouseEvent): void
	{
		this.exitImage.visible = false;
	}

	private onExitLabelClick(e: egret.TouchEvent): void
	{
		this.stopCurrentSoundChannel();
		window.close();
	}

	private stopCurrentSoundChannel(): void
	{
		this.currentSoundChannel && this.currentSoundChannel.stop();
	}
	
}