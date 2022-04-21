"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    // transition
    Template.transitions = {
        puzzle: {
            duration: 1,
            alpha: "../Images/FreeTransitions/JigsawThemedTransitions/puzzle.png",
            edge: 1
        }
    };
    Template.sounds = {
        // theme
        nightclub: "Pfad",
        // soundeffects
        click: "Pfad"
    };
    Template.locations = {
        bensch: {
            name: "Nightpark",
            background: "Pfad",
        }
    };
    Template.characters = {
        narrator: {
            name: ""
        },
        aisaka: {
            name: "Aisaka",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Pfad",
                happy: "Pfad"
            }
        }
    };
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: Template.Scene, name: "Scene" }
        ];
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        let text = {
            Narrator: {
                T0001: "",
                T0002: ""
            },
            Protagonist: {
                T0001: ""
            }
        };
        await Template.ƒS.Speech.tell(Template.characters.aisaka, text.Protagonist.T0001);
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map