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
	}

	public async onInstructionButtonClick(): Promise<void>
	{
		this.view.normalizeInstructionButton();
		this.view.disableInstructionButton();
		this.view.alertPlayingInstruction();
		await this.view.playInstructionAsync(this.instructionAudioName);
		this.view.alertYouCanMoveGoodsNow();
		this.view.enableInstructionButton();
		this.view.enableValidateButton();
		this.view.enableGoods(this.goods);
	}

	public onValidateButtonClick(): void
	{
		this.goods.forEach(goods => goods.validateInCorrectPlace());
		this.view.updateProgress(this.getInCorrectPlaceCount(), this.getInWrongPlaceCount());
		this.view.disableGoods(this.goods);

		if (!this.goods.all(goods => goods.isInRoom)) {
			this.view.alertSomeGoodsNotInRoom();
			return;
		}

		if (!this.goods.all(goods => goods.isInCorrectPlace)) {
			this.view.alertNotAllGoodsInCorrectPlace();
			return;
		}

		this.view.showNextRoundPanel();
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
		this.view.closeNextRoundPanel();
		this.view.enableGoods(this.goods);
	}
}