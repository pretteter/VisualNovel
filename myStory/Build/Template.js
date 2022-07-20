"use strict";
var myStory;
(function (myStory) {
    myStory.dialogues = {
        Intro: {
            webster: {
                1: "Ich habe Hunger verdammt",
                2: "wo bleiben denn all die saftigen Snacks?",
                3: "Jaja... Ich komme ja schon",
                4: "So... Einmal das weg und jetzt das",
                5: "Einmal Freiheit für die Dame",
                6: "Hmm... Du könntest ja zum essen bleiben. Nur kommt heut nix angesummt",
                7: "Vielleicht spinne ich nicht genug oder das Essen ist neuerdings schlauer als ich",
                8: "Das klingt großartig. Ansonsten sterbe ich noch vor Hunger",
                9: "Ich kenne da ein Lokal ein bisschen weiter weg von hier. Ich war da schon ein paar mal. Hättest du da Lust zu?",
                10: "Leider nein. Aber die Entfernung wäre kein Problem. Ich habe einen Van",
                11: "aber gerne. Komm mit!",
            },
            femaleSpider: {
                1: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                2: "Scheiße.... Ich klebe fest",
                3: "HIIIIIILLLLLLFFFFEEEEEEEE",
                4: "Daaaanke dir. Du bist ein Schatz",
                5: "Wie kann ich mich nur bei dir revanchieren?",
                6: "Wir könnten ja essen gehen, wenn du möchtest",
                7: "Gerne. Nur möchte ich nicht so weit laufen. Gibts hier nichts in der Nähe?",
                8: "Du hast einen WAS?",
                9: "Zeig her",
            },
        },
        VanForrest: {
            webster: {
                1: "Ich habe einem Webdesigner geholfen, der bei der Arbeit seinen Faden verloren hat. Als Dank hat er mir seinen Van geschenkt",
                2: "Bis jetzt bin ich überall unbeschadet hingekommen. Also sag ich mal ja",
                3: "Der dürfte sogar dich tragen können. Ich habe da so viel Beinfreiheit, da solltest du keine Probleme haben",
                4: "Na klar. Riesen Lady first",
            },
            femaleSpider: {
                1: "Das ist ja ein cooles Teil. Wie kommst du zu sowas?",
                2: "Und du kannst das Ding fahren?",
                3: "Na das klingt vielversprechend. Wollen wir los?",
            },
        },
        ToRestaurant: {
            webster: {
                1: "Das freut mich, dass es dir gefällt. Wir sind auch gleich da",
                2: "Warte!",
                3: "Ich helf dir durch die Tür",
                4: "Wollen wir?",
            },
            femaleSpider: {
                1: "oh wow ist das toll. So wunderschön",
                2: "Gentle-Spider, wie sie im Buche steht",
                3: "aber gerne",
            },
        },
        Restaurant: {
            webster: {
                1: "Das ist immer Tages und Uhrzeitabhängig. Der Kellner wird uns schon gute Empfehlungen geben",
                2: "Ah siehste. Da kommt er ja schon",
                3: "Zufälle gibts gell",
            },
            femaleSpider: {
                1: "Das ist ja ein interessantes Ambiente",
                2: "Was gibts hier denn so für Spezialitäten?",
            },
            obee: {
                1: "Ich glaub ich spinne. Dass du auch mal wieder im Lande bist. Und wie ich sehe sogar in Begleitung",
                2: "Anscheinend ja. Was kann ich euch denn bringen",
                3: "Zum Trinken haben wir heute ganz frische Kakerlake. Verflüssigt mit dem ausgezeichnetem 3 Sterne Speichel unseres Chef",
                4: "Zum Essen kann ich das vor erst 10 minuten fallen gelassene Stück 'Gericht' von Tisch 10 dort drüben empfehlen. Habe ich selbst gekostet",
                5: "",
            },
        },
        AfterRestaurant: {
            webster: {
                1: "Mir hat es auch gefallen. Sehr sogar",
                1_1_01: "Möchtest du, dass ich dich nach Haus bringe?",
                1_1_02: "Na dann auf gehts...",
                1_2_01: "Soll ich noch mit zu dir kommen?",
                1_3_01: "Ich kenne noch einen weiteren coolen Ort. Möchtest du mitkommen?",
                1_3_02: "Nicht weit von hier. Es wird dir gefallen",
            },
            femaleSpider: {
                1: "Hach das war schön. Mal was anderes und auch echt lecker",
                1_1_01: "Ja sehr gerne. Werde auch schon langsam ein wenig müde",
                1_2_01: "Hmm...",
                1_2_02: "Ich weiß was das werden soll. Aber wieso eigentlich nicht",
                1_2_03: "Hatte schon lange keinen mehr zum snacken",
                1_2_04: "Und Spaß hatte ich auch schon lange nicht mehr",
                1_3_01: "Öhm.... Ja gern. Wo ist das?",
                1_3_02: "Dann lass ich mich wohl mal überraschen",
            },
        },
        Mushroom: {
            webster: {
                1: "Schau dir dieses Prachtstück der Natur an. Ist das nicht Wundervoll?",
                2: "Wenn du Lust auf ein wenig rumgespinne hast, dann probier mal ein Stück",
                3: "Mach einfach. Du wirst es nicht bereuen",
                4: "Hihi, Es wirkt.",
                5: "Der Pilz lässt dich üüüüberall hin wo du hin willst",
                1_1_01: "Oh ja. Ich entspanne schon auf einer Liege weit weit weg von allem",
                1_2_01: "Oh ja. Ich bin in einer Großstadt mit duzenden geilen Karren unterwegs",
            },
            femaleSpider: {
                1: "Oh ja... So majestätisch",
                2: "Was? Wieso?",
                3: "Hmm... So ganz geheuer ist mir das nicht. Ich spinne doch eigentlich schon genug",
                4: "Aber ok. Der Abend war schön. Keinen Grund es jetzt komisch werden zu lassen",
                5: "Mampf Mampf",
                6: "Irgendwie fühle ich mich komisch. Was ist das?",
                7: "Huhu, Jaahaa....",
                8: "So langsam drifte ich auch ab. Bist du denn schon in deiner Traumwelt?",
            },
        },
        Holliday: {
            webster: {
                1: "Du müsstest hier sein. Es ist soooo schön",
                2: "Ja ne? So nackt.",
                1_1_01: "Was anderes nackt wäre natürlich auch schön",
                1_2_01: "...",
                3: "Psst!! Ich träume öfters von ihm. MAch dir keine Sorgen",
                4: "ENDLICH. Sooo nötig",
                5: "Ja was? muss doch gut riechen",
            },
            femaleSpider: {
                1: "Aber das bin ich doch schon.",
                2: "2 Liegen, eine grandiose Aussicht und keiiine Sorgen",
                3: "Das ist das erste mal, dass ich Berge ohne Bäume sehe. Seltsamer Anblick",
                1_1_01: "Jaja. Wer hätte es nicht gern",
                4: "Himmel Hilf. Was macht der denn hier",
                5: "Haha. Du bist mir einer",
                6: "",
            },
            obee: {
                1: "TADAAAA",
                2: "Ich bringe euch die Bestellung",
                3: "Unsere Spezialität des Hauses",
                4: "Eine Insektencocktail-Kur für eure zarte junge Haut",
            },
        },
        City: {
            webster: {
                1: "Du müsstest hier sein. Es ist soooo schön",
                2: "Diese ganzen Autos. Dieser Stadtlärm. Einfach ein Traum",
                3: "Ist das nicht toll?",
                4: "So viele geile Karren",
                5: "Nee. Ich mag es so wie es ist. Viel asphalt und dröhnende Motoren",
            },
            femaleSpider: {
                1: "Ja ich kann sie sehen",
                2: "Joa... schon.",
                3: "Gibts hier auch irgendwo einen Park? Dann könnten wir da spazieren gehen",
                4: "Schade",
                5: "Die Wirkung lässt auch schon wieder nach",
                6: "ich bin schon nicht mehr bei dir",
            },
        },
        VanForrestOnReturn: {
            webster: {
                1: "Da könnte ich mich ja glatt zuhause fühlem. Ist sehr ähnlich zu Meinem",
                1_1_01: "Darf ich noch auf eine Fliege mit zu dir hoch kommen?",
                1_2_01: "Wollen wir uns morgen nochmal sehen?",
                1_2_02: "Lust hab ich immer. Und dich sehen will ich natürlich auch",
                1_2_03: "Dann morgen Abend?",
                1_3_01: "Wann darf ich darauf hoffen, dass du wieder in mein Netz fällst?",
                1_3_02: "Morgen Abend klingt supi. An was hast du denn gedacht?",
                1_3_03: "Das machen wir. Dann bekomm ich noch mehr von dir",
                1_3_04: "Bis morgen. Schlaf gut.",
            },
            femaleSpider: {
                1: "Soo. Da wären wir. Mein trautes Heim",
                1_1_01: "Na da ist aber jemand sehr direkt",
                1_1_02: "Aber natürlich. Ich hatte schon lange keinen mehr zum snacken",
                1_2_01: "Das wäre wunderschön. Hier um die Ecke gibts zwei Schaukeln. Hast du morgen Abend Lust?",
                1_2_02: "Dann bis morgen Abend.",
                1_3_01: "Haha.",
                1_3_02: "Hoffen darfst du viel. Aber ich denke, wir könnten morgen Abend was machen, wenn du willst?",
                1_3_03: "Hier um die Ecke gibt es zwei Schaukeln. Da könnten wir uns ja treffen",
                1_3_04: "Wenn du nicht aufpasst, bekommst du mehr von mir als dir lieb ist",
                1_3_05: "Also bis morgen ja?",
            },
        },
        Swing: {
            webster: {
                1: "Ein Glück. Du bist noch da",
                2: "Mir ist eine Fliege dazwischen gekommen",
                3: "Kennst du doch bestimmt auch oder?",
            },
            femaleSpider: {
                1: "Jep. Aber lange hätte ich nicht mehr gewartet",
                2: "Was ist denn passiert? Wieso kommst du erst so spät?",
                3: "Haha. Ja klar. Da hatte ich das Glück, dass ich noch satt bin",
            },
        },
        Ending: {
            webster: {
                1: "",
                2: "",
                3: "",
                1_1_01: "",
                1_2_01: "",
                1_3_01: "",
            },
            femaleSpider: {
                1: "",
                1_1_01: "",
                1_2_01: "",
                1_3_01: "",
            },
        },
        ReturnAfterEnding: {
            webster: {
                1: "Ach mann...",
                2: "Ich vermisse sie",
                3: "Vermutlich spinne ich, aber ich kann nicht anders",
                4: "Ich glaube ich liebe sie",
                5: "Aber leben tu ich eigentlich auch gerne,",
                6: "So ein Scheis verdammt nochmal",
                7: "Ach scheis drauf...",
                8: "Zu mir oder zu dir?",
                9: "Ja bin ich. Also?",
                10: "Alles klar. Mein Van steht da hinten",
            },
            femaleSpider: {
                1: "Oh",
                2: "Du hier?",
                3: "Was machst du hier?",
                4: "Was?",
                5: "Bist du dir sicher?",
                6: "Öhm... Wieder zu mir!",
                7: "Tja... Wieder einer weniger",
                8: "Merke: Entzückend, aber verherend",
                9: "Das schreibe ich mir auf meinen eigenen Van",
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
        if (character.name === myStory.characters.webster.name) {
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
        if (character.name === myStory.characters.webster.name) {
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
    async function newPose(character, mood, update, position) {
        const path = "character.pose." + mood.toString();
        const pose = eval(path);
        if (!position) {
            position = { x: undefined, y: undefined };
            if (character.name == myStory.characters.webster.name) {
                position.x = myStory.currentMaleCoordinates.x;
                position.y = myStory.currentMaleCoordinates.y;
            }
            else {
                position.x = myStory.currentFemaleCoordinates.x;
                position.y = myStory.currentFemaleCoordinates.y;
            }
        }
        else {
            if (character.name == myStory.characters.webster.name) {
                myStory.currentMaleCoordinates.x = position.x;
                myStory.currentMaleCoordinates.y = position.y;
            }
            else {
                myStory.currentFemaleCoordinates.x = position.x;
                myStory.currentFemaleCoordinates.y = position.y;
            }
        }
        await myStory.ƒS.Character.hide(character);
        await myStory.ƒS.Character.show(character, pose, myStory.ƒS.positionPercent(position.x, position.y));
        await myStory.ƒS.update(update ? update : 0);
    }
    myStory.newPose = newPose;
    async function tell(character, numberOfDialog) {
        let path;
        if (typeof numberOfDialog === "number") {
            switch (character.name) {
                case myStory.characters.webster.name: {
                    path =
                        "myStory.dialogues." +
                            myStory.currentActiveScene +
                            ".webster[" +
                            numberOfDialog.toString() +
                            "]";
                    break;
                }
                case myStory.characters.phobia.name: {
                    path =
                        "myStory.dialogues." +
                            myStory.currentActiveScene +
                            ".femaleSpider[" +
                            numberOfDialog.toString() +
                            "]";
                    break;
                }
                case myStory.characters.mrobeer.name: {
                    path =
                        "myStory.dialogues." +
                            myStory.currentActiveScene +
                            ".obee[" +
                            numberOfDialog.toString() +
                            "]";
                    break;
                }
            }
            const content = eval(path);
            await myStory.ƒS.Speech.tell(character, content);
        }
        else if (typeof numberOfDialog === "string") {
            await myStory.ƒS.Speech.tell(character, numberOfDialog);
        }
    }
    myStory.tell = tell;
    async function changeLocation(location, transition) {
        await myStory.ƒS.Location.show(location);
        await myStory.ƒS.update(transition.duration, transition.alpha, transition.edge);
        myStory.changeColorTextbox();
        let element = Array.from(document.getElementsByTagName("speech"))[0];
        element.style.display = "";
    }
    myStory.changeLocation = changeLocation;
    async function clearScene() {
        myStory.ƒS.Speech.clear();
        await myStory.ƒS.Character.hideAll();
        await myStory.ƒS.update();
    }
    myStory.clearScene = clearScene;
    function hideLoveMeter() {
        const elements = Array.from(document.getElementsByClassName("circle"));
        for (let i = 0; i < elements.length; i++) {
            const slide = elements[i];
            slide.style.display = "none";
        }
    }
    myStory.hideLoveMeter = hideLoveMeter;
    function showLoveMeter(value) {
        hideLoveMeter();
        const elements = Array.from(document.getElementsByClassName("circle"));
        for (let i = 0; i < elements.length; i++) {
            const slide = elements[i];
            value
                ? (slide.className = "circle per-" + value.toString()) &&
                    (myStory.dataForSave.score = value)
                : (slide.className = "circle per-" + myStory.dataForSave.score);
            slide.style.display = "";
        }
    }
    myStory.showLoveMeter = showLoveMeter;
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
    myStory.sounds = {
        // theme
        wakeup: "Sounds/Sad_and_Sweet/wakeup.mp3",
        explore: "Sounds/Humorus_lighthearted/exploring.mp3",
        city: "Sounds/Busy City Street.mp3",
        holliday: "Sounds/- 13 - The Lost Island.mp3",
        restaurant_people: "Sounds/Coffee Shop.mp3",
        restaurant_jazz: "Sounds/jazz trio.mp3",
        car_interior: "Sounds/Car Interior.mp3",
        dramatic: "Sounds/Army of Death (looped).wav",
        love: "Sounds/Sad_and_Sweet/love and secrets.mp3",
        drugs: "Sounds/17-Dark Fantasy Studio- Joke.mp3",
        funnyMeme: "Sounds/Humorus_lighthearted/the_funny_mime.mp3",
        endTheme: "Sounds/Medieval Theme.wav",
        // soundeffects
        drums: "Sounds/drum_beats_and_loops/drumbeat.wav",
        car_door_open: "Sounds/Effects/truck_door_open.wav",
        car_door_close: "Sounds/Effects/Car door.wav",
        moments_later: "Sounds/Effects/SPONGEBOB TIME CARDS - A FEW MOMENTS LATER.mp3",
        suspense: "Sounds/Effects/Suspense.mp3",
        bloodSpill: "Sounds/Effects/blood_guts_spill.wav",
        bloodHit: "Sounds/Effects/Blood_Hit.wav",
        scaryShort: "Sounds/Effects/Suspense short.mp3",
    };
    myStory.locations = {
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
            background: "Images/Backgrounds/restaurant_unter_table-studio_cartoon.jpg",
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
        holliday: {
            name: "holliday",
            background: "Images/Backgrounds/holliday.jpg",
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
    myStory.characters = {
        mrobeer: {
            name: "Mr. Obeer",
            origin: myStory.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "Images/Characters/bee.png",
            },
        },
        webster: {
            name: "Webster",
            origin: myStory.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: myStory.ƒS.ORIGIN.BOTTOMCENTER,
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
    myStory.dataForSave = {
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
    let gameMenu;
    let menuIsOpen = true;
    let isLoveMeterShowed = false;
    // let inventoryOpen: boolean = false;
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
            case inGameMenuButtons.showLoveMeter:
                if (isLoveMeterShowed) {
                    myStory.hideLoveMeter();
                    isLoveMeterShowed = false;
                }
                else {
                    myStory.showLoveMeter();
                    isLoveMeterShowed = true;
                }
                break;
            case inGameMenuButtons.credits:
                myStory.showCredits();
                break;
        }
    }
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
        myStory.hideLoveMeter();
        gameMenu = myStory.ƒS.Menu.create(inGameMenuButtons, buttonFunctions, "gameMenu");
        buttonFunctions(inGameMenuButtons.close);
        let element = Array.from(document.getElementsByTagName("speech"))[0];
        element.style.display = "none";
        let scenes = [
            // { id: "intro", scene: Intro, name: "Intro", next: "vanForrest" },
            // {
            //   id: "vanForrest",
            //   scene: VanForrest,
            //   name: "VanForrest",
            //   next: "toRestaurant",
            // },
            // {
            //   id: "toRestaurant",
            //   scene: ToRestaurant,
            //   name: "toRestaurant",
            //   next: "restaurant",
            // },
            // {
            //   id: "restaurant",
            //   scene: Restaurant,
            //   name: "Restaurant_under_Table",
            //   next: "afterRestaurant",
            // },
            // { id: "afterRestaurant", scene: AfterRestaurant, name: "VanStreet_back" },
            // {
            //   id: "vanForrestOnReturn",
            //   scene: VanForrestOnReturn,
            //   name: "Van in front of Home",
            // },
            // { id: "mushroom", scene: Mushroom, name: "Mushroom" },
            // { id: "swing", scene: Swing, name: "Ending" },
            // { id: "ending", scene: Ending, name: "Ending" },
            {
                id: "returnAfterEnding",
                scene: myStory.ReturnAfterEnding,
                name: "ReturnAfterEnding",
            },
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
    const sources = {
        Bilder: {
            Spinnennetz: "Pixabay auf pexels.com",
            Van_Natur: "Lorena Martínez auf pexels.com",
            Van_Stadt: "Nubia Navarro (nubikini) auf pexels.com",
            Restaurant: "cottonbro auf pexels.com",
            Pilz: "Egor Kamelev auf pexels.com",
            Liegen: "Pixabay auf pexels.com",
            Stadt: "Alex Azabache auf pexels.com",
            Schaukeln: "2023852 auf pixabay.com",
            Links: "Links befinden sich in der Quellen.txt"
        },
        Bearbeitung_der_Bilder_durch: { Bearbeiter: "Jan Christmeier" },
        Charakter: {
            Spinnen: "Tamara Auber",
            Biene: "Clker-Free-Vector-Images auf pixabay.com",
        },
        Audio: {
            Komponist_1: "Eric Taylors released under the Attribution 4.0 International (CC BY 4.0)",
            Komponist_2: "Nicolas Jeudy Creator of DARK FANTASY STUDIO",
            Weitere: "SHUTTERSTOCK MUSIC CANADA ULC",
            Lizenz: "Befindet sich im Sound Ordner"
        }
    };
    function showCredits() {
        let string = "CREDITS";
        myStory.ƒS.Text.setClass("credits");
        // ƒS.Text.print(JSON.stringify(sources));
        string += "<dl>";
        Object.keys(sources).forEach((categorie) => {
            string += "<dt>" + categorie + "</dt>";
            Object.keys(sources[categorie]).forEach((key) => {
                string += "<dd>" + key + ": " + sources[categorie][key] + "</dd>";
            });
            string += "<br>";
        });
        string += "</dl>";
        myStory.ƒS.Text.print(string);
    }
    myStory.showCredits = showCredits;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function AfterRestaurant() {
        await myStory.changeLocation(myStory.locations.minivan_city, myStory.transitions.test);
        myStory.currentActiveScene = "AfterRestaurant";
        myStory.ƒS.Sound.fade(myStory.sounds.love, 0.3, 0, true);
        myStory.ƒS.Sound.fade(myStory.sounds.car_interior, 0.8, 1, true);
        myStory.currentFemaleCoordinates.x = 50;
        myStory.currentFemaleCoordinates.y = 90;
        myStory.currentMaleCoordinates.x = 50;
        myStory.currentMaleCoordinates.y = 85;
        let decitionAnswer = {
            home: "Sie nach Hause bringen",
            romantic: "romantische Nacht verbringen",
            doSomething: "zu einem weiteren tollen Ort fahren",
        };
        myStory.hideLoveMeter();
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 1);
        let decition1 = await myStory.ƒS.Menu.getInput(decitionAnswer, "decision");
        switch (decition1) {
            case decitionAnswer.home:
                await dialogueHome();
                myStory.showLoveMeter(25);
                await myStory.clearScene();
                return "vanForrestOnReturn";
            case decitionAnswer.romantic:
                await dialogueRomantic();
                myStory.showLoveMeter(0);
                await myStory.clearScene();
                return "ending";
            case decitionAnswer.doSomething:
                await dialogueMushroom();
                myStory.showLoveMeter(25);
                await myStory.clearScene();
                return "mushroom";
        }
        myStory.ƒS.Speech.clear();
        await myStory.ƒS.update();
    }
    myStory.AfterRestaurant = AfterRestaurant;
    async function dialogueHome() {
        await myStory.tell(myStory.characters.webster, 1_1_01);
        await myStory.tell(myStory.characters.phobia, 1_1_01);
        await myStory.tell(myStory.characters.webster, 1_1_02);
        stopSound();
    }
    async function dialogueRomantic() {
        await myStory.tell(myStory.characters.webster, 1_2_01);
        await myStory.tell(myStory.characters.phobia, 1_2_01);
        await myStory.tell(myStory.characters.phobia, 1_2_02);
        myStory.ƒS.Sound.play(myStory.sounds.suspense, 0.4);
        await myStory.newPose(myStory.characters.phobia, "demon");
        await myStory.tell(myStory.characters.phobia, 1_2_03);
        await myStory.clearScene();
        await myStory.tell(myStory.characters.phobia, 1_2_04);
        stopSound();
    }
    async function dialogueMushroom() {
        await myStory.tell(myStory.characters.webster, 1_3_01);
        await myStory.tell(myStory.characters.phobia, 1_3_01);
        await myStory.tell(myStory.characters.webster, 1_3_02);
        await myStory.tell(myStory.characters.phobia, 1_3_02);
        stopSound();
    }
    function stopSound() {
        myStory.ƒS.Sound.fade(myStory.sounds.love, 0, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.car_interior, 0, 0.5);
    }
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function City() {
        myStory.currentActiveScene = "City";
        myStory.ƒS.Sound.fade(myStory.sounds.city, 0.3, 2, true);
        myStory.ƒS.Sound.fade(myStory.sounds.city, 0, 0.5);
        await myStory.clearScene();
    }
    myStory.City = City;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Ending() {
        myStory.currentActiveScene = "Ending";
        await myStory.changeLocation(myStory.locations.web, myStory.transitions.test);
        await myStory.clearScene();
    }
    myStory.Ending = Ending;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Intro() {
        myStory.currentActiveScene = "Intro";
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0.3, 2, true);
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
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.webster, 2);
        myStory.ƒS.Sound.fade(myStory.sounds.drums, 0.4, 0);
        await myStory.newPose(myStory.characters.phobia, "scared");
        await myStory.newPose(myStory.characters.webster, "scared");
        // await ƒS.Character.animate(characters.phobia,characters.phobia.pose.scared)
        myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.scared, {
            x: 25,
            y: 95,
        }, 0.0025, 0);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.newPose(myStory.characters.phobia, "angry");
        myStory.ƒS.Sound.fade(myStory.sounds.drums, 0, 0.5);
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.newPose(myStory.characters.phobia, "sad");
        await myStory.tell(myStory.characters.phobia, 3);
        myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 55,
            y: 80,
        }, 0.025, 0);
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.phobia, 4);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 5);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.webster, 6);
        await myStory.newPose(myStory.characters.webster, "angry");
        await myStory.tell(myStory.characters.webster, 7);
        await myStory.tell(myStory.characters.phobia, 6);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 8);
        await myStory.tell(myStory.characters.webster, 9);
        await myStory.tell(myStory.characters.phobia, 7);
        await myStory.tell(myStory.characters.webster, 10);
        await myStory.newPose(myStory.characters.phobia, "scared");
        await myStory.tell(myStory.characters.phobia, 8);
        await myStory.tell(myStory.characters.phobia, 9);
        await myStory.tell(myStory.characters.webster, 11);
        await myStory.clearScene();
    }
    myStory.Intro = Intro;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Mushroom() {
        myStory.currentActiveScene = "Mushroom";
        myStory.currentFemaleCoordinates = { x: 20, y: 85 };
        myStory.currentMaleCoordinates = { x: 75, y: 80 };
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0.3, 2, true);
        await myStory.changeLocation(myStory.locations.mushroom, myStory.transitions.test);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.tell(myStory.characters.phobia, 3);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.phobia, 4);
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0, 0.5);
        myStory.ƒS.Sound.play(myStory.sounds.moments_later, 0.5);
        await myStory.newPose(myStory.characters.phobia, "sad");
        myStory.ƒS.Sound.fade(myStory.sounds.drugs, 0.3, 0.5, true);
        await myStory.tell(myStory.characters.phobia, 5);
        await myStory.newPose(myStory.characters.phobia, "scared");
        await myStory.tell(myStory.characters.phobia, 6);
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.webster, 5);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 7);
        await myStory.tell(myStory.characters.phobia, 8);
        let decitionAnswer = {
            holliday: "Auf einer Liege im Urlaub",
            city: "In einer Großstadt mit vielen geilen Karren",
        };
        let decition = await myStory.ƒS.Menu.getInput(decitionAnswer, "decision");
        switch (decition) {
            case decitionAnswer.city:
                await myStory.tell(myStory.characters.webster, 1_1_01);
                await myStory.clearScene();
                return "holliday";
            case decitionAnswer.holliday:
                await myStory.tell(myStory.characters.webster, 1_2_01);
                await myStory.clearScene();
                return "city";
        }
    }
    myStory.Mushroom = Mushroom;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Restaurant() {
        myStory.currentActiveScene = "Restaurant";
        myStory.currentFemaleCoordinates = { x: 20, y: 85 };
        myStory.currentMaleCoordinates = { x: 75, y: 80 };
        myStory.ƒS.Sound.fade(myStory.sounds.restaurant_people, 0.3, 2, true);
        myStory.ƒS.Sound.fade(myStory.sounds.restaurant_jazz, 0.2, 2, true);
        await myStory.changeLocation(myStory.locations.restaurant_underTable, myStory.transitions.test);
        await myStory.newPose(myStory.characters.webster, "happy", 0);
        await myStory.newPose(myStory.characters.phobia, "normal", 0);
        await myStory.newPose(myStory.characters.mrobeer, "normal", 0, { x: 50, y: 60 });
        // await newPose(characters.maleSpider, "happy",1);
        let decitionAnswer = {
            iSayOk: "Okay",
            iSayYes: "Yes",
            iSayNo: "No",
        };
        let decition = await myStory.ƒS.Menu.getInput(decitionAnswer, "decision");
        switch (decition) {
            case decitionAnswer.iSayNo:
            case decitionAnswer.iSayOk:
            case decitionAnswer.iSayYes:
        }
        myStory.showLoveMeter(25);
        myStory.ƒS.Sound.fade(myStory.sounds.restaurant_people, 0, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.restaurant_jazz, 0, 0.5);
        await myStory.clearScene();
    }
    myStory.Restaurant = Restaurant;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function ReturnAfterEnding() {
        await myStory.changeLocation(myStory.locations.flower, myStory.transitions.test);
        myStory.ƒS.Sound.fade(myStory.sounds.funnyMeme, 0.3, 0.5, true);
        myStory.currentActiveScene = "ReturnAfterEnding";
        myStory.currentFemaleCoordinates = { x: 0, y: 95 };
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.newPose(myStory.characters.webster, "sad");
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.webster, 5);
        await myStory.newPose(myStory.characters.webster, "angry");
        await myStory.tell(myStory.characters.webster, 6);
        myStory.ƒS.Sound.play(myStory.sounds.scaryShort, 0.6);
        await myStory.newPose(myStory.characters.webster, "scared");
        myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.normal, {
            x: 25,
            y: 95,
        }, 0.0025, 0);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.newPose(myStory.characters.phobia, "demon");
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 3);
        await myStory.tell(myStory.characters.webster, 7);
        await myStory.tell(myStory.characters.webster, 8);
        await myStory.newPose(myStory.characters.phobia, "scared");
        await myStory.tell(myStory.characters.phobia, 4);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 5);
        await myStory.tell(myStory.characters.webster, 9);
        await myStory.newPose(myStory.characters.phobia, "demon");
        await myStory.tell(myStory.characters.phobia, 6);
        await myStory.newPose(myStory.characters.phobia, "normal");
        myStory.ƒS.Sound.play(myStory.sounds.suspense, 0.6);
        myStory.ƒS.Sound.fade(myStory.sounds.funnyMeme, 0, 1);
        await myStory.tell(myStory.characters.webster, 10);
        await myStory.clearScene();
        myStory.ƒS.Sound.fade(myStory.sounds.endTheme, 0.3, 0.5, true);
        await myStory.changeLocation(myStory.locations.graveyard, myStory.transitions.puzzle);
        await myStory.newPose(myStory.characters.phobia, "normal", 0, { x: 15, y: 90 });
        await myStory.tell(myStory.characters.phobia, 7);
        await myStory.newPose(myStory.characters.phobia, "sad");
        await myStory.tell(myStory.characters.phobia, 8);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 9);
        await myStory.clearScene();
        myStory.showCredits();
    }
    myStory.ReturnAfterEnding = ReturnAfterEnding;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Swing() {
        myStory.currentActiveScene = "Swing";
        await myStory.changeLocation(myStory.locations.swing, myStory.transitions.test);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 1);
    }
    myStory.Swing = Swing;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function ToRestaurant() {
        myStory.currentActiveScene = "ToRestaurant";
        myStory.ƒS.Sound.fade(myStory.sounds.explore, 0.3, 2, true);
        await myStory.changeLocation(myStory.locations.minivan_city, myStory.transitions.test);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 1);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_open, 0.5);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 75,
            y: 80,
        }, 0.025, 0);
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 25,
            y: 60,
        }, 0.0005, 0);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 27,
            y: 85,
        }, 0.0005, 0);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_open, 0.5);
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 37,
            y: 45,
        }, 0.0005, 0);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 75,
            y: 80,
        }, 0.0005, 0);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_close, 0.5);
        myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.happy, {
            x: 20,
            y: 90,
        }, 0.025, 0);
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.phobia, 3);
        myStory.ƒS.Sound.fade(myStory.sounds.explore, 0, 1);
        await myStory.clearScene();
    }
    myStory.ToRestaurant = ToRestaurant;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function VanForrest() {
        myStory.currentActiveScene = "VanForrest";
        myStory.currentFemaleCoordinates.x = 17;
        myStory.currentFemaleCoordinates.y = 85;
        myStory.currentMaleCoordinates.x = 75;
        // let spanElements = Array.from(
        //   document.getElementsByTagName("speech") as HTMLCollectionOf<HTMLElement>
        // );
        // spanElements.forEach((element) => {
        //   element.style.backgroundColor = "rgba(255, 32, 1, 0.9)";
        //   // element.style.opacity = "0.9";
        // });
        // ƒS.Sound.play(sounds.nightclub, 0.5);
        // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);
        // for (let key of Object.values(items)) {
        //   ƒS.Inventory.add(key);
        // }
        // ƒS.Inventory.add(items.item1);
        await myStory.changeLocation(myStory.locations.minivan_forrest, myStory.transitions.test);
        await myStory.newPose(myStory.characters.webster, "normal", 0);
        await myStory.newPose(myStory.characters.phobia, "normal", 0);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.tell(myStory.characters.phobia, 3);
        await myStory.tell(myStory.characters.webster, 4);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_open, 0.5);
        await myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.happy, {
            x: 50,
            y: 90,
        }, 0.025, 1);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_close, 0.5);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 50,
            y: 85,
        }, 0.025, 1);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_close, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0, 0.5, true);
        await myStory.clearScene();
        // ƒS.Sound.play(sounds.nightclub, 0.5);
        // ƒS.Sound.fade(sounds.nightclub, 0.5, 2, true);
    }
    myStory.VanForrest = VanForrest;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function VanForrestOnReturn() {
        myStory.currentActiveScene = "VanForrestOnReturn";
        await myStory.changeLocation(myStory.locations.minivan_forrest, myStory.transitions.test);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 1);
        // await newPose(characters.maleSpider, "happy",1);
        await myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.normal, {
            x: 25,
            y: 80,
        }, 0.025, 0);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.normal, {
            x: 75,
            y: 80,
        }, 0.025, 0);
        let decitionAnswer = {
            upstairs: "Mit hoch gehen",
            tomorrow: "Morgen wieder treffen?",
            sometimes: "Wann wieder sehen?",
        };
        let decition1 = await myStory.ƒS.Menu.getInput(decitionAnswer, "decision");
        switch (decition1) {
            case decitionAnswer.upstairs:
                await dialogueUpstairs();
                myStory.showLoveMeter(50);
                await myStory.clearScene();
                return "ending";
            case decitionAnswer.tomorrow:
                await dialogueMeetTomorrow();
                myStory.showLoveMeter(50);
                await myStory.clearScene();
                return "swing";
            case decitionAnswer.sometimes:
                await dialogueWhenNextMeeting();
                myStory.showLoveMeter(50);
                await myStory.clearScene();
                return "swing";
        }
    }
    myStory.VanForrestOnReturn = VanForrestOnReturn;
    async function dialogueUpstairs() {
        await myStory.tell(myStory.characters.webster, 1_1_01);
        await myStory.newPose(myStory.characters.phobia, "angry");
        await myStory.tell(myStory.characters.phobia, 1_1_01);
        await myStory.newPose(myStory.characters.phobia, "demon");
        await myStory.tell(myStory.characters.phobia, 1_1_02);
    }
    async function dialogueMeetTomorrow() {
        await myStory.tell(myStory.characters.webster, 1_2_01);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 1_2_01);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.webster, 1_2_02);
        await myStory.tell(myStory.characters.webster, 1_2_03);
        await myStory.tell(myStory.characters.phobia, 1_2_02);
    }
    async function dialogueWhenNextMeeting() {
        await myStory.tell(myStory.characters.webster, 1_3_01);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 1_3_01);
        await myStory.tell(myStory.characters.phobia, 1_3_02);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.webster, 1_3_02);
        await myStory.tell(myStory.characters.phobia, 1_3_03);
        await myStory.tell(myStory.characters.webster, 1_3_03);
        await myStory.newPose(myStory.characters.phobia, "demon");
        await myStory.tell(myStory.characters.phobia, 1_3_04);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 1_3_05);
        await myStory.tell(myStory.characters.webster, 1_3_04);
    }
})(myStory || (myStory = {}));
//# sourceMappingURL=Template.js.map