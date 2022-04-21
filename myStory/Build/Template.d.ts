declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transitions: {
        puzzle: {
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
        bensch: {
            name: string;
            background: string;
        };
    };
    let characters: {
        narrator: {
            name: string;
        };
        aisaka: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                angry: string;
                happy: string;
            };
        };
    };
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}