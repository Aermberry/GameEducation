class Base{
    public static onPlayBlackgroundMusic(voice:string):void{
		lzlib.SoundUtility.playSound(voice)
	}
    
    public static async onAsyncPlayBlackgroundMusic(voice:string,btn?:eui.Button):Promise<void>{
        await lzlib.SoundUtility.playSound(voice);
        btn.visible=true;
    }

    public  static onClickVoice(btn:eui.Image,voice:string){
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP,function( ){
            lzlib.SoundUtility.playSound(voice);
        },this)
    }
}