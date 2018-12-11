// Action script...

on (rollOver)
{
    vo_block = new Sound();
    vo_block.attachSound("05block");
    vo_block.start();
}

on (rollOut)
{
    vo_block.stop();
}

on (release)
{
    vo_block.stop();
    gotoAndPlay(40);
}
