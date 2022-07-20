namespace myStory {
  export async function ReturnAfterEnding(): ƒS.SceneReturn {
    await changeLocation(locations.flower, transitions.test);
    ƒS.Sound.fade(sounds.funnyMeme, 0.3, 0.5, true);
    currentActiveScene = "ReturnAfterEnding";
    currentFemaleCoordinates = { x: 0, y: 95 };

    await newPose(characters.webster, "normal");
    await tell(characters.webster, 1);
    await tell(characters.webster, 2);
    await newPose(characters.webster, "sad");
    await tell(characters.webster, 3);
    await tell(characters.webster, 4);
    await tell(characters.webster, 5);
    await newPose(characters.webster, "angry");
    await tell(characters.webster, 6);
    ƒS.Sound.play(sounds.scaryShort, 0.6);
    await newPose(characters.webster, "scared");
    moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.normal,
      {
        x: 25,
        y: 95,
      },
      0.0025,
      0
    );
    await tell(characters.phobia, 1);
    await newPose(characters.phobia, "demon");
    await tell(characters.phobia, 2);
    await newPose(characters.phobia, "normal");
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 3);
    await tell(characters.webster, 7);
    await tell(characters.webster, 8);
    await newPose(characters.phobia, "scared");
    await tell(characters.phobia, 4);
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 5);
    await tell(characters.webster, 9);
    await newPose(characters.phobia, "demon");
    await tell(characters.phobia, 6);
    await newPose(characters.phobia, "normal");
    ƒS.Sound.play(sounds.suspense, 0.6);
    ƒS.Sound.fade(sounds.funnyMeme, 0, 1);
    await tell(characters.webster, 10);
    await clearScene();

    ƒS.Sound.fade(sounds.endTheme, 0.3, 0.5, true);
    await changeLocation(locations.graveyard, transitions.puzzle);
    await newPose(characters.phobia, "normal", 0, { x: 15, y: 90 });
    await tell(characters.phobia, 7);
    await newPose(characters.phobia, "sad");
    await tell(characters.phobia, 8);
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 9);

    await clearScene();
    showCredits();
  }
}
