class Game2Presenter {
	private game2Repo = new Game2Repository();
	private view: Game2View;

	public constructor() {
	}

	public loadView(view: Game2View)
	{
		this.view = view;
	}

	public async onLackLabelComponentTap(text: string): Promise<void>
	{
		if(Main.instance.trim(text,'g') == this.game2Repo.lackOfPart){
			//选择正确
			this.view.alertYouAreCorrect();
			this.view.hideLackNameGroup();
			this.view.showNextQuestionAnimation();
			await lzlib.ThreadUtility.sleep(1000);
			this.view.hideAlertInfo();
		}else{
			// this.view.showPartBorder(Main.instance.trim(labelComponent.text,'g'));
		}
	}

	public async onCorrectLabelComponentTap(labelComponent:LabelComponents)
	{
		if(Main.instance.trim(labelComponent.text,'g') == this.game2Repo.correctOfPart){
			//选择正确
			this.view.showCorrectGroup();
			this.view.showNextLevelAnimation();
			await lzlib.ThreadUtility.sleep(1000);
			this.view.hideCorrectGroup();
			this.view.showNextLevelComponent();
		}else{
			this.view.showAlertElder(Main.instance.trim(labelComponent.text,'g'));
		}
	}
}