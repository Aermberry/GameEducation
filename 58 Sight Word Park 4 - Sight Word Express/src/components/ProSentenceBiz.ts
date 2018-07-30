class ProSentenceBiz {
    private allSentence = new ProSentenceRepository().getAll(); //句子库
    private useSentence = []; //已经用过的句子，不应再重复使用
    
    public constructor()
    {
    }

    public random():string
    {
      let candiate = '';
      do{
          candiate = this.allSentence[Math.randomMinMax(0, this.allSentence.length - 1)];
      }while (this.useSentence.indexOf(candiate) >= 0);
      this.useSentence.push(candiate);
      return candiate;
    }
}