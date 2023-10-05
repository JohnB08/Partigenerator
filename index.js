let genBtn = document.getElementById("Generer");
let partiNavn = document.getElementById("Partinavn");
let bulletNr = document.getElementById("Bulletnr");
let bulletPoints = document.querySelectorAll("li");
let genNavn = document.getElementById("Navn");
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
  "Renta",
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
  "Streamingtjenester",
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
  "Heimevernet",
  "Hæren",
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
  "Sikkerhetstjenesten",
  "UDI",
  "Fritt Ord",
  "Yttringsfrihet",
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
  "Equinor",
  "Statkraft",
  "BKK",
  "utlandet",
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
  "huske å",
  "ønske å",
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
  "kjøpe utenlands mat",
  "kjøpe bare norsk mat",
  "bli værende",
  "ha mer makt",
  "ha mindre makt",
  "bygge ut prosjekter",
  "passe på økonomien",
  "tenke på andre enn seg selv",
  "bruke penger",
  "sperre riksgrensen",
  "reise hjem",
  "bli straffet",
  "få utbetalt av statskassa",
  "fjernes",
  "lyttes på",
  "taes til betraktning",
  "avvikles",
  "frarådes mer makt",
  "oppfordres til mer makt",
  "hyres inn",
  "gå av",
  "kjøre mindre bil",
  "kjøre mer bil",
  "bruke mindre penger på reise",
  "bruke mer penger på reise",
  "åpne for nye prosjekter",
  "sammarbeide",
];
/* console.log(subjArray);
console.log(Math.floor(Math.random() * subjArray.length)); */
/* console.log(bulletPoints); */
genBtn.addEventListener("click", (event) => {
  genNavn.textContent = partiNavn.value;
  subjArray.pop();
  subjArray.push(partiNavn.value);
  for (let i = 0; i < bulletNr.value; i++) {
    selector = Math.floor(Math.random() * 3);
    if (selector === 0) {
      bulletPoints[i].textContent =
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
      bulletPoints[i].textContent = `${
        objArray[Math.floor(Math.random() * objArray.length)]
      } ${comArray[Math.floor(Math.random() * comArray.length)]} ${
        denyArray[Math.floor(Math.random() * denyArray.length)]
      } ${prepArray[Math.floor(Math.random() * prepArray.length)]} ${
        actArray[Math.floor(Math.random() * actArray.length)]
      }, man bør heller ${
        actArray[Math.floor(Math.random() * actArray.length)]
      } i ${objArray[Math.floor(Math.random() * objArray.length)]}`;
    } else {
      bulletPoints[i].textContent = `Vi stiller oss bak ${
        subjArray[Math.floor(Math.random() * subjArray.length)]
      } sitt forslag om at ${
        objArray[Math.floor(Math.random() * objArray.length)]
      } ${denyArray[Math.floor(Math.random() * denyArray.length)]} ${
        comArray[Math.floor(Math.random() * comArray.length)]
      } ${prepArray[Math.floor(Math.random() * prepArray.length)]} ${
        actArray[Math.floor(Math.random() * actArray.length)]
      } `;
    }
  }
});
