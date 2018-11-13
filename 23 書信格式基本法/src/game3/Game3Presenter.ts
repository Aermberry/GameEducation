class Game3Presenter {
	private view: Game3View;

	private game3Repository = new Game3Repository();

	public constructor() {
	}

	public loadView(view: Game3View)
	{
		this.view = view;
	}

	public async onLackLabelComponentTap(text: string)
	{
		this.view.hideRect();
		if(UtilString.trim(text,'g') == this.game3Repository.lackOfPart){
			//选择正确
			this.view.hideRect();
			this.view.showAlertInfo('你答對了');
			this.view.hideLackNameGroup();
			this.view.showNextQuestionAnimation();
			await lzlib.ThreadUtility.sleep(1000);
			this.view.hideAlertInfo();
		}else{
			this.view.showPartBorder(UtilString.trim(text,'g'));
			this.view.showWrongInfo(UtilString.trim(text,'g'));
		}
		
	}

	public async onCorrectLabelComponentTap(text: string)
	{
		if(UtilString.trim(text,'g') == this.game3Repository.correctOfPart){
			//选择正确
			this.view.disableButton();
			this.view.showCorrectOfPart();
			this.view.showContentDownAnimation();
			this.view.playGame3CorrectAnimation();
			this.view.showCorrectGroup();
			this.view.showNextLevelAnimation();
			await lzlib.ThreadUtility.sleep(1000);
			this.view.hideCorrectGroup();
			this.view.showNextLevelComponent();
		}else{
			this.view.showAlertBoy(UtilString.trim(text,'g'));
		}
	}
}