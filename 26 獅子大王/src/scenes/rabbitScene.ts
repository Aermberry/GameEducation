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
    await lzlib.ThreadUtility.sleep(5000);
    await this.invitationCard.play(0);
  }
}
