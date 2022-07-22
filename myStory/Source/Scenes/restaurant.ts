namespace myStory {
  export async function Restaurant(): ƒS.SceneReturn {
    currentActiveScene = "Restaurant";
    currentFemaleCoordinates = { x: 20, y: 85 };
    currentMaleCoordinates = { x: 75, y: 80 };
    ƒS.Sound.fade(sounds.restaurant_people, 0.3, 2, true);
    ƒS.Sound.fade(sounds.restaurant_jazz, 0.2, 2, true);

    await changeLocation(locations.restaurant_underTable, transitions.normal);
    await newPose(characters.webster, "normal");
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 1);
    await tell(characters.phobia, 2);
    await tell(characters.webster, 1);
    await tell(characters.webster, 2);
    await newPose(characters.mrobeer, "normal", 1, { x: 50, y: 60 });
    await tell(characters.mrobeer, 1);
    await tell(characters.webster, 3);
    await tell(characters.mrobeer, 2);
    await tell(characters.mrobeer, 3);
    await tell(characters.mrobeer, 4);
    await tell(characters.phobia, 3);
    await decition();
    await newPose(characters.webster, "happy");
    await newPose(characters.phobia, "happy");
    await tell(characters.mrobeer, 5);
    await newPose(characters.webster, "normal");
    await newPose(characters.phobia, "normal");
    await newPose(characters.mrobeer, "normal", 1, { x: -50, y: 60 });
    ƒS.Sound.play(sounds.eternity_later, 0.5);
    await delay(2500);
    await tell(characters.webster, 4);
    await tell(characters.phobia, 4);
    await tell(characters.phobia, 5);
    await tell(characters.webster, 5);
    await newPose(characters.mrobeer, "normal", 1, { x: 50, y: 60 });
    await tell(characters.mrobeer, 6);
    await tell(characters.phobia, 6);

    showLoveMeter(25);
    ƒS.Sound.fade(sounds.restaurant_people, 0, 0.5);
    ƒS.Sound.fade(sounds.restaurant_jazz, 0, 0.5);
    await clearScene();
  }

  async function decition() {
    let decitionAnswer = {
      yes: "Ja",
      asAlways: "Stammgericht",
    };

    let decition = await ƒS.Menu.getInput(decitionAnswer, "decision");

    switch (decition) {
      case decitionAnswer.yes:
        await tell(characters.webster, 1_1_01);
        await tell(characters.webster, 1_1_02);
        break;
      case decitionAnswer.asAlways:
        await tell(characters.webster, 1_2_01);
        await tell(characters.webster, 1_2_02);
        await tell(characters.phobia, 1_2_01);
        break;
    }
  }
}
