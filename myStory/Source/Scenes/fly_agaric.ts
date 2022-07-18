namespace myStory {
    export async function FlyAgaric(): ƒS.SceneReturn {
      
      await changeLocation(locations.fly_agaric, transitions.test);
      
      
      ƒS.Speech.clear();
      await ƒS.Character.hideAll();
      await ƒS.update();
    }
  }
  