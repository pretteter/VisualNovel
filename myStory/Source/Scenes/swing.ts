namespace myStory {
  export async function Swing(): ƒS.SceneReturn {
    currentActiveScene = "Swing";
    await changeLocation(locations.swing, transitions.test);
    await tell(characters.phobia, 1);
    await tell(characters.webster, 1);
  }
}
