class SmellScene extends eui.Component implements eui.UIComponent {

    private flowerMushroom: eui.Image;
    private flowerMushroomGroup: eui.Group;
    private flowerMushroomFactory: egret.MovieClipDataFactory;
    private flowerMushroomMovie: egret.MovieClip;

    private pointedPaper: eui.Image;
    private pointedPaperGroup: eui.Group;
    private pointedPaperFactory: egret.MovieClipDataFactory;
    private pointedPaperMovie: egret.MovieClip;

    private fish: eui.Image;
    private fishGroup: eui.Group;
    private fishFactory: egret.MovieClipDataFactory;
    private fishMovie: egret.MovieClip;

    private nextSceneButton: eui.Image;
    private scrollText: eui.Label;
    private currentSoundChannel: egret.SoundChannel;


    public constructor() {
        super();
    }

    protected childrenCreated(): void {
        super.childrenCreated();
        mouse.enable(this.stage);
        mouse.setButtonMode(this.nextSceneButton, true);
        this.nextSceneButton.addEventListener(mouse.MouseEvent.ROLL_OUT, () => this.nextSceneButton.source = 'button_png', this);
        this.nextSceneButton.addEventListener(mouse.MouseEvent.ROLL_OVER, () => this.nextSceneButton.source = 'hover_button_png', this);

        //flowerMushroom
        this.flowerMushroomGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.smellStrange, this);
        this.flowerMushroomGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToFlowerImage, this);
        this.flowerMushroomGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToFlowerMovie, this);
        this.flowerMushroomFactory = new egret.MovieClipDataFactory(RES.getRes('flower_movie_json'), RES.getRes('flower_movie_png'));

        //pointedPaper
        this.pointedPaperGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.smellBurning, this);
        this.pointedPaperGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToPointedPaperImage, this);
        this.pointedPaperGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToPointedPaperMovie, this);
        this.pointedPaperFactory = new egret.MovieClipDataFactory(RES.getRes('pointed_movie_json'), RES.getRes('pointed_movie_png'));


        //fish
        this.fishGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.smellRotten, this);
        this.fishGroup.addEventListener(mouse.MouseEvent.ROLL_OUT, this.switchToFishImage, this);
        this.fishGroup.addEventListener(mouse.MouseEvent.ROLL_OVER, this.switchToFishMovie, this);
        this.fishFactory = new egret.MovieClipDataFactory(RES.getRes('fish_movie_json'), RES.getRes('fish_movie_png'));
    }

    private switchToFlowerImage() {
        this.flowerMushroom.visible = true;
        this.flowerMushroom.source = 'flower_mushroom_png'
        this.flowerMushroomMovie.stop();
        this.flowerMushroomGroup.removeChild(this.flowerMushroomMovie);
    }
    private switchToFlowerMovie() {
        this.flowerMushroom.visible = false;
        this.flowerMushroomMovie = new egret.MovieClip(this.flowerMushroomFactory.generateMovieClipData('flower_movie'));
        this.flowerMushroomGroup.addChild(this.flowerMushroomMovie);
        this.flowerMushroomMovie.play(-1);
    }


    private switchToPointedPaperImage() {
        this.pointedPaper.visible = true;
        this.pointedPaper.source = 'pointed_paper_png';
        this.pointedPaperMovie.stop();
        this.pointedPaperGroup.removeChild(this.pointedPaperMovie);
    }
    private switchToPointedPaperMovie() {
        this.pointedPaper.visible = false;
        this.pointedPaperMovie = new egret.MovieClip(this.pointedPaperFactory.generateMovieClipData('pointed_movie'));
        this.pointedPaperGroup.addChild(this.pointedPaperMovie);
        this.pointedPaperMovie.play(-1);
    }

    private switchToFishImage() {
        this.fish.visible = true;
        this.fish.source = 'fish_png';
        this.fishMovie.stop();
        this.fishGroup.removeChild(this.fishMovie);
    }
    private switchToFishMovie() {
        this.fish.visible = false;
        this.fishMovie = new egret.MovieClip(this.fishFactory.generateMovieClipData('fish_movie'));
        this.fishGroup.addChild(this.fishMovie);
        this.fishMovie.play(-1);
    }

    private smellStrange(): void {
        this.scrollText.text = '  something strange.';
        this.switchFont();
        this.stopCurrentSoundChannel();
        this.isNextSceneButtonDisplap();
        this.currentSoundChannel = (RES.getRes('smell_strange_mp3') as egret.Sound).play(0, 1);
        this.nextScene();
    }

    private smellBurning(): void {
        this.scrollText.text = '  something burning.';
        this.switchFont();
        this.stopCurrentSoundChannel();
        this.isNextSceneButtonDisplap();
        this.currentSoundChannel = (RES.getRes('smell_burning_mp3') as egret.Sound).play(0, 1);
        this.nextScene();
    }

    private smellRotten(): void {
        this.scrollText.text = '  something rotten.';
        this.switchFont();
        this.stopCurrentSoundChannel();
        this.isNextSceneButtonDisplap();
        this.currentSoundChannel = (RES.getRes('smell_rotten_mp3') as egret.Sound).play(0, 1);
        this.nextScene();
    }

    private switchFont(): void {
        this.scrollText.fontFamily = 'La-Bamba-LET';
        this.scrollText.textColor = 9765173;
        this.scrollText.size = 74.5;
    }

    private stopCurrentSoundChannel(): void {
        if (this.currentSoundChannel != null) {
            this.currentSoundChannel.stop();
        }
    }

    private nextScene(): void {
        this.nextSceneButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopSoundToNextScene, this);
    }

    private stopSoundToNextScene(): void {
        this.stopCurrentSoundChannel();
        Main.instance.gotoScene(new DescriptionScene);
    }

    private isNextSceneButtonDisplap(): void {
        this.nextSceneButton.visible == false && (this.nextSceneButton.visible = true);
    }

}