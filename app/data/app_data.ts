import { ApplicationSettings } from '@nativescript/core';
import { SyncService } from '../services/sync.service';

// Default data array remains as fallback
const defaultSpecies = [
{
  id: 1,
  commonName: "Dakhan Tailed Jay",
  malayalamName: "വിറവാലന്‍",
  scientificName: "Graphium agamemnon",
  sciName: "Graphium agamemnon menides (Fruhstorfer, 1904)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ കുടുംബത്തില്‍ പെട്ട ശലഭമാണ് വിറവാലന്‍. ഈ ശലഭത്തിന്റെ ചിറകിലെ പച്ചനിറമുള്ള പൊട്ടുകളാണ് ഇവയെ തിരിച്ചറിയാന്‍ പ്രധാനമായും സഹായിക്കുന്നത്. ഇവ വിശ്രമിക്കുന്ന സമയങ്ങളില്‍ ഇവയുടെ ചിറകുകള്‍ കൂടിച്ചേര്‍ന്ന് ആപ്പിള്‍ പച്ച നിറത്തിലുള്ള പൊട്ടുകള്‍ വ്യക്തമായി കാണാം.",
  description2: "ഈ ശലഭത്തിന്റെ ചിറക് വിരിവ് 85-100 മില്ലിമീറ്റര്‍ വരെയാണ്. പെണ്‍ശലഭങ്ങള്‍ മുട്ടയിടുന്നത് പ്രധാനമായും ആത്ത, അരണമരം, വഴന, അശോകം എന്നിവയുടെ ഇലകളിലാണ്. പച്ച നിറമുള്ള ലാര്‍വ്വയുടെ തലഭാഗം വീര്‍ത്തുരുണ്ടതായിരിക്കും.",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "85-100 mm", 
  hostPlants: [ 
    { name: "Monoon longifolium", wikiLink: "https://en.wikipedia.org/wiki/Monoon_longifolium" },
    { name: "Huberantha cerasoides", wikiLink: "https://en.wikipedia.org/wiki/Huberantha_cerasoides" },
    { name: "Annona squamosa", wikiLink: "https://en.wikipedia.org/wiki/Annona_squamosa" },
    { name: "Cinnamomum spp", wikiLink: "https://en.wikipedia.org/wiki/Cinnamomum" }
	],
  mainPhoto: "~/images/Graphium_agamemnon1.jpg",
  photos: [
  { url: "~/images/Graphium_agamemnon1.jpg", credit: "© Peellden, Wikimedia Commons", sourceUrl: "https://en.wikipedia.org/wiki/File:Graphium_agamemnon_20131222.jpg" }, 
  { url: "~/images/Graphium_agamemnon2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Graphium_agamemnon3.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Graphium_agamemnon4.jpg", credit: "ജീവിതചക്രം © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/graphium-agamemnon",
  wikipediaLink: "https://en.wikipedia.org/wiki/Graphium_agamemnon"
},
{
  id: 2,
  commonName: "Sahyadri Five-bar Swordtail",
  malayalamName: "വരയന്‍ വാള്‍വാലന്‍",
  scientificName: "Graphium antiphates",
  sciName: "Graphium antiphates naira (Moore, 1903)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "പശ്ചിമഘട്ടത്തിലെ നിത്യഹരിത വനങ്ങളില്‍ ധാരാളമായി കണ്ടുവരുന്ന ഒരു ചിത്രശലഭമാണ് വരയന്‍ വാള്‍വാലന്‍. കറുപ്പ്, ഓറഞ്ച്, പച്ച, വെള്ള തുടങ്ങിയ നിറങ്ങള്‍ ഇവയുടെ ദേഹത്ത് മനോഹരമായി കൂടിച്ചേര്‍ന്നിരിക്കുന്നു. ചിറകുകള്‍ മടക്കിയാല്‍ പച്ചകലര്‍ന്ന മഞ്ഞനിറത്തിലുള്ള വരകളും മധ്യഭാഗത്ത് മഞ്ഞനിറത്തിലുമുള്ള വരകളും കാണാം.",
  description2: "പിന്‍ചിറകിലെ നീണ്ട വാല്‍ ഈ ശലഭത്തിന്റെ പ്രത്യേകതയാണ്. പറക്കുമ്പോള്‍ ഈ വാല്‍ എടുത്ത് കാണിക്കാറില്ല. ഇവ കൂട്ടത്തോടെ മണ്ണില്‍ വന്നിരിയ്ക്കാറുണ്ട്. അപ്പോഴാണ് ഇരപിടിയന്മാര്‍ അവയെ പിടികൂടുന്നത്. അപൂര്‍വ്വമായി പൂക്കളും ഇവ സന്ദര്‍ശിക്കാറുണ്ട്.ഈ ശലഭത്തിന്റെ ലാര്‍വകള്‍ക്ക് ആദ്യം വെള്ളനിറമായിരിയ്ക്കും. ക്രമേണ അവയുടെ നിറം മഞ്ഞയായി മാറും.",
  description3: " വരയന്‍ വാള്‍ശലഭത്തിന്റെ പ്യൂപ്പയുടെ സവിശേഷത അവ ഒരു നാട കെട്ടിയത് പോലെയാണ് കാണപ്പെടുക എന്നതാണ്. ഇവയുടെ ലാര്‍വകള്‍ ആഹരിക്കുന്ന ഭക്ഷണസസ്യങ്ങളിലൊന്ന് കാരപ്പൂമരമാണ്.",
  description4: "",
  description5: "",
  wingspan: "70-80 mm", 
  hostPlants: [ 
{ name: "Desmos chinensis", wikiLink: "https://en.wikipedia.org/" },
{ name: "Miliusa spp.", wikiLink: "https://en.wikipedia.org/" },
{ name: "Uvaria concava", wikiLink: "https://en.wikipedia.org/" },
{ name: "Magnolia doltsopa", wikiLink: "https://en.wikipedia.org/" }
  ],
  mainPhoto: "~/images/Graphium_antiphates1.jpg",
  photos: [
  { url: "~/images/Graphium_antiphates1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }, 
  { url: "~/images/Graphium_antiphates2.jpg", credit: "© Yi-Kai Tea, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Graphium_antiphates_250952784_(cropped).jpg" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/graphium-antiphates",
  wikipediaLink: "https://en.wikipedia.org/wiki/Graphium_antiphates"
},
{
  id: 3,
  commonName: "Dakhan Common Jay",
  malayalamName: "നാട്ടുകുടുക്ക",
  scientificName: "Graphium doson",
  sciName: "Graphium doson eleius (Fruhstorfer, 1907)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "നീലവിറവാലന്‍ എന്നും വിളിക്കാറുണ്ട്. വിറളി പിടിച്ച് പറക്കുന്ന സ്വഭാവമാണ് ഇവയ്ക്ക്. ചിറകില്‍ വെള്ളയും നീലയും നിറത്തിലുള്ള പൊട്ടുകള്‍ കാണാം. ആത്ത, അരണമരം, അശോകം, വഴന, കാരപ്പൂമരം എന്നിവയുടെ ഇലകളിലാണ് സാധാരണ മുട്ടയിടാറുള്ളത്.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "50-70 mm", 
  hostPlants: [ 
{ name: "Annona glabra", wikiLink: "https://en.wikipedia.org/" },
{ name: "Annona muricata", wikiLink: "https://en.wikipedia.org/" },
{ name: "Miliusa tomentosa", wikiLink: "https://en.wikipedia.org/" },
{ name: "Monoon longifolium", wikiLink: "https://en.wikipedia.org/" },
{ name: "Polyalthia spp.", wikiLink: "https://en.wikipedia.org/" },
{ name: "Hunteria zeylanica", wikiLink: "https://en.wikipedia.org/" },
{ name: "Trachelospermum asiaticum", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum spp.", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum macrocarpum", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum malabathrum", wikiLink: "https://en.wikipedia.org/" },
{ name: "Magnolia champaca", wikiLink: "https://en.wikipedia.org/" },
{ name: "Magnolia grandiflora", wikiLink: "https://en.wikipedia.org/" },
{ name: "Magnolia liliifera", wikiLink: "https://en.wikipedia.org/" },
{ name: "Magnolia oblonga", wikiLink: "https://en.wikipedia.org/" }
  ],
  mainPhoto: "~/images/Graphium_doson1.jpg",
  photos: [
  { url: "~/images/Graphium_doson1.jpg", credit: "© SVKMBFLY, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Close_wing_puddling_of_Graphium_doson_(C._%26_R._Felder,_1864)_-_Common_Jay_WLB_MG_4417.jpg" }, 
  { url: "~/images/Graphium_doson2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/graphium-doson",
  wikipediaLink: "https://en.wikipedia.org/wiki/Graphium_doson"
  },
{
  id: 4,
  commonName: "Indian Spot Swordtail",
  malayalamName: "ചുട്ടിവാള്‍വാലന്‍",
  scientificName: "Graphium nomius",
  sciName: "Graphium nomius nomius (Esper, 1799)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "അതിവേഗത്തില്‍ പറക്കുന്ന ദേശാടനസ്വഭാവമുള്ള ഒരു പൂമ്പാറ്റയാണ് ചുട്ടിവാള്‍വാലന്‍. നേര്‍രേഖയിലൂടെ പറക്കുന്ന ഈ ശലഭത്തെ തണ്ണീര്‍ത്തടങ്ങളുടെ തീരങ്ങളില്‍ സാധാരണയായി കാണാം. വേനല്‍ കാലങ്ങളില്‍ നനഞ്ഞ മണ്ണിലിരുന്ന് ലവണമുണ്ണൂന്ന ശീലമുണ്ട്. ഇലപൊഴിയും കാടുകളും സമതലങ്ങളും ഇവയുടെ ആവാസകേന്ദ്രമാണ്.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "68–95 mm", 
  hostPlants: [ 
    { name: "Huberantha cerasoides", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "Miliusa tomentosa", wikiLink: "https://en.wikipedia.org/" },
    { name: "Miliusa velutina", wikiLink: "https://en.wikipedia.org/" },
    { name: "Monoon longifolium", wikiLink: "https://en.wikipedia.org/" } 
	],
  mainPhoto: "~/images/Graphium_nomius1.jpg",
  photos: [
  { url: "~/images/Graphium_nomius1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }, 
  { url: "~/images/Graphium_nomius2.jpg", credit: "© Sandipoutsider, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Open_wing_Basking_posture_of_Graphium_nomius_(Esper,_1799)_-_Spot_Swordtail_WLB_2.jpg" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/graphium-nomius",
  wikipediaLink: "https://en.wikipedia.org/wiki/Graphium_nomius"
},
{
  id: 5,
  commonName: "Narrow-banded Bluebottle",
  malayalamName: "നീലക്കുടുക്ക",
  scientificName: "Graphium teredon",
  sciName: "Graphium teredon (C. & R. Felder, 1865)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "ദക്ഷിണ ഏഷ്യയിലും ഓസ്ട്രേലിയലിലും കാണപ്പെടുന്ന ഒരു പൂമ്പാറ്റയാണ് നീലക്കുടുക്ക. അരണമരങ്ങള്‍ ധാരാളമുള്ള സ്ഥലങ്ങളില്‍ നീലക്കുടുക്ക ശലഭത്തെ കാണപ്പെടുന്നു. വളരെ വേഗത്തില്‍ പറക്കുന്ന പൂമ്പാറ്റയാണ് ഇത്.",
  description2: "ചിറകിനു നടുവില്‍ക്കൂടി പച്ചകലര്‍ന്ന നീലനിറത്തിലുള്ള വീതി കൂടിയ പട്ടയുണ്ട്. ഈ പട്ട സൂര്യപ്രകാശത്തില്‍ തിളങ്ങുകയും നിറം മാറുന്നത് പോലെ തോന്നുകയും ചെയ്യുന്നു. ചിറകില്‍ ഇടയ്ക്കിടെ നീലയും ചുവപ്പും പൊട്ടുകള്‍ കാണപ്പെടുന്നു. ",
  description3: "നാട്ടരുവികളുടെയും പുഴകളുടെയും തീരങ്ങളില്‍ ഈ പൂമ്പാറ്റകള്‍ മഡ്പഡ്ലിങ്ങില്‍ ഏര്‍പ്പെടാറുണ്ട്. കാനക്കൈതയുടെ ഇലകള്‍ ലാര്‍വകള്‍ ഭക്ഷിക്കാറുണ്ട്.",
  description4: "",
  description5: "",
  wingspan: "55-75 mm", 
  hostPlants: [ 
{ name: "Miliusa tomentosa", wikiLink: "https://en.wikipedia.org/" },
{ name: "Alseodaphne spp.", wikiLink: "https://en.wikipedia.org/" },
{ name: "Alseodaphne owdenii", wikiLink: "https://en.wikipedia.org/" },
{ name: "Alseodaphne semecarpifolia", wikiLink: "https://en.wikipedia.org/" },
{ name: "Camphora officinalis", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum spp.", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum camphora", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum macrocarpum", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum malabathrum", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum micranthum", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum tamala", wikiLink: "https://en.wikipedia.org/" },
{ name: "Cinnamomum verum", wikiLink: "https://en.wikipedia.org/" },
{ name: "Litsea glutinosa", wikiLink: "https://en.wikipedia.org/" },
{ name: "Machilus glaucescens", wikiLink: "https://en.wikipedia.org/" },
{ name: "Machilus odoratissimus", wikiLink: "https://en.wikipedia.org/" },
{ name: "Magnolia doltsopa", wikiLink: "https://en.wikipedia.org/" },
{ name: "Geijera salicifolia", wikiLink: "https://en.wikipedia.org/" }
  ],
  mainPhoto: "~/images/Graphium_teredon1.jpg",
  photos: [
  { url: "~/images/Graphium_teredon1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }, 
  { url: "~/images/Graphium_teredon2.jpg", credit: "© Vinayaraj, Wikimedia Commons", sourceUrl: "https://en.wikipedia.org/wiki/File:Graphium_teredon_Felder_%26_Felder,_1864_%E2%80%93_Narrow-banded_Bluebottle_at_Virajpet_(5).jpg" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/graphium-teredon",
  wikipediaLink: "https://en.wikipedia.org/wiki/Graphium_teredon"
},
{
  id: 6,
  commonName: "Indian Blue Mormon",
  malayalamName: "കൃഷ്ണശലഭം",
  scientificName: "Papilio polymnestor",
  sciName: "Papilio agenor polymnestor (Cramer, 1775)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "വലിപ്പത്തിന്റെ കാര്യത്തില്‍ ഇന്ത്യയില്‍ രണ്ടാം സ്ഥാനത്താണ് കൃഷ്ണശലഭം എന്ന മലയാളത്തില്‍ വിളിക്കുന്ന ഈ ചിത്രശലഭം. ഇന്ത്യയിലും ശ്രീലങ്കയിലുമാണ് ഇവ കാണപ്പെടുന്നത്. നമ്മുടെ നാട്ടിന്‍പുറങ്ങളില്‍ സര്‍വ്വസാധാരണയായി കണ്ടു വരുന്നു.",
  description2: "ഇരുണ്ട നിറമുള്ള മുന്‍ചിറകില്‍ ഇളം നീല അടയാളങ്ങള്‍ കാണാം. ഇളം നീല നിറമുള്ള പിന്‍ചിറകുകളില്‍ കറുത്ത പുള്ളികളും ഉണ്ട്. ചിറക് അടച്ചാല്‍ അതിന്റെ ആരംഭഭാഗത്ത് ചുവന്ന പൊട്ടും ഉണ്ടാവും. ആകെ കൂടി ഇരുണ്ട നീലനിറമായതുകൊണ്ടാണ് ഇവയെ കൃഷ്ണശലഭം എന്ന് പേര് വരാന്‍ കാരണം. പെണ്‍ശലഭങ്ങള്‍ക്കാണ് വലിപ്പക്കൂടുതല്‍ ഉള്ളത്.",
  description3: " കേരളത്തിലെ ഗ്രാമങ്ങളിലും കാട്ടുപാതയിലുമൊക്കെ ഇവയെ കാണാവുന്നതാണ്. ആണ്‍ പൂമ്പാറ്റകള്‍ വെയിലില്‍ പറന്ന് നടക്കാറുണ്ട്. എന്നാല്‍ പെണ്‍പൂമ്പാറ്റകള്‍ക്ക് തണലില്‍ കഴിയാനാണ് ഇഷ്ടപ്പെടുന്നത്. ഈര്‍പ്പം നിറഞ്ഞ അന്തരീക്ഷം ആണ് ഇവയ്ക്കു പ്രിയം. ",
  description4: "മിക്ക പുഴക്കരയിലെ മണലിലും ഇവയെ കണ്ടെത്താം. വളരെ വേഗത്തില്‍ സഞ്ചരിക്കുന്ന കൃഷ്ണശലഭങ്ങള്‍ താഴ്ന്ന് പറക്കുന്നത് അപൂര്‍വ്വമാണ്. നാരകം, കാട്ടുനാരകം എന്നിവയിലാണ് ഈ ശലഭങ്ങള്‍ മുട്ടയിടുന്നത്. തിളങ്ങുന്ന പച്ച നിറത്തിലാണ് ലാര്‍വ്വകള്‍ കാണപ്പെടുന്നത്.",
  description5: "",
  wingspan: "120-150 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_polymnestor1.jpg",
  photos: [
  { url: "~/images/Papilio_polymnestor1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/wiki/File:Blue_Mormon_(Papilio_polymnestor)_027_Butterfly_(2016.12.18).jpg" },
  { url: "~/images/Papilio_polymnestor2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://en.wikipedia.org/wiki/File:Blue_Mormon_(Papilio_polymnestor)_030_Butterfly_(2016.12.18).jpg" },
  { url: "~/images/Papilio_polymnestor3.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_polymnestor4.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_polymnestor5.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-polymnestor",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_polymnestor"
},
{
  id: 7,
  commonName: "Malabar Banded Peacock",
  malayalamName: "ബുദ്ധമയൂരി",
  scientificName: "Papilio buddha",
  sciName: "Papilio buddha (Westwood, 1872)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "സംസ്ഥാന ചിത്രശലഭമാണ് ബുദ്ധമയൂരി. മയിലിന്റെ വര്‍ണ്ണം ഉള്ളതിനാലാണ് ഇവയെ ബുദ്ധമയൂരി എന്ന് നാമം ചെയ്തിരിക്കുന്നത്. ഭംഗിയേറുന്ന വിധത്തില്‍ തിളങ്ങുന്ന പച്ച നിറം ഇരുണ്ട നീലനിറത്തില്‍ കലര്‍‌ന്ന് കറുപ്പു കലര്‍‌ന്നതുമായി ചിറകിന്റെ മദ്ധ്യത്തില്‍ ഒരു പട്ട കാണാം. പിന്‍‌ചിറകില്‍ നീണ്ട ചെറുവാലുണ്ടാകും. ",
  description2: "അവസാനത്തില്‍ കറുത്ത പുള്ളിക്കുത്തും അതിനെ ചുറ്റി ചുവന്ന നിറവും കാണാം. മുന്‍‌ചിറകുകളുടെ അടിഭാഗത്ത് ചാരനിറത്തിലുള്ള ഒരു പട്ടയുണ്ട്. പിന്‍ചിറകുകളുടെ അരികിലൂടെ നേരിയ മഞ്ഞനിറത്തിലുള്ള കുത്തുകള്‍ കാണാം. മുള്ളിലമാണ് ഇവയുടെ ലാര്‍വ്വാ ഭക്ഷ്യസസ്യം.",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "90-100 mm", 
  hostPlants: [ 
    { name: "Zanthoxylum rhetsa മുള്ളിലം", wikiLink: "https://en.wikipedia.org/wiki/Zanthoxylum_rhetsa" }
  ],
  mainPhoto: "~/images/Papilio_buddha1.jpg",
  photos: [
  { url: "~/images/Papilio_buddha1.jpg", credit: "© സുഭാഷ് പുളിക്കല്‍", sourceUrl: "" }, 
  { url: "~/images/Papilio_buddha2.jpg", credit: "Vengolis, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Malabar_banded_peacock_08385.jpg" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-buddha",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_buddha"
},
{
  id: 8,
  commonName: "Oriental Common Mime",
  malayalamName: "വഴന ശലഭം",
  scientificName: "Papilio clytia",
  sciName: "Papilio clytia clytia (Linnaeus, 1758)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "കിളിവാലന്‍ ശലഭങ്ങളില്‍ ഉള്‍പ്പെടുന്ന വളരെ സാധാരണയായി കണ്ടുവരുന്ന വഴനശലഭത്തെ രണ്ടു രൂപത്തില്‍ കാണാനാവുന്നതാണ്. വേഷപ്രച്ഛന്നം നടത്തുന്ന ഒരു ശലഭമാണ് വഴന ശലഭം. വിഷമയമല്ലാത്തവയും ഭക്ഷണയോഗ്യവുമായ ഈ ശലഭം ഇരപിടിയന്‍മാരില്‍ നിന്നും രക്ഷനേടാന്‍ ഭക്ഷണയോഗ്യമല്ലാത്ത നീലക്കടുവയേയും അരളിശലഭത്തെയും അനുകരിക്കുന്നു.",
  description2: "നീലകടുവയെ അനുകരിക്കുന്ന രൂപം dissimilis എന്നും അരളിശലഭത്തെ അനുകരിക്കുന്ന രൂപം clytia എന്നും അറിയപെടുന്നു. രണ്ടു രൂപത്തിലും ഉള്ള ആണ്‍ ശലഭങ്ങള്‍ ചെളിയൂറ്റല്‍ സ്വഭാവം കാണിക്കുന്നതായി കണ്ടെത്തിയിട്ടുണ്ട്.",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "90-120 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_clytia1.jpg",
  photos: [
  { url: "~/images/Papilio_clytia1.jpg", credit: "form clytia © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_clytia2.jpg", credit: "form dissimilis © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_clytia3.jpg", credit: "form dissimilis © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_clytia4.jpg", credit: "form clytia © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_clytia5.jpg", credit: "form clytia © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_clytia6.jpg", credit: "ജീവിതചക്രം © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-clytia",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_clytia"
},
{
  id: 9,
  commonName: "Common Banded Peacock",
  malayalamName: "നാട്ടുമയൂരി",
  scientificName: "Papilio crino",
  sciName: "Papilio crino (Fabricius, 1793)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "കേരളത്തിലും തെക്കെ ഇന്ത്യയിലും ശ്രീലങ്കയിലും കണ്ടുവരുന്നു. വരിമരത്തിലാണ് ഈ ശലഭം മുട്ടയിടുന്നത്.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "80-100 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_crino1.jpg",
  photos: [
  { url: "~/images/Papilio_crino1.jpg", credit: "© Anitava Roy, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Open_wing_basking_position_of_Papilio_crino_(Fabricius,_1793)_-_Common_Banded_Peacock_(6)_WLB.jpg" },
  { url: "~/images/Papilio_crino2.jpg", credit: "© Anitava Roy, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Close_wing_basking_position_of_Papilio_crino_(Fabricius,_1793)_-_Common_Banded_Peacock_WLB.jpg" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-crino",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_crino"
},
{
  id: 10,
  commonName: "Sahyadri Large-spotted Helen",
  malayalamName: "ചുട്ടിക്കറുപ്പന്‍",
  scientificName: "Papilio daksha",
  sciName: "Papilio daksha daksha (Hampson 1889)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "ഇന്ത്യയില്‍ കാണപ്പെടുന്ന ഏറ്റവും വലിയ ശലഭങ്ങളില്‍ മൂന്നാമനാണ് ചുട്ടിക്കറുപ്പന്‍. പേര് സൂചിപ്പിക്കും പോലെ ഇവയുടെ ശരീരവും ചിറകുകളും കറുത്തതാണ്. പിന്‍ചിറകിന്റെ മുകള്‍ഭാഗത്ത് ഇളം മഞ്ഞ നിറഞ്ഞ വെളുത്ത പാടുകള്‍ കാണാം. ഉയരത്തില്‍ പറക്കാന്‍ താല്പര്യപ്പെടുന്നവരാണ് ഇക്കൂട്ടര്‍. ",
  description2: "എന്നിരുന്നാലും താഴെയുള്ള സസ്യങ്ങളില്‍ നിന്ന് തേന്‍ നുകരാന്‍ ഇവ എത്താറുണ്ട്. വേഗത്തിലാണ് പറക്കല്‍.",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "80-115 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_daksha1.jpg",
  photos: [
  { url: "~/images/Papilio_daksha1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_Helen_(Papilio_helenus)_29_Butterfly_(2016.08.12).jpg" }, 
  { url: "~/images/Papilio_daksha2.jpg", credit: "Atanu Bose, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Open_wing_mud-puddling_position_of_Papilio_helenus_(Linnaeus,_1758)-_Red_Helen.jpg" },
  { url: "~/images/Papilio_daksha3.jpg", credit: "ജീവിതചക്രം © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-daksha",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_helenus"
},
{
  id: 11,
  commonName: "Northern Lime Swallowtail",
  malayalamName: "നാരക ശലഭം",
  scientificName: "Papilio demoleus",
  sciName: "Papilio demoleus demoleus (Linnaeus, 1758)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "കറുത്ത ചിറകുകളും അനേകം മഞ്ഞപ്പൊട്ടുകളും നീണ്ട പാടുകളുമുള്ള ഒരു സാധാരണ ശലഭമാണ് നാരക ശലഭം. സിട്രസ് ഇനത്തില്‍ പെട്ട പല സസ്യങ്ങളെയും ബാധിക്കുന്ന സാമ്പത്തിക പ്രാധാന്യമുള്ള ഒരു കീടമാണ് ഇതിന്റെ ലാര്‍വ്വ.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "80-100 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_demoleus1.jpg",
  photos: [
  { url: "~/images/Papilio_demoleus1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/" },
  { url: "~/images/Papilio_demoleus2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/" },
  { url: "~/images/Papilio_demoleus3.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/wiki/File:Papilio_demoleus_-_Lime_Swallowtail_-_Butterflies_of_Kerala_01.jpg" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-demoleus",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_demoleus"
},
{
  id: 12,
  commonName: "Malabar Raven",
  malayalamName: "പുള്ളിക്കറുപ്പന്‍",
  scientificName: "Papilio dravidarum",
  sciName: "Papilio dravidarum (Wood-Mason, 1880)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "പശ്ചിമഘട്ട പ്രദേശങ്ങളിലാണ് ഈ ശലഭങ്ങളെ കണ്ടുവരുന്നത്. കാടുകളാണ് ഇവയുടെ ഇഷ്ടമേഖല. കാട് വിട്ട് പുറത്തേയ്ക്കിറങ്ങാന്‍ ഇവ വലിയ താത്പര്യം കാണിക്കാറില്ല. മലബാര്‍ റാവന്‍ വളരെ വേഗത്തില്‍ പറക്കുന്ന ശലഭങ്ങളാണ്. ",
  description2: "ഈ ഇനത്തിലെ ആണ്‍ ശലഭങ്ങള്‍ നനഞ്ഞ നിലത്ത് ഈര്‍പ്പം വലിച്ചെടുക്കാന്‍ ഇരിക്കാറുണ്ട്. വെയില്‍ കായാന്‍ ഇഷ്ടമില്ലാത്ത ഇവര്‍ കൂടുതലും തണല്‍ പറ്റി സഞ്ചരിക്കുന്നതായാണ് കാണുന്നത്. നരച്ച തവിട്ടുനിറമാണ് ഈ ശലഭങ്ങള്‍ക്ക്",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "80-100 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_dravidarum1.jpg",
  photos: [
  { url: "~/images/Papilio_dravidarum1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/wiki/File:Papilio_dravidarum_(Wood-Mason,_1880).jpg" },
  { url: "~/images/Papilio_dravidarum2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/wiki/File:Papilio_dravidarum_(Wood-Mason,_1880)_2.jpg" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-dravidarum",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_dravidarum"
},
{
  id: 13,
  commonName: "Malabar Banded Swallowtail",
  malayalamName: "പുള്ളിവാലന്‍",
  scientificName: "Papilio liomedon",
  sciName: "Papilio liomedon (Moore, 1875)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "കാടുകളില്‍ കാണുന്ന സുന്ദരനായ ഒരു പൂമ്പാറ്റയാണ് പുള്ളിവാലന്‍. ദക്ഷിണേന്ത്യയിലാണ് ഇവയെ കണ്ടുവരുന്നത്. വംശനാശഭീഷണി നേരിട്ടുകൊണ്ടിരിക്കുന്ന ഒരു ശലഭവര്‍ഗ്ഗം കൂടിയാണിത്. ഈ ചിത്രശലഭം ഇന്ത്യയില്‍ നിയമപ്രകാരം സംരക്ഷിക്കപ്പെട്ടിട്ടുള്ളതാണ്. ചിറകുകള്‍ക്ക് തവിട്ടുകലര്‍ന്ന കറുപ്പുനിറം. മുന്‍ചിറകുകളില്‍ വെളുത്ത പാടുകളുണ്ടാവും. ",
  description2: "ചിറകുകള്‍ നിവര്‍ത്തിയാല്‍ ഇതിനോട് ചേര്‍ന്ന് മറ്റൊരു വരി വെള്ളപാടുകള്‍ കാണാവുന്നതാണ്. കൂട്ടത്തോടെ വെയില്‍ കായുന്നശീലക്കാരാണ് പുള്ളിവാലന്‍. കനല (കാട്ടുറബ്ബര്‍) എന്നയിനം മരത്തിലാണ് ഈ ശലഭം സാധാരണ മുട്ടയിടുന്നത്. കാട്ടുറബ്ബര്‍ ചെടിയുടെ തളിരിലകളില്‍ മുത്തുമാലപോലെ വരിയായിയാണ് മുട്ടയിടുന്നത്. മുട്ടകള്‍ക്ക് മഞ്ഞകലര്‍ന്ന ഓറഞ്ചുനിറമാണ്. ",
  description3: "പുഴുപ്പൊതിയ്ക്ക് ഇളം പച്ച നിറമാണ്. പുള്ളിവാലന്റെ പ്രധാന ശത്രുക്കള്‍ കടന്നലുകളാണ്. ഇവ കൂട്ടത്തോടെ എത്തി പുള്ളിവാലന്റെ മുട്ടകള്‍ നശിപ്പിക്കും. അതുകൊണ്ട് മുട്ട വിരിഞ്ഞിറങ്ങിവരുന്ന പുതിയ പൂമ്പാറ്റകളുടെ എണ്ണം, മറ്റുള്ള പൂമ്പാറ്റകളെ അപേക്ഷിച്ച് കുറവാണ്. ഇക്കാരണത്താലാണ് ഈ ശലഭം കടുത്ത വംശനാശഭീഷണി നേരിടുന്ന ചിത്രശലഭങ്ങളുടെ പട്ടികയില്‍ സ്ഥാനം പിടിച്ചതും.",
  description4: "",
  description5: "",
  wingspan: "90-100 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_liomedon1.jpg",
  photos: [
  { url: "~/images/Papilio_liomedon1.jpg", credit: "© Davidvraju, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Malabar_Banded_Swallowtail_David_Raju.jpg" },
  { url: "~/images/Papilio_liomedon2.jpg", credit: "© സുഭാഷ് പുളിക്കല്‍", sourceUrl: "https://commons.wikimedia.org/" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-liomedon",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_liomedon"
},
{
  id: 14,
  commonName: "Sahyadri Paris Peacock",
  malayalamName: "ചുട്ടിമയൂരി",
  scientificName: "Papilio paris",
  sciName: "Papilio paris tamilana (Moore, 1881)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "മയില്‍പ്പീലിത്തുണ്ടുപോലെ മരതകപ്പച്ച നിറമുള്ള സുന്ദരമായ ഒരു ചിത്രശലഭമാണ് ചുട്ടിമയൂരി. കേരളത്തില്‍ കാണുന്ന ഏറ്റവും ഭംഗിയുള്ള പൂമ്പാറ്റകളിലൊന്നായ ഇവയുടെ പിന്‍ചിറകിന്റെ മേല്‍ഭാഗത്ത് പച്ചകലര്‍ന്ന തിളങ്ങുന്ന നീലച്ചുട്ടിയും കീഴ്ഭാഗത്തായി ചുവന്ന പാടുകളും ഉണ്ടാവും.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "110-130 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_paris1.jpg",
  photos: [
  { url: "~/images/Papilio_paris1.jpg", credit: "© Atanu Bose, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Open_wing_mud-puddling_position_of_Papilio_paris_(Linnaeus,1758)_-_Paris_Peacock.jpg" }, 
  { url: "~/images/Papilio_paris2.jpg", credit: "© Rison Thumboor, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Tamil_peacock_(Papilio_Paris_tamilana)_(27943810049).jpg" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-paris",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_paris_tamilana"
},
{
  id: 15,
  commonName: "Indian Common Mormon",
  malayalamName: "നാരകക്കറുപ്പന്‍",
  scientificName: "Papilio polytes",
  sciName: "Papilio polytes romulus (Cramer, 1775)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "നഗരങ്ങളിലും, നാട്ടിന്‍പുറങ്ങളിലും, വനങ്ങളിലും ധാരാളമായി കാണാറുള്ള ചിത്രശലഭമാണ് നാരകക്കറുപ്പന്‍ അഥവാ നാരകക്കാളി. ഇവ ഉദ്യാനങ്ങളില്‍ സാധാരണ കാണാറുള്ള ചിത്രശലഭമാണ്. ഈ വിഭാഗത്തില്‍ പെടുന്ന ശലഭങ്ങള്‍ പ്രധാനമായും നാരകങ്ങളില്‍ മുട്ടയിടുന്നതുകൊണ്ടാണ് നാരകക്കാളി എന്ന് വിളിയ്ക്കുന്നത്.",
  description2: "ആണ്‍-പെണ്‍ ശലഭങ്ങള്‍ക്ക് നിറവ്യത്യാസമുണ്ട്. പെണ്‍ശലഭങ്ങള്‍ മറ്റ് ചിത്രശലഭങ്ങളുടെ നിറങ്ങള്‍ അനുകരിക്കാറുണ്ട് (Bio-mimic). പക്ഷികളുടെ കാഷ്ഠം പോലെ തോന്നിക്കുന്നവയാണ് ഇവയുടെ ലാര്‍വ്വകള്‍. കാട്ടുനാരകം, കൂവളം, പാണല്‍, കറിവേപ്പ്, നാരകം, മുള്ളിലം തുടങ്ങിയ ചെടികളിലാണ് ജീവിതചക്രം പൂര്‍ത്തിയാക്കുന്നത്.",
  description3: "കറിവേപ്പില്‍ കാണുന്ന പച്ച നിറത്തിലുള്ള പുഴു ഇതിന്റെ ലാര്‍വ്വയാണ്.",
  description4: "",
  description5: "",
  wingspan: "90-115 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Papilio_polytes1.jpg",
  photos: [
  { url: "~/images/Papilio_polytes1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/wiki/File:Papilio_polytes_romulus_(Cramer,_1775).jpg" },
  { url: "~/images/Papilio_polytes2.jpg", credit: "form cyrus © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_polytes3.jpg", credit: "form cyrus © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_polytes4.jpg", credit: "form romulus © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_polytes5.jpg", credit: "form stichius © Anila Manalil, Wikimedia Commons", sourceUrl: "https://ml.wikipedia.org/wiki/%E0%B4%AA%E0%B5%8D%E0%B4%B0%E0%B4%AE%E0%B4%BE%E0%B4%A3%E0%B4%82:Common_mormon_form_stichius.jpg" },
  { url: "~/images/Papilio_polytes6.jpg", credit: "form cyrus © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Papilio_polytes7.jpg", credit: "© Krushnamegh Kunte", sourceUrl: "https://news.mongabay.com/2014/03/scientists-discover-single-gene-that-enables-multiple-morphs-in-a-butterfly/" },
  { url: "~/images/Papilio_polytes8.jpg", credit: "ജീവിതചക്രം © ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/papilio-polytes",
  wikipediaLink: "https://en.wikipedia.org/wiki/Papilio_polytes"
},
{
  id: 16,
  commonName: "Sahyadri Birdwing",
  malayalamName: "തെക്കന്‍ ഗരുഡശലഭം",
  scientificName: "Troides minos",
  sciName: "Troides minos (Cramer,1779)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "ദക്ഷിണേന്ത്യയിലെ ഏറ്റവും വലിയ ചിത്രശലഭമാണ് തെക്കന്‍ ഗരുഡശലഭം. ആണ്‍ശലഭത്തിന്റെ മുന്‍ചിറകുകള്‍ക്ക് നല്ല കറുപ്പ് നിറമാണ്. പിന്‍ ചിറകുകളില്‍ തിളങ്ങുന്ന മഞ്ഞനിറമുണ്ട്. പെണ്‍ശലഭങ്ങള്‍ക്ക് വലുപ്പം കൂടും. പശ്ചിമഘട്ടത്തിലും പൂര്‍‌വഘട്ടത്തിന്റെ ചില ഭാഗങ്ങളിലും കണ്ടുവരുന്നു. ഇന്ത്യയിലെ ഏറ്റവും വലിയ ചിത്രശലഭമായ സാധാരണ ഗരുഡശലഭം (Common Birdwing), ഇതിന്റെ അടുത്ത ബന്ധുവാണ്.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "140–190 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Troides_minos1.jpg",
  photos: [
  { url: "~/images/Troides_minos1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Troides_minos2.jpg", credit: "© ബര്‍ണാര്‍ഡ് എം തമ്പാന്‍", sourceUrl: "" },
  { url: "~/images/Troides_minos3.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Troides_minos4.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Troides_minos5.jpg", credit: "© ബര്‍ണാര്‍ഡ് എം തമ്പാന്‍", sourceUrl: "" },
  { url: "~/images/Troides_minos6.jpg", credit: "© ബര്‍ണാര്‍ഡ് എം തമ്പാന്‍", sourceUrl: "" },
  { url: "~/images/Troides_minos7.jpg", credit: "© ബര്‍ണാര്‍ഡ് എം തമ്പാന്‍", sourceUrl: "" },
  { url: "~/images/Troides_minos8.jpg", credit: "© ബര്‍ണാര്‍ഡ് എം തമ്പാന്‍", sourceUrl: "" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/sp/2860/Troides-minos",
  wikipediaLink: "https://en.wikipedia.org/wiki/Troides_minos"
},
{
  id: 17,
  commonName: "Malabar Rose",
  malayalamName: "മലബാര്‍ റോസ്",
  scientificName: "Pachliopta pandiyana",
  sciName: "Pachliopta pandiyana (Moore, 1881)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "നാട്ടുറോസുമായി നല്ല സാമ്യമുള്ള ഒരു കിളിവാലന്‍ ശലഭമാണ് മലബാര്‍ റോസ്. തെക്കേ ഇന്ത്യയിലെ തദ്ദേശവാസിയായ ഒരു പ്രധാനശലഭമാണിത്.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
    wingspan: "110-130 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Pachliopta_pandiyana1.jpg",
  photos: [
  { url: "~/images/Pachliopta_pandiyana1.jpg", credit: "© Davidvraju, Wikimedia Commons", sourceUrl: "https://en.wikipedia.org/wiki/File:Malabar_rose.jpg" }, 
  { url: "~/images/Pachliopta_pandiyana2.jpg", credit: "© Vinayaraj, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Pachliopta_pandiyana_%E2%80%93_Malabar_Rose_76.jpg" } 
  ],
  speciesLink: "https://www.ifoundbutterflies.org/pachliopta-pandiyana",
  wikipediaLink: "https://en.wikipedia.org/wiki/Pachliopta_pandiyana"
},
{
  id: 18,
  commonName: "Indian Common Rose",
  malayalamName: "നാട്ടുറോസ്‌",
  scientificName: "Pachliopta aristolochiae",
  sciName: "Pachliopta aristolochiae aristolochiae (Fabricius, 1775)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "നമ്മുടെ നാട്ടിന്‍പുറങ്ങളില്‍ വളരെ സാധാരണയായി കാണപ്പെടുന്ന ഈ പൂമ്പാറ്റ. തല മുതല്‍ അറ്റം വരെയുള്ള ചുവന്ന നിറം ഇവയെ പെട്ടെന്ന് തിരിച്ചറിയുന്നതിന് സഹായിക്കുന്നു.",
  description2: "",
  description3: "",
  description4: "",
  description5: "",
  wingspan: "80-110 mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Pachliopta_aristolochiae1.jpg",
  photos: [
  { url: "~/images/Pachliopta_aristolochiae1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Pachliopta_aristolochiae2.jpg", credit: "© Anitava Roy, Wikimedia Commons", sourceUrl: "https://commons.wikimedia.org/wiki/File:Close_wing_Basking_of_Pachliopta_aristolochiae_(Fabricius,_1775)_-_Common_Rose_WLB.jpg" },
  { url: "~/images/Pachliopta_aristolochiae3.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Pachliopta_aristolochiae4.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/pachliopta-aristolochiae",
  wikipediaLink: "https://en.wikipedia.org/wiki/Pachliopta_aristolochiae"
},
{
  id: 19,
  commonName: "Crimson Rose",
  malayalamName: "ചക്കരറോസ്",
  scientificName: "Pachliopta hector",
  sciName: "Pachliopta hector (Linnaeus, 1758)",
  family: "കിളിവാലന്‍ ചിത്രശലഭങ്ങള്‍ (Papilionidae)",
  description1: "ഇന്ത്യയിലും ശ്രീലങ്കയിലും കാണപ്പെടുന്ന ഒരു ചിത്രശലഭം. കേരളത്തില്‍ സുലഭമായിക്കണ്ടു വരുന്നുണ്ടെങ്കിലും 1972 ലെ ഇന്ത്യന്‍ വന്യജീവി സംരക്ഷണ നിയമത്തിന്റെ ഒന്നാം പട്ടികയിലാണ് ഇതിന്റെ സ്ഥാനം. ദേശാടന സ്വഭാവമുള്ളവയാണ്. കേരളത്തിലെ നാട്ടിന്‍പുറങ്ങളിലുള്ള കുന്നിന്‍പുറങ്ങളിലും കുറ്റിക്കാടുകളിലും സാധാരണയായി കാണപ്പെടുന്നു.",
  description2: " അരിപ്പൂവ്, കൃഷ്ണകിരീടം, വട്ടപ്പെരുവലം, ചെത്തി, കൊങ്ങിണി എന്നീ ചെടികള്‍ പൂത്തുനില്‍ക്കുന്നയിടത്ത് ഇവയെ ധാരാളം കാണാം. ഗരുഡക്കൊടി, അല്‍പ്പം എന്നീ ചെടികളിലാണ് മുട്ടയിടുന്നത്. ഈ ചെടികളില്‍ ഉള്ള വിഷാംശം ഈ പൂമ്പാറ്റകളുടെ ശരീരത്തില്‍ എത്തുന്നതിനാല്‍ മറ്റ് പക്ഷികള്‍ ഇവയെ പൊതുവെ ആഹാരമാക്കാറില്ല.",
  description3: " ചുവപ്പുശരീരവും പിന്‍ചിറകുകളില്‍ കാണപ്പെടുന്ന തിളങ്ങുന്ന ചുവന്ന പൊട്ടുകളും ഇവയെ എളുപ്പം തിരിച്ചറിയാന്‍ സഹായിക്കുന്നു. പിന്‍ചിറകുകളില്‍ പതിമൂന്ന് പൊട്ടുകളുള്ളതില്‍ പിന്‍നിരയിലുള്ളവ അര്‍ദ്ധചന്ദ്രാകൃതിയിലുള്ളവയാണ്. ",
  description4: " മുട്ടയ്ക്ക് തവിട്ടുകലര്‍ന്ന ഓറഞ്ച് നിറമാണ്. ശലഭപ്പുഴുവിന് ഇരുണ്ട കരിംചുവപ്പ് നിറവും ദേഹത്ത് മുള്ളുകള്‍ പോലെ തോന്നുന്ന അറ്റം കൂര്‍ത്ത മുഴകള്‍ ഉണ്ട്.പുഴുപ്പൊതിക്ക് ഉണങ്ങിയ ഇലയുടെ നിറമാണ്.",
  description5: "",
    wingspan: "... mm", 
  hostPlants: [ 
    { name: "....", wikiLink: "https://en.wikipedia.org/" }, 
    { name: "....", wikiLink: "https://en.wikipedia.org/" } 
  ],
  mainPhoto: "~/images/Pachliopta_hector1.jpg",
  photos: [
  { url: "~/images/Pachliopta_hector1.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "https://commons.wikimedia.org/wiki/File:Crimson_Rose_Pachliopta_hector_20191126_1.jpg" },
  { url: "~/images/Pachliopta_hector2.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" },
  { url: "~/images/Pachliopta_hector3.jpg", credit: "© ബ്രിജേഷ് പൂക്കോട്ടൂര്‍", sourceUrl: "" }
  ],
  speciesLink: "https://www.ifoundbutterflies.org/pachliopta-hector",
  wikipediaLink: "https://en.wikipedia.org/wiki/Pachliopta_hector"
}

 ];
 
export const speciesList = (() => {
  const syncService = SyncService.getInstance();
  const localData = syncService.getLocalData();
  return localData || defaultSpecies;
})();