namespace myStory {
  export async function VanForrest(): ƒS.SceneReturn {
    currentActiveScene = "VanForrest";
    currentFemaleCoordinates.x = 17;
    currentFemaleCoordinates.y = 85;
    currentMaleCoordinates.x = 75;

    await changeLocation(locations.minivan_forrest, transitions.normal);

    await newPose(characters.webster, "normal", 0);
    await newPose(characters.phobia, "normal", 0);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
    await tell(characters.phobia, 2);
    await tell(characters.webster, 2);
    await tell(characters.webster, 3);
    await tell(characters.phobia, 3);
    await tell(characters.webster, 4);
    ƒS.Sound.play(sounds.car_door_open, 0.5);
    await moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.happy,
      {
        x: 50,
        y: 90,
      },
      0.025,
      1
    );
    ƒS.Sound.play(sounds.car_door_close, 0.5);
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 50,
        y: 85,
      },
      0.025,
      1
    );
    ƒS.Sound.play(sounds.car_door_close, 0.5);
    ƒS.Sound.fade(sounds.wakeup, 0, 0.5, true);
    await clearScene();
  }
}
