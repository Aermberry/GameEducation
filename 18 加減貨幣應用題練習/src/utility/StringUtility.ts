class StringUtility {
	public constructor() {
	}

	public static trim(str,is_global='g'): string
	{

		var result;
		result = str.replace(/(^\s+)|(\s+$)/g,"");
		if(is_global.toLowerCase()=="g")
		{
			result = result.replace(/\s/g,"");
		}
		return result;

	}
}