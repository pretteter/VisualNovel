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
            };
            femaleSpider: {
                1: string;
                2: string;
            };
            obee: {
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
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
            };
        };
        Holliday: {
            webster: {
                1: string;
                2: string;
                1101: string;
                1201: string;
                3: string;
                4: string;
                5: string;
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
                1101: string;
                4: string;
                5: string;
                6: string;
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
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
            };
        };
        Home: {
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
            };
            femaleSpider: {
                1: string;
                2: string;
                3: string;
            };
        };
        Ending: {
            webster: {
                1: string;
                2: string;
                3: string;
            };
            femaleSpider: {
                1: string;
            };
        };
        ReturnAfterEnding: {
            webster: {
                1: string;
                2: string;
                3: string;
            };
            femaleSpider: {
                1: string;
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
    }, intervallSeconds: number, hideAfterReaching?: number): Promise<void>;
    function newPose(character: typeof characters.webster | typeof characters.phobia | typeof characters.mrobeer, mood: "angry" | "sad" | "normal" | "scared" | "happy" | "demon", update?: number, position?: {
        x: number;
        y: number;
    }): Promise<void>;
    function tell(character: typeof characters.webster | typeof characters.phobia | typeof characters.mrobeer, numberOfDialog: number | string): Promise<void>;
    function changeLocation(location: typeof locations.web, transition: typeof transitions.noContent): Promise<void>;
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
        test: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sounds: {
        nightclub: string;
        click: string;
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
        minivan1: {
            name: string;
            background: string;
        };
        minivan2: {
            name: string;
            background: string;
        };
        fly_agaric: {
            name: string;
            background: string;
        };
    };
    let items: {
        item1: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        item2: {
            name: string;
            description: string;
            image: string;
        };
        item3: {
            name: string;
            description: string;
            image: string;
        };
        item4: {
            name: string;
            description: string;
            image: string;
        };
        item5: {
            name: string;
            description: string;
            image: string;
        };
        item6: {
            name: string;
            description: string;
            image: string;
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
        nameProtagonist: string;
        score: number;
    };
}
declare namespace myStory {
    function AfterRestaurant(): ƒS.SceneReturn;
}
declare namespace myStory {
    function showCredits(): void;
}
declare namespace myStory {
    function Ending(): ƒS.SceneReturn;
}
declare namespace myStory {
    function FlyAgaric(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Intro(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Restaurant(): ƒS.SceneReturn;
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
