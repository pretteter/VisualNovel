namespace myStory {
  const sources: any = {
    Bilder: {
      Bild1: "xyz",
      picture2: "cxy",
    },
    Charakter: { Spinnen: "Tamara Auber" },
  };

  export function showCredits() {
    let string: string = "CREDITS";
    ƒS.Text.setClass("credits");
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
    ƒS.Text.print(string);
  }
}
