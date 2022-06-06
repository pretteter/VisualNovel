"use strict";
var myStory;
(function (myStory) {
    myStory.dialogues = {
        Intro: {
            Narrator: {
                T0001: "",
                T0002: "",
            },
            maleSpider: {
                T0001: "Ich habe Hunger verdammt",
                T0002: "wo bleiben denn all die saftigen Snacks?",
                T0003: "Jaja... Ich komme ja schon",
                T0004: "So... Einmal das weg und jetzt das.",
                T0005: "Einmal Freiheit für die Dame",
                T0006: "Hmm... Du könntest ja zum essen bleiben. Nur kommt heut nix.",
                T0007: "Vielleicht spinne ich nicht genug oder das Essen ist neuerdings schlauer als ich",
                T0008: "Das klingt großartig. Ansonsten sterbe ich noch vor Hunger.",
                T0009: "Ich kenne da ein Lokal ein bisschen weiter weg von hier. Ich war da schon ein paar mal. Hättest du da Lust zu?",
                T0010: "Leider nein. Aber die Entfernung wäre kein Problem. Ich habe einen Van",
                T0011: "aber gerne. Komm mit!",
            },
            femaleSpider: {
                T0001: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                T0002: "Scheise.... Ich klebe fest",
                T0003: "HIIIIIILLLLLLFFFFEEEEEEEE",
                T0004: "Daaaanke dir. Du bist ein Schatz",
                T0005: "Wie kann ich mich nur bei dir revangieren?",
                T0006: "Wir könnten ja essen gehen, wenn du möchtest",
                T0007: "Gerne. Nur möchte ich nicht so weit laufen. Gibts hier nichts in der Nähe?",
                T0008: "Du hast einen WAS?",
                T0009: "Zeig her",
            },
        },
        Scene1: {
            Narrator: {
                T0001: "",
                T0002: "",
            },
            maleSpider: {
                T0001: "Moin",
                T0002: "Hi",
            },
            femaleSpider: {
                T0001: "Moin",
                T0002: "Hi",
            },
        },
    };
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    function changeColorTextbox() {
        let element = Array.from(document.getElementsByTagName("speech"))[0];
        const rgb = getAverageRGB();
        element.style.backgroundColor =
            "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + 0.9 + ")";
        changeColorOfName(rgb.r, rgb.g, rgb.b);
        changeColorOfContent(rgb.r, rgb.g, rgb.b);
    }
    myStory.changeColorTextbox = changeColorTextbox;
})(myStory || (myStory = {}));
function changeColorOfContent(r, g, b) {
    let element = Array.from(document.getElementsByTagName("content"))[0];
    const hsv = RGBtoHSV(r, g, b);
    hsv.v = 1;
    if (hsv.h * 2 > 1) {
        hsv.h *= 0.5;
    }
    else {
        hsv.h *= 2;
    }
    const rgb = HSVtoRGB(hsv.h, hsv.s, hsv.v);
    element.style.color = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}
function changeColorOfName(r, g, b) {
    let element = Array.from(document.getElementsByTagName("name"))[0];
    const hsv = RGBtoHSV(r, g, b);
    hsv.v = 1;
    const rgb = HSVtoRGB(hsv.h, hsv.s, hsv.v);
    element.style.color = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}
function getAverageRGB() {
    const imgEl = Array.from(document.getElementsByTagName("canvas"))[0];
    const blockSize = 5; // only visit every 5 pixels
    let defaultRGB = { r: 0, g: 0, b: 0 };
    const canvas = document.createElement("canvas");
    const context = canvas.getContext && canvas.getContext("2d");
    let data;
    let width;
    let height;
    let i = -4;
    let length;
    let rgb = { r: 0, g: 0, b: 0 };
    let count = 0;
    if (!context) {
        return defaultRGB;
    }
    height = canvas.height = imgEl.offsetHeight;
    width = canvas.width = imgEl.offsetWidth;
    context.drawImage(imgEl, 0, 0);
    try {
        data = context.getImageData(0, 0, width, height);
    }
    catch (e) {
        alert("x");
        return defaultRGB;
    }
    length = data.data.length;
    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);
    return rgb;
}
function RGBtoHSV(r, g, b) {
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    let h;
    const s = max === 0 ? 0 : d / max;
    const v = max / 255;
    switch (max) {
        case min:
            h = 0;
            break;
        case r:
            h = g - b + d * (g < b ? 6 : 0);
            h /= 6 * d;
            break;
        case g:
            h = b - r + d * 2;
            h /= 6 * d;
            break;
        case b:
            h = r - g + d * 4;
            h /= 6 * d;
            break;
    }
    return {
        h: h,
        s: s,
        v: v,
    };
}
function HSVtoRGB(h, s, v) {
    let r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            (r = v), (g = t), (b = p);
            break;
        case 1:
            (r = q), (g = v), (b = p);
            break;
        case 2:
            (r = p), (g = v), (b = t);
            break;
        case 3:
            (r = p), (g = q), (b = v);
            break;
        case 4:
            (r = t), (g = p), (b = v);
            break;
        case 5:
            (r = v), (g = p), (b = q);
            break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255),
    };
}
var myStory;
(function (myStory) {
    async function moveCharacterToLocaton(character, pose, locationToMove, intervallSeconds, hideAfterReaching) {
        let x;
        let y;
        if (character.name === myStory.characters.maleSpider.name) {
            x = myStory.currentMaleCoordinates.x;
            y = myStory.currentMaleCoordinates.y;
        }
        else {
            x = myStory.currentFemaleCoordinates.x;
            y = myStory.currentFemaleCoordinates.y;
        }
        x > locationToMove.x ? (x -= 1) : "";
        x < locationToMove.x ? (x += 1) : "";
        y > locationToMove.y ? (y -= 1) : "";
        y < locationToMove.y ? (y += 1) : "";
        if (character.name === myStory.characters.maleSpider.name) {
            myStory.currentMaleCoordinates.x = x;
            myStory.currentMaleCoordinates.y = y;
        }
        else {
            myStory.currentFemaleCoordinates.x = x;
            myStory.currentFemaleCoordinates.y = y;
        }
        await myStory.ƒS.Character.hide(character);
        await myStory.ƒS.Character.show(character, pose, myStory.ƒS.positionPercent(x, y));
        await myStory.ƒS.update(intervallSeconds);
        if (x < locationToMove.x ||
            x > locationToMove.x ||
            y < locationToMove.y ||
            y > locationToMove.y) {
            await moveCharacterToLocaton(character, pose, locationToMove, intervallSeconds, hideAfterReaching);
        }
        else if (hideAfterReaching) {
            await myStory.ƒS.Character.hide(character);
            await myStory.ƒS.update(hideAfterReaching);
        }
    }
    myStory.moveCharacterToLocaton = moveCharacterToLocaton;
    async function newPose(character, mood, position, update) {
        const path = "character.pose." + mood.toString();
        const pose = eval(path);
        if (!position) {
            position = { x: undefined, y: undefined };
            if (character.name == myStory.characters.maleSpider.name) {
                position.x = myStory.currentMaleCoordinates.x;
                position.y = myStory.currentMaleCoordinates.y;
            }
            else {
                position.x = myStory.currentFemaleCoordinates.x;
                position.y = myStory.currentFemaleCoordinates.y;
            }
        }
        await myStory.ƒS.Character.hide(character);
        await myStory.ƒS.Character.show(character, pose, myStory.ƒS.positionPercent(position.x, position.y));
        await myStory.ƒS.update(update ? update : 0);
    }
    myStory.newPose = newPose;
    async function tell(character, numberOfDialog) {
        let path;
        let stringDialogue = "T000";
        if (numberOfDialog >= 10 && numberOfDialog < 100) {
            stringDialogue = "T00";
        }
        switch (character.name) {
            case myStory.characters.maleSpider.name: {
                path =
                    "myStory.dialogues." +
                        myStory.currentActiveScene +
                        ".maleSpider." +
                        stringDialogue +
                        "" +
                        numberOfDialog.toString();
                break;
            }
            case myStory.characters.femaleSpider.name: {
                path =
                    "myStory.dialogues." +
                        myStory.currentActiveScene +
                        ".femaleSpider.T000" +
                        numberOfDialog.toString();
                break;
            }
        }
        // dialogues.Intro.maleSpider.T0001;
        const pose = eval(path);
        await myStory.ƒS.Speech.tell(character, pose);
    }
    myStory.tell = tell;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    myStory.ƒ = FudgeCore;
    myStory.ƒS = FudgeStory;
    myStory.currentMaleCoordinates = {
        x: 75,
        y: 80,
    };
    myStory.currentFemaleCoordinates = {
        x: 25,
        y: 20,
    };
    // transition
    myStory.transitions = {
        noContent: {
            duration: 0,
            alpha: "",
            edge: 0,
        },
        puzzle: {
            duration: 1,
            alpha: "/Images/FreeTransitions/JigsawThemedTransitions/puzzle.png",
            edge: 1,
        },
        test: {
            duration: 1,
            alpha: "/Images/FreeTransitions/2.jpg",
            edge: 1,
        },
    };
    myStory.sounds = {
        // theme
        nightclub: "Pfad",
        // soundeffects
        click: "Pfad",
    };
    myStory.locations = {
        web: {
            name: "web",
            background: "/Images/Backgrounds/spiderweb.jpg",
        },
        graveyard: {
            name: "graveyard",
            background: "/Images/Backgrounds/graveyard.jpg",
        },
        restaurant_onTable: {
            name: "graveyard",
            background: "/Images/Backgrounds/restaurant_onTable.jpg",
        },
        minivan1: {
            name: "minivan1",
            background: "/Images/Backgrounds/minivan1.jpg",
        },
        minivan2: {
            name: "minivan2",
            background: "/Images/Backgrounds/minivan2.jpg",
        },
    };
    myStory.items = {
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
    myStory.characters = {
        narrator: {
            name: "",
        },
        maleSpider: {
            name: "Male",
            origin: myStory.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "/Images/Characters/maleSpider_angry.png",
                happy: "/Images/Characters/maleSpider_happy.png",
                sad: "/Images/Characters/maleSpider_sad.png",
                normal: "/Images/Characters/maleSpider.png",
                scared: "/Images/Characters/maleSpider_scared.png",
            },
        },
        femaleSpider: {
            name: "Female",
            origin: myStory.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "/Images/Characters/femaleSpider_angry.png",
                happy: "/Images/Characters/femaleSpider_happy.png",
                sad: "/Images/Characters/femaleSpider_sad.png",
                normal: "/Images/Characters/femaleSpider.png",
                scared: "/Images/Characters/femaleSpider_scared.png",
                demon: "/Images/Characters/femaleSpider_demon.png",
            },
        },
    };
    myStory.dataForSave = {
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
    let gameMenu;
    let menuIsOpen = true;
    let inventoryOpen = false;
    function showCredits() {
        myStory.ƒS.Text.setClass("Moin");
        myStory.ƒS.Text.print("Muuuhhhhh");
    }
    myStory.showCredits = showCredits;
    async function buttonFunctions(option) {
        switch (option) {
            case inGameMenuButtons.save:
                await myStory.ƒS.Progress.save();
                break;
            case inGameMenuButtons.load:
                await myStory.ƒS.Progress.load();
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
    async function changeLocation(location, transition) {
        await myStory.ƒS.Location.show(location);
        await myStory.ƒS.update(transition.duration, transition.alpha, transition.edge);
        myStory.changeColorTextbox();
        let element = Array.from(document.getElementsByTagName("speech"))[0];
        element.style.display = "";
    }
    myStory.changeLocation = changeLocation;
    //Shortcuts for Menu
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(event) {
        switch (event.code) {
            case myStory.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await myStory.ƒS.Progress.save();
                break;
            case myStory.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await myStory.ƒS.Progress.load();
                break;
            case myStory.ƒ.KEYBOARD_CODE.I:
                console.log("Inventory");
                if (inventoryOpen) {
                    myStory.ƒS.Inventory.close();
                    inventoryOpen = false;
                }
                else {
                    myStory.ƒS.Inventory.open();
                    inventoryOpen = true;
                }
                // inventoryOpen = !inventoryOpen
                break;
            case myStory.ƒ.KEYBOARD_CODE.M:
                console.log("Menu");
                if (menuIsOpen) {
                    console.log("Close");
                    gameMenu.close();
                    menuIsOpen = false;
                }
                else {
                    console.log("Open");
                    gameMenu.open();
                    menuIsOpen = true;
                }
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenu = myStory.ƒS.Menu.create(inGameMenuButtons, buttonFunctions, "gameMenu");
        buttonFunctions(inGameMenuButtons.close);
        let element = Array.from(document.getElementsByTagName("speech"))[0];
        element.style.display = "none";
        let scenes = [
            { id: "intro", scene: myStory.Intro, name: "Intro", next: "one" },
            { id: "one", scene: myStory.Scene1, name: "Scene" },
        ];
        // start the sequence
        let uiElement = document.querySelector("[type=interface]");
        myStory.dataForSave = myStory.ƒS.Progress.setData(myStory.dataForSave, uiElement);
        myStory.ƒS.Progress.go(scenes);
    }
    //   let uiElement: HTMLElement = document.querySelector("[type=interface]");
    //   dataForSave = ƒS.Progress.setData(dataForSave, uiElement);
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Intro() {
        myStory.currentActiveScene = "Intro";
        // ƒS.Sound.play(sounds.nightclub, 0.5);
        // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);
        // for (let key of Object.values(items)) {
        //   ƒS.Inventory.add(key);
        // }
        // ƒS.Inventory.add(items.item1);
        // await ƒS.Location.show(locations.minivan1);
        // await ƒS.update(
        //   transitions.test.duration,
        //   transitions.test.alpha,
        //   transitions.test.edge
        // );
        await myStory.changeLocation(myStory.locations.web, myStory.transitions.test);
        await myStory.newPose(myStory.characters.maleSpider, "normal");
        await myStory.tell(myStory.characters.maleSpider, 1);
        await myStory.tell(myStory.characters.maleSpider, 2);
        await myStory.newPose(myStory.characters.femaleSpider, "scared");
        await myStory.newPose(myStory.characters.maleSpider, "scared");
        myStory.moveCharacterToLocaton(myStory.characters.femaleSpider, myStory.characters.femaleSpider.pose.scared, {
            x: 25,
            y: 95,
        }, 0.0025, 0);
        await myStory.tell(myStory.characters.femaleSpider, 1);
        await myStory.newPose(myStory.characters.femaleSpider, "angry");
        await myStory.tell(myStory.characters.femaleSpider, 2);
        await myStory.newPose(myStory.characters.maleSpider, "normal");
        await myStory.newPose(myStory.characters.femaleSpider, "sad");
        await myStory.tell(myStory.characters.femaleSpider, 3);
        myStory.moveCharacterToLocaton(myStory.characters.maleSpider, myStory.characters.maleSpider.pose.happy, {
            x: 55,
            y: 80,
        }, 0.025, 0);
        await myStory.tell(myStory.characters.maleSpider, 3);
        await myStory.tell(myStory.characters.maleSpider, 4);
        await myStory.tell(myStory.characters.femaleSpider, 5);
        await myStory.newPose(myStory.characters.femaleSpider, "happy");
        await myStory.tell(myStory.characters.femaleSpider, 4);
        await myStory.tell(myStory.characters.femaleSpider, 5);
        await myStory.newPose(myStory.characters.femaleSpider, "normal");
        await myStory.tell(myStory.characters.maleSpider, 6);
        await myStory.newPose(myStory.characters.maleSpider, "angry");
        await myStory.tell(myStory.characters.maleSpider, 7);
        await myStory.tell(myStory.characters.femaleSpider, 6);
        await myStory.newPose(myStory.characters.maleSpider, "normal");
        await myStory.tell(myStory.characters.maleSpider, 8);
        await myStory.tell(myStory.characters.maleSpider, 9);
        await myStory.tell(myStory.characters.femaleSpider, 7);
        await myStory.tell(myStory.characters.maleSpider, 10);
        await myStory.newPose(myStory.characters.femaleSpider, "scared");
        await myStory.tell(myStory.characters.femaleSpider, 8);
        await myStory.tell(myStory.characters.femaleSpider, 9);
        await myStory.tell(myStory.characters.maleSpider, 11);
        myStory.ƒS.Speech.clear();
        await myStory.ƒS.Character.hideAll();
        await myStory.ƒS.update();
        // ƒS.Sound.play(sounds.nightclub, 0.5);
        // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);
        // let decitionAnswer = {
        //   iSayOk: "Okay",
        //   iSayYes: "Yes",
        //   iSayNo: "No"
        // }
        // let decition = await ƒS.Menu.getInput(decitionAnswer, "some CSS classe");
        // switch (decition) {
        //   case decitionAnswer.iSayNo:
        //   case decitionAnswer.iSayOk:
        //   case decitionAnswer.iSayYes:
        // }
    }
    myStory.Intro = Intro;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Scene1() {
        console.log("FudgeStory Template Scene starting");
        myStory.currentActiveScene = "Scene1";
        // let spanElements = Array.from(
        //   document.getElementsByTagName("speech") as HTMLCollectionOf<HTMLElement>
        // );
        // spanElements.forEach((element) => {
        //   element.style.backgroundColor = "rgba(255, 32, 1, 0.9)";
        //   // element.style.opacity = "0.9";
        // });
        // ƒS.Sound.play(sounds.nightclub, 0.5);
        // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);
        for (let key of Object.values(myStory.items)) {
            myStory.ƒS.Inventory.add(key);
        }
        // ƒS.Inventory.add(items.item1);
        // await ƒS.Location.show(locations.graveyard);
        // await ƒS.update(
        //   transitions.test.duration,
        //   transitions.test.alpha,
        //   transitions.test.edge
        // );
        await myStory.changeLocation(myStory.locations.minivan2, myStory.transitions.test);
        await myStory.newPose(myStory.characters.maleSpider, "normal");
        await myStory.newPose(myStory.characters.femaleSpider, "scared");
        // await ƒS.update(1);
        await myStory.tell(myStory.characters.maleSpider, 1);
        await myStory.newPose(myStory.characters.femaleSpider, "demon");
        await myStory.tell(myStory.characters.femaleSpider, 1);
        await myStory.moveCharacterToLocaton(myStory.characters.maleSpider, myStory.characters.maleSpider.pose.angry, {
            x: 50,
            y: 90,
        }, 0.025, 1);
        await myStory.moveCharacterToLocaton(myStory.characters.femaleSpider, myStory.characters.femaleSpider.pose.scared, {
            x: 50,
            y: 97,
        }, 0.025, 1);
        myStory.ƒS.Speech.clear();
        await myStory.ƒS.update();
        // ƒS.Sound.play(sounds.nightclub, 0.5);
        // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);
        // let decitionAnswer = {
        //   iSayOk: "Okay",
        //   iSayYes: "Yes",
        //   iSayNo: "No"
        // }
        // let decition = await ƒS.Menu.getInput(decitionAnswer, "some CSS classe");
        // switch (decition) {
        //   case decitionAnswer.iSayNo:
        //   case decitionAnswer.iSayOk:
        //   case decitionAnswer.iSayYes:
        // }
    }
    myStory.Scene1 = Scene1;
})(myStory || (myStory = {}));
//# sourceMappingURL=Template.js.map