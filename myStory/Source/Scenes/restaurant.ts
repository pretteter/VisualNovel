namespace myStory {
  export async function Restaurant(): ƒS.SceneReturn {
    currentActiveScene = "Restaurant";
    currentFemaleCoordinates = { x: 20, y: 85 };
    currentMaleCoordinates = { x: 75, y: 80 };
    ƒS.Sound.fade(sounds.restaurant_people, 0.3, 2, true);
    ƒS.Sound.fade(sounds.restaurant_jazz, 0.2, 2, true);
    await changeLocation(locations.restaurant_underTable, transitions.test);
    await newPose(characters.webster, "happy", 0);
    await newPose(characters.phobia, "normal", 0);
    await newPose(characters.mrobeer, "normal", 0, { x: 50, y: 60 });

    // await newPose(characters.maleSpider, "happy",1);

    let decitionAnswer = {
      iSayOk: "Okay",
      iSayYes: "Yes",
      iSayNo: "No",
    };

    let decition = await ƒS.Menu.getInput(decitionAnswer, "decision");

    switch (decition) {
      case decitionAnswer.iSayNo:

      case decitionAnswer.iSayOk:

      case decitionAnswer.iSayYes:
    }
    ƒS.Sound.fade(sounds.restaurant_people, 0, 0.5);
    ƒS.Sound.fade(sounds.restaurant_jazz, 0, 0.5);
    await clearScene();
  }
}
