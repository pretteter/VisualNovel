namespace myStory {
  export async function Holiday(): ƒS.SceneReturn {
    currentActiveScene = "Holiday";
    ƒS.Sound.fade(sounds.holiday, 0.3, 2, true);
    await changeLocation(locations.holiday, transitions.test);

    await newPose(characters.webster, "normal");
    await tell(characters.webster, 1);
    await tell(characters.phobia, 1);
    await newPose(characters.phobia, "normal", 1);
    await tell(characters.phobia, 2);
    await tell(characters.phobia, 3);
    await tell(characters.webster, 2);
    // await newPose(characters.mrobeer, "normal", undefined, { x: 50, y: 100 });
    moveCharacterToLocaton(
      characters.mrobeer,
      characters.mrobeer.pose.normal,
      {
        x: 50,
        y: 50,
      },
      0.0025,
      0,
      { x: 50, y: 0 }
    );
    ƒS.Sound.play(sounds.turnTable, 0.5);
    await newPose(characters.phobia, "scared");
    await tell(characters.mrobeer, 1);
    await tell(characters.phobia, 4);
    await newPose(characters.webster, "angry");
    await tell(characters.webster, 3);
    await newPose(characters.webster, "normal");
    await newPose(characters.phobia, "normal");
    await tell(characters.mrobeer, 2);
    await tell(characters.mrobeer, 3);
    await tell(characters.mrobeer, 4);
    await newPose(characters.webster, "happy");
    await tell(characters.webster, 4);
    await tell(characters.phobia, 5);
    await ƒS.Character.hide(characters.mrobeer)
    await tell(characters.webster, 5);
    await newPose(characters.phobia, "demon");
    ƒS.Sound.play(sounds.suspense, 0.5);
    await tell(characters.phobia, 6);
    await newPose(characters.phobia, "normal");
    await tell(characters.webster, 6);
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 7);
    await tell(characters.phobia, 8);
    await tell(characters.phobia, 9);
    await tell(characters.webster, 7);
    ƒS.Sound.fade(sounds.holiday, 0, 0.5);
    await clearScene();

    ƒS.Sound.fade(sounds.wakeup, 0.3, 2, true);
    await changeLocation(locations.mushroom, transitions.test);
    await newPose(characters.phobia, "normal", 0);
    await newPose(characters.webster, "normal", 0);
    await tell(characters.webster, 8);
    await tell(characters.phobia, 10);
    await tell(characters.phobia, 11);
    await tell(characters.webster, 9);
    await tell(characters.phobia, 12);
    await tell(characters.webster, 10);
    ƒS.Sound.fade(sounds.wakeup, 0, 0.5);
    await clearScene();
    showLoveMeter(75);
  }
}
