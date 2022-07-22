namespace myStory {
  export async function Intro(): ƒS.SceneReturn {
    currentActiveScene = "Intro";
    ƒS.Sound.fade(sounds.wakeup, 0.3, 2, true);

    await changeLocation(locations.web, transitions.opener);
    await newPose(characters.webster, "normal");
    await tell(characters.webster, 1);
    await tell(characters.webster, 2);
    ƒS.Sound.fade(sounds.drums, 0.4, 0);
    await newPose(characters.phobia, "scared");
    await newPose(characters.webster, "scared");
    // await ƒS.Character.animate(characters.phobia,characters.phobia.pose.scared)
    moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.scared,
      {
        x: 25,
        y: 95,
      },
      0.0025,
      0
    );
    await tell(characters.phobia, 1);
    await newPose(characters.phobia, "angry");
    ƒS.Sound.fade(sounds.drums, 0, 0.5);
    await tell(characters.phobia, 2);
    await newPose(characters.webster, "normal");
    await newPose(characters.phobia, "sad");
    await tell(characters.phobia, 3);

    moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 55,
        y: 80,
      },
      0.025,
      0
    );

    await tell(characters.webster, 3);
    await tell(characters.webster, 4);
    await tell(characters.phobia, 4);
    await newPose(characters.phobia, "happy");

    await tell(characters.phobia, 5);
    await newPose(characters.phobia, "normal");
    await tell(characters.webster, 6);
    await newPose(characters.webster, "angry");
    await tell(characters.webster, 7);
    await tell(characters.phobia, 6);

    await newPose(characters.webster, "normal");
    await tell(characters.webster, 8);
    await tell(characters.webster, 9);
    await tell(characters.phobia, 7);
    await tell(characters.webster, 10);
    await newPose(characters.phobia, "scared");
    await tell(characters.phobia, 8);
    await tell(characters.phobia, 9);
    await tell(characters.webster, 11);

    await clearScene();
  }
}
