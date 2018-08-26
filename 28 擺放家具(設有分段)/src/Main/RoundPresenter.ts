class RoundPresenter {
	private view: MainView;
	private instructionAudioName: string;
	public goods: GoodsComponent[];

	public constructor(view: MainView, instructionAudioName: string, goods: GoodsComponent[]) {
		this.view = view;
		this.instructionAudioName = instructionAudioName;
		this.goods = goods;
	}

	public play(): void
	{
		this.view.disableGoods(this.goods);
		this.view.highlightInstructionButton();
		this.view.disableValidateButton();
		this.view.closeNextRoundPanel();
	}

	public async onInstructionButtonClick(): Promise<void>
	{
		this.view.normalizeInstructionButton();
		this.view.disableInstructionButton();
		this.view.alertPlayingInstruction();
		//await this.view.playInstructionAsync(this.instructionAudioName);
		this.view.alertYouCanMoveGoodsNow();
		this.view.enableInstructionButton();
		this.view.enableValidateButton();
		this.view.enableGoods(this.goods);
	}

	public onValidateButtonClick(): void
	{
		this.goods.forEach(goods => goods.validateInCorrectPlace());
		this.view.updateProgress(this.getInCorrectPlaceCount(), this.getInWrongPlaceCount());

		if (!this.goods.all(goods => goods.isInRoom)) {
			this.view.playSomeGoodsNotInRoomAudio();
			this.view.openContinuePanel();
			return;
		}

		if (!this.goods.all(goods => goods.isInCorrectPlace)) {
			this.view.playNotAllGoodsInCorrectPlayAudio();
			this.view.openContinuePanel();
			return;
		}

		this.view.toastNextRoundMessage();
		this.view.openNextRoundPanel();
	}

	private getInCorrectPlaceCount(): number
	{
		return this.goods.filter(goods => goods.isInCorrectPlace).length;
	}

	private getInWrongPlaceCount(): number
	{
		return this.goods.filter(goods => goods.isInWrongPlace).length;
	}

	public onContinueButtonClick(): void
	{
		this.view.closeContinuePanel();
	}
}