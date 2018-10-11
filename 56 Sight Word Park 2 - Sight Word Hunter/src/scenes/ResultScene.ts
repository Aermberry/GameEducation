class ResultScene extends eui.Component implements  eui.UIComponent {
	private medalImage: eui.Image;
	private playAgainImage: eui.Image;
	private playAgainLabel: eui.Label;
	private exitImage: eui.Image;
	private exitLabel: eui.Label;
	private contentGroupShowTweenGroup: egret.tween.TweenGroup;
	private playingScene: PlayingScene;

	private medals = ['ball_png', 'balloon_png', 'bird_png', 'bottle_png', 'cake_png', 'castle_png', 'cow_png', 'ferris_wheel_png', 'horse_png', 'pig_png'];

	public constructor(playingScene: PlayingScene) {
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
		mouse.setButtonMode(this.exitImage, true);
		mouse.setButtonMode(this.playAgainImage, true);
		this.playAgainLabel.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onPlayAgainLabelMouseOver, this);
		this.playAgainLabel.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onPlayAgainLabelMouseOut, this);
		this.playAgainLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayAgainLabelClick, this);
		
		this.exitLabel.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onExitLabelMouseOver, this);
		this.exitLabel.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onExitLabelMouseOut, this);
		this.exitLabel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExitLabelClick, this);

		this.medalImage.source = this.medals[Math.randomMinMax(0, this.medals.length - 1)];
		this.contentGroupShowTweenGroup.play(0);
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
		window.close();
	}
	
}