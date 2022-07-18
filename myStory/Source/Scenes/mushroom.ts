namespace myStory {
  export async function Mushroom(): ƒS.SceneReturn {
    currentActiveScene = "Mushroom";
    currentFemaleCoordinates = { x: 20, y: 85 };
    currentMaleCoordinates = { x: 75, y: 80 };

    await changeLocation(locations.mushroom, transitions.test);
    await tell(characters.webster, 1);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 2);
    await tell(characters.phobia, 2);
    await tell(characters.webster, 3);
    await tell(characters.phobia, 3);
    await newPose(characters.webster, "happy");
    await tell(characters.phobia, 4);
    await tell(characters.phobia, 5);
    await tell(characters.phobia, 6);
    await tell(characters.webster, 4);
    await tell(characters.webster, 5);
    await newPose(characters.phobia, "happy");
    await tell(characters.phobia, 7);
    await tell(characters.phobia, 8);

    let decitionAnswer = {
      holliday: "Auf einer Liege im Urlaub",
      city: "In einer Großstadt mit vielen coolen Autos",
    };

    let decition = await ƒS.Menu.getInput(decitionAnswer, "decision");

    switch (decition) {
      case decitionAnswer.city:
        await tell(characters.webster, 1_1_01);
        await endOfScene("holliday");
        break;
      case decitionAnswer.holliday:
        await tell(characters.webster, 1_2_01);
        await endOfScene("city");
        break;
    }
  }
}
