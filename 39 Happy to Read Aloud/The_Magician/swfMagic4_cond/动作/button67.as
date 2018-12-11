// Action script...

on (rollOver)
{
    vo_dock = new Sound();
    vo_dock.attachSound("03dock");
    vo_dock.start();
}

on (rollOut)
{
    vo_dock.stop();
}

on (release)
{
    vo_dock.stop();
    gotoAndPlay(40);
}
