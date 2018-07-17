class DescriptionScene extends eui.Component implements eui.UIComponent{

    private ExitButtonText:eui.Label;
    private DescriptionExitButton:eui.Image;
    private exitButtonTweenGroup:egret.tween.TweenGroup;
    private bgmSoundChanel:egret.SoundChannel;

    private flowerMovieClip:egret.MovieClip;
    private flowerFactory:egret.MovieClipDataFactory;
    private smallflowerGroup:eui.Group;

    private smallskeletonMovieClip:egret.MovieClip;
    private smallskeletonFactory:egret.MovieClipDataFactory;
    private smallskeletonGroup:eui.Group;

    public constructor(){
        super();
    }

    protected childrenCreated():void
    {   
        super.childrenCreated();
        this.bgmSoundChanel = RES.getRes('description_bgm_mp3').play(0,1);
        this.exitButtonTweenGroup.play(0);

        this.flowerFactory = new egret.MovieClipDataFactory( RES.getRes('small_flower_movie_json') , RES.getRes('small_flower_movie_png'));
        this.flowerMovieClip = new egret.MovieClip(this.flowerFactory.generateMovieClipData('small_flower_movie'));
        this.smallflowerGroup.addChild(this.flowerMovieClip);
        this.flowerMovieClip.play(-1);

        this.smallskeletonFactory = new egret.MovieClipDataFactory( RES.getRes('small_skeleton_json') , RES.getRes('small_skeleton_png'));
        this.smallskeletonMovieClip = new egret.MovieClip(this.smallskeletonFactory.generateMovieClipData('small_skeleton_movie'));
        this.smallskeletonGroup.addChild(this.smallskeletonMovieClip);
        this.smallskeletonMovieClip.play(-1);
    }
    
    
}