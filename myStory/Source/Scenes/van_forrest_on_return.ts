namespace myStory {
  export async function VanForrestOnReturn(): ƒS.SceneReturn {
    currentActiveScene = "VanForrestOnReturn";
    await changeLocation(locations.minivan2, transitions.test);
  }
}
