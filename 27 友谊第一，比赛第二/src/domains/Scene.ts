class Scene {
	public place: Place = null;
	public persons: Person[] = [];
	public thing: Thing = null;

	public addPerson(person: Person): void
	{
		if (this.persons.indexOf(person) >= 0) {
			return;
		}

		this.persons.push(person);
	}

	public removePerson(person: Person): void
	{
		this.persons = this.persons.filter(x => x != person);
	}

	public compare(other: Scene): SceneCompareResult
	{
		let result = new SceneCompareResult();
		result.isPlaceEqual = this.place == other.place;

		result.isPersonEqual = true;
		if (this.persons.length != other.persons.length) {
			result.isPersonEqual = false;
		} else {
			for (let person of this.persons) {
				if (other.persons.indexOf(person) < 0) {
					result.isPersonEqual = false;
					break;
				}
			}
		}

		result.isThingEqual = this.thing == other.thing;
		return result;
	}

	public isEmptyPersons(): boolean
	{
		return this.persons.length == 0;
	}

	public isEmptyPlace(): boolean
	{
		return this.place == null;
	}

	public isEmptyThing(): boolean
	{
		return this.thing == null;
	}

	public isEmpty(): boolean
	{
		return this.place == null && this.persons.length == 0 && this.thing == null;
	}
}