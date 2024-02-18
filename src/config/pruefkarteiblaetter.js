const anschlagMittel = [
  {
    name: "Ketten (Kettengehänge)",
    category: "anschlagMittel",
    id: "am-001",
    visualInspection: [
      "keine Verformung, Anrisse, Kerben an Kettengliedern oder Zubehörteilen",
      "kein Kettenteil infolge Überlastung steifgezogen",
      "die Kennzeichnung ist leserlich vorhanden",
      "keine Vergrößerung des Hakenmauls um mehr als 10 %",
      "keine Längung – auch einzelner Kettenglieder – um mehr als 5 % (bei Verformung eines Kettengliedes)",
      "Keine Abnahme der Gliederdicke an irgendeiner Stelle um mehr als 10 % der Nenndicke",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Schäkel",
    category: "anschlagMittel",
    id: "am-002",
    visualInspection: [
      "keine Verformung und Anrisse",
      "keine Abnützung von mehr als 10 % der ursprünglichen Dicke",
      "keine Vergrößerung des Hakenmauls um mehr als 10 %",
      "Schäkelbolzen leichtgängig, Gewinde nicht beschädigt",
      "Tragfähigkeitskennzeichnung vorhanden",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Stahlseil",
    category: "anschlagMittel",
    id: "am-003",
    visualInspection: [
      "kein Bruch einer Litze oder unzulässige Drahtbrüche",
      "keine Quetschung um mehr als 20 % seines Durchmessers",
      "keine Knicke, Klanken und Aufdoldungen",
      "keine Beschädigungen des Spleißes oder der Pressklemme und Kauschen",
      "kein besonders starker Verschleiß (Verringerung des Seilduchmessers)",
      "keine Korrossionsnarben",
      "keine schädliche Hitzeeinwirkung",
      "die Kennzeichnung ist vorhanden und noch leserlich",
      "Lasthaken und Sicherung in Ordnung (Greifzugseil)",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "textile Anschlagmittel",
    category: "anschlagMittel",
    id: "am-004",
    visualInspection: [
      "keine Schäden an Fasern bzw. des Schutzmantels",
      "keine Beschädigung an den Verbindungen (Spleiße und Nähte)",
      "keine Schäden durch thermische Beanspruchung",
      "keine Schäden durch Schadstoffe oder Stockflecken (Schimmel)",
      "Etikettbeschriftung lesbar vorhanden",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Umlenkrolle",
    category: "anschlagMittel",
    id: "am-005",
    visualInspection: [
      "Aufnahme der Anschlagmittel in Ordnung",
      "Leichtgängigkeit der Rolle",
      "Schmierung durchgeführt (Schmiernippel)",
      "Gesamtzustand in Ordnung (keine Dellen, Verformungen)",
      "Tragfähigkeitskennzeichnung vorhanden",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Zurrgurte",
    category: "anschlagMittel",
    id: "am-006",
    visualInspection: [
      "keine Schäden an Fasern",
      "keine Beschädigung an den Verbindungen (Spleiße, Nähte)",
      "keine Schäden durch thermische Beanspruchung",
      "keine Schäden durch Schadstoffe oder Stockflecken (Schimmel)",
      "Etikettbeschriftung lesbar vorhanden",
      "Beschläge in Ordnung und funktionstüchtig",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
];

const technischeGeraete = [
  {
    name: "Druckbelüfter",
    category: "technischeGeraete",
    id: "tg-001",
    visualInspection: [
      "Allgemeinzustand des Geräts in Ordnung (Reinheit, Dichtheit, Öl oder Treibstoff)",
      "Bedienelemente in Ordnung",
      "Schutzgitter in Ordnung und alle Befestigungsschrauben fest",
      "Lüfterrad in Ordnung (ohne Beschädigung)",
      "Luftdruck in den Rädern in Ordnung",
      "Ölstand in Ordnung",
      "Treibstofftank voll (Treibstoff max. 3 Monate alt)",
      "Zubehör (z. B. Keile) vorhanden",
      "Neigungsverstellung in Ordnung",
    ],
    functionTest: [
      "Motorwartung durchgeführt (Ölwechsel jährlich)",
      "Gerät lässt sich leicht starten",
    ],
    supplementaryTest: [],
  },

  {
    name: "Druckschläuche (ÖNORM F2105)",
    category: "technischeGeraete",
    id: "tg-002",
    visualInspection: [
      "Beschaffenheit der Kupplungseinbände",
      "Überstehende Drahtenden sind versenkt",
      "Sperringe sitzen fest",
      "Druckdichtungen sind in Ordnung",
    ],
    functionTest: [
      "Druck langsam und gleichmäßig auf 8 bar bei A- und D-Schlauch, 12 bar bei C- und B-Schlauch, 40 bar bei HD-Schlauch steigern",
      "eine Minute Druckbelastung",
    ],
    supplementaryTest: [],
  },

  {
    name: "Motorkettensäge/Rettungssäge",
    category: "technischeGeraete",
    id: "tg-003",
    visualInspection: [
      "Allgemeinzustand des Geräts in Ordnung (Reinheit, Dichtheit, Öl oder Treibstoff)",
      "Bedienelemente in Ordnung",
      "Kette: Schärfezustand überprüfen, Kettenspannung in Ordnung; bei Bedarf Kette schärfen / nachspannen",
      "Führungsschiene keine Abnützungen / Beschädigungen",
      "Kettenrad in Ordnung",
      "Luftfilter gereinigt",
      "Leerlauf kontrollieren: Kette darf nicht mitlaufen – Vergaser",
      "Zubehör (Reservekette, Gemisch-Öl-Behälter, Trichter) vorhanden und in Ordnung",
      "Schnittschutzhose vorhanden und in Ordnung",
      "Treibstofftank, Schmieröltank gereinigt; Treibstofffilter gereinigt (Treibstoffalter beachten)",
      "Kühlluft-Ansaugschlitze gereinigt bzw. in Ordnung",
    ],
    functionTest: [
      "Motorwartung durchgeführt (Ölwechsel jährlich)",
      "Gerät lässt sich leicht starten",
      "Kettenbremse in Ordnung",
      "Kettenschmierung überprüft und in Ordnung",
    ],
    supplementaryTest: [
    ],
  },
  {
    name: "Saugschläuche",
    category: "technischeGeraete",
    id: "tg-004",
    visualInspection: [
      "Beschaffenheit der Innengummierung in Ordnung",
      "Beschaffenheit des Außengewebes in Ordnung",
      "Beschaffenheit der Schutzleinen in Ordnung",
      "Sperringe sitzen fest",
      "Saug- / Druckdichtungen sind in Ordnung",
    ],
    functionTest: [
      "Saugprobe: Ein erreichter Unterdruck von 0,8 bar sinkt nicht mehr als 0,1 bar in einer Minute ab",
    ],
    supplementaryTest: [],
  },
  {
    name: "tragbare Feuerlöscher",
    category: "technischeGeraete",
    id: "tg-005",
    visualInspection: [
      "Sichtprüfung",
      "zweijährige Prüfung durch Sachkundigen",
    ],
    functionTest: [],
  },
  {
    name: "Tragkraftspritze - Schmutzwasserpumpe",
    category: "technischeGeraete",
    id: "tg-006",
    visualInspection: ["keine Mängel feststellbar"],
    functionTest: [
      "Motor springt leicht an (Revesierstarteinrichtung überprüfen)",
      "Kupplung in Ordnung",
      "ca. 30 Minuten störungsfreier Betrieb",
      "Trockensaugprobe in Ordnung (Entleerung zu; Unterdruck auf ca. 0,8 bar; abstellen: Druck darf innerhalb von 1 Minute um max. 0,1 bar absinken)",
      "Entleeren, Trockensaugen",
      "Ölstandkontrolle, Treibstoff auffüllen (auf Treibstoffalter achten)",
      "Motorölwechsel durchgeführt",
      "Öl der Entlüftungseinrichtung getauscht",
      "Schmierstellen abgeschmiert",
    ],
    supplementaryTest: [
      "Wasser bei einer Saufhöhe von ca. 7,5 m in einer Minute im Pumpenraum (Druckmanometer)",
      "Kupplung in Ordnung",
      "Provisorische Leistungsprüfung",
    ],
  },
];

const pruefkarteiblaetter = {
  config: [
    {
      categoryName: "anschlagMittel",
      categoryDisplayName: "Anschlagmittel",
    },
    {
      categoryName: "technischeGeraete",
      categoryDisplayName: "Technische Geräte",
    },
  ],
  data: { anschlagMittel, technischeGeraete },
};

export default pruefkarteiblaetter;
