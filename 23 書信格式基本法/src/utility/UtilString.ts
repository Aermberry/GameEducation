class UtilString {
	public constructor() {
	}

	public static trim(str:string,is_global:string)
    {
        let result;
        result = str.replace(/(^\s+)|(\s+$)/g,"");
        if(is_global.toLowerCase()=="g")
        {
            result = result.replace(/\s/g,"");
        }
        return result;
    }
}