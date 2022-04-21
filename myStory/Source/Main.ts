namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");



  // transition
  export let transitions = {
    puzzle: {
      duration: 1,
      alpha: "../Images/FreeTransitions/JigsawThemedTransitions/puzzle.png",
      edge: 1
    }
  }

  export let sounds = {
    // theme
    nightclub: "Pfad",

    // soundeffects
    click: "Pfad"
  }

  export let locations = {
    bensch: {
      name: "Nightpark",
      background: "Pfad",
    }
  }

  export let characters = {
    narrator: {
      name: ""
    },
    aisaka: {
      name: "Aisaka",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Pfad",
        happy: "Pfad"
      }
    }
  }

  export let dataForSave = {
    nameProtagonist: ""
  }


  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Scene, name: "Scene" }
    ];

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}