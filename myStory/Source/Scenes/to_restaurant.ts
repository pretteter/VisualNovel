namespace myStory {
  export async function ToRestaurant(): ƒS.SceneReturn {
    currentActiveScene = "ToRestaurant";
    ƒS.Sound.fade(sounds.explore, 0.3, 2, true);
    await changeLocation(locations.minivan_city, transitions.normal);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
    ƒS.Sound.play(sounds.car_door_open, 0.5);
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 75,
        y: 80,
      },
      0.025,
      0
    );
    await tell(characters.webster, 2);
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 25,
        y: 60,
      },
      0.0005,
      0
    );
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 27,
        y: 85,
      },
      0.0005,
      0
    );
    ƒS.Sound.play(sounds.car_door_open, 0.5);
    await tell(characters.webster, 3);
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 37,
        y: 45,
      },
      0.0005,
      0
    );
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 75,
        y: 80,
      },
      0.0005,
      0
    );
    ƒS.Sound.play(sounds.car_door_close, 0.5);
    moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.happy,
      {
        x: 20,
        y: 90,
      },
      0.025,
      0
    );
    await tell(characters.phobia, 2);
    await tell(characters.webster, 4);
    await tell(characters.phobia, 3);
    ƒS.Sound.fade(sounds.explore, 0, 1);
    await clearScene();
  }
}
