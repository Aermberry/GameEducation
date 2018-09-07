class ConjunctionContainer extends eui.Group implements  eui.UIComponent {
	public constructor() {
		super();
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.currentState = 'flicker';
	}
	
}