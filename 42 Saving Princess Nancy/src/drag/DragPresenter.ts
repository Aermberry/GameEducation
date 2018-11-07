class DragPresenter {

	private view: DragView;

	public constructor() {
	}

	public loadView(view: DragView): void
	{
		this.view = view;
	}
}