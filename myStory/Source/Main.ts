namespace myStory {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let currentMaleCoordinates: { x: number; y: number } = {
    x: 75,
    y: 80,
  };
  export let currentFemaleCoordinates: { x: number; y: number } = {
    x: 25,
    y: 20,
  };
  export let currentActiveScene: string;
  // transition
  export let transitions = {
    noContent: {
      duration: 0,
      alpha: "",
      edge: 0,
    },
    puzzle: {
      duration: 1,
      alpha: "Images/FreeTransitions/JigsawThemedTransitions/puzzle.png",
      edge: 1,
    },
    test: {
      duration: 1,
      alpha: "Images/FreeTransitions/2.jpg",
      edge: 1,
    },
  };

  export let sounds = {
    // theme
    nightclub: "Pfad",

    // soundeffects
    click: "Pfad",
  };

  export let locations = {
    web: {
      name: "web",
      background: "./Images/Backgrounds/spiderweb.jpg",
    },
    graveyard: {
      name: "graveyard",
      background: "Images/Backgrounds/graveyard.jpg",
    },
    restaurant_underTable: {
      name: "restaurant_undertable",
      background:
        "Images/Backgrounds/restaurant_unter_table-studio_cartoon.jpg",
    },
    minivan1: {
      name: "minivan1",
      background: "Images/Backgrounds/minivan1.jpg",
    },
    minivan2: {
      name: "minivan2",
      background: "Images/Backgrounds/minivan2.jpg",
    },
    fly_agaric: {
      name: "fly agaric",
      background: "Images/Backgrounds/forest_mushroom-studio_cartoon.jpg",
    },
  };

  export let items = {
    item1: {
      name: "Stift_1",
      description: "Ein Stift",
      image: "../Images/Items/Pencils/pencil-1.png",
      static: true,
    },
    item2: {
      name: "Stift_2",
      description: "Ein Stift",
      image: "../Images/Items/Pencils/pencil-2.png",
    },
    item3: {
      name: "Stift_3",
      description: "Ein Stift",
      image: "../Images/Items/Pencils/pencil-3.png",
    },
    item4: {
      name: "Stift_4",
      description: "Ein Stift",
      image: "../Images/Items/Pencils/pencil-4.png",
    },
    item5: {
      name: "Stift_5",
      description: "Ein Stift",
      image: "../Images/Items/Pencils/pencil-5.png",
    },
    item6: {
      name: "Stift_6",
      description: "Ein Stift",
      image: "../Images/Items/Pencils/pencil-6.png",
    },
  };

  export let characters = {
    mrobeer: {
      name: "Mr. Obeer",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "Images/Characters/bee.png",
      },
    },
    webster: {
      name: "Webster",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/maleSpider_angry.png",
        happy: "Images/Characters/maleSpider_happy.png",
        sad: "Images/Characters/maleSpider_sad.png",
        normal: "Images/Characters/maleSpider.png",
        scared: "Images/Characters/maleSpider_scared.png",
      },
    },
    phobia: {
      name: "Phobia",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        angry: "Images/Characters/femaleSpider_angry.png",
        happy: "Images/Characters/femaleSpider_happy.png",
        sad: "Images/Characters/femaleSpider_sad.png",
        normal: "Images/Characters/femaleSpider.png",
        scared: "Images/Characters/femaleSpider_scared.png",
        demon: "Images/Characters/femaleSpider_demon.png",
      },
    },
  };

  export let dataForSave = {
    nameProtagonist: "",
    score: 0,
  };

  // MENÜ

  let inGameMenuButtons = {
    save: "Save",
    load: "Laden",
    close: "Schließen",
    credits: "Credits",
  };

  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true;
  let inventoryOpen: boolean = false;

  async function buttonFunctions(option: string): Promise<void> {
    switch (option) {
      case inGameMenuButtons.save:
        await ƒS.Progress.save();
        break;
      case inGameMenuButtons.load:
        await ƒS.Progress.load();
        break;
      case inGameMenuButtons.close:
        gameMenu.close();
        menuIsOpen = false;
        break;
      case inGameMenuButtons.credits:
        showCredits();
        break;
    }
  }

  //Shortcuts for Menu
  document.addEventListener("keydown", hndKeyPress);
  async function hndKeyPress(event: KeyboardEvent): Promise<void> {
    switch (event.code) {
      case ƒ.KEYBOARD_CODE.F8:
        console.log("Save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.I:
        console.log("Inventory");
        if (inventoryOpen) {
          ƒS.Inventory.close();
          inventoryOpen = false;
        } else {
          ƒS.Inventory.open();
          inventoryOpen = true;
        }
        // inventoryOpen = !inventoryOpen
        break;
      case ƒ.KEYBOARD_CODE.M:
        console.log("Menu");
        if (menuIsOpen) {
          console.log("Close");
          gameMenu.close();
          menuIsOpen = false;
        } else {
          console.log("Open");
          gameMenu.open();
          menuIsOpen = true;
        }
        break;
    }
  }

  window.addEventListener("load", start);
  function start(_event: Event): void {
    gameMenu = ƒS.Menu.create(inGameMenuButtons, buttonFunctions, "gameMenu");
    buttonFunctions(inGameMenuButtons.close);

    let element = Array.from(
      document.getElementsByTagName("speech") as HTMLCollectionOf<HTMLElement>
    )[0];
    element.style.display = "none";

    let scenes: ƒS.Scenes = [
      { id: "intro", scene: Intro, name: "Intro", next: "vanForrest" },
      {
        id: "vanForrest",
        scene: VanForrest,
        name: "VanForrest",
        next: "toRestaurant",
      },
      {
        id: "toRestaurant",
        scene: ToRestaurant,
        name: "toRestaurant",
        next: "restaurant",
      },
      {
        id: "restaurant",
        scene: Restaurant,
        name: "Restaurant_under_Table",
        next: "afterRestaurant",
      },
      { id: "afterRestaurant", scene: AfterRestaurant, name: "VanStreet_back" },
      { id: "ending", scene: Ending, name: "Ending" },
      { id: "mushroom", scene: FlyAgaric, name: "Mushroom" },
    ];

    // start the sequence
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    ƒS.Progress.go(scenes);
  }

  //   let uiElement: HTMLElement = document.querySelector("[type=interface]");
  //   dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}
