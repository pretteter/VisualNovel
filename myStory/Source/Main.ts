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
      duration: 3,
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
    wakeup: "Sounds/Sad_and_Sweet/wakeup.mp3",
    explore: "Sounds/Humorus_lighthearted/exploring.mp3",
    city: "Sounds/Busy City Street.mp3",
    holiday: "Sounds/- 13 - The Lost Island.mp3",
    restaurant_people: "Sounds/Coffee Shop.mp3",
    restaurant_jazz: "Sounds/jazz trio.mp3",
    car_interior: "Sounds/Car Interior.mp3",
    dramatic: "Sounds/Army of Death (looped).wav",
    love: "Sounds/Sad_and_Sweet/love and secrets.mp3",
    drugs: "Sounds/17-Dark Fantasy Studio- Joke.mp3",
    funnyMeme: "Sounds/Humorus_lighthearted/the_funny_mime.mp3",
    endTheme: "Sounds/Medieval Theme.wav",
    loveAlternate: "Sounds/23-Dark Fantasy Studio- Simple romance.mp3",

    // soundeffects
    drums: "Sounds/drum_beats_and_loops/drumbeat.wav",
    car_door_open: "Sounds/Effects/truck_door_open.wav",
    car_door_close: "Sounds/Effects/Car door.wav",
    moments_later:
      "Sounds/Effects/SPONGEBOB TIME CARDS - A FEW MOMENTS LATER.mp3",
    eternity_later:
      "Sounds/Effects/SPONGEBOB TIME CARDS - ONE ETERNITY LATER.mp3",
    suspense: "Sounds/Effects/Suspense.mp3",
    bloodSpill: "Sounds/Effects/blood_guts_spill.wav",
    bloodHit: "Sounds/Effects/Blood_Hit.wav",
    scaryShort: "Sounds/Effects/Suspense short.mp3",
    turnTable: "Sounds/Effects/Turntable Scratch.mp3",
  };

  export let locations = {
    web: {
      name: "web",
      background: "Images/Backgrounds/spiderweb.jpg",
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
    minivan_city: {
      name: "minivan1",
      background: "Images/Backgrounds/minivan1.jpg",
    },
    minivan_forrest: {
      name: "minivan2",
      background: "Images/Backgrounds/minivan2.jpg",
    },
    mushroom: {
      name: "fly agaric",
      background: "Images/Backgrounds/forest_mushroom-studio_cartoon.jpg",
    },
    swing: {
      name: "swing",
      background: "Images/Backgrounds/schaukel.jpg",
    },
    city: {
      name: "city",
      background: "Images/Backgrounds/city.jpg",
    },
    holiday: {
      name: "holiday",
      background: "Images/Backgrounds/holiday.jpg",
    },
    flower: {
      name: "flower",
      background: "/Images/Backgrounds/flower.jpg",
    },
  };

  // export let items = {
  //   item1: {
  //     name: "Stift_1",
  //     description: "Ein Stift",
  //     image: "../Images/Items/Pencils/pencil-1.png",
  //     static: true,
  //   },
  //   item2: {
  //     name: "Stift_2",
  //     description: "Ein Stift",
  //     image: "../Images/Items/Pencils/pencil-2.png",
  //   },
  //   item3: {
  //     name: "Stift_3",
  //     description: "Ein Stift",
  //     image: "../Images/Items/Pencils/pencil-3.png",
  //   },
  //   item4: {
  //     name: "Stift_4",
  //     description: "Ein Stift",
  //     image: "../Images/Items/Pencils/pencil-4.png",
  //   },
  //   item5: {
  //     name: "Stift_5",
  //     description: "Ein Stift",
  //     image: "../Images/Items/Pencils/pencil-5.png",
  //   },
  //   item6: {
  //     name: "Stift_6",
  //     description: "Ein Stift",
  //     image: "../Images/Items/Pencils/pencil-6.png",
  //   },
  // };

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
    score: 0,
  };

  // MENÜ

  let inGameMenuButtons = {
    save: "Save",
    load: "Laden",
    credits: "Credits",
    showLoveMeter: "Liebesstand?",
    close: "Schließen",
  };

  let gameMenu: ƒS.Menu;
  let menuIsOpen: boolean = true;
  let isLoveMeterShowed: boolean = false;
  // let inventoryOpen: boolean = false;

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
      case inGameMenuButtons.showLoveMeter:
        if (isLoveMeterShowed) {
          hideLoveMeter();
          isLoveMeterShowed = false;
        } else {
          showLoveMeter();
          isLoveMeterShowed = true;
        }
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
      // case ƒ.KEYBOARD_CODE.I:
      //   console.log("Inventory");
      //   if (inventoryOpen) {
      //     ƒS.Inventory.close();
      //     inventoryOpen = false;
      //   } else {
      //     ƒS.Inventory.open();
      //     inventoryOpen = true;
      //   }
      //   // inventoryOpen = !inventoryOpen
      //   break;
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
    hideLoveMeter();
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
      {
        id: "vanForrestOnReturn",
        scene: VanForrestOnReturn,
        name: "Van in front of Home",
      },
      { id: "mushroom", scene: Mushroom, name: "Mushroom" },
      { id: "city", scene: City, name: "City", next: "swing" },
      { id: "holiday", scene: Holiday, name: "Holiday", next: "swing" },
      { id: "swing", scene: Swing, name: "Ending", next: "ending" },

      {
        id: "returnAfterEnding",
        scene: ReturnAfterEnding,
        name: "ReturnAfterEnding",
        next: "final",
      },
      { id: "final", scene: Final, name: "Final" },
      { id: "ending", scene: Ending, name: "Ending" },
      { id: "emptyScene", scene: EmptyScene, name: "EmptyScene" },
    ];

    // start the sequence
    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
    ƒS.Progress.go(scenes);
  }

  //   let uiElement: HTMLElement = document.querySelector("[type=interface]");
  //   dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
}
