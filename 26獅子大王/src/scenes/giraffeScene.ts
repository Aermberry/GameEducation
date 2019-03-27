class giraffeScene extends eui.Component implements eui.UIComponent {
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
  private giraffeDialogGroup: eui.Group;
  private editGroup: eui.Group;
  private lionSmellGroup: eui.Group;
  private bulbComponentGroup: eui.Group;

  private tipsBulbComponent: bulbComponent;
  private bulbComponent: bulbComponent;
  private resultAchieveComponent: achieveComponent;

  private circleRect: eui.Rect;
  private plantMaskRect: eui.Rect;
  private endMaskRect: eui.Rect;
  private firstBgRect: eui.Rect;
  private secondBgRect: eui.Rect;
  private thirdBgRect: eui.Rect;

  private lion: eui.Image;
  private lion_active: eui.Image;
  private giraffe: eui.Image;

  private TextboxesDate: eui.Label;
  private TextboxesTime: eui.Label;

  private editableText_first: eui.EditableText;
  private editableText_second: eui.EditableText;
  private editableText_third: eui.EditableText;
  private editableText_fourth: eui.EditableText;
  private editableText_fifth: eui.EditableText;
  private editableText_sixth: eui.EditableText;
  private editableText_seventh: eui.EditableText;
  private editableText_eightth: eui.EditableText;
  private editableText_nineth: eui.EditableText;

  private giraffeDialogReply: eui.Label;

  private isMessageFormat: boolean = true;

  private optionsScene: GameStart.optionsScene;
  private dialogTextReply: animalDialogText;

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
    // RES.getRes("sound 24_mp3").play(0, -1)
    this.judgmentstypes();
    GameStart.optionsScene.getOptionInstance.onPlayVoice("sound 24_mp3");
    this.playAnim();
    this.lionDialogTextFlow();
    this.bulbComponentGroup.addEventListener(
      mouse.MouseEvent.MOUSE_OVER,
      this.hover,
      this
    );
    this.bulbComponentGroup.addEventListener(
      mouse.MouseEvent.MOUSE_OUT,
      this.normal,
      this
    );
    this.bulbComponent.addEventListener(
      egret.TouchEvent.TOUCH_BEGIN,
      this.active,
      this
    );
    this.bulbComponent.addEventListener(
      egret.TouchEvent.TOUCH_END,
      this.tips,
      this
    );
    this.achieveGroup.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      this.result,
      this
		);
		
		this.dialogTextReply = new animalDialogText();//獲取動物的回復對話内容
  }

  //文字類型判斷
  private judgmentstypes(): void {
    if (GameStart.optionsScene.getOptionInstance.getWords) {
      this.TextboxesDate.text = "日期：十一月九日";
      this.TextboxesTime.text = "時間：下午六時";
    }
  }

  private async hover(): Promise<void> {
    this.bulbComponent.currentState = "hover";
  }

  private async normal(): Promise<void> {
    await this.enableMouse();
    this.bulbComponent.currentState = "normal";
  }

  private async active(): Promise<void> {
    await this.disableMouse();
    this.bulbComponent.currentState = "active";
  }

  private async disableMouse(): Promise<void> {
    this.bulbComponentGroup.removeEventListener(
      mouse.MouseEvent.MOUSE_OVER,
      this.hover,
      this
    );
  }
  private enableMouse(): void {
    this.bulbComponentGroup.addEventListener(
      mouse.MouseEvent.MOUSE_OVER,
      this.hover,
      this
    );
  }

  private async playAnim(): Promise<void> {
    await this.plantMask.play(0);
    this.tailWiggle.play(0);
    await lzlib.ThreadUtility.sleep(2500);
    await this.invitationCard.playOnceAsync().then(() => {
      this.lionDialog.playOnceAsync();
      this.plantMaskRect.visible = false;
    });
    await lzlib.ThreadUtility.sleep(2000);
    this.lionDialogText(lionDialogText.giraffeText_a);
    this.playVoice(lionDialogVoice.lionVoice_giraffeA).then(() => {
      return new Promise(resolve => {
        this.rabbitDialogBox.play();
        this.rabbitDialogBox.once(egret.Event.COMPLETE, resolve, this);
      }).then(() => {
				// (this.giraffeDialogGroup.$children[3] as eui.Group).visible = true;
				this.giraffeDialogText(15);
        this.playVoice(animalDialogVoice.giraffe_a);
        setTimeout(() => {
          this.circleRect.visible = true;
        }, 4000);
      });
    });

    await lzlib.ThreadUtility.sleep(14000).then(() => {
      this.lion.source = "lione_Silly_png";
      this.lionDialogText(lionDialogText.giraffeText_b);
      setTimeout(() => {
        this.lionDialogText(lionDialogText.giraffeText_c);
      }, 5800);
    });
    this.circleRect.visible = false;
    await this.changCard.playOnceAsync().then(() => {
      this.editGroup.visible = true;
    });

    await this.playVoice(lionDialogVoice.lionVoice_giraffeB);

    // (this.giraffeDialogGroup.$children[3] as eui.Group).visible = false;
		// (this.giraffeDialogGroup.$children[4] as eui.Group).visible = true;
		this.giraffeDialogText(16);
    await this.playVoice(animalDialogVoice.giraffe_b);
    egret.Tween.get(this.lionDialogGroup)
      .to({ alpha: 0 }, 1000)
      .call(() => {
        egret.Tween.get(this.bulbGroup).to({ alpha: 1 }, 1000);
        egret.Tween.get(this.achieveGroup).to({ alpha: 1 }, 1000);
      });
    this.editableText_first.touchEnabled = true;
    this.editableText_second.touchEnabled = true;
    this.editableText_third.touchEnabled = true;
    this.editableText_fourth.touchEnabled = true;
    this.editableText_fifth.touchEnabled = true;
    this.editableText_sixth.touchEnabled = true;
    this.editableText_seventh.touchEnabled = true;
    this.editableText_eightth.touchEnabled = true;
    this.editableText_nineth.touchEnabled = true;
  }

  //lion動態文本
  private lionDialogText(text: lionDialogText): void {
    let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
    lionLabel.text = text.toString();
  }

  //giraffe動態文本
  private giraffeDialogText(index: number): void {
    this.giraffeDialogReply.textFlow = this.dialogTextReply.getAll(index);
  }

  //語音播放
  private async playVoice(
    voice: lionDialogVoice | animalDialogVoice | tipsVoices
  ): Promise<void> {
    let sound = GameStart.optionsScene.getOptionInstance.playVoice(
      voice.toString()
    );
    return sound;
  }

  private tips(): void {
    this.normal();
    this.tipsComponent = new tipsComponent(
      this,
      tipsVoices.giraffeTip.toString()
    );
    this.tipsComponent.currentState = "giraffe";
    this.addChild(this.tipsComponent);
    this.tipsComponent.playAnim();
  }

  //驗證模塊
  private confirmMessage(): boolean {
    let isTrue: boolean = true;

    let result =
      this.editableText_first.text +
      this.editableText_second.text +
      this.editableText_third.text +
      this.editableText_fourth.text +
      this.editableText_fifth.text +
      this.editableText_sixth.text +
      this.editableText_seventh.text +
      this.editableText_eightth.text +
      this.editableText_nineth.text;

    if (GameStart.optionsScene.getOptionInstance.getWords) {
      if (result == "大王五年十一月三日") {
        return isTrue;
      } else if (result == "大王5年11月3日") {
        this.isMessageFormat = true;
        return (isTrue = false);
      }
    } else {
      if (result == "大王5年11月3日") {
        return isTrue;
      } else if (result == "大王五年十一月三日") {
        this.isMessageFormat = true;
        return (isTrue = false);
      }
    }

    this.isMessageFormat = false;
    return (isTrue = false);
  }

  //判斷模塊
  private result(): void {
    this.achieveComponent = new achieveComponent(this.optionsScene, this);
    let isConfirm = this.confirmMessage();
    if (isConfirm) {
      egret.Tween.get(this.giraffeDialogGroup)
        .to({ alpha: 0 }, 1000)
        .call(() => {
          egret.Tween.get(this.bulbGroup).to({ alpha: 0 }, 1000);
          egret.Tween.get(this.achieveGroup).to({ alpha: 0 }, 1000);
        });
      this.editableText_first.touchEnabled = false;
      this.editableText_second.touchEnabled = false;
      this.editableText_third.touchEnabled = false;
      this.editableText_fourth.touchEnabled = false;
      this.editableText_fifth.touchEnabled = false;
      this.editableText_sixth.touchEnabled = false;
      this.editableText_seventh.touchEnabled = false;
      this.editableText_eightth.touchEnabled = false;
      this.editableText_nineth.touchEnabled = false;

      setTimeout(() => {
        this.congratulateAnim();
      }, 3000);
    } else {
      if (this.isMessageFormat) {
        // this.giraffeDialogGroup.$children[4].visible = false;
				// this.giraffeDialogGroup.$children[5].visible = true;
				this.giraffeDialogText(17);
        this.bulbGroup.visible = false;
        this.achieveGroup.visible = false;
        this.playVoice(tipsVoices.giraffeTips).then(() => {
          this.tipsDialog();
        });
      } else {
        this.empty();
        this.tipsDialog();
      }
    }
  }

  private tipsDialog(textword01: number = 14, textword02: number = 16): void {
    this.bulbGroup.visible = false;
    this.achieveGroup.visible = false;
    // this.giraffeDialogGroup.$children[textword01].visible = false;
    // this.giraffeDialogGroup.$children[5].visible = false;
		// this.giraffeDialogGroup.$children[textword02].visible = true;
		this.giraffeDialogText(textword01);
    setTimeout(() => {
      // this.giraffeDialogGroup.$children[textword02].visible = false;
			// this.giraffeDialogGroup.$children[textword01].visible = true;
			this.giraffeDialogText(textword02);
      this.bulbGroup.visible = true;
      this.achieveGroup.visible = true;
    }, 5000);
  }

  private empty(): void {
    this.editableText_first.text = "";
    this.editableText_second.text = "";
    this.editableText_third.text = "";
    this.editableText_fourth.text = "";
    this.editableText_fifth.text = "";
    this.editableText_sixth.text = "";
    this.editableText_seventh.text = "";
    this.editableText_eightth.text = "";
    this.editableText_nineth.text = "";
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
      egret.Tween.get(this.giraffeDialogGroup).to({ alpha: 1 }, 1000);
    });
    // this.giraffeDialogGroup.$children[4].visible = false;
		// this.giraffeDialogGroup.$children[6].visible = true;
		this.giraffeDialogText(18);
    this.giraffe.source = "giraffe_happy_png";
    this.playVoice(animalDialogVoice.giraffe_c);
    await lzlib.ThreadUtility.sleep(5000);
    this.endMaskRect.visible = true;
    await this.endMaskRectAnim.playOnceAsync();
    await this.toResultScene();
  }

  private toResultScene(): void {
    GameStart.optionsScene.getOptionInstance.onPauseVoice();
    Main.instance.gotoScene(new resultScene());
  }

  private lionDialogTextFlow(): void {
    this.giraffeDialogReply.textFlow = [
      {
        text: lionDialogText.giraffeTextReply_A.toString(),
        style: { size: 50, textColor: 0x000000 }
      },
      {
        text: lionDialogText.giraffeTextReply_B.toString(),
        style: { size: 50, textColor: 0xa00000 }
      },
      {
        text: lionDialogText.giraffeTextReply_C.toString(),
        style: { size: 50, textColor: 0x000000 }
      }
    ];
  }
}
