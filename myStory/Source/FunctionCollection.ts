namespace myStory {
  export async function moveCharacterToLocaton(
    character:
      | typeof characters.webster
      | typeof characters.phobia
      | typeof characters.mrobeer,
    pose: typeof characters.webster.pose.angry,
    locationToMove: { x: number; y: number },
    intervallSeconds: number,
    hideAfterReaching?: number
  ) {
    let x;
    let y;

    if (character.name === characters.webster.name) {
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

    if (character.name === characters.webster.name) {
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
    character:
      | typeof characters.webster
      | typeof characters.phobia
      | typeof characters.mrobeer,
    mood: "angry" | "sad" | "normal" | "scared" | "happy" | "demon",
    update?: number,
    position?: { x: number; y: number }
  ) {
    const path = "character.pose." + mood.toString();
    const pose = eval(path);
    if (!position) {
      position = { x: undefined, y: undefined };
      if (character.name == characters.webster.name) {
        position.x = currentMaleCoordinates.x;
        position.y = currentMaleCoordinates.y;
      } else {
        position.x = currentFemaleCoordinates.x;
        position.y = currentFemaleCoordinates.y;
      }
    } else {
      if (character.name == characters.webster.name) {
        currentMaleCoordinates.x = position.x;
        currentMaleCoordinates.y = position.y;
      } else {
        currentFemaleCoordinates.x = position.x;
        currentFemaleCoordinates.y = position.y;
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
    character:
      | typeof characters.webster
      | typeof characters.phobia
      | typeof characters.mrobeer,
    numberOfDialog: number | string
  ) {
    let path;
    if (typeof numberOfDialog === "number") {
      switch (character.name) {
        case characters.webster.name: {
          path =
            "myStory.dialogues." +
            currentActiveScene +
            ".webster[" +
            numberOfDialog.toString() +
            "]";
          break;
        }
        case characters.phobia.name: {
          path =
            "myStory.dialogues." +
            currentActiveScene +
            ".femaleSpider[" +
            numberOfDialog.toString() +
            "]";
          break;
        }
        case characters.mrobeer.name: {
          path =
            "myStory.dialogues." +
            currentActiveScene +
            ".obee[" +
            numberOfDialog.toString() +
            "]";
          break;
        }
      }
      const content = eval(path);
      await ƒS.Speech.tell(character, content);
    } else if (typeof numberOfDialog === "string") {
      await ƒS.Speech.tell(character, numberOfDialog);
    }
  }

  export async function changeLocation(
    location: typeof locations.web,
    transition: typeof transitions.noContent
  ) {
    await ƒS.Location.show(location);
    await ƒS.update(transition.duration, transition.alpha, transition.edge);
    changeColorTextbox();

    let element = Array.from(
      document.getElementsByTagName("speech") as HTMLCollectionOf<HTMLElement>
    )[0];
    element.style.display = "";
  }

  export async function clearScene() {
    ƒS.Speech.clear();
    await ƒS.Character.hideAll();
    await ƒS.update();
  }

  export function hideLoveMeter() {
    const elements = Array.from(document.getElementsByClassName("circle"));
    for (let i: number = 0; i < elements.length; i++) {
      const slide = elements[i] as HTMLElement;
      slide.style.display = "none";
    }
  }

  export function showLoveMeter(value?: 0 | 25 | 50 | 75 | 100) {
    hideLoveMeter();
    const elements = Array.from(document.getElementsByClassName("circle"));
    for (let i: number = 0; i < elements.length; i++) {
      const slide = elements[i] as HTMLElement;
      value
        ? (slide.className = "circle per-" + value.toString()) &&
          (dataForSave.score = value)
        : (slide.className = "circle per-" + dataForSave.score);

      slide.style.display = "";
    }
  }
}
