namespace Template {
  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    let text = {
      Narrator: {
        T0001: "",
        T0002: ""
      },
      Protagonist: {
        T0001: ""
      }
    }


    await ƒS.Speech.tell(characters.aisaka, text.Protagonist.T0001);





  }
}