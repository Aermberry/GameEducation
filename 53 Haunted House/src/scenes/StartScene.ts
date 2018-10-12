class StartScene extends eui.Component implements eui.UIComponent {

    private batTweenGroup: egret.tween.TweenGroup;
    private bgmSoundChannel: egret.SoundChannel;
    private startMask: eui.Rect;
    private startButton: eui.Button;
    private loadingAnim: egret.tween.TweenGroup


    public constructor() {
        super();
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }


    protected childrenCreated(): void {
        super.childrenCreated();
        this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStartButtonClick,this);
    }

    private async onStartButtonClick(): Promise<void> {
        await this.loadingAnim.play(0);
        this.startMask.visible = false;
        this.startButton.visible = false;
        this.loadMusic();
        this.startScene();
    }

    private loadMusic(): void {
        this.bgmSoundChannel = RES.getRes('start_scene_bgm_mp3').play(0, 1);
    }

    private async startScene(): Promise<void> {
        TweenGroupUtility.playAnimation(this.batTweenGroup);
        await ThreadUtility.sleep(2000);
        this.batTweenGroup.stop();
        this.bgmSoundChannel.stop();
        Main.instance.gotoScene(new MoonRiseScene());
    }
}
