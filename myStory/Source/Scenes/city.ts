namespace myStory {
  export async function City(): ƒS.SceneReturn {
    currentActiveScene = "City";
    ƒS.Sound.fade(sounds.city, 0.3, 2, true);
    await changeLocation(locations.city, transitions.test);

    await newPose(characters.webster, "happy");
    await tell(characters.webster, 1);
    await tell(characters.webster, 2);
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 1);
    await tell(characters.webster, 3);
    await tell(characters.webster, 4);
    await tell(characters.phobia, 2);
    await tell(characters.phobia, 3);
    await newPose(characters.webster, "normal");
    await tell(characters.webster, 5);
    await newPose(characters.phobia, "sad");
    await tell(characters.phobia, 4);
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 5);
    await tell(characters.phobia, 6);
    await tell(characters.webster, 6);
    ƒS.Sound.fade(sounds.city, 0, 2);
    await clearScene();

    ƒS.Sound.fade(sounds.wakeup, 0.3, 2, true);
    await changeLocation(locations.mushroom, transitions.test);
    await newPose(characters.phobia, "normal", 0);
    await newPose(characters.webster, "normal", 0);
    await tell(characters.webster, 7);
    await tell(characters.phobia, 7);
    await tell(characters.phobia, 8);
    await tell(characters.webster, 8);
    await tell(characters.phobia, 9);
    await tell(characters.webster, 9);
    ƒS.Sound.fade(sounds.wakeup, 0, 0.5);
    await clearScene();
    dataForSave.score -= 25;
    showLoveMeter();
  }
}
