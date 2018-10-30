interface GameView {
	playIntroductionAudio(): Promise<void>;
	showToyImage(): void;
	showToyName(): void;
	playAudio(audioName: string): void;
	showHelpButton(): void;
	putToyInDragPosition(imageName: string): void;
	currentToyName: string;
	currentToyVoice:string;
	openStatusScene(isCorrect: boolean): void;
	openTipScene(position: ToyPosition): void;
}