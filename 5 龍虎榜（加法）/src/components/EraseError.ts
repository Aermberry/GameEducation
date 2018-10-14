class EraseError extends Error {
	public static readonly message = 'user click erase button';

	public constructor() {
		super(EraseError.message);
	}
}