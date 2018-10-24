class DescriptionScene extends eui.Component implements eui.UIComponent {

    private ExitButtonText: eui.Label;
    private DescriptionExitButton: eui.Image;
    private exitButtonTweenGroup: egret.tween.TweenGroup;
    private bgmSoundChanel: egret.SoundChannel;

    private flowerMovieClip: egret.MovieClip;
    private flowerFactory: egret.MovieClipDataFactory;
    private smallflowerGroup: eui.Group;
    private ExitGroup: eui.Group;

    private smallskeletonMovieClip: egret.MovieClip;
    private smallskeletonFactory: egret.MovieClipDataFactory;
    private smallskeletonGroup: eui.Group;

    public constructor() {
        super();
    }

    protected childrenCreated(): void {
        super.childrenCreated();

        this.loadVoice();
        this.ExitGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.exitWindow, this);
        this.loadAnim('small_flower_movie_json', 'small_flower_movie_png', 'small_flower_movie', this.smallflowerGroup);
        this.loadAnim('small_skeleton_movie_json', 'small_skeleton_movie_png', 'small_skeleton_movie', this.smallskeletonGroup);
    }

    private async loadVoice(): Promise<void> {
        await lzlib.SoundUtility.playSound("description_bgm_mp3");
        this.ExitGroup.visible = true;
    }

    private loadAnim(An_josn: string, An_png, An_name: string, group: eui.Group, num: number = -1): void {
        let Factory: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(RES.getRes(An_josn), RES.getRes(An_png));
        let MovieClip: egret.MovieClip = new egret.MovieClip(Factory.generateMovieClipData(An_name));
        group.addChild(MovieClip);
        MovieClip.play(num);
    }

    private exitWindow(): void {
        window.close();
    }


}