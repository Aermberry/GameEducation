class Base {
    public static onPlayBlackgroundMusic(voice: string): void {
        lzlib.SoundUtility.playSound(voice)
    }

    public static async onAsyncPlayBlackgroundMusic(voice: string, btn?: eui.Button): Promise<void> {
        await lzlib.SoundUtility.playSound(voice);
        if (btn) {
            btn.visible = true;
        }

    }

    public static onClickVoice(btn: eui.Image, voice: string, btn2?: eui.Button | eui.Image): void {
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            lzlib.SoundUtility.playSound(voice);
            lzlib.ThreadUtility.sleep(1500)
            if (btn2) {
                btn2.visible = true;
            }

        }, this)
    }

    public static onClickNextScene(btn: eui.Image | eui.Button, Scene: eui.Component) {
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            Main.instance.gotoScene(Scene)
        }, this)
    }

    public static changColor(el: eui.Label) {
        el.textColor = 0xd92e20
    }

    // 劃綫

    public static ruling(Scene:eui.Component,element0: eui.Label): void {
        let shp: egret.Shape = new egret.Shape();
        shp.graphics.lineStyle(10, 0xd92e20, 1);
        let width = element0.width;
        let height = element0.height;
        let x0=element0.x;
        let y0=element0.y+2*height;
        let x1=x0+width
        console.log("x0:"+x0);
        console.log("y0:"+y0);
        console.log("瞄點x:"+element0.$anchorOffsetX)
        console.log("瞄點y:"+element0.$anchorOffsetY)
        shp.graphics.moveTo(x0,y0);
        shp.graphics.endFill();
        Scene.addChild(shp);
    }

}