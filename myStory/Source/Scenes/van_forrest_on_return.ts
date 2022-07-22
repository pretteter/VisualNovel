namespace myStory {
  export async function VanForrestOnReturn(): ƒS.SceneReturn {
    currentActiveScene = "VanForrestOnReturn";
    await changeLocation(locations.minivan_forrest, transitions.test);
    ƒS.Sound.fade(sounds.love, 0.3, 0.5, true);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
    // await newPose(characters.maleSpider, "happy",1);
    ƒS.Sound.play(sounds.car_door_open, 0.4);
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
    ƒS.Sound.play(sounds.car_door_close, 0.4);
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
    ƒS.Sound.play(sounds.car_door_close, 0.4);
    let decitionAnswer = {
      upstairs: "Mit hoch gehen",
      tomorrow: "Morgen wieder treffen?",
      sometimes: "Wann wieder sehen?",
    };
    let decition1 = await ƒS.Menu.getInput(decitionAnswer, "decision");
    switch (decition1) {
      case decitionAnswer.upstairs:
        await dialogueUpstairs();
        showLoveMeter(50);
        await clearScene();
        ƒS.Sound.fade(sounds.love, 0, 0.5);
        showLoveMeter();
        return "ending";
      case decitionAnswer.tomorrow:
        await dialogueMeetTomorrow();
        showLoveMeter(50);
        await clearScene();
        ƒS.Sound.fade(sounds.love, 0, 0.5);
        return "swing";
      case decitionAnswer.sometimes:
        await dialogueWhenNextMeeting();
        showLoveMeter(50);
        await clearScene();
        ƒS.Sound.fade(sounds.love, 0, 0.5);
        return "swing";
    }
  }
  async function dialogueUpstairs() {
    await tell(characters.webster, 1_1_01);
    await newPose(characters.phobia, "angry");
    await tell(characters.phobia, 1_1_01);
    ƒS.Sound.play(sounds.suspense, 0.4);
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
    ƒS.Sound.play(sounds.suspense, 0.4);
    await newPose(characters.phobia, "demon");
    await tell(characters.phobia, 1_3_04);
    await newPose(characters.phobia, "happy");
    await tell(characters.phobia, 1_3_05);
    await tell(characters.webster, 1_3_04);
  }
}
