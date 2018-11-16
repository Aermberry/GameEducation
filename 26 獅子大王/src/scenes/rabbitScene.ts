class rabbitScene extends eui.Component implements eui.UIComponent {
  private plantMask: egret.tween.TweenGroup;
  private tailWiggle: egret.tween.TweenGroup;
  private invitationCard: egret.tween.TweenGroup;
  private lionDialog: egret.tween.TweenGroup;
  private rabbitDialogBox: egret.tween.TweenGroup;
  private bubleGrad: egret.tween.TweenGroup;

  private bulbGroup: eui.Group;
  private achieveGroup: eui.Group;
  private lionDialogGroup: eui.Group;
  private rabbitDialogGroup: eui.Group;

  private lion: eui.Image;
  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    this.playAnim();
  }

  private async playAnim(): Promise<void> {
    this.plantMask.play(0);
    this.tailWiggle.play(0);
    await lzlib.ThreadUtility.sleep(2500);
    await this.invitationCard.playOnceAsync().then((resolve) => {
      return this.lionDialog.playOnceAsync();
    });
    await lzlib.ThreadUtility.sleep(2000);
    this.lionDialogText(lionDialogText.rabbitText_a);
  }

  //lion動態文本
  private async lionDialogText(text: string): Promise<void> {
    let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
    lionLabel.text = text;
  }

  //語音播放
  private playVoice(voice: string): void {
    let sound: egret.Sound = RES.getRes(voice);
    sound.play(0, 1);
  }
}
