namespace myStory {
  export async function Scene1(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
    currentActiveScene = "Scene1";
    // let spanElements = Array.from(
    //   document.getElementsByTagName("speech") as HTMLCollectionOf<HTMLElement>
    // );
    // spanElements.forEach((element) => {
    //   element.style.backgroundColor = "rgba(255, 32, 1, 0.9)";
    //   // element.style.opacity = "0.9";
    // });
    // ƒS.Sound.play(sounds.nightclub, 0.5);
    // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);

    for (let key of Object.values(items)) {
      ƒS.Inventory.add(key);
    }

    // ƒS.Inventory.add(items.item1);

    // await ƒS.Location.show(locations.graveyard);
    // await ƒS.update(
    //   transitions.test.duration,
    //   transitions.test.alpha,
    //   transitions.test.edge
    // );

    await changeLocation(locations.minivan2, transitions.test);

    await newPose(characters.maleSpider, "normal");

    await newPose(characters.femaleSpider, "scared");

    // await ƒS.update(1);

    await tell(characters.maleSpider, 1);
    await newPose(characters.femaleSpider, "demon");
    await tell(characters.femaleSpider, 1);
    await moveCharacterToLocaton(
      characters.maleSpider,
      characters.maleSpider.pose.angry,
      {
        x: 50,
        y: 90,
      },
      0.025,
      1
    );
    await moveCharacterToLocaton(
      characters.femaleSpider,
      characters.femaleSpider.pose.scared,
      {
        x: 50,
        y: 97,
      },
      0.025,
      1
    );
    ƒS.Speech.clear();
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
