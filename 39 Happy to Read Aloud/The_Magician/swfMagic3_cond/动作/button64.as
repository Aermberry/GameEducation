// Action script...

on (rollOver)
{
    vo_rock = new Sound();
    vo_rock.attachSound("04rock");
    vo_rock.start();
}

on (rollOut)
{
    vo_rock.stop();
}

on (release)
{
    vo_rock.stop();
    gotoAndPlay(76);
}
