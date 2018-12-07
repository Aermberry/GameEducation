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
  private componentGroup:eui.Group;
  public isTrueGroup:eui.Group;

  private index: string = "0"//0:rabbit,1:snake,2:pig,3:rat,4:sheep,5:giraffe

  public constructor() {
    super();

    this.rabbitScene = new rabbitScene(this);
    this.snakeScene = new snakeScene();
    this.pigScene = new pigScene();
    this.sheepScene = new sheepScene();
    this.giraffeScene = new giraffeScene();
    this.ratScene = new mouseScene();
    this.rabbitComponent = new rabbirComponent();
  }

  protected partAdded(partName: string, instance: any): void {
    super.partAdded(partName, instance);
  }

  protected childrenCreated(): void {
    super.childrenCreated();
    mouse.enable(this.stage);
    this.startLoadingAnimation();
    this.rabbitComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rabbiteEvet, this);
    this.pigComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pigEvet, this)
    this.sheepComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sheepEvet, this)
    this.snakeComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.snakeEvet, this)
    this.giraffeComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.giraffeEvet, this)
    this.ratComponent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ratEvet, this)
  }

  private rabbiteEvet(): void {
    this.rabbitComponent.disableMouse();
    this.rabbitComponent.clickStatus();
    this.toGameScene(this.rabbitScene)
  }

  private sheepEvet(): void {
    this.sheepComponent.disableMouse();
    this.sheepComponent.clickStatus();
    this.toGameScene(this.sheepScene)
  }

  private snakeEvet(): void {
    this.snakeComponent.disableMouse();
    this.snakeComponent.clickStatus();
    this.toGameScene(this.snakeScene)
  }

  private pigEvet(): void {
    this.pigComponent.disableMouse();
    this.pigComponent.clickStatus();
    this.toGameScene(this.pigScene)
  }

  private giraffeEvet(): void {
    this.giraffeComponent.disableMouse();
    this.giraffeComponent.clickStatus();
    this.toGameScene(this.giraffeScene)
  }

  private ratEvet(): void {
    this.ratComponent.disableMouse();
    this.ratComponent.clickStatus();
    this.toGameScene(this.ratScene)
  }

  //開場動畫播放
  private async startLoadingAnimation(): Promise<void> {
    this.plantMask.play(0)
    await lzlib.ThreadUtility.sleep(1000)
    await this.invitationAnimation.playOnceAsync().then(() => {
      this.tailWiggle.play(0);
      this.displayAnim.play(0);
    });
    await this.lionDialog.playOnceAsync().then(() => {
       this.lionDialogText(optionLionText[this.index])
       lzlib.SoundUtility.playSound(optionLionVoice[this.index]).then(()=>{
         this.headLine(optionAnimText[this.index]);
         this.playVoice(optionAnimVoice[this.index])
         this.rabbitComponent.currentState="active"
         this.rabbitComponent.touchChildren=true;
       })
    })
  }

  public async playVoice(str: string): Promise<void> {
    let sound = lzlib.SoundUtility.playSound(str);
    return sound;
  }

  private lionDialogText(text: lionDialogText): void {
    let lionLabel = this.lionDialogGroup.$children[2] as eui.Label;
    lionLabel.text = text.toString();
  }
  //redheadtitle
  public headLine(str: string): void {
    this.headTitleLabel.text = `請點選${str}`
  }

  private toGameScene(sense: eui.Component): void {
    setTimeout(() => {
      // this.addChild(sense)
      Main.instance.gotoScene(sense);
    }, 1000)
  }

  public activeStatue(components?:rabbirComponent|snakeComponent|pigComponent|ratComponent|sheepScene|girffeComponent):void{
    components.currentState="active"
  }

}