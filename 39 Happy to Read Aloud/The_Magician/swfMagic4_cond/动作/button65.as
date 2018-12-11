// Action script...

on (rollOver)
{
    vo_clock = new Sound();
    vo_clock.attachSound("06clock");
    vo_clock.start();
}

on (rollOut)
{
    vo_clock.stop();
}

on (release)
{
    vo_clock.stop();
    gotoAndPlay(40);
}
