namespace myStory {
  export async function Restaurant(): ƒS.SceneReturn {
    currentActiveScene = "Restaurant";
    currentFemaleCoordinates = { x: 20, y: 85 };
    currentMaleCoordinates = { x: 75, y: 80 };

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

    await ƒS.Character.hideAll();
    ƒS.Speech.clear();
    await ƒS.update();
  }
}
