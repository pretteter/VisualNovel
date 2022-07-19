namespace myStory {
  export async function VanForrestOnReturn(): ƒS.SceneReturn {
    currentActiveScene = "VanForrestOnReturn";
    await changeLocation(locations.minivan_forrest, transitions.test);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
    // await newPose(characters.maleSpider, "happy",1);
    await moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.normal,
      {
        x: 25,
        y: 80,
      },
      0.025,
      0
    );
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.normal,
      {
        x: 75,
        y: 80,
      },
      0.025,
      0
    );

    let decitionAnswer = {
      upstairs: "indirekt nach Sex fragen",
      tomorrow: "Morgen wieder treffen?",
      sometimes: "Wann wieder sehen?",
    };
    let decition1 = await ƒS.Menu.getInput(decitionAnswer, "decision");
    switch (decition1) {
      case decitionAnswer.upstairs:
        await dialogueUpstairs();
        await clearScene();
        return "ending";
      case decitionAnswer.tomorrow:
        await dialogueMeetTomorrow();
        await clearScene();
        return "swing";
      case decitionAnswer.sometimes:
        await dialogueWhenNextMeeting();
        await clearScene();
        return "swing";
    }
  }
  async function dialogueUpstairs() {
    await tell(characters.webster, 1_1_01);
    await newPose(characters.phobia, "angry");
    await tell(characters.phobia, 1_1_01);
    await newPose(characters.phobia, "demon");
    await tell(characters.phobia, 1_1_02);
  }
  async function dialogueMeetTomorrow() {
    await tell(characters.webster, 1_2_01);
    await newPose(characters.phobia, "happy");
    await tell(characters.phobia, 1_2_01);
    await newPose(characters.webster, "happy");
    await tell(characters.webster, 1_2_02);
    await tell(characters.webster, 1_2_03);
    await tell(characters.phobia, 1_2_02);
  }
  async function dialogueWhenNextMeeting() {
    await tell(characters.webster, 1_3_01);
    await newPose(characters.phobia, "happy");
    await tell(characters.phobia, 1_3_01);
    await tell(characters.phobia, 1_3_02);
    await newPose(characters.webster, "happy");
    await tell(characters.webster, 1_3_02);
    await tell(characters.phobia, 1_3_03);
    await tell(characters.webster, 1_3_03);
    await newPose(characters.phobia, "demon");
    await tell(characters.phobia, 1_3_04);
    await newPose(characters.phobia, "happy");
    await tell(characters.phobia, 1_3_05);
    await tell(characters.webster, 1_3_04);
  }
}
