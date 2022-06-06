declare namespace myStory {
    const dialogues: {
        Intro: {
            Narrator: {
                T0001: string;
                T0002: string;
            };
            maleSpider: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
            };
            femaleSpider: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
            };
        };
        Scene1: {
            Narrator: {
                T0001: string;
                T0002: string;
            };
            maleSpider: {
                T0001: string;
                T0002: string;
            };
            femaleSpider: {
                T0001: string;
                T0002: string;
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
    function moveCharacterToLocaton(character: typeof characters.maleSpider | typeof characters.femaleSpider, pose: typeof characters.maleSpider.pose.angry, locationToMove: {
        x: number;
        y: number;
    }, intervallSeconds: number, hideAfterReaching?: number): Promise<void>;
    function newPose(character: typeof characters.maleSpider | typeof characters.femaleSpider, mood: "angry" | "sad" | "normal" | "scared" | "happy" | "demon", position?: {
        x: number;
        y: number;
    }, update?: number): Promise<void>;
    function tell(character: typeof characters.maleSpider | typeof characters.femaleSpider, numberOfDialog: number): Promise<void>;
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
        restaurant_onTable: {
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
        narrator: {
            name: string;
        };
        maleSpider: {
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
        femaleSpider: {
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
    function showCredits(): void;
    function changeLocation(location: typeof locations.web, transition: typeof transitions.noContent): Promise<void>;
}
declare namespace myStory {
    function Intro(): ƒS.SceneReturn;
}
declare namespace myStory {
    function Scene1(): ƒS.SceneReturn;
}
