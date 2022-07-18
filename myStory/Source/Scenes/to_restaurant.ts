namespace myStory {
  export async function ToRestaurant(): ƒS.SceneReturn {
    currentActiveScene = "ToRestaurant";
    // currentFemaleCoordinates = { x: 17, y: 85 };
    // currentMaleCoordinates = { x: 75, y: 80 };

    await changeLocation(locations.minivan1, transitions.test);
    // await newPose(characters.maleSpider, "happy", 1);
    // await newPose(characters.femaleSpider, "normal", 1);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
    // await newPose(characters.maleSpider, "happy",1);
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
    await ƒS.Character.hideAll();
    ƒS.Speech.clear();
    await ƒS.update();
  }
}
