/*
 * @Author: mikey.zhaopeng 
 * @Date: 2018-09-30 11:16:20 
 * @Last Modified by: Salmonberry
 * @Last Modified time: 2018-11-07 17:01:59
 */

class Base implements BaseModel {
  public constructor() {}

  public gotoNextScene(scene: eui.Component) {
    Main.instance.gotoScene(scene);
  }

  public addshowTipsLabel(
    object: eui.Group | eui.Image | eui.Button,
    object2: eui.Group | eui.Image | eui.Button
  ): void {
    object.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      () => {
        this.showTipsLabel(object2);
      },
      this
    );
  }

  public async showTipsLabel(
    object: eui.Group | eui.Image | eui.Button
  ): Promise<void> {
    object.visible = true;
    await lzlib.ThreadUtility.sleep(5000);
    object.visible = false;
  }

  public onClickNextScene(btn: eui.Image | eui.Button, Scene1: eui.Component,Scene2:eui.Component) {
    btn.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      ()=>{
        Scene2.addChild(Scene1);
      },
      this
    );
  }

  public isTrue(btn: eui.Image | eui.Button, object: eui.Image) {
    btn.addEventListener(
      egret.TouchEvent.TOUCH_TAP,
      () => {
        this.isvisible(object);
      },
      this
    );
  }

  public async isvisible(object: eui.Image):Promise<void> {
    object.visible = true;
    await lzlib.ThreadUtility.sleep(1000);
    object.visible && this.gotoNextScene(new RiiddleOPtionsScenes());
  }

  public addEvet(btn: eui.Image | eui.Button, callback) {
    btn.addEventListener(egret.TouchEvent.TOUCH_TAP, callback, this);
    callback();
  }
}
