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

const elektrischeGeraete = [
  {
    name: "Akku-/Batteriebetriebene Geräte",
    category: "elektrischeGeraete",
    id: "eg-001",
    visualInspection: [
      "Allgemeinzustand des Gerätes in Ordnung",
      "Gehäuse in Ordnung",
      "Ladezustand des Gerätes in Ordnung",
      "Entladung / Ladung durchgeführt",
      "neuer Akku / Batterie eingesetzt",
      "Zubehör vorhanden und in Ordnung",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Kabelgebundene elektrische Geräte",
    category: "elektrischeGeraete",
    id: "eg-002",
    visualInspection: [
      "Gehäuse des Gerätes in Ordnung",
      "keine Verletzung des Kabelmantels",
      "Kabeleinführungen und Stecker in Ordnung",
      "Probelauf (ev. Links-Rechtslauf) in Ordnung",
      "Schutzleiterprüfung in Ordnung",
      "Zubehör vorhanden und in Ordnung",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Stromerzeuger (ÖBFV RL ET-01)",
    category: "elektrischeGeraete",
    id: "eg-003",
    visualInspection: [
      "Allgemeinzustand des Gerätes in Ordnung",
      "Lüftungsgitter und Kühlrippen frei von Verunreinigungen",
      "Generator mit dem Tragerahmen fest verbunden",
      "Leitungsschutzschalter (probeweise Betätigung), Steckdosen, Mess- und Anzeigeinstrumente augenscheinlich in Ordnung",
      "Treibstofftank voll (Treibstoff max. 3 Monate alt) und Ölkontrolle",
      "Zubehör vorhanden und in Ordnung",
    ],
    functionTest: [
      "Reversierstarter und / oder el. Starter in Ordnung",
      "augenscheinliche Untersuchung der Anzeigen während des Lastanlaufes",
      "Polwendeschalter in Ordnung",
      "Schutzleiterprüfeinrichtung funktioniert; Prüflampe, Prüfkabel und Prüfspitze in Ordnung",
      "Schutzleiterprüfung am Gerät durchgeführt und Schutzleiter in Ordnung",
      "Notstoppeinrichtung in Ordnung",
      "Lastprüflauf (ca. 1 Stunde) durchgeführt",
    ],
    supplementaryTest: [
      "Ölwechsel durchgeführt",
      "Schmierstellen abgeschmiert",
      "Luftfilter gereinigt, getauscht",
      "Generatorwartung (nach ca. 2.000 Betriebsstunden)",
      "Überprüfung durch Fachkundigen (Elektriker, …)",
    ],
  },
];

const feuerwehrgurt = [
  {
    name: "Feuerwehrgurt (ÖNORM F4030 an 04/2008)",
    category: "feuerwehrgurt",
    id: "fg-001",
    visualInspection: [
      "Gurtband nicht abgenützt, weist keine Flecken infolge Einwirkung schädlicher Stoffe auf",
      "Gurtband hat keine Risse oder sonstige Beschädigungen",
      "Gurtband an Nietstellen oder bei Ösen nicht eingerissen",
      "Nieten festsitzend, nicht beschädigt, vollzählig",
      "Metallteile nicht verformt, nicht beschädigt, keine augenscheinlichen Risse, keine Korrosion",
      "Karabiner in Ordnung",
      "Doppeldorn- oder Klemmverschluss in Ordnung",
      "Gurtschlaufen und Einhängeringe vollzählig",
      "Abseilachter in Ordnung",
      "Verbindungsmittel nicht beschädigt, Ausscheidefrist",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
];

const hebekissen = [
  {
    name: "Hebekissen bis 1 bar (ÖNORM EN 13731)",
    category: "hebekissen",
    id: "hk-001",
    visualInspection: [
      "Kissen keine Einstiche, Einschnitte, Risse bzw. Schlaufen in Ordnung",
      "Füllanschluss frei von mechanischen Beschädigungen",
      "Zubehör vorhanden und in Ordnung",
    ],
    functionTest: [
      "Druck auf max. 50% des Betriebsüberdruckes steigern",
      "Druckabfall nach 1 Stunde geringer als 10 %",
      "keine atypischen Ausbeulungen oder Verformungen",
    ],
    supplementaryTest: [],
  },
  {
    name: "Hebekissen über 1 bar (ÖNORM EN 13731)",
    category: "hebekissen",
    id: "hk-002",
    visualInspection: [
      "Kissen keine Einstiche, Einschnitte, Risse bzw. Schlaufen in Ordnung",
      "Füllanschluss frei von mechanischen Beschädigungen",
      "Zubehör vorhanden und in Ordnung",
    ],
    functionTest: [
      "Druck auf max. 50% des Betriebsüberdruckes steigern",
      "Druckabfall nach 1 Stunde geringer als 10 %",
      "keine atypischen Ausbeulungen oder Verformungen",
    ],
    supplementaryTest: [],
  },
  {
    name: "Druckminderer (ÖNORM EN 13731)",
    category: "hebekissen",
    id: "hk-003",
    visualInspection: [
      "Anschlussnippel und -gewinde ohne Beschädigung, Dichtungen vorhanden",
      "Manometer in Ordnung",
      "Druckeinstellung leichtgängig",
      "Absperrventil unbeschädigt und leichtgängig",
      "Druckminderer-Luftschlauch frei von Rissen, Schnitten, Durchstichen, Abspaltungen oder anderen Schäden",
    ],
    functionTest: [
      "Druck lässt sich über gesamten Einstellbereich regeln",
      "Sicherheitsventil bleibt bei eingestelltem Maximaldruck dicht",
      "Absperrventil am Ausgang schließt dicht",
      "Bei einem eingestellten Druck von 4 bar steigt der Druck innerhalb von 5 Minuten nicht wesentlich an",
      "Zubehör vorhanden und in Ordnung",
    ],
    supplementaryTest: [],
  },
  {
    name: "Schläuche für Hebekissen (ÖNORM EN 13731)",
    category: "hebekissen",
    id: "hk-004",
    visualInspection: [
      "Kupplungs- oder Nippelteile nicht beschädigt und leichtgängig",
      "Schlauch frei von Schnitten, Rissen, Durchstichen, Knickungen, Abspaltungen oder anderen Schäden",
      "Kupplungs- oder Nippeleinbindung fest und dicht",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Steuerorgan (ÖNORM EN 13731)",
    category: "hebekissen",
    id: "hk-005",
    visualInspection: [
      "Ein- und Ausgangskupplungen unbeschädigt und dicht",
      "Absperrhähne bzw. Steuerhebel leichtgängig und in Ordnung",
      "Manometer in Ordnung",
      "Gehäuse mit Sicherheitshinweisen in Ordnung",
    ],
    functionTest: [
      "Manometer des Steuerorgans zeigt gleichen Druck wie Testmanometer an",
      "Sicherheitsventile öffnen bei +/- 10 %",
      "Anlage dicht",
    ],
    supplementaryTest: [],
  },
];

const hydraulischeRettungsgeraete = [
  {
    name: "Handpumpe",
    category: "hydraulischeRettungsgeraete",
    id: "hrg-001",
    visualInspection: [
      "Sauberkeit und Dichtheit",
      "Hydraulikflüssigkeitsstand",
      "Typenschild und Beschilderungen leserlich vorhanden",
      "Schläuche ohne äußere Beschädigung, ohne Knickstellen, keine Aufquellungen, Dichtheit",
      "Anschlüsse sauber und trocken (drucklos)",
      "Leichtgängiges kuppeln der Kupplungshälften möglich (drucklos)",
      "Druckentlastungsventil bzw. Steuerorgan leichtgängig",
    ],
    functionTest: ["Allgemeine Dichtheit bei max. Belastung"],
    supplementaryTest: [],
  },
  {
    name: "Pumpenaggregat (ÖNORM EN 13204)",
    category: "hydraulischeRettungsgeraete",
    id: "hrg-002",
    visualInspection: [
      "Hydraulikflüssigkeitsstand (Schauglas)",
      "Hydraulikflüssigkeitsbehälter und Anschlüsse dicht",
      "Elektr. Ausrüstung ohne sichtbare Beschädigung",
      "Steuerorgan in Ordnung und leichtgängig",
      "Haspeln leichtgängig, Arretierung in Ordnung",
      "Schläuche ohne äußere Beschädigung, ohne Knickstellen, keine Aufquellungen, Dichtheit",
      "Anschlüsse sauber und trocken (drucklos)",
      "Leichtgängiges kuppeln der Kupplungshälften möglich (drucklos)",
      "Typenschild und Richtungssymbole leserlich vorhanden",
      "Vorhandensein und Unverlierbarkeit der Schutzkappen",
    ],
    functionTest: [
      "Probelauf durchgefüht",
      "Prüfung Sicherheitsventile",
      "Allgemeine Dichtheit bei max. Belastung (10 bis 20 Sekunden auf Endposition)",
    ],
    supplementaryTest: [
      "E-Motor: Ordnungsgemäßer Zustand und Sauberkeit",
      "Zustand und Lagerung des Elektrokabels, Stecker, Kabeleinführung in den Motor, Zugentlastung",
      "Vorhandensein und Lesbarkeit von Beschilderungen",
      "Zustand und Stellung des Ein-/ Ausschalters",
    ],
  },
  {
    name: "Schere (ÖNORM EN 13204)",
    category: "hydraulischeRettungsgeraete",
    id: "hrg-003",
    visualInspection: [
      "Schneidekanten der Messer frei von Ausbrüchen und Deformierungen",
      "Messer ohne Spiel",
      "Richtiger Sitz der Gleitscheiben",
      "Laschen, Bolzen und Verbindungsteile vorhanden und ohne Beschädigung",
      "Gummiabdeckung vorhanden und ohne Beschädigung",
      "Schalter „Auf-Zu“ arretiert in 0-Stellung",
      "Zustand und Fixierung des Haltegriffes",
      "Typenschild und Richtungssymbole leserlich vorhanden",
      "Allgemeine Dichtheit (drucklos)",
      "Schläuche ohne äußere Beschädigung, ohne Knickstellen, keine Aufquellungen, Dichtheit",
      "Leichtgängiges kuppeln der Kupplungshälften möglich (drucklos)",
      "Vorhandensein und Unverlierbarkeit der Schutzkappen",
    ],
    functionTest: [
      "Alu-Bolzen mit ca. ø 50 mm zwischen die Messer legen, belasten und Dichheit festellen",
      "Beim Loslassen des Steuerventiles müssen die Messer in  der Lage fixiert bleiben und das Prüfmittel für 2 Minuten fest eingespannt bleiben",
      "Prüfung Messereinstellung (kein Spiel – Papiertest oder Kartenschneidtest)",
      "Probelauf durchgeführt",
    ],
    supplementaryTest: [
      "Zustand und Funktionsfähigkeit der Akkuaufnahme",
      "Zustand und Funktionsfähigkeit des Akkus",
      "Zustand und Funktionsfähigkeit der Ladestation und des Netzteils",
    ],
  },
  {
    name: "Spreizer (ÖNORM EN 13204)",
    category: "hydraulischeRettungsgeraete",
    id: "hrg-004",
    visualInspection: [
      "Spreizerspitzen: Zustand der Riffelung, Sauberkeit, Kantigkeit, Einrisse, Austauschbarkeit, Verriegelung",
      "Vorhandensein und Zustand der Sicherungen",
      "Spreizerarme: keine Beschädigung, Zustand und Sauberkeit der Riffelung",
      "Deckungsgleiches aufeinander legen der Spreizerarme und der Spreizerspitzen",
      "Spreizerarme ohne Spiel",
      "Schalter „Auf-Zu“ arretiert in 0-Stellung",
      "Handgriff vorhanden",
      "Typenschild und Richtungssymbole leserlich vorhanden",
      "Allgemeine Dichtheit (drucklos)",
      "Schläuche ohne äußere Beschädigung, ohne Knickstellen, keine Aufquellungen, Dichtheit",
      "Leichtgängiges kuppeln der Kupplungshälften möglich (drucklos)",
      "Vorhandensein und Unverlierbarkeit der Schutzkappen",
      "Zubehör: Ketten  keine Verformung, Anrisse, Kerben",
    ],
    functionTest: [
      "Spreizerarme ohne Spitzen auf Spiel bei einem Öffnungswinkel von ca. 30° in beiden Bewegungsrichtungen prüfen",
      "Spreizerarme ohne Spitzen auf Spiel bei einem Öffnungswinkel von ca. 30° senkrecht zur  Bewegungsrichtung prüfen",
      "Spreizerspitzen aufstecken, Verriegelung und auf ordnungsgemäßen Sitz prüfen",
      "Stahlvierkant mit 30 x 40 mm zwischen Spreizerspitzen mit Betriebsdruck einspannen und Dichtheit festellen",
      "Beim Loslassen des Steuerventiles muss das Prüfmittel 2 Minuten fest eingespannt bleiben",
      "Probelauf durchgeführt",
    ],
    supplementaryTest: [
      "Zustand und Funktionsfähigkeit der Akkuaufnahme",
      "Zustand und Funktionsfähigkeit des Akkus",
      "Zustand und Funktionsfähigkeit der Ladestation und des Netzteils",
    ],
  },
  {
    name: "Zylinder (ÖNORM EN 13204)",
    category: "hydraulischeRettungsgeraete",
    id: "hrg-005",
    visualInspection: [
      "Kralle ohne Beschädigung und guter Sitz",
      "Schalter „Auf-Zu“ arretiert in 0-Stellung",
      "Typenschild und Richtungssymbole leserlich vorhanden",
      "Allgemeine Dichtheit (drucklos)",
      "Schläuche ohne äußere Beschädigung, ohne Knickstellen, keine Aufquellungen, Dichtheit",
      "Leichtgängiges kuppeln der Kupplungshälften möglich (drucklos)",
      "Vorhandensein und Unverlierbarkeit der Schutzkappen",
      "Verlängerungen oder Schraubverbindungen in Ordnung",
    ],
    functionTest: [
      "Zylinder auf Nenndruck in beiden Endstellungen belasten und Dichtheit feststellen",
      "Beim loslassen des Steuerventiles muss der Kolben in der bestehenden Lage fixiert sein",
    ],
    supplementaryTest: [
      "Zustand und Funktionsfähigkeit der Akkuaufnahme",
      "Zustand und Funktionsfähigkeit des Akkus",
      "Zustand und Funktionsfähigkeit der Ladestation und des Netzteils",
    ],
  },
];

const leitern = [
  {
    name: "Dreiteilige Schiebeleiter",
    category: "leitern",
    id: "lt-001",
    visualInspection: [
      "Keine Rissbildung an Metallteilen",
      "Keine bleibenden Formveränderungen (Quetschungen, Dellen, …)",
      "Sprossen gut befestigt",
      "Gleitbeschläge haben festen Sitz, sind unbeschädigt",
      "Sprossenschutz unbeschädigt, nicht abgenutzt",
      "Alle anderen Beschläge sitzen fest",
      "Leiterspitzen sitzen fest",
      "Anlegerollen unbeschädigt, nicht abgenutzt, leicht drehbar",
      "Zugseil ohne Verschleiß und Bruchstellen, gut befestigt",
      "Alle Schrauben und Muttern gegen lösen gesichert",
      "Stahlteile ohne Korrosion",
      "Bremseinrichtung in Ordnung, leichtgängig",
      "Fußteil ohne Schäden, sitzt fest, Drehspindel gängig",
      "Stützstangen ohne Schäden",
      "Fallhaken in Ordnung",
      "Piktogramme lesbar",
    ],
    functionTest: [
      "Leiter lotrecht aufstellen, wobei unter mehrmaligem Unterbrechen des Ausschiebens die einwandfreie Funktion der Ausziehvorrichtung, der Fallhaken bzw. der Bremseinrichtung überprüft wird",
    ],
    supplementaryTest: [],
    loadTest: {
      information:
        "Prüfung nach Richtlinie: Der Messunterschied darf bei einer 12-m-Leiter max. 50 mm, bei einer 14-m-Leiter max. 70 mm betragen.",
      type: "measurement",
      values: [
        "Messung A",
        "Messung B",
        "Messunterschied (A, B)",
        "Messung C",
        "Messung D",
        "Messunterschied (C, D)",
      ],
    },
  },
  {
    name: "Hakenleiter",
    category: "leitern",
    id: "lt-002",
    visualInspection: [
      "Keine Rissbildung an Metallteilen",
      "Keine bleibenden Formveränderungen (Quetschungen, Dellen, …)",
      "Sprossen gut befestigt",
      "Leiter fest gefügt",
      "Sprossenbelag unbeschädigt, nicht abgenutzt",
      "Einhängehaken unbeschädigt, ohne Risse",
      "Stahlteile ohne Korrosion",
      "Leiterauflageteil unbeschädigt",
      "Holmabschluss vorhanden",
      "Piktogramme lesbar",
    ],
    functionTest: [],
    supplementaryTest: [],
    loadTest: {
      information:
        "Leiter in Hakenmitte senkrecht einhängen, in der Mitte der untersten Sprosse mit Auflagefläche von 100 mm mit 150 kg 1 Minute belasten.",
      type: "check",
      values: ["Leiter und Haken ohne Risse und Formveränderung"],
    },
  },
  {
    name: "Mehrzweckleiter",
    category: "leitern",
    id: "lt-003",
    visualInspection: [
      "Keine Rissbildung an Metallteilen",
      "Keine bleibenden Formveränderungen (Quetschungen, Dellen, …)",
      "Sprossen gut befestigt",
      "Gleitbeschläge haben festen Sitz, sind unbeschädigt",
      "Sprossenschutz unbeschädigt, nicht abgenutzt",
      "Alle anderen Beschläge sitzen fest",
      "Leiternfuß vorhanden",
      "Anlegerollen unbeschädigt, nicht abgenützt, leicht drehbar",
      "Alle Schrauben und Muttern gegen Lösen gesichert",
      "Stahlteile ohne Korrosion",
      "Spreizsicherung in Ordnung",
      "Piktogramme lesbar",
    ],
    functionTest: [
      "Leiter lotrecht aufstellen, Leiterteile leicht verschiebbar, Haken haben guten Sitz",
      "Leiter als Stehleiter aufstellen und letzten Leiterteil ausschreiben, Leiterteil leicht verschiebbar, Haken haben guten Sitz",
    ],
    supplementaryTest: [],
    loadTest: {
      information:
        "Leiter wird waagrecht auf zwei Böcke aufgelegt. Der Abstand Außenkante zu den Cöcken beträgt 200 mm. Bei der Leitermitte wird der Abstand zum ebenen Boden gemessen (Messung A). Danach wird die Leiter mit der Prüflast von 30 kg belastet. Nach einer Minute wird der Abstand zum Boden nochmals gemessen (Messung B). Der Messunterschied darf max. 50 mm betragen.",
      type: "measurement",
      values: ["Messung A", "Messung B", "Messunterschied"],
    },
  },
  {
    name: "Steckleitereinsteckteil",
    category: "leitern",
    id: "lt-004",
    visualInspection: [
      "Keine Formveränderung",
      "Keine Rissbildung an Metallteilen",
      "Endkappen haben festen Sitz",
    ],
    functionTest: [
      "Verbindung mit Steckleiterteilen leichtgängig",
      "Sperrbolzen rasten ein",
    ],
    supplementaryTest: [],
    loadTest: {},
  },
  {
    name: "Strickleiter",
    category: "leitern",
    id: "lt-005",
    visualInspection: [
      "Seile oder Gurte aus Chemiefaser nicht abgenützt, keine Risse oder sonstige Beschädigungen",
      "Drahtseile keine Quetschungen, Knicke und Klanken, kein starker Verschleiß und keine Korrosion und sonstige Beschädigung",
      "Befestigungs- oder Verbindungselemente ohne Schäden",
      "Sprossen ohne Riss- oder Splitterbildung",
      "Sprossenbefestigung ohne Schäden, muss dauerhaft und so beschaffen sein, dass ein Herausrutschen Drehen oder Verschieben der Sprossen nicht möglich ist",
    ],
    functionTest: [],
    supplementaryTest: [],
    loadTest: {},
  },
  {
    name: "Teleskopleiter",
    category: "leitern",
    id: "lt-006",
    visualInspection: [
      "Alle Geräteteile sind vorhanden",
      "Die Kunststoffteile sind in Ordnung und haben keine Risse oder Sprünge.",
      "Die Aluminiumteile der Leiter sind in Ordnung und nicht verbogen.",
      "Keine bleibenden Formveränderungen (Quetschungen, Dellen, …)",
      "Die Leiter lässt sich einfach und ohne zu verklemmen nach Verwendungsanleitung auf und abbauen.",
      "Die Teleskopholme sind sauber und korrisionsfrei.",
      "Die Teleskopleiter wurde nach Herstellerangaben gereinigt.",
    ],
    functionTest: [],
    supplementaryTest: [],
    loadTest: {},
  },
  {
    name: "Zweiteilige Schiebeleiter",
    category: "leitern",
    id: "lt-007",
    visualInspection: [
      "Keine Rissbildung an Metallteilen",
      "Keine bleibenden Formveränderungen (Quetschungen, Dellen, …)",
      "Sprossen gut befestigt",
      "Gleitbeschläge haben festen Sitz, sind unbeschädigt",
      "Sprossenschutz unbeschädigt, nicht abgenutzt",
      "Alle anderen Beschläge sitzen fest",
      "Leiterspitzen sitzen fest",
      "Anlegerollen unbeschädigt, nicht abgenutzt, leicht drehbar",
      "Zugseil ohne Verschleiß und Bruchstellen, gut befestigt",
      "Alle Schrauben und Muttern gegen lösen gesichert",
      "Stahlteile ohne Korrosion",
      "Bremseinrichtung in Ordnung, leichtgängig",
      "Fallhaken in Ordnung",
      "Piktogramme lesbar",
    ],
    functionTest: [
      "Leiter lotrecht aufstellen, wobei unter mehrmaligem Unterbrechen des Ausschiebens die einwandfreie Funktion der Ausziehvorrichtung, der Fallhaken bzw. der Bremseinrichtung überprüft wird",
    ],
    supplementaryTest: [],
    loadTest: {
      information:
        "Leiter wird waagrecht, ausgezogen auf max. Benutzungslänge, auf zwei Böcke aufgelegt. Der Abstand Außenkante zu den Böcken beträgt 200 mm. Bei der Leitermitte wird der Abstand zum ebenen Boden gemessen (Messung A). Danach wird die Leiter mit der Prüflast von 30 kg belastet. Nach einer Minute wird der Abstand zum Boden nochmals gemessen (Messung B). Der Messunterschied darf bei einer  8-m-Leiter max. 100mm, bei einer 9-m-Leiter max. 130mm, bei einer 10-m-Leiter max. 180mm betragen.",
      type: "measurement",
      values: ["Messung A", "Messung B", "Messunterschied"],
    },
  },
];

const notrettungsGeraeteSet = [
  {
    name: "Bandschlinge (ÖNORM EN 1498)",
    category: "notrettungsGeraeteSet",
    id: "nrg-001",
    visualInspection: [
      "Bandschlinge nicht abgenützt, keine Risse oder sonstige Beschädigung",
      "Bandschlinge weist keine Flecken infolge Einwirken schädlicher Stoffe auf",
      "Bandschlinge weist keine Spuren von Wärme- und/oder Flammeneinwirkung auf",
      "Bandschlinge weist keine Stockflecken (Schimmel) auf",
      "Nähte in Ordnung",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Rettungstuch (ÖNORM F1020)",
    category: "notrettungsGeraeteSet",
    id: "nrg-002",
    visualInspection: [
      "Alle Geräteteile vorhanden",
      "Rettungstuch nicht abgenützt, keine Risse oder sonstige Beschädigung",
      "Rettungstuch weist keine Flecken infolge Einwirken schädlicher Stoffe auf",
      "Einhängeringe nicht verformt, beschädigt, keine augenscheinlichen Risse",
      "Rettungstuch weist keine Spuren von Wärme- und/oder Flammeneinwirkung auf",
      "Rettungstuch weist keine Stockflecken (Schimmel) auf",
      "Nähte in Ordnung",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Tragetuch (ÖNORM F1020)",
    category: "notrettungsGeraeteSet",
    id: "nrg-003",
    visualInspection: [
      "Alle Geräteteile vorhanden",
      "Tragetuch nicht abgenützt, keine Risse oder sonstige Beschädigung",
      "Tragetuch weist keine Flecken infolge Einwirken schädlicher Stoffe auf",
      "Tragetuch weist keine Spuren von Wärme- und/oder Flammeneinwirkung auf",
      "Tragetuch weist keine Stockflecken (Schimmel) auf",
      "Nähte in Ordnung",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
];

const rettungsGeraete = [
  {
    name: "Abseilgerät",
    category: "rettungsGeraete",
    id: "rg-001",
    visualInspection: [
      "alle Einzelteile, Kennzeichnungen vorhanden",
      "Seil in Ordnung",
      "keine mechanischen Beschädigungen (Risse, Schnitte etc.)",
      "Nähte, Schlaufen, Spleiße, Knoten etc. in Ordnung",
      "keine Spuren von Wärme- und/oder Flammeneinwirkung auf",
      "keine Spuren von Chemikalieneinwirkung",
      "keine Korrosion von Metallen",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Auffang- oder Rettungsgurt (ÖNORM F4040, EN 1497)",
    category: "rettungsGeraete",
    id: "rg-002",
    visualInspection: [
      "Alle Geräteteile vorhanden",
      "Rettungsgurt nicht abgenützt, keine Risse oder sonstige Beschädigung",
      "Rettungsgurt weist keine Flecken infolge Einwirken schädlicher Stoffe auf",
      "Einhängeringe nicht verformt, beschädigt, keine augenscheinlichen Risse, Kennzeichnung der Halteringe vorhanden",
      "Rettungsgurt weist keine Spuren von Wärme- und/oder Flammeneinwirkung auf",
      "Rettungsgurt weist keine Stockflecken (Schimmel) auf",
      "Nähte in Ordnung",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Rettungsweste (ÖNORM EN ISO 12402)",
    category: "rettungsGeraete",
    id: "rg-003",
    visualInspection: [
      "Außenhaut keine Einrisse",
      "Auftriebskörper und Ohnmachtschutz vorhanden und in Ordnung",
      "Verschlüsse und Bebänderung im Brustbereich, Bauchbereich und Schrittgurte vorhanden und in Ordnung",
      "Aufnahmeschlaufen im Brustbereich in Ordnung",
      "keine Einwirkung von Hitze oder sonstige Beschädigungen",
      "keine Abnähung eingerissen",
      "keine Stockflecken (Schimmel)",
      "Signalpfeife vorhanden",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Verbindungsmittel (ÖNORM EN 354, EN 358)",
    category: "rettungsGeraete",
    id: "rg-004",
    visualInspection: [
      "Verbindungsmittel nicht abgenützt, keine Risse oder sonstige Beschädigung",
      "Verbindungsmittel weist keine Flecken infolge Einwirken schädlicher Stoffe auf",
      "Verbindungsmittel weist keine Spuren von Wärme- und/oder Flammeneinwirkung auf",
      "Verbindungsmittel weist keine Stockflecken (Schimmel) auf",
      "Nähte in Ordnung",
      "Karabiner und Beschlagteile in Ordnung",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
];

const rettungsLeinen = [
  {
    name: "Rettungsleine (ÖNORM F5260)",
    category: "rettungsLeinen",
    id: "rg-001",
    visualInspection: [
      "keine Abnützung",
      "keine zerissenen Fäden",
      "keine Verringerung des Durchmessers",
      "Abähnungen bzw. Spleiße ohne Schäden",
      "Karabinerhaken ohne Schäden, keine Risse",
      "keine Flecken infolge Einwirkung schädlicher Stoffe",
      "keine Hitzeentwicklung",
      "Leinensack in Ordnung",
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
    supplementaryTest: [],
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

const zugGeraete = [
  {
    name: "Greifzug",
    category: "zugGeraete",
    id: "zg-001",
    visualInspection: [
      "Gesamtzustand in Ordnung",
      "Hebel leichtgängig",
      "Klemmbacken halten fest",
      "Zwei Reservescherstifte vorhanden",
      "Teleskophebel in Ordnung",
      "Typenschild lesbar",
      "Zubehör: Freilandverankerung und Nägel nicht vorbogen, Nägel kein Bart",
    ],
    functionTest: [],
    supplementaryTest: [],
  },
  {
    name: "Seilwinde",
    category: "zugGeraete",
    id: "zg-002",
    visualInspection: [
      "Kausche am Seilende in Ordnung",
      "Sicherheitswindungen bei erreichen des Seilendes vorhanden",
      "Windenseil ohne Knickstellen, Drahtbrüche und Aufdoldungen",
      "Ende nutzbare Seilläne rot eingefärbt",
      "Propellerrolle leichtgängig / Seiltrompete in Ordnung",
      "Markierung des Schrägwinkels vorhanden",
      "Seilbremse in Ordnung",
      "Abweisrollen in Ordnung, leichtgängig",
      "Andruckwalzen in Ordnung",
      "Hydraulikölstand in Ordnung",
      "Hydraulikölanlage dicht",
      "Windenunterlegkeile in Ordnung",
    ],
    functionTest: [
      "Rückhaltekraft der Seilbremse ausreichend",
      "Andruckwalze funktionsfähig",
      "Bremskraft der Schlaffseilbremse ausreichend",
      "Seilspulung an der Windentrommel in Ordnung",
      "Bedienungs- und Überwachungsschalter in Ordnung",
      "Notbetriebseinrichtung funktionsfähig",
    ],
    supplementaryTest: [],
  },
];

const pruefkarteiblaetter = {
  config: [
    {
      categoryName: "anschlagMittel",
      categoryDisplayName: "Anschlagmittel",
    },
    {
      categoryName: "elektrischeGeraete",
      categoryDisplayName: "Elektrische Geräte",
    },
    {
      categoryName: "feuerwehrgurt",
      categoryDisplayName: "Feuerwehrgurt",
    },
    {
      categoryName: "hebekissen",
      categoryDisplayName: "Hebekissen",
    },
    {
      categoryName: "hydraulischeRettungsgeraete",
      categoryDisplayName: "Hydraulische Rettungsgeräte",
    },
    {
      categoryName: "leitern",
      categoryDisplayName: "Leitern",
    },
    {
      categoryName: "notrettungsGeraeteSet",
      categoryDisplayName: "Notrettungsgeräte-Set",
    },
    {
      categoryName: "rettungsGeraete",
      categoryDisplayName: "Rettungsgeräte",
    },
    {
      categoryName: "rettungsLeinen",
      categoryDisplayName: "Rettungsleinen",
    },
    {
      categoryName: "technischeGeraete",
      categoryDisplayName: "Technische Geräte",
    },
    {
      categoryName: "zugGeraete",
      categoryDisplayName: "Zuggeräte",
    },
  ],
  data: {
    anschlagMittel,
    elektrischeGeraete,
    feuerwehrgurt,
    hebekissen,
    hydraulischeRettungsgeraete,
    leitern,
    notrettungsGeraeteSet,
    rettungsGeraete,
    rettungsLeinen,
    technischeGeraete,
    zugGeraete,
  },
};

export default pruefkarteiblaetter;
