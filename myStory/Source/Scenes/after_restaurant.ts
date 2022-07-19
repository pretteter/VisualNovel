namespace myStory {
  export async function AfterRestaurant(): ƒS.SceneReturn {
    await changeLocation(locations.minivan_city, transitions.test);
    currentActiveScene = "AfterRestaurant";
    ƒS.Sound.fade(sounds.love, 0.3, 0, true);
    ƒS.Sound.fade(sounds.car_interior, 0.8, 1, true);
    currentFemaleCoordinates.x = 50;
    currentFemaleCoordinates.y = 90;

    currentMaleCoordinates.x = 50;
    currentMaleCoordinates.y = 85;

    let decitionAnswer = {
      home: "Sie nach Hause bringen",
      romantic: "romantische Nacht verbringen",
      doSomething: "zu einem weiteren tollen Ort fahren",
    };
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
    let decition1 = await ƒS.Menu.getInput(decitionAnswer, "decision");

    switch (decition1) {
      case decitionAnswer.home:
        await dialogueHome();
        await clearScene();
        return "vanForrestOnReturn";
      case decitionAnswer.romantic:
        await dialogueRomantic();
        await clearScene();
        return "ending";
      case decitionAnswer.doSomething:
        await dialogueMushroom();
        await clearScene();
        return "mushroom";
    }

    ƒS.Speech.clear();
    await ƒS.update();
  }
  async function dialogueHome() {
    await tell(characters.webster, 1_1_01);
    await tell(characters.phobia, 1_1_01);
    await tell(characters.webster, 1_1_02);
    stopSound();
  }

  async function dialogueRomantic() {
    await tell(characters.webster, 1_2_01);
    await tell(characters.phobia, 1_2_01);
    await tell(characters.phobia, 1_2_02);
    ƒS.Sound.play(sounds.suspense, 0.4);
    await newPose(characters.phobia, "demon");
    await tell(characters.phobia, 1_2_03);
    await clearScene();
    await tell(characters.phobia, 1_2_04);
    stopSound();
  }

  async function dialogueMushroom() {
    await tell(characters.webster, 1_3_01);
    await tell(characters.phobia, 1_3_01);
    await tell(characters.webster, 1_3_02);
    await tell(characters.phobia, 1_3_02);
    stopSound();
  }

  function stopSound() {
    ƒS.Sound.fade(sounds.love, 0, 0.5);
    ƒS.Sound.fade(sounds.car_interior, 0, 0.5);
  }
}
