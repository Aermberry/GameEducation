class rabbitScene extends eui.Component implements eui.UIComponent {
  private plantMask: egret.tween.TweenGroup;
  private endMaskRectAnim: egret.tween.TweenGroup;
  private tailWiggle: egret.tween.TweenGroup;
  private invitationCard: egret.tween.TweenGroup;
  private lionDialog: egret.tween.TweenGroup;
  private rabbitDialogBox: egret.tween.TweenGroup;
  private bubleGrad: egret.tween.TweenGroup;
  private changCard: egret.tween.TweenGroup;
  private happyAnim: egret.tween.TweenGroup;
  private tipsComponent: tipsComponent;
  private achieveComponent: achieveComponent;

  private bulbGroup: eui.Group;
  private achieveGroup: eui.Group;
  private lionDialogGroup: eui.Group;
  private rabbitDialogGroup: eui.Group;
  private editGroup: eui.Group;
  private lionSmellGroup: eui.Group;
  private bulbComponentGroup: eui.Group;

  private tipsBulbComponent: bulbComponent;
  private bulbComponent: bulbComponent;
  private resultAchieveComponent: achieveComponent;

  private circleRect: eui.Rect;
  private plantMaskRect: eui.Rect;
  private endMaskRect: eui.Rect;
  private firstBgRect: eui.Rect
  private secondBgRect: eui.Rect
  private thirdBgRect: eui.Rect

  private lion: eui.Image;
  private lion_active: eui.Image;

  private editableText_first: eui.EditableText;
  private editableText_second: eui.EditableText;
  private editableText_third: eui.EditableText;

  private rabbitDialogReply: eui.Label;

  private optionsScene: GameStart.optionsScene;
  private dialogTextReply: animalDialogText

  public constructor() {
    super();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    mouse.enable(this.stage);
    mouse.setButtonMode(this.bulbGroup, true);
    GameStart.optionsScene.getOptionInstance.onPlayVoice("sound 24_mp3")

    this.playAnim();
    this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
    this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.normal, this);
    this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.active, this);
    this.bulbComponent.addEventListener(egret.TouchEvent.TOUCH_END, this.tips, this);
    this.achieveGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.result, this);

    this.dialogTextReply = new animalDialogText();//獲取動物的回復對話内容
  }

  private async hover(): Promise<void> {
    this.bulbComponent.currentState = "hover";
  }

  private async normal(): Promise<void> {
    await this.enableMouse();
    this.bulbComponent.currentState = "normal"
  }

  private async active(): Promise<void> {
    await this.disableMouse();
    this.bulbComponent.currentState = "active";
  }

  private async disableMouse(): Promise<void> {
    this.bulbComponentGroup.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
  }
  private enableMouse(): void {
    this.bulbComponentGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hover, this);
  }

  private async playAnim(): Promise<void> {
    await this.plantMask.play(0);
    this.tailWiggle.play(0);
    await lzlib.ThreadUtility.sleep(2500);
    await this.invitationCard.playOnceAsync().then(() => {
      this.plantMaskRect.visible = false;
      this.editableText_first.touchEnabled = false
      this.editableText_second.touchEnabled = false
      this.editableText_third.touchEnabled = false
      this.lionDialog.playOnceAsync();
    });
    await lzlib.ThreadUtility.sleep(2000);
    this.lionDialogText(lionDialogText.rabbitText_a);
    this.playVoice(lionDialogVoice.lionVoice_a).then(() => {
      return new Promise((resolve) => {
        this.rabbitDialogBox.play();
        this.rabbitDialogBox.once(egret.Event.COMPLETE, resolve, this);
      }).then(() => {
        this.rabbitDialogText(0);
        this.playVoice(animalDialogVoice.rabbitVoice_a);
        setTimeout(() => {
          this.circleRect.visible = true;
        }, 4000)
      })
    })

    await lzlib.ThreadUtility.sleep(18000).then(() => {
      this.lion.source = "lione_Silly_png";
      this.lionDialogText(lionDialogText.rabbitText_b);
    });

    await this.playVoice(lionDialogVoice.lionVoice_b).then(() => {
      this.lionDialogText(lionDialogText.rabbitText_c);
      this.playVoice(lionDialogVoice.lionVoice_c);
      this.circleRect.visible = false;
    });
    await this.changCard.playOnceAsync();
    await lzlib.ThreadUtility.sleep(5000);
    this.rabbitDialogText(1);
    await this.playVoice(animalDialogVoice.rabbitVoice_b);
    GameStart.optionsScene.getOptionInstance.playVoice("sound 322_mp3");
    egret.Tween.get(this.lionDialogGroup).to({ alpha: 0 }, 1000).call(() => {
      egret.Tween.get(this.bulbGroup).to({ alpha: 1 }, 1000);
      egret.Tween.get(this.achieveGroup).to({ alpha: 1 }, 1000);
    });
    this.editableText_first.touchEnabled = true;
    this.editableText_second.touchEnabled = true;
    this.editableText_third.touchEnabled = true;
  }

  //lion動態文本
  private lionDialogText(text: lionDialogText): void {
    let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
    lionLabel.text = text.toString();
  }

  //rabbit動態文本
  private rabbitDialogText(index: number): void {
    this.rabbitDialogReply.textFlow = this.dialogTextReply.getAll(index);
  }

  //語音播放
  private async playVoice(voice: lionDialogVoice | animalDialogVoice): Promise<void> {
    let sound = GameStart.optionsScene.getOptionInstance.playVoice(voice.toString())
    return sound;
  }

  private tips(): void {
    this.normal();
    this.tipsComponent = new tipsComponent(this, tipsVoices.rabbitTip.toString());
    this.tipsComponent.currentState = "rabbit";
    this.addChild(this.tipsComponent);
    this.tipsComponent.playAnim();
  }

  //驗證模塊
  private confirmMessage(): boolean {
    var children = this.editGroup.$children;
    let result = this.editableText_first.text == "小" && this.editableText_second.text == "動" && this.editableText_third.text == "物";
    return result
  }

  //判斷模塊
  private result(): void {
    this.achieveComponent = new achieveComponent(this.optionsScene, this);
    let isConfirm = this.confirmMessage();
    if (isConfirm) {
      egret.Tween.get(this.rabbitDialogGroup).to({ alpha: 0 }, 1000).call(() => {
        egret.Tween.get(this.bulbGroup).to({ alpha: 0 }, 1000);
        egret.Tween.get(this.achieveGroup).to({ alpha: 0 }, 1000);
      });
      this.editableText_first.touchEnabled = false;
      this.editableText_second.touchEnabled = false;
      this.editableText_third.touchEnabled = false;
      setTimeout(() => {
        this.congratulateAnim();
      }, 3000)
    }
    else {
      this.bulbGroup.visible = false;
      this.achieveGroup.visible = false;
      this.rabbitDialogReply.visible = false
      this.rabbitDialogGroup.$children[2].visible = true;
      setTimeout(() => {
        this.rabbitDialogGroup.$children[2].visible = false;
        this.rabbitDialogReply.visible = true;
        this.bulbGroup.visible = true;
        this.achieveGroup.visible = true;
      }, 5000)
    }
  }

  //第二部分動畫
  private async congratulateAnim(): Promise<void> {
    this.lion_active.visible = false;
    this.lionSmellGroup.visible = true;
    this.tailWiggle.play(0);
    this.happyAnim.play(0);
    await egret.Tween.get(this.lionDialogGroup).to({ alpha: 1 }, 1000);
    this.lionDialogText(lionDialogText.rabbitText_d);
    await this.playVoice(lionDialogVoice.lionVoice_d).then(() => {
      egret.Tween.get(this.rabbitDialogGroup).to({ alpha: 1 }, 1000);
    })
    this.rabbitDialogReply.visible = false
    this.rabbitDialogGroup.$children[4].visible = true;
    this.playVoice(animalDialogVoice.rabbitVoice_d);
    await lzlib.ThreadUtility.sleep(5000);
    this.endMaskRect.visible = true;
    await this.endMaskRectAnim.playOnceAsync()
    await this.gohome();
  }
  private gohome(): void {
    GameStart.optionsScene.getOptionInstance.onPauseVoice()
    this.optionsScene = new GameStart.optionsScene();
    this.optionsScene.currentState = "snake"
    this.optionsScene.statueIndex();
    // this.optionsScene.chooseOption();
    Main.instance.gotoScene(this.optionsScene)
  }
}
