class SecondLevelSelectPresenter {
	private view: ISecondLevelSelectView;
	private places = [
		Place.athleticsTrack, Place.pineConeThrowingField, 
		Place.dodgeballPitch, Place.swimmingPoolSide, 
		Place.sportingMeetingAssemblyPoint, Place.playgroundAudience
	];
	private persons = [
		Person.fox, Person.penguin, Person.cat, 
		Person.hippo, Person.kolala, Person.squirrel,
		Person.frog, Person.dog, Person.pig
	];
	private things = [Thing.pineCone, Thing.basketball, Thing.football];
	private candidateScenes = [new Scene(), new Scene()];
	private correctScenes: Scene[] = [];

	public constructor() 
	{
	}

	public loadView(view: ISecondLevelSelectView): void
	{
		this.view = view;
		PlaceFormatter.initializa();
		PersonFormatter.initialize();
		ThingFormatter.initialize();
		this.initCorrectScenes();
		this.view.places = this.places;
		this.view.persons = this.persons;
		this.view.things = this.things;
	}

	private initCorrectScenes(): void
	{
		let scene = new Scene();
		scene.place = Place.pineConeThrowingField;
		scene.persons = [Person.squirrel, Person.pig];
		scene.thing = Thing.pineCone;
		this.correctScenes.push(scene);

		scene = new Scene();
		scene.place = Place.swimmingPoolSide;
		scene.persons = [Person.frog, Person.penguin];
		this.correctScenes.push(scene);
	}

	public onPlaceMouseDown(place: Place)
	{
		this.view.stopCurrentSoundChannel();
		this.view.playAudio(PlaceFormatter.getAudioName(place));
	}

	public onPersonMouseDown(person: Person)
	{
		this.view.stopCurrentSoundChannel();
		this.view.playAudio(PersonFormatter.getAudioName(person));
	}

	public onThingMouseDown(thing: Thing)
	{
		this.view.stopCurrentSoundChannel();
		this.view.playAudio(ThingFormatter.getAudioName(thing));
	}

	/**
	 * dropPoint是Local Point
	 */
	public onDropIntoVideoTape(dragData: DragData, dropPoint: egret.Point, destSceneIndex: number): void
	{
		switch (dragData.type) {
			case DragType.place:
				this.placeDropIntoVideoTape(dragData.data, dragData.sourceSceneId, destSceneIndex);
				break;

			case DragType.person:
				this.personDropIntoVideoTape(dragData, dropPoint, destSceneIndex);
				break;

			case DragType.thing:
				this.thingDropIntoVideoTape(dragData.data, dropPoint, dragData.sourceSceneId, destSceneIndex);
				break;

			default:
				break;
		}
	}

	public onDropOutOfVideoTape(dragData: DragData): void
	{
		if (dragData.sourceSceneId < 0) {
			//不是从scene里拖出来的，不用处理
			return;
		}

		switch (dragData.type) {
			case DragType.place:
				this.removePlace(dragData.sourceSceneId);
				break;

			case DragType.person:
				this.removePerson(dragData.data as Person, dragData.sourceSceneId);
				break;

			case DragType.thing:
				this.removeThing(dragData.data as Thing, dragData.sourceSceneId);
				break;

			default:
				break;
		}
	}

	public placeDropIntoVideoTape(place: Place, sourceSceneIndex: number, destSceneIndex: number): void
	{
		if (sourceSceneIndex >= 0) {
			this.view.removeSceneBackground(sourceSceneIndex);
			this.candidateScenes[destSceneIndex].place = null;
		}
		if (this.candidateScenes[destSceneIndex].place != null) {
			this.view.removeSceneBackground(destSceneIndex);
		}
		this.view.addSceneBackground(place, destSceneIndex);
		this.candidateScenes[destSceneIndex].place = place;
	}

	public removePlace(sceneIndex: number): void
	{
		this.view.removeSceneBackground(sceneIndex);
		this.candidateScenes[sceneIndex].place = null;
	}

	/**
	 * dropPoint是Local Point
	 */
	public personDropIntoVideoTape(dragData: DragData, dropPoint: egret.Point, destSceneIndex: number): void
	{
		if (dragData.sourceSceneId >= 0) {
			//从其他scene搬过来的person，不需要手工从view中删除，因为从其他scene搬过来的都是“剪切”。
			this.candidateScenes[dragData.sourceSceneId].removePerson(dragData.data as Person);
		}
		this.candidateScenes[destSceneIndex].addPerson(dragData.data as Person);
		this.view.removePerson(dragData.data as Person, destSceneIndex);
		//person是从person list拖过来的，需要把它手工显示在scene上。
		this.view.addPerson(dragData.data as Person, dropPoint, destSceneIndex);
	}

	public removePerson(person: Person, sceneIndex: number): void
	{
		this.candidateScenes[sceneIndex].removePerson(person);
		this.view.removePerson(person, sceneIndex);
	}

	/**
	 * dropPoint是Local Point
	 */
	public thingDropIntoVideoTape(thing: Thing, dropPoint: egret.Point, sourceSceneIndex: number, destSceneIndex: number): void
	{
		if (sourceSceneIndex >= 0) {
			this.view.removeThing(this.candidateScenes[sourceSceneIndex].thing, destSceneIndex);
			this.candidateScenes[sourceSceneIndex].thing = null;
		}
		if (this.candidateScenes[destSceneIndex].thing != null) {
			this.view.removeThing(this.candidateScenes[destSceneIndex].thing, destSceneIndex);
		}
		this.candidateScenes[destSceneIndex].thing = thing;
		this.view.addThing(thing, dropPoint, destSceneIndex);
	}

	public removeThing(thing: Thing, sceneIndex: number): void
	{
		this.candidateScenes[sceneIndex].thing = null;
		this.view.removeThing(thing, sceneIndex);
	}

	public onSubmitClick(): void
	{
		if (this.candidateScenes.all(scene => scene.isEmpty())) {
			this.view.highlightPlaceButton();
			this.view.playWrongAudio();
		} else {
			this.view.normalizePlaceButton();
			this.view.disableConfirmGroup();
			this.view.enableButton();
			let compareResults = this.candidateScenes.map((scene, index) => scene.compare(this.correctScenes[index]));
			//判断compareResults里是否有正确的，如有显示答案
			for (let index = 0; index < compareResults.length; index++){
				if(compareResults[index].isPersonEqual || compareResults[index].isPlaceEqual || compareResults[index].isThingEqual)
				{
					this.view.hideAnswerView();
					this.view.showSceneCompareResult(compareResults);
				}
			}
			
			compareResults.filter(x => !x.isAllEqual).length > 0 ? this.view.playWrongAudio(): this.view.playCorrectAudio();
		}
	}

	public onCorrectButtonClick(): void
	{
		this.view.hideSceneCompareResult();
		this.view.showAnswerView();
		this.view.enableConfirmGroup();
	}

	public onHeadSoundClick(): void
	{
		this.view.playFirstCompitionSound();
		console.log('horn1');
	}

	public onButtomSoundClick(): void
	{
		this.view.playSecondCompitionSound()
		console.log('horn2');
	}
}