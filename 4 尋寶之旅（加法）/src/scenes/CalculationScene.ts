class CalculationScene extends eui.Component implements  eui.UIComponent {
	private exitGroup: eui.Group;
	private exitImage: eui.Image;
	private restartGroup: eui.Group;
	private restartImage: eui.Image;
	private degreeImage: eui.Image;
	private nextQuestionButton: ImageButton;

	private questionIndexLabel: eui.Label;
	private augendLabel: eui.Label;
	private addendLabel: eui.Label;
	private unitLabel: EditableLabel;
	private decadeLabel: EditableLabel;
	private hundredLabel: EditableLabel;
	private thousandLabel: EditableLabel;
	private unitIndicatorImage: eui.Image;
	private decadeIndicatorImage: eui.Image;
	private hundredIndicatorImage: eui.Image;
	private thousandIndicatorImage: eui.Image;

	private decadeCarryLabel: EditableLabel;
	private hundredCarryLabel: EditableLabel;
	private decadeCarryIndicatorImage: EditableLabel;
	private hundredCarryIndicatorImage: EditableLabel;

	private boyGroup: eui.Group;
	private boyImage: eui.Image;
	private boxImage: eui.Image;
	private boxOpenTweenGroup: egret.tween.TweenGroup;

    private boyFactory:egret.MovieClipDataFactory;
    private boyMovie:egret.MovieClip;
    private strawberryUpFactory:egret.MovieClipDataFactory;
    private strawberryUpMovie:egret.MovieClip;
    private strawberryDownFactory:egret.MovieClipDataFactory;
    private strawberryDownMovie:egret.MovieClip;

	private oneButton: ImageButton;
	private twoButton: ImageButton;
	private threeButton: ImageButton;
	private fourButton: ImageButton;
	private fiveButton: ImageButton;
	private sixButton: ImageButton;
	private sevenButton: ImageButton;
	private eightButton: ImageButton;
	private nineButton: ImageButton;
	private zeroButton: ImageButton;
	private eraserButton: ImageButton;

	private dialogUpGroup: eui.Group;
	private topDialogTitleLabel: eui.Label;
	private topDialogBodyLabel: eui.Label;
	private yesButton: ImageButton;
	private noButton: ImageButton;

	private dialogDownGroup: eui.Group;
	private bottomDialogBodyLabel: eui.Label;

	private angelGroup: eui.Group;
	private angelFactory:egret.MovieClipDataFactory;
    private angelMovie:egret.MovieClip;

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
		this.playBoyJumpMovie();
	}
	
	private playBoyJumpMovie(): void
	{
		this.boyFactory = new egret.MovieClipDataFactory( RES.getRes('boy_jump_json'), RES.getRes('boy_jump_png'));
		this.boyMovie = new egret.MovieClip(this.boyFactory.generateMovieClipData('boy'));
		this.boyMovie.y = 0;
		this.boyGroup.addChild(this.boyMovie);
		this.boyMovie.play(-1);

		this.strawberryDownFactory = new egret.MovieClipDataFactory( RES.getRes('strawberry_down_json'), RES.getRes('strawberry_down_png'));
		this.strawberryDownMovie = new egret.MovieClip(this.strawberryDownFactory.generateMovieClipData('strawberry_down'));
		this.strawberryDownMovie.y = 0;
		this.boyGroup.addChild(this.strawberryDownMovie);
		this.strawberryDownMovie.play(-1);

		this.strawberryUpFactory = new egret.MovieClipDataFactory( RES.getRes('strawberry_up_json'), RES.getRes('strawberry_up_png'));
		this.strawberryUpMovie = new egret.MovieClip(this.strawberryUpFactory.generateMovieClipData('strawberry_up'));
		this.strawberryUpMovie.y = 300;
		this.boyGroup.addChild(this.strawberryUpMovie);
		this.strawberryUpMovie.play(-1);

		this.angelFactory = new egret.MovieClipDataFactory(RES.getRes('angel_json'), RES.getRes('angel_png'));
		this.angelMovie = new egret.MovieClip(this.angelFactory.generateMovieClipData('angel'));
		this.angelGroup.addChild(this.angelMovie);
		this.angelMovie.play(-1);
	}
}