class Base{
    public static onPlayBlackgroundMusic(voice:string):void{
		lzlib.SoundUtility.playSound(voice)
	}
    
    public static async onAsyncPlayBlackgroundMusic(voice:string,btn?:eui.Button):Promise<void>{
        await lzlib.SoundUtility.playSound(voice);
        btn.visible=true;
    }

    public  static onClickVoice(btn:eui.Image,voice:string,btn2?:eui.Button|eui.Image):void{
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function( ){
            lzlib.SoundUtility.playSound(voice);
            lzlib.ThreadUtility.sleep(1500)
            if (btn2) {
              btn2.visible=true;  
            }
            
        },this)
    }

    public static onClickNextScene(btn:eui.Image|eui.Button,Scene:eui.Component){
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function( ){
            Main.instance.gotoScene(Scene)
        },this)
    }
}