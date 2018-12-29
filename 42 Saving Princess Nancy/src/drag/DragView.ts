interface DragView {
	// isCorrect(name: string): void;
	// showText(name: string): void;
	alertCorrectInfo(text: string): Promise<void>;
	alertWrongtInfo(text: string): Promise<void>;
	textFlicker(curRD: number): void;
	hideDrapPart(dragObj: eui.Image): void;
	showCorrectPart(dragName: string): void;
	// isIncludeDrap(drapObj: eui.Image): void;
	showOverText(labelName: string): void;
	hideOverText(): void;
	playFinishAnimation(): void;
	playFinishMP3(): void;
	AlertReTry(): Promise<void>;
	rdText(text: string): void;
}