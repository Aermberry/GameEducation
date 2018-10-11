class Game4Presenter {
	private view: Game4View;

	private game4Repository = new Game4Repository();

	public constructor() {
	}

	public loadView(view: Game4View)
	{
		this.view = view;
	}

	public async onLackLabelComponentTap(text: string)
	{
		if(UtilString.trim(text,'g') == this.game4Repository.lackOfPart){
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
		if(UtilString.trim(text,'g') == this.game4Repository.correctOfPart){
			//选择正确
			this.view.playGame4CorrectAnimation();
			this.view.showCorrectOfPart();
			this.view.showCorrectGroup();
			this.view.showCompleteAnimation();
			await lzlib.ThreadUtility.sleep(1000);
			this.view.hideCorrectGroup();
		}else{
			this.view.showAlertSantaClaus(UtilString.trim(text,'g'));
		}
	}
}