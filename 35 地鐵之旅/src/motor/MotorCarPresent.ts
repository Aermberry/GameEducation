class MotorCarPresent {

	private line: Line;
	private position: number;
	private isRight: boolean;
	private view: MotorCarView;

	public constructor(line: Line, position: number, isRight: boolean) {
		this.line = line;
		this.position = position;
		this.isRight = isRight;
	}

	public async loadView(view: MotorCarView): Promise<void>
	{
		this.view = view;
		
		this.isRight ? this.view.openRightDoor() : this.view.openLeftDoor();
		await this.view.playStartIntroduction();
		this.isRight ? this.view.closeRightDoor() : this.view.closeLeftDoor();

	}
}