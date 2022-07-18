namespace myStory {
  export async function Ending(): ƒS.SceneReturn {
    currentActiveScene = "Ending";
    await changeLocation(locations.web, transitions.test);
    
    
    
    await endOfScene();
  }
}
