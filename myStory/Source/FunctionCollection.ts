namespace myStory {
  export async function moveCharacterToLocaton(
    character: typeof characters.maleSpider | typeof characters.femaleSpider,
    pose: typeof characters.maleSpider.pose.angry,
    locationToMove: { x: number; y: number },
    intervallSeconds: number,
    hideAfterReaching?: number
  ) {
    let x;
    let y;

    if (character.name === characters.maleSpider.name) {
      x = currentMaleCoordinates.x;
      y = currentMaleCoordinates.y;
    } else {
      x = currentFemaleCoordinates.x;
      y = currentFemaleCoordinates.y;
    }

    x > locationToMove.x ? (x -= 1) : "";
    x < locationToMove.x ? (x += 1) : "";
    y > locationToMove.y ? (y -= 1) : "";
    y < locationToMove.y ? (y += 1) : "";

    if (character.name === characters.maleSpider.name) {
      currentMaleCoordinates.x = x;
      currentMaleCoordinates.y = y;
    } else {
      currentFemaleCoordinates.x = x;
      currentFemaleCoordinates.y = y;
    }
    await ƒS.Character.hide(character);
    await ƒS.Character.show(character, pose, ƒS.positionPercent(x, y));
    await ƒS.update(intervallSeconds);

    if (
      x < locationToMove.x ||
      x > locationToMove.x ||
      y < locationToMove.y ||
      y > locationToMove.y
    ) {
      await moveCharacterToLocaton(
        character,
        pose,
        locationToMove,
        intervallSeconds,
        hideAfterReaching
      );
    } else if (hideAfterReaching) {
      await ƒS.Character.hide(character);
      await ƒS.update(hideAfterReaching);
    }
  }

  export async function newPose(
    character: typeof characters.maleSpider | typeof characters.femaleSpider,
    mood: "angry" | "sad" | "normal" | "scared" | "happy" | "demon",
    position?: { x: number; y: number },
    update?: number
  ) {
    const path = "character.pose." + mood.toString();
    const pose = eval(path);
    if (!position) {
      position = { x: undefined, y: undefined };
      if (character.name == characters.maleSpider.name) {
        position.x = currentMaleCoordinates.x;
        position.y = currentMaleCoordinates.y;
      } else {
        position.x = currentFemaleCoordinates.x;
        position.y = currentFemaleCoordinates.y;
      }
    }

    await ƒS.Character.hide(character);
    await ƒS.Character.show(
      character,
      pose,
      ƒS.positionPercent(position.x, position.y)
    );
    await ƒS.update(update ? update : 0);
  }

  export async function tell(
    character: typeof characters.maleSpider | typeof characters.femaleSpider,
    numberOfDialog: number
  ) {
    let path;
    let stringDialogue: string = "T000";

    if (numberOfDialog >= 10 && numberOfDialog < 100) {
      stringDialogue = "T00";
    }
    switch (character.name) {
      case characters.maleSpider.name: {
        path =
          "myStory.dialogues." +
          currentActiveScene +
          ".maleSpider." +
          stringDialogue +
          "" +
          numberOfDialog.toString();
        break;
      }
      case characters.femaleSpider.name: {
        path =
          "myStory.dialogues." +
          currentActiveScene +
          ".femaleSpider.T000" +
          numberOfDialog.toString();
        break;
      }
    }
    // dialogues.Intro.maleSpider.T0001;

    const pose = eval(path);

    await ƒS.Speech.tell(character, pose);
  }
}
