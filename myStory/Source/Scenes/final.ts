namespace myStory {
  export async function Final(): ƒS.SceneReturn {
    currentActiveScene = "Final";

    await highScore();
  }

  async function highScore() {
    ƒS.Sound.fade(sounds.endTheme, 0.3, 0.5, true);
    await changeLocation(locations.graveyard, transitions.puzzle);
    await newPose(characters.phobia, "normal", 0, { x: 15, y: 90 });
    await tell(characters.phobia, 1);
    await newPose(characters.phobia, "sad");
    await tell(characters.phobia, 2);
    await newPose(characters.phobia, "normal");
    await tell(characters.phobia, 3);
    await clearScene();
    return "emptyScene";
  }
}
