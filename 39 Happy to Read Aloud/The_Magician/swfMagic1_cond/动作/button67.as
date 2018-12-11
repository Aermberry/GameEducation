// Action script...

on (rollOver)
{
    vo_sock = new Sound();
    vo_sock.attachSound("02sock");
    vo_sock.start();
}

on (rollOut)
{
    vo_sock.stop();
}

on (release)
{
    vo_sock.stop();
    gotoAndPlay(40);
}
