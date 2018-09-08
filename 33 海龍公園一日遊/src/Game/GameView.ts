interface GameView {
    /** 显示所有连接词 */
    showAllConjunctions(conjunctions: Conjunction[]): void;
    /** 隐藏指定的连接词 */
    hideConjunction(conjuctionIndex: number): void;

    updateProgres(currentQuestionIndex: number): void;

    /** 显示列车上的连接词占位符 */
    blinkConjunctionBackgroundInTrain(): void;
    /** 隐藏列车上的连接词占位符 */
    hideConjunctionBackgroundInTrain(): void;

    /** 显示火车上的左连接词 */
    showLeftConjunction(text: string): void;
    /** 显示火车上的右连接词 */
    showRightConjunction(text: string): void;
    /** 消除火车上的连接词 */
    clearConjunctionsInTrain(): void;
    /** 隐藏火车上的连接词 */
    hideConjunctionsInTrain(): void;

    /** 允许用户把连接词拖到火车上的左连接词 */
    enableDropLeftConjunctionInTrain(): void;
    /** 禁止用户把连接词拖到火车上的左连接词 */
    disableDropLeftConjunctionInTrain(): void;

    /** 允许用户把连接词拖到火车上的右连接词 */
    enableDropRightConjunctionInTrain(): void;
    /** 禁止用户把连接词拖到火车上的右连接词 */
    disableDropRightConjunctionInTrain(): void;

    playAudioHowToPlay(): void;
    playAudioYourSentenceIsAsync(): Promise<void>;
    playAudio(audioName: string): Promise<void>;
    playAudioYouCanPressValidationButton(): void;
    playAudioYouAreCorrect(): void;
    playAudioYouAreWrongAsync(): Promise<void>;

    /** 播放火车开动的动画 */
    playMovieTrainGo(): void;

    enableValidationButton(): void;
    disableValidationButton(): void;

    enableNextButton(): void;

    /** 显示当前关卡已经通过的字 */
    showCurrentLevelFinished(): void;
    openBackgroundScene(): void;
    openGameScene(sentenceIndex: number): void;
}