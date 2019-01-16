class optionsScene extends eui.Component implements eui.UIComponent {

  private invitationAnimation: egret.tween.TweenGroup;
  private tailWiggle: egret.tween.TweenGroup;
  private plantMask: egret.tween.TweenGroup;
  private displayAnim: egret.tween.TweenGroup;
  private lionDialog: egret.tween.TweenGroup;
  private headTitleLabel: eui.Label;

  public rabbitComponent: rabbirComponent;
  public pigComponent: pigComponent;
  public snakeComponent: snakeComponent;
  public sheepComponent: sheeepComponent;
  public giraffeComponent: girffeComponent;
  public ratComponent: ratComponent;

  private rabbitScene: rabbitScene;
  private snakeScene: snakeScene;
  private pigScene: pigScene;
  private sheepScene: sheepScene;
  private giraffeScene: giraffeScene;
  private ratScene: mouseScene;

  private lionDialogGroup: eui.Group;
  private componentGroup: eui.Group;
  private invitation: eui.Group;
  public isTrueGroup: eui.Group;

  private index: string = "0"//0:rabbit,1:snake,2:pig,3:rat,4:sheep,5:giraffe
  private static statusIndex: number = 0;
  private static _instance: optionsScene;
  private sound: egret.Sound
  private soundchannel: egret.SoundChannel

  public constructor() {
    super();
    optionsScene._instance = this
    this.rabbitScene = new rabbitScene();
    this.snakeScene = new snakeScene();
    this.pigScene = new pigScene();
    this.sheepScene = new sheepScene();
    this.giraffeScene = new giraffeScene();
    this.ratScene = new mouseScene();
    this.rabbitComponent = new rabbirComponent();
    this.onPlayVoice("sound 24_mp3")
  }

  public static get getOptionInstance(): optionsScene {
    return optionsScene._instance;
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    mouse.enable(this.stage);
    this.normal();
    this.startLoadingAnimation();
    this.playVoice
    this.rabbitComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rabbiteEvet, this);
    this.pigComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pigEvet, this)
    this.sheepComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sheepEvet, this)
    this.snakeComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.snakeEvet, this)
    this.giraffeComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.giraffeEvet, this)
    this.ratComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ratEvet, this)
    console.log(optionsScene.statusIndex)
  }

  private rabbiteEvet(): void {
    this.rabbitComponent.disableMouse();
    this.rabbitComponent.clickStatus();
    this.onPauseVoice()
    this.toGameScene(this.rabbitScene)
  }

  private sheepEvet(): void {
    this.sheepComponent.disableMouse();
    this.sheepComponent.clickStatus();
    this.onPauseVoice()
    this.toGameScene(this.sheepScene)
  }

  private snakeEvet(): void {
    this.snakeComponent.disableMouse();
    this.snakeComponent.clickStatus();
    this.onPauseVoice()
    this.toGameScene(this.snakeScene)
  }

  private pigEvet(): void {
    this.pigComponent.disableMouse();
    this.pigComponent.clickStatus();
    this.onPauseVoice()
    this.toGameScene(this.pigScene)
  }

  private giraffeEvet(): void {
    this.giraffeComponent.disableMouse();
    this.giraffeComponent.clickStatus();
    this.onPauseVoice()
    this.toGameScene(this.giraffeScene)
  }

  private ratEvet(): void {
    this.ratComponent.disableMouse();
    this.ratComponent.clickStatus();
    this.onPauseVoice()
    this.toGameScene(this.ratScene)
  }

  //開場動畫播放
  private async startLoadingAnimation(): Promise<void> {
    this.plantMask.play(0)
    await lzlib.ThreadUtility.sleep(1000)
    await this.invitationAnimations();
    await this.lionDialog.playOnceAsync().then(() => {
      this.lionDialogText(optionLionText[this.index])
      lzlib.SoundUtility.playSound(optionLionVoice[this.index]).then(() => {
        this.headLine(optionAnimText[this.index]);
        this.playVoice(optionAnimVoice[this.index]).then(() => {
          this.statusAnim()

        })
      })
    })
  }

  private async playVoice(str: string): Promise<void> {
    let sound = lzlib.SoundUtility.playSound(str);
    return sound;
  }

  private lionDialogText(text: lionDialogText): void {
    let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
    lionLabel.text = text.toString();
  }

  public headLine(str: string): void {
    this.headTitleLabel.text = `請點選${str}`
  }

  private toGameScene(sense: eui.Component): void {
    setTimeout(() => {
      Main.instance.gotoScene(sense);
    }, 1000)
  }

  public activeStatue(components?: rabbirComponent | snakeComponent | pigComponent | ratComponent | sheepScene | girffeComponent): void {
    components.currentState = "active";
  }

  public statueIndex(): void {
    optionsScene.statusIndex++
    console.log(optionsScene.statusIndex)
    this.index = optionsScene.statusIndex.toString();
  }

  private async invitationAnimations(): Promise<void> {
    switch (this.index) {
      case "0":
        await this.invitationAnimation.playOnceAsync().then(() => {
          this.tailWiggle.play(0);
          this.displayAnim.play(0);
        });
        break
      default:
        this.invitation.alpha = 1
        break;
    }
  }

  private statusAnim(): void {
    switch (this.index) {
      case "0":
        this.rabbitComponent.currentState = "active"
        this.rabbitComponent.touchChildren = true;
        break;
      case "1":
        this.snakeComponent.currentState = "active"
        this.snakeComponent.touchChildren = true;
        break;
      case "2":
        this.pigComponent.currentState = "active"
        this.pigComponent.touchChildren = true;
        break;
      case "3":
        this.ratComponent.currentState = "active"
        this.ratComponent.touchChildren = true;
        break;
      case "4":
        this.sheepComponent.currentState = "active"
        this.sheepComponent.touchChildren = true;
        break;
      default:
        this.giraffeComponent.currentState = "active"
        this.giraffeComponent.touchChildren = true;
        break;
    }
  }

  private normal(): void {
    this.rabbitComponent.currentState = "normal";
    this.snakeComponent.currentState = "normal";
    this.pigComponent.currentState = "normal";
    this.ratComponent.currentState = "normal";
    this.sheepComponent.currentState = "normal";
    this.giraffeComponent.currentState = "normal";
  }

  // BG播放
  public onPlayVoice(voice: string): void {
    this.sound = RES.getRes(voice)
    this.soundchannel = this.sound.play(0, -1);

  }

  public onPauseVoice(): void {
    this.soundchannel.stop()
  }

}