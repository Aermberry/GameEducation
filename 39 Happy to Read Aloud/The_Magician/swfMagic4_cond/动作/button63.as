// Action script...

on (rollOver)
{
    vo_cock = new Sound();
    vo_cock.attachSound("01cock");
    vo_cock.start();
}

on (rollOut)
{
    vo_cock.stop();
}

on (release)
{
    vo_cock.stop();
    gotoAndPlay(76);
}
