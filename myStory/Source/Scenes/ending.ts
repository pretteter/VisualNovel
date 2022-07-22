namespace myStory {
  export async function Ending(): ƒS.SceneReturn {
    currentActiveScene = "Ending";
    currentFemaleCoordinates = { x: 20, y: 85 };
    currentMaleCoordinates = { x: 75, y: 80 };
    ƒS.Sound.fade(sounds.loveAlternate, 0.3, 0.5, true);
    await changeLocation(locations.web, transitions.test);
    await newPose(characters.phobia, "normal");
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
    await newPose(characters.webster, "happy");
    await tell(characters.webster, 2);
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 2);

    switch (dataForSave.score) {
      case 0:
      case 25:
        await lowScore();
        await clearScene();
        showCredits();
        return "emptyScene";
      case 50:
      case 75:
        await midScore();
        ƒS.Sound.fade(sounds.funnyMeme, 0, 0.5);
        await clearScene();
        return "final";
      case 100:
        await highScore();
        ƒS.Sound.fade(sounds.dramatic, 0, 0.5);
        await clearScene();
        return "returnAfterEnding";
    }

    await clearScene();
  }
  async function lowScore() {
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 1_1_01);
    await tell(characters.phobia, 1_1_02);
    await newPose(characters.webster, "sad");
    await tell(characters.webster, 1_1_01);
    await tell(characters.phobia, 1_1_03);
    await tell(characters.webster, 1_1_02);
    await tell(characters.webster, 1_1_03);
    await newPose(characters.webster, "normal");
    await tell(characters.webster, 1_1_04);
    await tell(characters.phobia, 1_1_04);
    await newPose(characters.webster, "sad");
    await tell(characters.webster, 1_1_04);
    await newPose(characters.webster, "normal");
    await tell(characters.webster, 1_1_05);
    await tell(characters.phobia, 1_1_05);
    ƒS.Sound.fade(sounds.loveAlternate, 0, 0.5);
    await clearScene();
    ƒS.Sound.fade(sounds.endTheme, 0.3, 0.5);
    await changeLocation(locations.flower, transitions.test);
    await newPose(characters.webster, "sad");
    await tell(characters.webster, 1_1_07);
    await tell(characters.webster, 1_1_08);
    await tell(characters.webster, 1_1_09);
  }

  async function midScore() {
    await tell(characters.phobia, 1_2_01);
    await tell(characters.webster, 1_2_01);
    await tell(characters.phobia, 1_2_02);
    await tell(characters.phobia, 1_2_03);
    await tell(characters.webster, 1_2_02);
    await tell(characters.webster, 1_2_03);
    await tell(characters.phobia, 1_2_04);
    await newPose(characters.webster, "happy");
    await tell(characters.webster, 1_2_04);

    await moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.happy,
      {
        x: 50,
        y: 80,
      },
      0.025,
      0
    );
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 50,
        y: 80,
      },
      0.025,
      0
    );
    await newPose(characters.phobia, "happy");
    await tell(characters.webster, 1_2_05);
    await tell(characters.phobia, 1_2_05);
    await tell(characters.webster, 1_2_06);
    await tell(characters.phobia, 1_2_06);
    await tell(characters.webster, 1_2_07);
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 1_2_07);
    await newPose(characters.phobia, "demon");
    ƒS.Sound.fade(sounds.loveAlternate, 0, 0.5);
    ƒS.Sound.fade(sounds.dramatic, 0.4, 0, true);
    bothRun({ x: 130, y: 80 });
    await tell(characters.webster, 1_2_08);
    await tell(characters.phobia, 1_2_08);
    ƒS.Sound.play(sounds.bloodHit, 0.5);
    ƒS.Sound.play(sounds.bloodSpill, 0.5);
    ƒS.Sound.fade(sounds.dramatic, 0, 4, true);
    ƒS.Sound.fade(sounds.funnyMeme, 0.3, 4, true);
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
    await tell(characters.phobia, 1_2_09);
    await tell(characters.phobia, 1_2_10);
    await tell(characters.phobia, 1_2_11);
  }

  async function highScore() {
    await tell(characters.phobia, 1_3_01);
    await tell(characters.webster, 1_3_01);
    await tell(characters.phobia, 1_3_02);
    await tell(characters.phobia, 1_3_03);
    await tell(characters.webster, 1_3_02);
    await tell(characters.webster, 1_3_03);
    await tell(characters.phobia, 1_3_04);
    await newPose(characters.webster, "happy");
    await tell(characters.webster, 1_3_04);

    await moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.happy,
      {
        x: 50,
        y: 80,
      },
      0.025,
      0
    );
    await moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.happy,
      {
        x: 50,
        y: 80,
      },
      0.025,
      0
    );

    // await newPose(characters.phobia, "happy");
    await tell(characters.webster, 1_3_05);
    await tell(characters.phobia, 1_3_05);
    await tell(characters.webster, 1_3_06);
    await tell(characters.phobia, 1_3_06);
    await tell(characters.webster, 1_3_07);
    await newPose(characters.webster, "normal");
    await tell(characters.phobia, 1_3_07);
    await newPose(characters.phobia, "demon");
    ƒS.Sound.fade(sounds.loveAlternate, 0, 0.5);
    ƒS.Sound.fade(sounds.dramatic, 0.4, 0, true);
    bothRun({ x: 130, y: 80 });
    await tell(characters.webster, 1_3_08);
    await tell(characters.phobia, 1_3_08);

    bothRun({ x: -40, y: 80 });
    await tell(characters.webster, 1_3_09);
    await tell(characters.phobia, 1_3_09);
    await newPose(characters.phobia, "angry");
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
    await tell(characters.phobia, 1_3_10);
    await tell(characters.phobia, 1_3_11);
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 1_3_12);
  }

  async function bothRun(positionToMove: { x: number; y: number }) {
    moveCharacterToLocaton(
      characters.webster,
      characters.webster.pose.scared,
      {
        x: positionToMove.x,
        y: positionToMove.y,
      },
      0.0025,
      0
    );
    moveCharacterToLocaton(
      characters.phobia,
      characters.phobia.pose.demon,
      {
        x: positionToMove.x,
        y: positionToMove.y,
      },
      0.0125,
      0
    );
  }
}
