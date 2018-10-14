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

	public onPlaceMouseDown(placeIndex: number)
	{
		this.view.stopCurrentSoundChannel();
		this.view.playAudio(PlaceFormatter.getAudioName(this.places[placeIndex]));
	}

	public onPersonMouseDown(personIndex: number)
	{
		this.view.stopCurrentSoundChannel();
		this.view.playAudio(PersonFormatter.getAudioName(this.persons[personIndex]));
	}

	public onThingMouseDown(thingIndex: number)
	{
		this.view.stopCurrentSoundChannel();
		this.view.playAudio(ThingFormatter.getAudioName(this.things[thingIndex]));
	}

	/**
	 * dropPoint是Local Point
	 */
	public onSceneDrop(dragData: DragData, dropPoint: egret.Point, sceneIndex: number): void
	{
		switch (dragData.type) {
			case DragType.place:
				this.addPlace(dragData.dataId, sceneIndex);
				break;

			case DragType.person:
				this.addPerson(dragData.dataId, dropPoint, sceneIndex);
				break;

			case DragType.thing:
				this.addThing(dragData.dataId, dropPoint, sceneIndex);
				break;

			default:
				break;
		}
	}

	public onStageDrop(dragData: DragData): void
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
				this.removePerson(dragData.dataId as Person, dragData.sourceSceneId);
				break;

			case DragType.thing:
				this.removeThing(dragData.dataId as Thing, dragData.sourceSceneId);
				break;

			default:
				break;
		}
	}

	public addPlace(placeIndex: number, sceneIndex: number): void
	{
		if (this.candidateScenes[sceneIndex].place != null) {
			this.view.removeSceneBackground(sceneIndex);
		}
		this.view.addSceneBackground(this.places[placeIndex], sceneIndex);
		this.candidateScenes[sceneIndex].place = this.places[placeIndex];
	}

	public removePlace(sceneIndex: number): void
	{
		this.view.removeSceneBackground(sceneIndex);
		this.candidateScenes[sceneIndex].place = null;
	}

	/**
	 * dropPoint是Local Point
	 */
	public addPerson(personIndex: number, dropPoint: egret.Point, sceneIndex: number): void
	{
		if (this.candidateScenes[sceneIndex].persons.indexOf(this.persons[personIndex]) >= 0) {
			this.view.removePerson(this.persons[personIndex], sceneIndex);
		}
		this.candidateScenes[sceneIndex].addPerson(this.persons[personIndex]);
		this.view.addPerson(this.persons[personIndex], dropPoint, sceneIndex);
	}

	public removePerson(person: Person, sceneIndex: number): void
	{
		this.candidateScenes[sceneIndex].removePerson(person);
		this.view.removePerson(person, sceneIndex);
	}

	/**
	 * dropPoint是Local Point
	 */
	public addThing(thingIndex: number, dropPoint: egret.Point, sceneIndex: number): void
	{
		this.candidateScenes[sceneIndex].thing = this.things[thingIndex];
		this.view.addThing(this.things[thingIndex], dropPoint, sceneIndex);
	}

	public removeThing(thing: Thing, sceneIndex: number): void
	{
		this.candidateScenes[sceneIndex].thing = null;
		this.view.removeThing(thing, sceneIndex);
	}

	public onSubmitClick(): void
	{
		// this.view.enableButton();
		// this.view.hideAnswerView();
		// let compareResults = this.candidateScenes.map((scene, index) => scene.compare(this.correctScenes[index]));
		// this.view.showSceneCompareResult(compareResults);
		// compareResults.filter(x => !x.isAllEqual).length > 0 ? this.view.playWrongAudio(): this.view.playCorrectAudio();
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