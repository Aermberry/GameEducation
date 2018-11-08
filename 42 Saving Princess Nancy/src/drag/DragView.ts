interface DragView {
	isCorrect(name: string): void;
	showText(name: string): void;
	alertCorrectInfo(dragName: string): void;
	textFlicker(dragName: string): void;
	hideDrapPart(dragObj: eui.Image): void;
	showCorrectPart(dragName: string): void;
	isIncludeDrap(drapObj: eui.Image): void;
	showOverText(labelName: string): void
	hideOverText(): void
}