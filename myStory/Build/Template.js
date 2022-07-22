"use strict";
var myStory;
(function (myStory) {
    myStory.dialogues = {
        Intro: {
            webster: {
                1: "Ich habe Hunger verdammt",
                2: "Wo bleiben denn all die saftigen Snacks?",
                3: "Jaja... Ich komme ja schon",
                4: "So... Einmal das weg und jetzt das",
                5: "Einmal Freiheit für die Dame",
                6: "Hmm... Du könntest ja zum Essen bleiben. Nur kommt heut nix angesummt",
                7: "Vielleicht spinne ich nicht genug oder das Essen ist neuerdings schlauer als ich",
                8: "Das klingt großartig. Ansonsten sterbe ich noch vor Hunger",
                9: "Ich kenne da ein Lokal ein bisschen weiter weg von hier. Ich war da schon ein paar mal. Hättest du da Lust zu?",
                10: "Leider nein. Aber die Entfernung wäre kein Problem. Ich habe einen Van",
                11: "Aber gerne. Komm mit!",
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
                9: "Zeig her!",
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
                1: "Das freut mich, dass es dir gefällt. Wir sind auch schon da",
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
                1_1_01: "Joa klingen gut",
                1_1_02: "Dann würde ich sagen, die nehmen wir",
                1_2_01: "Ich würde gerne wie immer haben",
                1_2_02: "Und die Dame?",
                4: "Puh bin ich vollgefressen",
                5: "Ja gerne",
            },
            femaleSpider: {
                1: "Das ist ja ein interessantes Ambiente",
                2: "Was gibts hier denn so für Spezialitäten?",
                3: "Diese Empfehlungen klingen doch gut oder?",
                1_2_01: "Ich würde das nehmen, was Sie empfohlen haben",
                4: "Und ich erst.",
                5: "Wollen wir gehen?",
                6: "Gleichfalls",
            },
            obee: {
                1: "Ich glaub ich spinne. Dass du auch mal wieder im Lande bist. Und wie ich sehe sogar in Begleitung",
                2: "Anscheinend ja. Was kann ich euch denn bringen?",
                3: "Zum Trinken haben wir heute ganz frische Kakerlake. Verflüssigt mit dem ausgezeichnetem 3 Sterne Speichel unseres Chefs",
                4: "Zum Essen kann ich das vor erst 10 Minuten fallen gelassene Stück Fliege von Tisch 10 dort drüben empfehlen. Habe ich selbst gekostet",
                5: "Großartig. Essen kommt sofort",
                6: "Einen schönen Abend euch",
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
        Holiday: {
            webster: {
                1: "Du müsstest hier sein. Es ist soooo schön",
                2: "Ja ne? So nackt.",
                3: "Psst!! Ich träume öfters von ihm. Mach dir keine Sorgen",
                4: "ENDLICH. Sooo nötig",
                5: "Ja was? muss doch gut riechen",
                6: "Was?",
                7: "Ja bei mir auch. Schade eigentlich. War grad soo schön.",
                8: "Uff. Das war cool. Wollen wir uns morgen nochmal sehen?",
                9: "Sehr gerne. Und wie kommst du heim?",
                10: "Oki. Bis morgen dann",
            },
            femaleSpider: {
                1: "Aber das bin ich doch schon",
                2: "2 Liegen, eine grandiose Aussicht und keiiine Sorgen",
                3: "Das ist das erste Mal, dass ich Berge ohne Bäume sehe. Seltsamer Anblick",
                4: "Himmel Hilf. Was macht der denn hier",
                5: "Haha. Du bist mir einer",
                6: "Oder auch lecker schmecken!",
                7: "Was?",
                8: "Die Wirkung lässt auch schon wieder nach",
                9: "ich bin schon nicht mehr bei dir",
                10: "Ja. Würde mich sehr freuen. Bei mir in der Nähe gibt es zwei coole Schaukeln.",
                11: "Da können wir ein bisschen Quatschen, wenn du willst.",
                12: "Von hier ist es nicht weit. Ich laufe",
            },
            obee: {
                1: "TADAAAA!",
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
                6: "Ja bei mir auch. Schade eigentlich. War grad soo schön.",
                7: "Uff. Das war cool. Wollen wir uns morgen nochmal sehen?",
                8: "Sehr gerne. Und wie kommst du heim?",
                9: "Oki. Bis morgen dann",
            },
            femaleSpider: {
                1: "Ja ich kann sie sehen",
                2: "Joa... schon",
                3: "Gibts hier auch irgendwo einen Park? Dann könnten wir da spazieren gehen",
                4: "Schade",
                5: "Die Wirkung lässt auch schon wieder nach",
                6: "ich bin schon nicht mehr bei dir",
                7: "Joa. Wenn du magst können wir. Bei mir in der Nähe gibt es zwei coole Schaukeln.",
                8: "Da können wir ein bischen Quatschen, wenn du willst.",
                9: "Von hier ist es nicht weit. Ich laufe.",
            },
        },
        VanForrestOnReturn: {
            webster: {
                1: "Stimmt. Weit von mir kannst du ja nicht gar nicht wohnen, wenn ich so drüber nachdenke",
                1_1_01: "Darf ich noch auf eine Fliege mit zu dir hoch kommen?",
                1_2_01: "Wollen wir uns morgen nochmal sehen?",
                1_2_02: "Lust hab ich immer. Und dich sehen will ich natürlich auch",
                1_2_03: "Dann morgen Abend?",
                1_3_01: "Wann darf ich darauf hoffen, dass du wieder in mein Netz fällst?",
                1_3_02: "Morgen Abend klingt supi. An was hast du denn gedacht?",
                1_3_03: "Das machen wir. Dann bekomm ich noch mehr von dir",
                1_3_04: "Bis morgen. Schlaf gut",
            },
            femaleSpider: {
                1: "Soo. Da wären wir. Mein trautes Heim",
                1_1_01: "Na da ist aber jemand sehr direkt",
                1_1_02: "Aber natürlich. Ich hatte schon lange keinen mehr zum snacken",
                1_2_01: "Das wäre wunderschön. Hier um die Ecke gibts zwei Schaukeln. Hast du morgen Abend Lust?",
                1_2_02: "Ja. Dann bis Morgen",
                1_3_01: "Haha",
                1_3_02: "Hoffen darfst du viel. Aber ich denke, wir könnten morgen Abend was machen, wenn du willst?",
                1_3_03: "Hier um die Ecke gibt es zwei Schaukeln. Da könnten wir uns ja treffen",
                1_3_04: "Wenn du nicht aufpasst, bekommst du mehr von mir als dir lieb ist",
                1_3_05: "Also bis Morgen ja?",
            },
        },
        Swing: {
            webster: {
                1: "Ein Glück. Du bist noch da",
                2: "Mir ist eine Fliege dazwischen gekommen",
                3: "Kennst du doch bestimmt auch oder?",
                4: "Was gabs denn bei dir?",
                5: "Hmm OK.",
                6: "Und was machen wir jetzt?",
                1_1_01: "Ich?? Niemals!",
                1_2_01: "Da könntest du wohl Recht haben",
                7: "Den Wunsch kann ich wohl nicht ausschlagen",
            },
            femaleSpider: {
                1: "Jep. Aber lange hätte ich nicht mehr gewartet",
                2: "Was ist denn passiert? Wieso kommst du erst so spät?",
                3: "Haha. Ja klar. Da hatte ich das Glück, dass ich noch satt bin",
                4: "Och. Das glaub ich willst du nicht wissen.",
                5: "Ich dachte daran, mal zu mir zu gehen.",
                6: "Das willst du doch auch schon die ganze Zeit oder?",
                1_1_01: "Na wers glaubt. Ich kenne diese Blicke.",
                1_2_01: "War ja nicht schwer. Seid halt doch alle gleich",
                7: "Also wollen wir?",
            },
        },
        Ending: {
            webster: {
                1: "Das sieht ja aus wie bei mir",
                2: "Könnte ich mich ja glatt wohlfühlen",
                1_1_01: "Wirklich??",
                1_1_02: "Och manno",
                1_1_03: "Na gut",
                1_1_04: "Wollen wir uns dann demnächst nochmal treffen?",
                1_1_05: "Autsch. Das tut weh",
                1_1_06: "Gut... Dann noch einen schönen Rest-Abend",
                1_1_07: "Tja. Das wars wohl",
                1_1_08: "War aber vielleicht auch besser so",
                1_1_09: "Wer weiß, was sonst passiert wäre",
                1_2_01: "Hö? Was meinst du?",
                1_2_02: "Oh...",
                1_2_03: "Da ist aber jemand direkt",
                1_2_04: "Das kann ich ja nicht ausschlagen",
                1_2_05: "Ohhhhhhhhhh",
                1_2_06: "Ist daaas guuuuhuuut",
                1_2_07: "Ich glaub bei mir ist jetzt Schluss",
                1_2_08: "Ahhhhhhhhhhhhhhhhhhhhh",
                1_3_01: "Hö? Was meinst du",
                1_3_02: "Oh...",
                1_3_03: "Da ist aber jemand direkt",
                1_3_04: "Das kann ich ja nicht ausschlagen",
                1_3_05: "Ohhhhhhhhhh",
                1_3_06: "Ist daaas guuuuhuuut",
                1_3_07: "Ich glaub bei mir ist jetzt Schluss",
                1_3_08: "Ahhhhhhhhhhhhhhhhhhhhh",
                1_3_09: "Hiiiillllfffeeeeee",
            },
            femaleSpider: {
                1: "Sooo. Da wären wir. Home sweet Home",
                2: "Wir wollen ja nicht gleich übertreiben",
                1_1_01: "So. Genug rumgestöbert",
                1_1_02: "Das war ein echt schöner Abend, aber ich möchte jetzt so langsam schlafen gehen",
                1_1_03: "Tut mir leid, aber ich bin echt platt",
                1_1_04: "Ne du lass mal. Das war nett, aber du bist nicht wirklich mein Typ",
                1_1_05: "Danke. Dir auch",
                1_2_01: "Aber ich weiß, wo du dich noch wohlfühlen könntest",
                1_2_02: "Bist du so doof oder was?",
                1_2_03: "In meinem Schlafzimmer du Trottel. Mit mir!",
                1_2_04: "Ich habe hung... Ähhh Appetit auf dich",
                1_2_05: "Mmmmmhmmmm",
                1_2_06: "Himmel tuuut das guut",
                1_2_07: "Wirklich? Dann kommt jetzt der schönste Teil",
                1_2_08: "Hiergeblieben!",
                1_2_09: "Hmm...",
                1_2_10: "Das war echt lecker",
                1_2_11: "Aber leider bin ich jetzt wieder alleine",
                1_3_01: "Aber ich weiß, wo du dich noch wohlfühlen könntest",
                1_3_02: "Bist du so doof oder was?",
                1_3_03: "In meinem Schlafzimmer du Trottel. Mit mir",
                1_3_04: "Ich habe hung... Ähhh Appetit auf dich",
                1_3_05: "Mmmmmhmmmm",
                1_3_06: "Himmel tuuut das guut",
                1_3_07: "Wirklich? Dann kommt jetzt der schönste Teil",
                1_3_08: "Hiergeblieben!",
                1_3_09: "Bleib jetzt stehen",
                1_3_10: "Mist",
                1_3_11: "Er ist mir entkommen",
                1_3_12: "Naja. Kommt bestimmt bald wieder einer",
            },
        },
        ReturnAfterEnding: {
            webster: {
                1: "Ach mann...",
                2: "Ich vermisse sie",
                3: "Vermutlich spinne ich, aber ich kann nicht anders",
                4: "Ich glaube ich liebe sie",
                5: "Aber leben tu ich eigentlich auch gerne",
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
                8: "Merke: Entzückend, aber verheerend",
                9: "Das schreibe ich mir auf meinen eigenen Van",
            },
        },
        Final: {
            webster: {},
            femaleSpider: {
                1: "Tja... Wieder einer weniger",
                2: "Merke: Entzückend, aber verheerend",
                3: "Das schreibe ich mir auf meinen eigenen Van",
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
    async function moveCharacterToLocaton(character, pose, locationToMove, intervallSeconds, hideAfterReaching, startCoordinates) {
        let x;
        let y;
        if (character.name === myStory.characters.webster.name) {
            x = myStory.currentMaleCoordinates.x;
            y = myStory.currentMaleCoordinates.y;
        }
        else if (character.name === myStory.characters.phobia.name) {
            x = myStory.currentFemaleCoordinates.x;
            y = myStory.currentFemaleCoordinates.y;
        }
        if ((!x || !y) && startCoordinates) {
            x = startCoordinates.x;
            y = startCoordinates.y;
        }
        x > locationToMove.x ? (x -= 1) : "";
        x < locationToMove.x ? (x += 1) : "";
        y > locationToMove.y ? (y -= 1) : "";
        y < locationToMove.y ? (y += 1) : "";
        if (character.name === myStory.characters.webster.name) {
            myStory.currentMaleCoordinates.x = x;
            myStory.currentMaleCoordinates.y = y;
        }
        else if (character.name === myStory.characters.phobia.name) {
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
            await moveCharacterToLocaton(character, pose, locationToMove, intervallSeconds, hideAfterReaching, character.name === myStory.characters.mrobeer.name ? { x, y } : undefined);
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
            else if (character.name == myStory.characters.phobia.name) {
                position.x = myStory.currentFemaleCoordinates.x;
                position.y = myStory.currentFemaleCoordinates.y;
            }
        }
        else {
            if (character.name == myStory.characters.webster.name) {
                myStory.currentMaleCoordinates.x = position.x;
                myStory.currentMaleCoordinates.y = position.y;
            }
            else if (character.name == myStory.characters.phobia.name) {
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
        hideLoveMeter();
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
    async function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    myStory.delay = delay;
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
            alpha: "Images/FreeTransitions/puzzle.png",
            edge: 1,
        },
        normal: {
            duration: 1,
            alpha: "Images/FreeTransitions/normal.jpg",
            edge: 1,
        },
        opener: {
            duration: 1,
            alpha: "Images/FreeTransitions/opener.jpg",
            edge: 1,
        },
    };
    myStory.sounds = {
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
        moments_later: "Sounds/Effects/SPONGEBOB TIME CARDS - A FEW MOMENTS LATER.mp3",
        eternity_later: "Sounds/Effects/SPONGEBOB TIME CARDS - ONE ETERNITY LATER.mp3",
        suspense: "Sounds/Effects/Suspense.mp3",
        bloodSpill: "Sounds/Effects/blood_guts_spill.wav",
        bloodHit: "Sounds/Effects/Blood_Hit.wav",
        scaryShort: "Sounds/Effects/Suspense short.mp3",
        turnTable: "Sounds/Effects/Turntable Scratch.mp3",
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
        holiday: {
            name: "holiday",
            background: "Images/Backgrounds/holiday.jpg",
        },
        flower: {
            name: "flower",
            background: "Images/Backgrounds/flower.jpg",
        },
    };
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
            { id: "intro", scene: myStory.Intro, name: "Intro", next: "vanForrest" },
            {
                id: "vanForrest",
                scene: myStory.VanForrest,
                name: "VanForrest",
                next: "toRestaurant",
            },
            {
                id: "toRestaurant",
                scene: myStory.ToRestaurant,
                name: "toRestaurant",
                next: "restaurant",
            },
            {
                id: "restaurant",
                scene: myStory.Restaurant,
                name: "Restaurant_under_Table",
                next: "afterRestaurant",
            },
            { id: "afterRestaurant", scene: myStory.AfterRestaurant, name: "VanStreet_back" },
            {
                id: "vanForrestOnReturn",
                scene: myStory.VanForrestOnReturn,
                name: "Van in front of Home",
            },
            { id: "mushroom", scene: myStory.Mushroom, name: "Mushroom" },
            { id: "city", scene: myStory.City, name: "City", next: "swing" },
            { id: "holiday", scene: myStory.Holiday, name: "Holiday", next: "swing" },
            { id: "swing", scene: myStory.Swing, name: "Ending", next: "ending" },
            {
                id: "returnAfterEnding",
                scene: myStory.ReturnAfterEnding,
                name: "ReturnAfterEnding",
                next: "final",
            },
            { id: "final", scene: myStory.Final, name: "Final" },
            { id: "ending", scene: myStory.Ending, name: "Ending" },
            { id: "emptyScene", scene: myStory.EmptyScene, name: "EmptyScene" },
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
            Lizenz: "Befindet sich im Sound Ordner. PW. Muss angefragt werden!"
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
        await myStory.changeLocation(myStory.locations.minivan_city, myStory.transitions.normal);
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
        await myStory.changeLocation(myStory.locations.city, myStory.transitions.normal);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.tell(myStory.characters.phobia, 3);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 5);
        await myStory.newPose(myStory.characters.phobia, "sad");
        await myStory.tell(myStory.characters.phobia, 4);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 5);
        await myStory.tell(myStory.characters.phobia, 6);
        await myStory.tell(myStory.characters.webster, 6);
        myStory.ƒS.Sound.fade(myStory.sounds.city, 0, 2);
        await myStory.clearScene();
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0.3, 2, true);
        await myStory.changeLocation(myStory.locations.mushroom, myStory.transitions.normal);
        await myStory.newPose(myStory.characters.phobia, "normal", 0);
        await myStory.newPose(myStory.characters.webster, "normal", 0);
        await myStory.tell(myStory.characters.webster, 7);
        await myStory.tell(myStory.characters.phobia, 7);
        await myStory.tell(myStory.characters.phobia, 8);
        await myStory.tell(myStory.characters.webster, 8);
        await myStory.tell(myStory.characters.phobia, 9);
        await myStory.tell(myStory.characters.webster, 9);
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0, 0.5);
        await myStory.clearScene();
        myStory.dataForSave.score -= 25;
        myStory.showLoveMeter();
    }
    myStory.City = City;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function EmptyScene() {
    }
    myStory.EmptyScene = EmptyScene;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Ending() {
        myStory.currentActiveScene = "Ending";
        myStory.currentFemaleCoordinates = { x: 20, y: 85 };
        myStory.currentMaleCoordinates = { x: 75, y: 80 };
        myStory.ƒS.Sound.fade(myStory.sounds.loveAlternate, 0.3, 0.5, true);
        await myStory.changeLocation(myStory.locations.web, myStory.transitions.normal);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 2);
        switch (myStory.dataForSave.score) {
            case 0:
            case 25:
                await lowScore();
                await myStory.clearScene();
                myStory.showCredits();
                return "emptyScene";
            case 50:
            case 75:
                await midScore();
                myStory.ƒS.Sound.fade(myStory.sounds.funnyMeme, 0, 0.5);
                await myStory.clearScene();
                return "final";
            case 100:
                await highScore();
                myStory.ƒS.Sound.fade(myStory.sounds.love, 0, 0.5);
                await myStory.clearScene();
                return "returnAfterEnding";
        }
        await myStory.clearScene();
    }
    myStory.Ending = Ending;
    async function lowScore() {
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 1_1_01);
        await myStory.tell(myStory.characters.phobia, 1_1_02);
        await myStory.newPose(myStory.characters.webster, "sad");
        await myStory.tell(myStory.characters.webster, 1_1_01);
        await myStory.tell(myStory.characters.phobia, 1_1_03);
        await myStory.tell(myStory.characters.webster, 1_1_02);
        await myStory.tell(myStory.characters.webster, 1_1_03);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 1_1_04);
        await myStory.tell(myStory.characters.phobia, 1_1_04);
        await myStory.newPose(myStory.characters.webster, "sad");
        await myStory.tell(myStory.characters.webster, 1_1_04);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 1_1_05);
        await myStory.tell(myStory.characters.phobia, 1_1_05);
        myStory.ƒS.Sound.fade(myStory.sounds.loveAlternate, 0, 0.5);
        await myStory.clearScene();
        myStory.ƒS.Sound.fade(myStory.sounds.endTheme, 0.3, 0.5);
        await myStory.changeLocation(myStory.locations.flower, myStory.transitions.normal);
        await myStory.newPose(myStory.characters.webster, "sad");
        await myStory.tell(myStory.characters.webster, 1_1_07);
        await myStory.tell(myStory.characters.webster, 1_1_08);
        await myStory.tell(myStory.characters.webster, 1_1_09);
    }
    async function midScore() {
        await myStory.tell(myStory.characters.phobia, 1_2_01);
        await myStory.tell(myStory.characters.webster, 1_2_01);
        await myStory.tell(myStory.characters.phobia, 1_2_02);
        await myStory.tell(myStory.characters.phobia, 1_2_03);
        await myStory.tell(myStory.characters.webster, 1_2_02);
        await myStory.tell(myStory.characters.webster, 1_2_03);
        await myStory.tell(myStory.characters.phobia, 1_2_04);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.webster, 1_2_04);
        await myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.happy, {
            x: 50,
            y: 80,
        }, 0.025, 0);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 50,
            y: 80,
        }, 0.025, 0);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.webster, 1_2_05);
        await myStory.tell(myStory.characters.phobia, 1_2_05);
        await myStory.tell(myStory.characters.webster, 1_2_06);
        await myStory.tell(myStory.characters.phobia, 1_2_06);
        await myStory.tell(myStory.characters.webster, 1_2_07);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 1_2_07);
        await myStory.newPose(myStory.characters.phobia, "demon");
        myStory.ƒS.Sound.fade(myStory.sounds.loveAlternate, 0, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.dramatic, 0.4, 0, true);
        bothRun({ x: 130, y: 80 });
        await myStory.tell(myStory.characters.webster, 1_2_08);
        await myStory.tell(myStory.characters.phobia, 1_2_08);
        myStory.ƒS.Sound.play(myStory.sounds.bloodHit, 0.5);
        myStory.ƒS.Sound.play(myStory.sounds.bloodSpill, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.dramatic, 0, 4, true);
        myStory.ƒS.Sound.fade(myStory.sounds.funnyMeme, 0.3, 4, true);
        await myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.normal, {
            x: 25,
            y: 80,
        }, 0.025, 0);
        await myStory.tell(myStory.characters.phobia, 1_2_09);
        await myStory.tell(myStory.characters.phobia, 1_2_10);
        await myStory.tell(myStory.characters.phobia, 1_2_11);
    }
    async function highScore() {
        await myStory.tell(myStory.characters.phobia, 1_3_01);
        await myStory.tell(myStory.characters.webster, 1_3_01);
        await myStory.tell(myStory.characters.phobia, 1_3_02);
        await myStory.tell(myStory.characters.phobia, 1_3_03);
        await myStory.tell(myStory.characters.webster, 1_3_02);
        await myStory.tell(myStory.characters.webster, 1_3_03);
        await myStory.tell(myStory.characters.phobia, 1_3_04);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.webster, 1_3_04);
        await myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.happy, {
            x: 50,
            y: 80,
        }, 0.025, 0);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 50,
            y: 80,
        }, 0.025, 0);
        // await newPose(characters.phobia, "happy");
        await myStory.tell(myStory.characters.webster, 1_3_05);
        await myStory.tell(myStory.characters.phobia, 1_3_05);
        await myStory.tell(myStory.characters.webster, 1_3_06);
        await myStory.tell(myStory.characters.phobia, 1_3_06);
        await myStory.tell(myStory.characters.webster, 1_3_07);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 1_3_07);
        await myStory.newPose(myStory.characters.phobia, "demon");
        myStory.ƒS.Sound.fade(myStory.sounds.loveAlternate, 0, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.dramatic, 0.4, 0, true);
        bothRun({ x: 130, y: 80 });
        await myStory.tell(myStory.characters.webster, 1_3_08);
        await myStory.tell(myStory.characters.phobia, 1_3_08);
        bothRun({ x: -40, y: 80 });
        await myStory.tell(myStory.characters.webster, 1_3_09);
        await myStory.tell(myStory.characters.phobia, 1_3_09);
        await myStory.newPose(myStory.characters.phobia, "angry");
        myStory.ƒS.Sound.fade(myStory.sounds.dramatic, 0, 0.5, true);
        myStory.ƒS.Sound.fade(myStory.sounds.love, 0, 0.5, true);
        await myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.normal, {
            x: 25,
            y: 80,
        }, 0.025, 0);
        await myStory.tell(myStory.characters.phobia, 1_3_10);
        await myStory.tell(myStory.characters.phobia, 1_3_11);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 1_3_12);
    }
    async function bothRun(positionToMove) {
        myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.scared, {
            x: positionToMove.x,
            y: positionToMove.y,
        }, 0.0025, 0);
        myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.demon, {
            x: positionToMove.x,
            y: positionToMove.y,
        }, 0.0125, 0);
    }
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Final() {
        myStory.currentActiveScene = "Final";
        switch (myStory.dataForSave.score) {
            case 0:
            case 25:
                await lowScore();
                break;
            case 50:
            case 75:
            case 100:
                await highScore();
                break;
        }
        await myStory.clearScene();
        myStory.showCredits();
    }
    myStory.Final = Final;
    async function lowScore() { }
    async function highScore() {
        myStory.ƒS.Sound.fade(myStory.sounds.endTheme, 0.3, 0.5, true);
        await myStory.changeLocation(myStory.locations.graveyard, myStory.transitions.puzzle);
        await myStory.newPose(myStory.characters.phobia, "normal", 0, { x: 15, y: 90 });
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.newPose(myStory.characters.phobia, "sad");
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 3);
        return "emptyScene";
    }
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Holiday() {
        myStory.currentActiveScene = "Holiday";
        myStory.ƒS.Sound.fade(myStory.sounds.holiday, 0.3, 2, true);
        await myStory.changeLocation(myStory.locations.holiday, myStory.transitions.normal);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.newPose(myStory.characters.phobia, "normal", 1);
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.tell(myStory.characters.phobia, 3);
        await myStory.tell(myStory.characters.webster, 2);
        // await newPose(characters.mrobeer, "normal", undefined, { x: 50, y: 100 });
        myStory.moveCharacterToLocaton(myStory.characters.mrobeer, myStory.characters.mrobeer.pose.normal, {
            x: 50,
            y: 50,
        }, 0.0025, 0, { x: 50, y: 0 });
        myStory.ƒS.Sound.play(myStory.sounds.turnTable, 0.5);
        await myStory.newPose(myStory.characters.phobia, "scared");
        await myStory.tell(myStory.characters.mrobeer, 1);
        await myStory.tell(myStory.characters.phobia, 4);
        await myStory.newPose(myStory.characters.webster, "angry");
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.mrobeer, 2);
        await myStory.tell(myStory.characters.mrobeer, 3);
        await myStory.tell(myStory.characters.mrobeer, 4);
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.phobia, 5);
        await myStory.ƒS.Character.hide(myStory.characters.mrobeer);
        await myStory.tell(myStory.characters.webster, 5);
        await myStory.newPose(myStory.characters.phobia, "demon");
        myStory.ƒS.Sound.play(myStory.sounds.suspense, 0.5);
        await myStory.tell(myStory.characters.phobia, 6);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.webster, 6);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 7);
        await myStory.tell(myStory.characters.phobia, 8);
        await myStory.tell(myStory.characters.phobia, 9);
        await myStory.tell(myStory.characters.webster, 7);
        myStory.ƒS.Sound.fade(myStory.sounds.holiday, 0, 0.5);
        await myStory.clearScene();
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0.3, 2, true);
        await myStory.changeLocation(myStory.locations.mushroom, myStory.transitions.normal);
        await myStory.newPose(myStory.characters.phobia, "normal", 0);
        await myStory.newPose(myStory.characters.webster, "normal", 0);
        await myStory.tell(myStory.characters.webster, 8);
        await myStory.tell(myStory.characters.phobia, 10);
        await myStory.tell(myStory.characters.phobia, 11);
        await myStory.tell(myStory.characters.webster, 9);
        await myStory.tell(myStory.characters.phobia, 12);
        await myStory.tell(myStory.characters.webster, 10);
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0, 0.5);
        await myStory.clearScene();
        myStory.showLoveMeter(75);
    }
    myStory.Holiday = Holiday;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Intro() {
        myStory.currentActiveScene = "Intro";
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0.3, 2, true);
        await myStory.changeLocation(myStory.locations.web, myStory.transitions.opener);
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
        await myStory.changeLocation(myStory.locations.mushroom, myStory.transitions.normal);
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
        myStory.ƒS.Sound.play(myStory.sounds.moments_later, 0.5);
        await myStory.newPose(myStory.characters.phobia, "sad");
        await myStory.tell(myStory.characters.phobia, 5);
        myStory.ƒS.Sound.fade(myStory.sounds.wakeup, 0, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.drugs, 0.3, 5, true);
        await myStory.newPose(myStory.characters.phobia, "scared");
        await myStory.tell(myStory.characters.phobia, 6);
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.webster, 5);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 7);
        await myStory.tell(myStory.characters.phobia, 8);
        let decitionAnswer = {
            holiday: "Auf einer Liege im Urlaub",
            city: "In einer Großstadt mit vielen geilen Karren",
        };
        let decition = await myStory.ƒS.Menu.getInput(decitionAnswer, "decision");
        switch (decition) {
            case decitionAnswer.city:
                await myStory.tell(myStory.characters.webster, 1_2_01);
                await myStory.clearScene();
                myStory.ƒS.Sound.fade(myStory.sounds.drugs, 0, 0.5);
                return "city";
            case decitionAnswer.holiday:
                await myStory.tell(myStory.characters.webster, 1_1_01);
                await myStory.clearScene();
                myStory.ƒS.Sound.fade(myStory.sounds.drugs, 0, 0.5);
                return "holiday";
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
        await myStory.changeLocation(myStory.locations.restaurant_underTable, myStory.transitions.normal);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.newPose(myStory.characters.mrobeer, "normal", 1, { x: 50, y: 60 });
        await myStory.tell(myStory.characters.mrobeer, 1);
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.tell(myStory.characters.mrobeer, 2);
        await myStory.tell(myStory.characters.mrobeer, 3);
        await myStory.tell(myStory.characters.mrobeer, 4);
        await myStory.tell(myStory.characters.phobia, 3);
        await decition();
        await myStory.newPose(myStory.characters.webster, "happy");
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.mrobeer, 5);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.newPose(myStory.characters.mrobeer, "normal", 1, { x: -50, y: 60 });
        myStory.ƒS.Sound.play(myStory.sounds.eternity_later, 0.5);
        await myStory.delay(2500);
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.tell(myStory.characters.phobia, 4);
        await myStory.tell(myStory.characters.phobia, 5);
        await myStory.tell(myStory.characters.webster, 5);
        await myStory.newPose(myStory.characters.mrobeer, "normal", 1, { x: 50, y: 60 });
        await myStory.tell(myStory.characters.mrobeer, 6);
        await myStory.tell(myStory.characters.phobia, 6);
        myStory.showLoveMeter(25);
        myStory.ƒS.Sound.fade(myStory.sounds.restaurant_people, 0, 0.5);
        myStory.ƒS.Sound.fade(myStory.sounds.restaurant_jazz, 0, 0.5);
        await myStory.clearScene();
    }
    myStory.Restaurant = Restaurant;
    async function decition() {
        let decitionAnswer = {
            yes: "Ja",
            asAlways: "Stammgericht",
        };
        let decition = await myStory.ƒS.Menu.getInput(decitionAnswer, "decision");
        switch (decition) {
            case decitionAnswer.yes:
                await myStory.tell(myStory.characters.webster, 1_1_01);
                await myStory.tell(myStory.characters.webster, 1_1_02);
                break;
            case decitionAnswer.asAlways:
                await myStory.tell(myStory.characters.webster, 1_2_01);
                await myStory.tell(myStory.characters.webster, 1_2_02);
                await myStory.tell(myStory.characters.phobia, 1_2_01);
                break;
        }
    }
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function ReturnAfterEnding() {
        await myStory.changeLocation(myStory.locations.flower, myStory.transitions.normal);
        myStory.ƒS.Sound.fade(myStory.sounds.funnyMeme, 0.3, 0.5, true);
        myStory.currentActiveScene = "ReturnAfterEnding";
        myStory.currentFemaleCoordinates = { x: 0, y: 95 };
        myStory.currentMaleCoordinates = { x: 75, y: 80 };
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
        return "emptyScene";
    }
    myStory.ReturnAfterEnding = ReturnAfterEnding;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function Swing() {
        myStory.currentActiveScene = "Swing";
        myStory.ƒS.Sound.fade(myStory.sounds.loveAlternate, 0.3, 3, true);
        await myStory.changeLocation(myStory.locations.swing, myStory.transitions.normal);
        myStory.currentMaleCoordinates = { x: 100, y: 80 };
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.happy, {
            x: 75,
            y: 80,
        }, 0.0025, 0);
        await myStory.tell(myStory.characters.webster, 1);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.phobia, 2);
        await myStory.tell(myStory.characters.webster, 2);
        await myStory.tell(myStory.characters.webster, 3);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 3);
        await myStory.newPose(myStory.characters.webster, "normal");
        await myStory.tell(myStory.characters.webster, 4);
        await myStory.newPose(myStory.characters.phobia, "normal");
        await myStory.tell(myStory.characters.phobia, 4);
        await myStory.tell(myStory.characters.webster, 5);
        await myStory.tell(myStory.characters.webster, 6);
        await myStory.tell(myStory.characters.phobia, 5);
        await myStory.tell(myStory.characters.phobia, 6);
        await decition();
        await myStory.tell(myStory.characters.phobia, 7);
        await myStory.tell(myStory.characters.webster, 7);
        myStory.clearScene();
        myStory.dataForSave.score += 25;
        myStory.showLoveMeter();
    }
    myStory.Swing = Swing;
    async function decition() {
        let decitionAnswer = {
            no: "Nein",
            yes: "Ja",
        };
        let decition = await myStory.ƒS.Menu.getInput(decitionAnswer, "decision");
        switch (decition) {
            case decitionAnswer.no:
                await myStory.newPose(myStory.characters.webster, "scared");
                await myStory.tell(myStory.characters.webster, 1_1_01);
                await myStory.tell(myStory.characters.phobia, 1_1_01);
                await myStory.newPose(myStory.characters.webster, "normal");
            case decitionAnswer.yes:
                await myStory.newPose(myStory.characters.webster, "happy");
                await myStory.tell(myStory.characters.webster, 1_2_01);
                await myStory.tell(myStory.characters.phobia, 1_2_01);
                await myStory.newPose(myStory.characters.webster, "normal");
        }
    }
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function ToRestaurant() {
        myStory.currentActiveScene = "ToRestaurant";
        myStory.ƒS.Sound.fade(myStory.sounds.explore, 0.3, 2, true);
        await myStory.changeLocation(myStory.locations.minivan_city, myStory.transitions.normal);
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
        await myStory.changeLocation(myStory.locations.minivan_forrest, myStory.transitions.normal);
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
    }
    myStory.VanForrest = VanForrest;
})(myStory || (myStory = {}));
var myStory;
(function (myStory) {
    async function VanForrestOnReturn() {
        myStory.currentActiveScene = "VanForrestOnReturn";
        await myStory.changeLocation(myStory.locations.minivan_forrest, myStory.transitions.normal);
        myStory.ƒS.Sound.fade(myStory.sounds.love, 0.3, 0.5, true);
        await myStory.tell(myStory.characters.phobia, 1);
        await myStory.tell(myStory.characters.webster, 1);
        // await newPose(characters.maleSpider, "happy",1);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_open, 0.4);
        await myStory.moveCharacterToLocaton(myStory.characters.phobia, myStory.characters.phobia.pose.normal, {
            x: 25,
            y: 80,
        }, 0.025, 0);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_close, 0.4);
        await myStory.moveCharacterToLocaton(myStory.characters.webster, myStory.characters.webster.pose.normal, {
            x: 75,
            y: 80,
        }, 0.025, 0);
        myStory.ƒS.Sound.play(myStory.sounds.car_door_close, 0.4);
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
                myStory.ƒS.Sound.fade(myStory.sounds.love, 0, 0.5);
                myStory.showLoveMeter();
                return "ending";
            case decitionAnswer.tomorrow:
                await dialogueMeetTomorrow();
                myStory.showLoveMeter(50);
                await myStory.clearScene();
                myStory.ƒS.Sound.fade(myStory.sounds.love, 0, 0.5);
                return "swing";
            case decitionAnswer.sometimes:
                await dialogueWhenNextMeeting();
                myStory.showLoveMeter(50);
                await myStory.clearScene();
                myStory.ƒS.Sound.fade(myStory.sounds.love, 0, 0.5);
                return "swing";
        }
    }
    myStory.VanForrestOnReturn = VanForrestOnReturn;
    async function dialogueUpstairs() {
        await myStory.tell(myStory.characters.webster, 1_1_01);
        await myStory.newPose(myStory.characters.phobia, "angry");
        await myStory.tell(myStory.characters.phobia, 1_1_01);
        myStory.ƒS.Sound.play(myStory.sounds.suspense, 0.4);
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
        myStory.ƒS.Sound.play(myStory.sounds.suspense, 0.4);
        await myStory.newPose(myStory.characters.phobia, "demon");
        await myStory.tell(myStory.characters.phobia, 1_3_04);
        await myStory.newPose(myStory.characters.phobia, "happy");
        await myStory.tell(myStory.characters.phobia, 1_3_05);
        await myStory.tell(myStory.characters.webster, 1_3_04);
    }
})(myStory || (myStory = {}));
//# sourceMappingURL=Template.js.map