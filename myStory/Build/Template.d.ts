declare namespace myStory {
    const dialogues: {
        Intro: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
                10: string;
                11: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
            };
        };
        VanForrest: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
            };
        };
        ToRestaurant: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
            };
        };
        Restaurant: {
            webster: {
                1: string;
                2: string;
                3: string;
                1101: string;
                1102: string;
                1201: string;
                1202: string;
                4: string;
                5: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                1201: string;
                4: string;
                5: string;
                6: string;
            };
            obee: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
            };
        };
        AfterRestaurant: {
            webster: {
                1: string;
                1101: string;
                1102: string;
                1201: string;
                1301: string;
                1302: string;
            };
            femaleSpider: {
                1: string;
                1101: string;
                1201: string;
                1202: string;
                1203: string;
                1204: string;
                1301: string;
                1302: string;
            };
        };
        Mushroom: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                1101: string;
                1201: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
            };
        };
        Holiday: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
                10: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
                10: string;
                11: string;
                12: string;
            };
            obee: {
                1: string;
                2: string;
                3: string;
                4: string;
            };
        };
        City: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
            };
        };
        VanForrestOnReturn: {
            webster: {
                1: string;
                1101: string;
                1201: string;
                1202: string;
                1203: string;
                1301: string;
                1302: string;
                1303: string;
                1304: string;
            };
            femaleSpider: {
                1: string;
                1101: string;
                1102: string;
                1201: string;
                1202: string;
                1301: string;
                1302: string;
                1303: string;
                1304: string;
                1305: string;
            };
        };
        Swing: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                1101: string;
                1201: string;
                7: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                1101: string;
                1201: string;
                7: string;
            };
        };
        Ending: {
            webster: {
                1: string;
                2: string;
                1101: string;
                1102: string;
                1103: string;
                1104: string;
                1105: string;
                1106: string;
                1107: string;
                1108: string;
                1109: string;
                1201: string;
                1202: string;
                1203: string;
                1204: string;
                1205: string;
                1206: string;
                1207: string;
                1208: string;
                1301: string;
                1302: string;
                1303: string;
                1304: string;
                1305: string;
                1306: string;
                1307: string;
                1308: string;
                1309: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                1101: string;
                1102: string;
                1103: string;
                1104: string;
                1105: string;
                1201: string;
                1202: string;
                1203: string;
                1204: string;
                1205: string;
                1206: string;
                1207: string;
                1208: string;
                1209: string;
                1210: string;
                1211: string;
                1301: string;
                1302: string;
                1303: string;
                1304: string;
                1305: string;
                1306: string;
                1307: string;
                1308: string;
                1309: string;
                1310: string;
                1311: string;
                1312: string;
            };
        };
        ReturnAfterEnding: {
            webster: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
                10: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
                8: string;
                9: string;
            };
        };
        Final: {
            webster: {};
            femaleSpider: {
                1: string;
                2: string;
                3: string;
            };
        };
    };
}
declare namespace myStory {
    function changeColorTextbox(): void;
}
declare function changeColorOfContent(r: number, g: number, b: number): void;
declare function changeColorOfName(r: number, g: number, b: number): void;
declare function getAverageRGB(): {
    r: number;
    g: number;
    b: number;
};
declare function RGBtoHSV(r: number, g: number, b: number): {
    h: number;
    s: number;
    v: number;
};
declare function HSVtoRGB(h: number, s: number, v: number): {
    r: number;
    g: number;
    b: number;
};
declare namespace myStory {
    function moveCharacterToLocaton(character: typeof characters.webster | typeof characters.phobia | typeof characters.mrobeer, pose: typeof characters.webster.pose.angry, locationToMove: {
        x: number;
        y: number;
    }, intervallSeconds: number, hideAfterReaching?: number, startCoordinates?: {
        x: number;
        y: number;
    }): Promise<void>;
    function newPose(character: typeof characters.webster | typeof characters.phobia | typeof characters.mrobeer, mood: "angry" | "sad" | "normal" | "scared" | "happy" | "demon", update?: number, position?: {
        x: number;
        y: number;
    }): Promise<void>;
    function tell(character: typeof characters.webster | typeof characters.phobia | typeof characters.mrobeer, numberOfDialog: number | string): Promise<void>;
    function changeLocation(location: typeof locations.web, transition: typeof transitions.noContent): Promise<void>;
    function clearScene(): Promise<void>;
    function hideLoveMeter(): void;
    function showLoveMeter(value?: 0 | 25 | 50 | 75 | 100): void;
    function delay(ms: number): Promise<unknown>;
}
declare namespace myStory {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let currentMaleCoordinates: {
        x: number;
        y: number;
    };
    let currentFemaleCoordinates: {
        x: number;
        y: number;
    };
    let currentActiveScene: string;
    let transitions: {
        noContent: {
            duration: number;
            alpha: string;
            edge: number;
        };
        puzzle: {
            duration: number;
            alpha: string;
            edge: number;
        };
        normal: {
            duration: number;
            alpha: string;
            edge: number;
        };
        opener: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        wakeup: string;
        explore: string;
        city: string;
        holiday: string;
        restaurant_people: string;
        restaurant_jazz: string;
        car_interior: string;
        dramatic: string;
        love: string;
        drugs: string;
        funnyMeme: string;
        endTheme: string;
        loveAlternate: string;
        drums: string;
        car_door_open: string;
        car_door_close: string;
        moments_later: string;
        eternity_later: string;
        suspense: string;
        bloodSpill: string;
        bloodHit: string;
        scaryShort: string;
        turnTable: string;
    };
    let locations: {
        web: {
            name: string;
            background: string;
        };
        graveyard: {
            name: string;
            background: string;
        };
        restaurant_underTable: {
            name: string;
            background: string;
        };
        minivan_city: {
            name: string;
            background: string;
        };
        minivan_forrest: {
            name: string;
            background: string;
        };
        mushroom: {
            name: string;
            background: string;
        };
        swing: {
            name: string;
            background: string;
        };
        city: {
            name: string;
            background: string;
        };
        holiday: {
            name: string;
            background: string;
        };
        flower: {
            name: string;
            background: string;
        };
    };
    let characters: {
        mrobeer: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        webster: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                sad: string;
                normal: string;
                scared: string;
            };
        };
        phobia: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
                sad: string;
                normal: string;
                scared: string;
                demon: string;
            };
        };
    };
    let dataForSave: {
        score: number;
    };
}
declare namespace myStory {
    function showCredits(): void;
}
declare namespace myStory {
    function AfterRestaurant(): ƒS.SceneReturn;
}
declare namespace myStory {
    function City(): ƒS.SceneReturn;
}
declare namespace myStory {
    function EmptyScene(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Ending(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Final(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Holiday(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Intro(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Mushroom(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Restaurant(): ƒS.SceneReturn;
}
declare namespace myStory {
    function ReturnAfterEnding(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Swing(): ƒS.SceneReturn;
}
declare namespace myStory {
    function ToRestaurant(): ƒS.SceneReturn;
}
declare namespace myStory {
    function VanForrest(): ƒS.SceneReturn;
}
declare namespace myStory {
    function VanForrestOnReturn(): ƒS.SceneReturn;
}
