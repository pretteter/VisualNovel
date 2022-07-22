namespace myStory {
  export async function Swing(): ƒS.SceneReturn {
    currentActiveScene = "Swing";
    ƒS.Sound.fade(sounds.loveAlternate, 0.3, 3, true);
    await changeLocation(locations.swing, transitions.normal);
    currentMaleCoordinates = { x: 100, y: 80 };
    await newPose(characters.phobia, "normal");
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 75,
        y: 80,
      },
      0.0025,
      0
    );
    await tell(characters.webster, 1);
    await tell(characters.phobia, 1);
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 2);
    await tell(characters.webster, 2);
    await tell(characters.webster, 3);
    await newPose(characters.phobia, "happy");
    await tell(characters.phobia, 3);
    await newPose(characters.webster, "normal");
    await tell(characters.webster, 4);
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 4);
    await tell(characters.webster, 5);
    await tell(characters.webster, 6);
    await tell(characters.phobia, 5);
    await tell(characters.phobia, 6);

    await decition();
    await tell(characters.phobia, 7);
    await tell(characters.webster, 7);
    clearScene();
    dataForSave.score += 25;
    showLoveMeter();
  }

  async function decition() {
    let decitionAnswer = {
      no: "Nein",
      yes: "Ja",
    };
    let decition = await ƒS.Menu.getInput(decitionAnswer, "decision");
    switch (decition) {
      case decitionAnswer.no:
        await newPose(characters.webster, "scared");
        await tell(characters.webster, 1_1_01);
        await tell(characters.phobia, 1_1_01);
        await newPose(characters.webster, "normal");
      case decitionAnswer.yes:
        await newPose(characters.webster, "happy");
        await tell(characters.webster, 1_2_01);
        await tell(characters.phobia, 1_2_01);
        await newPose(characters.webster, "normal");
    }
  }
}
