namespace myStory {
  const sources: any = {
    Bilder: {
      Spinnennetz: "Pixabay auf pexels.com",
      Van_Natur: "Lorena Martínez auf pexels.com",
      Van_Stadt: "Nubia Navarro (nubikini) auf pexels.com",
      Restaurant: "cottonbro auf pexels.com",
      Pilz: "Egor Kamelev auf pexels.com",
      Liegen: "Pixabay auf pexels.com",
      Stadt: "Alex Azabache auf pexels.com",
      Schaukeln: "2023852 auf pixabay.com",
    },
    Bearbeitung_der_Bilder_durch: { Bearbeiter: "Jan Christmeier" },
    Charakter: {
      Spinnen: "Tamara Auber",
      Biene: "Clker-Free-Vector-Images auf pixabay.com",
    },
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
