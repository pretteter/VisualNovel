namespace myStory {
    export async function City(): ƒS.SceneReturn {
      currentActiveScene = "City";
      ƒS.Sound.fade(sounds.city, 0.3, 2, true);
  






      ƒS.Sound.fade(sounds.city, 0, 0.5);
      await clearScene();
    }
  }
  