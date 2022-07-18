namespace myStory {
  export async function AfterRestaurant(): ƒS.SceneReturn {
    await changeLocation(locations.minivan1, transitions.test);
    currentActiveScene = "AfterRestaurant";
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
        return "VanForrestOnReturn"
        // break;
      case decitionAnswer.romantic:
        await dialogueRomantic();
        return "Ending";
      case decitionAnswer.doSomething:
        await dialogueMushroom();
        return "Mushroom";
    }

    ƒS.Speech.clear();
    await ƒS.update();
  }
  async function dialogueHome() {
    await tell(characters.webster, 1_1_01);
    await tell(characters.phobia, 1_1_01);
    await tell(characters.webster, 1_1_02);
  }

  async function dialogueRomantic() {
    await tell(characters.webster, 1_2_01);
    await tell(characters.phobia, 1_2_01);
    await tell(characters.phobia, 1_2_02);
    await tell(characters.phobia, 1_2_03);
  }

  async function dialogueMushroom() {
    await tell(characters.webster, 1_3_01);
    await tell(characters.phobia, 1_3_01);
    await tell(characters.webster, 1_3_02);
    await tell(characters.phobia, 1_3_02);
  }
}
