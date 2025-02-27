import { ApplicationSettings } from '@nativescript/core';
import { SyncService } from '../services/sync.service';

// Default data array remains as fallback
const defaultButterflies = [
 {
    id: 1,
    commonName: "Sahyadri Birdwing",
    malayalamName: "തെക്കന്‍ ഗരുഡശലഭം",
    scientificName: "Troides minos",
    sciName: "Troides minos (Cramer, 1779)",
    family: "Papilionidae",
    description1: "ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും വലിയ ചിത്രശലഭമാണ് തെക്കന്‍ ഗരുഡശലഭം. ചിറകുവിടര്‍ത്തുമ്പോള്‍ ചിറകുകള്‍ തമ്മിലുള്ള അകലം 140-190 മി.മീ.ആണ്. ആണ്‍ശലഭത്തിന്റെ മുന്‍ചിറകുകള്‍ക്ക് നല്ല കറുപ്പ് നിറമാണ്. പിന്‍ ചിറകുകളില്‍ തിളങ്ങുന്ന മഞ്ഞനിറമുണ്ട്. പെണ്‍ശലഭങ്ങള്‍ക്ക് വലുപ്പം കൂടും.",
    description2: "പെണ്‍ശലഭങ്ങളുടെ പിന്‍ ചിറകുകളില്‍ സ്വര്‍ണ്ണ മഞ്ഞ നിറത്തില്‍ ത്രികോണാകൃതിയിലുള്ള കറുത്ത പൊട്ടുകള്‍ ഉണ്ട്. ആണ്‍-പെണ്‍ ശലഭങ്ങളുടെ ശരീരത്തിന് മഞ്ഞ നിറമാണ്. ഇതില്‍ കറുത്ത പൊട്ടുകള്‍ വരിവരിയായി കാണാം. മുന്‍ചിറകുകളുടെ തുടക്കത്തില്‍ ശരീരത്തില്‍ ചുവന്ന പാടുകളുണ്ട്.",
    description3: "തേന്‍ നുകരുമ്പോള്‍ ചിറക് അടയ്ക്കുകയും തുറക്കുകയും ചെയ്യുന്നതു ഗരുഡശലഭത്തിന്റെ പ്രത്യേകതയാണ്. പശ്ചിമഘട്ടത്തിലും പൂര്‍‌വഘട്ടത്തിന്റെ ചില ഭാഗങ്ങളിലും കണ്ടുവരുന്നു. ഇന്ത്യയിലെ ഏറ്റവും വലിയ ചിത്രശലഭമായ സാധാരണ ഗരുഡശലഭം (Common Birdwing), ഇതിന്റെ അടുത്ത ബന്ധുവാണ്.",
    description4: "",
    description5: "",
    wingspan: "140-190 മി.മീ.",
    hostPlants: [
      { name: "അരിസ്റ്റോലോക്കിയ ടാഗാല", wikiLink: "https://en.wikipedia.org/wiki/Aristolochia_tagala" },
      { name: "അരിസ്റ്റോലോക്കിയ ഇന്‍ഡിക്ക", wikiLink: "https://en.wikipedia.org/wiki/Aristolochia_indica" }
    ],
    mainPhoto: "~/images/southernbirdwing1.jpg",
    photos: [
      { url: "~/images/southernbirdwing1.jpg", credit: "© ബര്‍ണാഡ് എം തമ്പാന്‍", sourceUrl: "https://www.ifoundbutterflies.org/sp/2860/Troides-minos" },
      { url: "~/images/southernbirdwing2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://www.ifoundbutterflies.org/sp/2860/Troides-minos" }
    ],
    speciesLink: "https://www.ifoundbutterflies.org/troides-minos",
    wikipediaLink: "https://en.wikipedia.org/wiki/Troides_minos"
  },
  {
    id: 2,
    commonName: "Indian Common Rose",
    malayalamName: "നാട്ടുറോസ്‌",
    scientificName: "Pachliopta aristolochiae",
    sciName: "Pachliopta aristolochiae (Fabricius, 1775)",
    family: "Papilionidae",
    description1: "നമ്മുടെ നാട്ടിന്‍പുറങ്ങളില്‍ വളരെ സാധാരണയായി കാണപ്പെടുന്ന ഈ പൂമ്പാറ്റ. എണ്‍പതു മുതല്‍ നൂറ്റിപ്പത്ത് മില്ലിമിറ്റര്‍ വരെയാണ് ഇവയുടെ ഏകദേശ ചിറകളവ്. കറുത്ത മുന്‍ചിറകുകളില്‍ വെളുത്ത വരകളുണ്ട്. പിന്‍ചിറകുകളില്‍ അഞ്ച് വെളുത്ത അടയാളങ്ങളുമുണ്ട്. മങ്ങിയ ചുവപ്പു നിറത്തില്‍ ഏഴു കുത്തുകള്‍ പിന്‍ചിറകില്‍ കാണാം.",
    description2: "തല മുതല്‍ അറ്റം വരെയുള്ള ചുവന്ന നിറം ഇവയെ പെട്ടെന്ന് തിരിച്ചറിയുന്നതിന് ഉപകരിക്കുന്നു. കൃഷ്ണകിരിടം, ചെത്തി, അരിപ്പൂ, സൂര്യകാന്തി, സീനിയ തുടങ്ങിയവയില്‍ നിന്ന് തേന്‍ കുടിക്കുന്നവയാണ് ഇവ.",
    description3: "ചക്കര ശലഭം, കാനനറോസ് എന്നീ പൂമ്പാറ്റകളോട് സാദൃശ്യം. ചക്കര റോസ് എന്നും ഈ ശലഭത്തിന് പേരുണ്ട്.",
    description4: "",
    description5: "",
    wingspan: "80-110 മി.മീ.",
    hostPlants: [
      { name: "അരിസ്റ്റോലോക്കിയ ഇന്‍ഡിക്ക", wikiLink: "https://en.wikipedia.org/wiki/Aristolochia_indica" },
      { name: "തിപ്പലി", wikiLink: "https://en.wikipedia.org/wiki/Long_pepper" }
    ],
    mainPhoto: "~/images/commonrose1.jpg",
    photos: [
      { url: "~/images/commonrose1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://www.ifoundbutterflies.org/sp/569/Pachliopta-aristolochiae" },
      { url: "~/images/commonrose2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://www.ifoundbutterflies.org/sp/569/Pachliopta-aristolochiae" }
    ],
    speciesLink: "https://www.ifoundbutterflies.org/pachliopta-aristolochiae",
    wikipediaLink: "https://en.wikipedia.org/wiki/Pachliopta_aristolochiae"
  }

 ];
 
export const butterflies = (() => {
  const syncService = SyncService.getInstance();
  const localData = syncService.getLocalData();
  return localData || defaultButterflies;
})();