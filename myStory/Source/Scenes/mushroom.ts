namespace myStory {
  export async function Mushroom(): ƒS.SceneReturn {
    currentActiveScene = "Mushroom";
    currentFemaleCoordinates = { x: 20, y: 85 };
    currentMaleCoordinates = { x: 75, y: 80 };
    ƒS.Sound.fade(sounds.wakeup, 0.3, 2, true);
    await changeLocation(locations.mushroom, transitions.normal);
    await newPose(characters.webster, "normal");
    await newPose(characters.phobia, "normal");
    await tell(characters.webster, 1);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 2);
    await tell(characters.phobia, 2);
    await tell(characters.webster, 3);
    await tell(characters.phobia, 3);
    await newPose(characters.webster, "happy");
    await tell(characters.phobia, 4);
    
    ƒS.Sound.play(sounds.moments_later, 0.5);
    await newPose(characters.phobia, "sad");
    await tell(characters.phobia, 5);
    ƒS.Sound.fade(sounds.wakeup, 0, 0.5);
    ƒS.Sound.fade(sounds.drugs, 0.3, 5, true);
    await newPose(characters.phobia, "scared");
    await tell(characters.phobia, 6);
    await tell(characters.webster, 4);
    await tell(characters.webster, 5);
    await newPose(characters.phobia, "happy");
    await tell(characters.phobia, 7);
    await tell(characters.phobia, 8);

    let decitionAnswer = {
      holiday: "Auf einer Liege im Urlaub",
      city: "In einer Großstadt mit vielen geilen Karren",
    };

    let decition = await ƒS.Menu.getInput(decitionAnswer, "decision");

    switch (decition) {
      case decitionAnswer.city:
        await tell(characters.webster, 1_2_01);
        await clearScene();
        ƒS.Sound.fade(sounds.drugs, 0, 0.5);
        return "city";
      case decitionAnswer.holiday:
        await tell(characters.webster, 1_1_01);
        await clearScene();
        ƒS.Sound.fade(sounds.drugs, 0, 0.5);
        return "holiday";
    }
  }
}
