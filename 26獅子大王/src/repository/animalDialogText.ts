class animalDialogText {
    public constructor() {

    }

    public getAll(index: number): egret.ITextElement[] {
        switch (index) {
            case 0:
                return [
                    {
                        text: "對不起，卡上沒有我\n的", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "名字", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "!我", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "不知道", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "大\n王是邀請", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "我", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "來啊。", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
            case 1:
                return [
                    {
                        text: "卡上沒有", style: {
                            size: 50, textColor: 0x000000
                        }
                    },
                    {
                        text: "收卡人姓\n", style: {
                            size: 50, textColor: 0xa00000
                        }
                    },
                    {
                        text: "名", style: {
                            size: 50, textColor: 0xa00000
                        }
                    }, {
                        text: ",讓我寫上吧！", style: {
                            size: 50, textColor: 0x000000
                        }
                    }
                ]
        }
    }
}