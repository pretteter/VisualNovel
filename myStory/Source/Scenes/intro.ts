namespace myStory {
  export async function Intro(): ƒS.SceneReturn {
    currentActiveScene = "Intro";
    // ƒS.Sound.play(sounds.nightclub, 0.5);
    // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);

    // for (let key of Object.values(items)) {
    //   ƒS.Inventory.add(key);
    // }

    // ƒS.Inventory.add(items.item1);

    // await ƒS.Location.show(locations.minivan1);
    // await ƒS.update(
    //   transitions.test.duration,
    //   transitions.test.alpha,
    //   transitions.test.edge
    // );

    await changeLocation(locations.web, transitions.test);
    await newPose(characters.maleSpider, "normal");

    await tell(characters.maleSpider, 1);
    await tell(characters.maleSpider, 2);

    await newPose(characters.femaleSpider, "scared");
    await newPose(characters.maleSpider, "scared");

    moveCharacterToLocaton(
      characters.femaleSpider,
      characters.femaleSpider.pose.scared,
      {
        x: 25,
        y: 95,
      },
      0.0025,
      0
    );
    await tell(characters.femaleSpider, 1);

    await newPose(characters.femaleSpider, "angry");
    await tell(characters.femaleSpider, 2);
    await newPose(characters.maleSpider, "normal");
    await newPose(characters.femaleSpider, "sad");
    await tell(characters.femaleSpider, 3);

    moveCharacterToLocaton(
      characters.maleSpider,
      characters.maleSpider.pose.happy,
      {
        x: 55,
        y: 80,
      },
      0.025,
      0
    );

    await tell(characters.maleSpider, 3);
    await tell(characters.maleSpider, 4);
    await tell(characters.femaleSpider, 5);
    await newPose(characters.femaleSpider, "happy");

    await tell(characters.femaleSpider, 4);
    await tell(characters.femaleSpider, 5);
    await newPose(characters.femaleSpider, "normal");
    await tell(characters.maleSpider, 6);
    await newPose(characters.maleSpider, "angry");
    await tell(characters.maleSpider, 7);
    await tell(characters.femaleSpider, 6);

    await newPose(characters.maleSpider, "normal");
    await tell(characters.maleSpider, 8);
    await tell(characters.maleSpider, 9);
    await tell(characters.femaleSpider, 7);
    await tell(characters.maleSpider, 10);
    await newPose(characters.femaleSpider, "scared");
    await tell(characters.femaleSpider, 8);
    await tell(characters.femaleSpider, 9);
    await tell(characters.maleSpider, 11);

    ƒS.Speech.clear();
    await ƒS.Character.hideAll();
    await ƒS.update();

    // ƒS.Sound.play(sounds.nightclub, 0.5);
    // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);

    // let decitionAnswer = {
    //   iSayOk: "Okay",
    //   iSayYes: "Yes",
    //   iSayNo: "No"
    // }

    // let decition = await ƒS.Menu.getInput(decitionAnswer, "some CSS classe");

    // switch (decition) {
    //   case decitionAnswer.iSayNo:

    //   case decitionAnswer.iSayOk:

    //   case decitionAnswer.iSayYes:

    // }
  }
}
