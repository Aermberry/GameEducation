class Riddle1Scene extends eui.Component implements eui.UIComponent {
  private botton: eui.Image;
  private pencilBox: eui.Image;
  private schoolBag: eui.Image;
  private isTrueImage:eui.Image;

  private keepClickGroup: eui.Group;
  private tipsGroup: eui.Group;
  private drinksGroup: eui.Group;
  private pencilBoxTipGroup: eui.Group;

  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();

    let riddle1 = new Base();
    riddle1.addshowTipsLabel(this.keepClickGroup, this.tipsGroup);
    riddle1.addshowTipsLabel(this.botton, this.drinksGroup);
    riddle1.addshowTipsLabel(this.pencilBox, this.pencilBoxTipGroup);
    riddle1.isTrue(this.schoolBag,this.isTrueImage);
  }
}
