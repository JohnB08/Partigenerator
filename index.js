let genBtn = document.getElementById("Generer");
let partiNavn = document.getElementById("Partinavn");
let bulletNr = document.getElementById("Bulletnr");
let bulletPoints = document.querySelectorAll("li");
let genNavn = document.getElementById("Navn");
let yttringDesc = document.getElementById("Yttringsfrihet");
let partyDesc = document.getElementById("formaal");
const subjArray = [
  "Menn",
  "Kvinner",
  "Andre",
  "Utlendinger",
  "Innvandrere",
  "Kunstnere",
  "Studenter",
  "Musikere",
  "Politikere",
  "Arbeidsfolk",
  "Skuespillere",
  "Influensere",
  "Vitenskapsfolk",
  "Vanlige folk",
  "Ola Normann",
  "Samene",
  "Folk i nord",
  "Finnmarkinger",
  "Vestlendinger",
  "Oslofolk",
  "Bærumsgutta",
  "Rikinger",
  "De fattige",
  "De rike",
  "Homofile",
  "Streite",
  "Folk på anstalt",
  "Butikkansatte",
  "Folk med tullejobber",
  "Jonas Gahr Støre",
  "Erna Solberg",
  "Norske Rappere",
  "Sportsutøvere",
  "Sylvi Listhaug",
  "Kjersti Toppe",
  "Bjørn Arild Gram",
  "Ingvild Kjerkol",
  "Trygve Slagsvold Vedum",
  "Terje Aasland",
  "Trond Helleland",
  "Jan Tore Sanner",
  "Henrik Asheim",
  "Tina Bru",
  "Terje Søviknes",
  "Hjemmetjenesten",
  "Rettsystemet",
  "Helsevesenet",
  "Polititjenesten",
  "Sikkerhetstjenesten",
  "Helsetjenesten",
  "Urfolk",
  "midt-østen",
  "Ukraina",
  "Russland",
  "Arbeiderpartiet",
  "SV",
  "Venstre",
  "Høyre",
  "FRP",
  "Kinesiske Streamingtjenester",
  "Navere",
  "Natur og Ungdom",
  "Entrepenører",
  "Dagbladet",
  "VG",
  "NRK",
  "TV2",
  "TV Norge",
  "Norsk Tipping",
  "Helsetjenesten",
  "Den Norske Skole",
  "Den Norske Bank",
  "Den Norske Kirke",
  "Heimevernet",
  "Hæren",
  "Bompengeselskap",
  "Offentlig transport",
  "",
];
const objArray = [
  "Helsetjenesten",
  "Staten",
  "Kommunestyret",
  "Hjemmetjenesten",
  "Rettsystemet",
  "Helsevesenet",
  "Polititjenesten",
  "wokeness",
  "Sikkerhetstjenesten",
  "UDI",
  "Offentlig Transport",
  "kirkeasylet",
  "Bompengepolitikk",
  "Privatisering av bompenger",
  "Fritt Ord",
  "Dagbladet",
  "VG",
  "NRK",
  "TV2",
  "TV Norge",
  "Norsk Tipping",
  "Universiteter",
  "Den Norske Skole",
  "Den Norske Bank",
  "Heimevernet",
  "Hæren",
  "Os",
  "Bergen",
  "Oslo",
  "Trondhjem",
  "Norsk Film",
  "Atomkraft",
  "Vindkraft",
  "Samisk Kultur",
  "Reinsdyr",
  "Vannkraft",
  "Norsk Sport",
  "Skolemat",
  "Privatskolepolitikk",
  "Arkeologi",
  "Astronomi",
  "Astrologi",
  "Akupunktur",
  "Alternativ medisin",
  "Prostitusjonsloven",
  "Arbeidsmiljø",
  "me-too politikk",
  "Identitetspolitikk",
  "Kjønnspolitikk",
  "Equinor",
  "Statkraft",
  "BKK",
  "Utlandet",
  "Telenor",
  "Innvandringsindustri",
  "Bilvei",
  "Motorveipolitikk",
  "Sykkelstipolitikk",
  "Togbanepolitikk",
  "Fergefri E-39",
  "Norsk Kultur",
  "Infrastruktur",
  "Militærbaser",
  "Opplæring",
  "Nav",
  "Norsk Natur",
  "Filmen Troll",
  "Oljefeltet Troll",
  "Norsk Olje",
  "God Gammeldags Industri",
  "Entrepenør-sjela",
];
const comArray = ["skal", "må", "bør", "burde", "vil"];
const denyArray = ["ikke", ""];
const prepArray = [
  "",
  "",
  "",
  "",
  "unngå å",
  "ha en prat om å",
  "ha et ønske om å",
  "ha en drøm om å",
  "oppfordres til å",
  "",
  "",
  "",
  "",
];
const actArray = [
  "balansere budskjettet",
  "bruke mindre penger",
  "betale mer skatt",
  "bruke eksperthjelp",
  "bruke amatører",
  "bli værende",
  "ha mer makt",
  "ha mindre makt",
  "bygge ut prosjekter",
  "passe på økonomien",
  "investere",
  "sette opp renta",
  "selge",
  "tenke på andre enn seg selv",
  "bruke penger",
  "sperre riksgrensen",
  "bli utvist",
  "bli straffet",
  "få utbetalt av statskassa",
  "fjernes",
  "bli hørt",
  "inkludere",
  "ekskludere",
  "overta",
  "avvikles",
  "fraråde mer makt",
  "oppfordre til mer makt",
  "hyre inn",
  "gå av",
  "ha mindre bilbruk",
  "ha mere bilbruk",
  "støtte hotellbransjen",
  "støtte reiselivet",
  "åpne for alternative skoler",
  "åpne for nye prosjekter",
  "sammarbeide",
];
const landArray = [
  "Norge",
  "Sverige",
  "Danmark",
  "England",
  "Finland",
  "Russland",
  "U.S.A",
];
const extArray = [
  `fjernes`,
  `taes vekk`,
  `tukles med`,
  `helliggjøres`,
  `bli styrt av ${landArray[Math.floor(Math.random() * landArray.length)]}`,
];
const sinArray = [
  "LØGN",
  "MOBBING",
  "TRAKASERING",
  "MUNNLIG MISSBRUK",
  "WRONGTHINK",
  "RIGHTTHINK",
  "norskbruk",
];
const partiArray = [
  "FRP",
  "AP",
  "SV",
  "Høyre",
  "Rødt",
  "Venstre",
  "SP",
  "Industripartiet",
];
const politikkArray = [
  "Invandringspolitikk",
  "Innenrikspolitikk",
  "Utenrikspolitikk",
  "Religion",
  "Identitestpolitikk",
  "Utstrøkspolitikk",
  "Industripolitikk",
  "Økonomisk styre",
];
/* console.log(subjArray);
console.log(Math.floor(Math.random() * subjArray.length)); */
/* console.log(bulletPoints); */
genBtn.addEventListener("click", (event) => {
  genNavn.textContent = partiNavn.value;
  subjArray.pop();
  subjArray.push(partiNavn.value);
  partyDesc.textContent = `Vi er ${
    partiNavn.value
  } og ble dannet i '9${Math.floor(
    Math.random() * 9
  )}, på grunn av uenigheter med ${
    partiArray[Math.floor(Math.random() * partiArray.length)]
  } pga forskjeller i ${
    politikkArray[Math.floor(Math.random() * politikkArray.length)]
  }. Vi er også sterkt uenig med ${
    partiArray[Math.floor(Math.random() * partiArray.length)]
  } ang ${
    politikkArray[Math.floor(Math.random() * politikkArray.length)]
  }. Vi ønsker jo, som tradisjonen sier, at norsk kultur kun skal baseres på ${
    landArray[Math.floor(Math.random() * landArray.length)]
  }'s kultur, som alle var enig om i Riksforsamlingen i 1814.
  Se gjerne på punktene våres nedenfor, og vi håper vi også kan gi noen en stemme!`;
  yttringDesc.textContent = `❕  Yttringsfriheten ${
    comArray[Math.floor(Math.random() * comArray.length)]
  } ${denyArray[Math.floor(Math.random() * denyArray.length)]} ${
    extArray[Math.floor(Math.random() * extArray.length)]
  } og er derfor ABSOLUTT! Bare ${
    sinArray[Math.floor(Math.random() * sinArray.length)]
  } er straffbart  ❕`;
  for (let i = 0; i < bulletNr.value - 1; i++) {
    selector = Math.floor(Math.random() * 4);
    if (selector === 0) {
      bulletPoints[i].textContent =
        "❕" +
        " " +
        " " +
        subjArray[Math.floor(Math.random() * subjArray.length)] +
        " " +
        comArray[Math.floor(Math.random() * comArray.length)] +
        " " +
        denyArray[Math.floor(Math.random() * denyArray.length)] +
        " " +
        prepArray[Math.floor(Math.random() * prepArray.length)] +
        " " +
        actArray[Math.floor(Math.random() * actArray.length)];
    } else if (selector === 1) {
      bulletPoints[i].textContent = `❕  ${
        subjArray[Math.floor(Math.random() * subjArray.length)]
      } ${comArray[Math.floor(Math.random() * comArray.length)]} ${
        denyArray[Math.floor(Math.random() * denyArray.length)]
      } ${prepArray[Math.floor(Math.random() * prepArray.length)]} ${
        actArray[Math.floor(Math.random() * actArray.length)]
      }, vi vil ${denyArray[Math.floor(Math.random() * denyArray.length)]} ${
        actArray[Math.floor(Math.random() * actArray.length)]
      } angående ${objArray[Math.floor(Math.random() * objArray.length)]}`;
    } else if (selector === 2) {
      bulletPoints[i].textContent = `❕  ${
        objArray[Math.floor(Math.random() * objArray.length)]
      } avvikles, erstattes med ${
        objArray[Math.floor(Math.random() * objArray.length)]
      }`;
    } else {
      bulletPoints[i].textContent = `❕  Vi stiller oss bak ${
        subjArray[Math.floor(Math.random() * subjArray.length)]
      } sitt forslag om at ${
        subjArray[Math.floor(Math.random() * subjArray.length)]
      } ${denyArray[Math.floor(Math.random() * denyArray.length)]} ${
        comArray[Math.floor(Math.random() * comArray.length)]
      } ${prepArray[Math.floor(Math.random() * prepArray.length)]} ${
        actArray[Math.floor(Math.random() * actArray.length)]
      } `;
    }
  }
});
