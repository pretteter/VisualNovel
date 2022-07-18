namespace myStory {
  export async function Ending(): ƒS.SceneReturn {
    currentActiveScene = "Ending";
    await changeLocation(locations.web, transitions.test);
    
    
    
    ƒS.Speech.clear();
    await ƒS.Character.hideAll();
    await ƒS.update();
  }
}
