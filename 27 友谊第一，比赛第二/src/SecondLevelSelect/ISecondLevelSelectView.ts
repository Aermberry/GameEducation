interface ISecondLevelSelectView 
{
	places: Place[];
	persons: Person[];
	things: Thing[];

    playAudio(audioName: string): void;

    /** 设置场景的背景图片 */
    addSceneBackground(place: Place, sceneIndex: number): void;
    /** 删除场景的背景图片 */
    removeSceneBackground(sceneIndex: number): void;

    /** 添加人物 */
    addPerson(person: Person, dropPoint: egret.Point, sceneIndex: number): void;
    /** 删除人物 */
    removePerson(person: Person, sceneIndex: number): void;

    /** 添加运动 */
    addThing(thing: Thing, dropPoint: egret.Point, sceneIndex: number): void;
    /** 删除动动 */
    removeThing(thing: Thing, sceneIndex: number): void;

    stopCurrentSoundChannel(): void;

    showAnswerView(): void;
    hideAnswerView(): void;

    showSceneCompareResult(compareResults: SceneCompareResult[]): void;
    hideSceneCompareResult();

    playWrongAudio(): void;
    playCorrectAudio(): void;

    enableButton(): void;
    disableConfirmGroup(): void;
    enableConfirmGroup(): void;

    playFirstCompitionSound(): void;
    playSecondCompitionSound(): void;

    highlightPlaceButton(): void;
    normalizePlaceButton(): void;
    highlightPersonButton(): void;
    normalizePersonButton(): void;
    highlightThingButton(): void;
    normalizeThingButton(): void;
    showProgressBar(index: number): Promise<void>
    closeProgressBar(): void;
}