class StartScene extends eui.Component implements eui.UIComponent {
  private firstTweenGroup: egret.tween.TweenGroup;
  private thirdTweenGroup: egret.tween.TweenGroup;
  private forthTweenGroup: egret.tween.TweenGroup;
  private fifthTweenGroup: egret.tween.TweenGroup;
  private sixthTweenGroup: egret.tween.TweenGroup;

  private dialogGroup: eui.Group;
  private dialogImg: eui.Image;
  private dialogFirstLabel: eui.Label;
  private dialogSecondLineOnecLabel: eui.Label;
  private dialogSecondLineThreecLabel: eui.Label;
  private dialogSecondLineTwocLabel: eui.Label;
  private dialogFrothcLabel: eui.Label;
  private dialogFifthcLabel: eui.Label;

  private firstSelectGroup: eui.Group;
  private secondSelectGroup: eui.Group;
  private thirdSelectGroup: eui.Group;
  private forthSelectGroup: eui.Group;
  private fifthSelectGroup: eui.Group;
  private sixSelectGroup: eui.Group;

  private startMask: eui.Rect;
  private startButton: eui.Button;
  private StartAnim:egret.tween.TweenGroup;

  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    mouse.enable(this.stage);
    mouse.setButtonMode(this.startButton, true);
    this.dialogGroup.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      this.showSelect,
      this
    );
  }

	private async onStartButtonClick() {
		this.StartAnim.playOnceAsync();
    this.startButton.visible = false;
    this.startMask.visible = false;
  }

  private showSelect() {
    this.dialogImg.visible = false;
    this.dialogFirstLabel.visible = false;
    this.dialogSecondLineOnecLabel.visible = false;
    this.dialogSecondLineThreecLabel.visible = false;
    this.dialogSecondLineTwocLabel.visible = false;
    this.dialogFrothcLabel.visible = false;
    this.dialogFifthcLabel.visible = false;
    this.dialogGroup.visible = false;

    //this.firstSelectGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>this.firstTweenGroup.play(0), this);
    this.secondSelectGroup.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      () => Main.instance.gotoScene(new DescriptionExampleScene()),
      this
    );
    //this.thirdSelectGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>this.thirdTweenGroup.play(0), this);
    //this.forthSelectGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>this.forthTweenGroup.play(0), this);
    //this.fifthSelectGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>this.fifthTweenGroup.play(0), this);
    //this.sixSelectGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>this.sixthTweenGroup.play(0), this);
  }
}