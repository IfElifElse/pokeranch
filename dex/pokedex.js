console.log("pokedex.js loading")

// 0: none, 1: attack, 2: defense, 3: special attack, 4: special defense, 5: speed
//
//              [dexId, [types], evoLevel, [evolvesTo, atLevel], ev, catchRate, ]
pokedex = {
  "bulbasaur":  [1,   ["grass", "poison"], 2, ["ivysaur", 16], 3, 45, "ms"],
  "ivysaur":    [2,   ["grass", "poison"], 1, ["venusaur", 32]],
  "venusaur":   [3,   ["grass", "poison"], 0],

  "charmander": [4,   ["fire"], 2, ["charmeleon", 16], 5, 45, "ms"],
  "charmeleon": [5,   ["fire"], 1, ["charizard", 36]],
  "charizard":  [6,   ["fire", "flying"], 0],

  "squirtle":   [7,   ["water"], 2, ["wartortle", 16], 2, 45, "ms"],
  "wartortle":  [8,   ["water"], 1, ["blastoise", 36]],
  "blastoise":  [9,   ["water"], 0],

  "caterpie":   [10,  ["bug"], 3, ["metapod", 7], 0, 255, "mf"],
  "metapod":    [11,  ["bug"], 2, ["butterfree", 10]],
  "butterfree": [12,  ["bug", "flying"], 1],

  "weedle":     [13,  ["bug", "poison"], 3, ["kakuna", 7], 5, 255, "mf"],
  "kakuna":     [14,  ["bug", "poison"], 2, ["beedrill", 10]],
  "beedrill":   [15,  ["bug", "poison"], 1],

  "pidgey":     [16,  ["normal", "flying"], 3, ["pidgeotto", 18], 5, 255, "ms"],
  "pidgeotto":  [17,  ["normal", "flying"], 2, ["pidgeot", 36]],
  "pidgeot":    [18,  ["normal", "flying"], 1],

  "rattatta":   [19,  ["normal"], 3, ["raticate", 20], 5, 255, "mf"],
  "raticate":   [20,  ["normal"], 2],

  "spearow":    [21,  ["normal", "flying"], 3, ["fearow", 20], 5, 255, "mf"],
  "fearow":     [22,  ["normal", "flying"], 2],

  "ekans":      [23,  ["poison"], 3, ["arbok", 22], 1, 255, "mf"],
  "arbok":      [24,  ["poison"], 2],

  "pichu":      [172, ["electric"], 2, ["pikachu", "time"], 5, 190, "mf"],
  "pikachu":    [25,  ["electric"], 1, ["raichu", "thunder stone"]],
  "raichu":     [26,  ["electric"], 0],

  "sandshrew":  [27,  ["ground"], 3, ["sandslash", 22], 2, 255, "mf"],
  "sandslash":  [28,  ["ground"], 2],

  "nidoranF":   [29,  ["poison"], 3, ["nidorina", 16], 0, 235, "ms"],
  "nidorina":   [30,  ["poison"], 2, ["nidoqueen", "moon stone"]],
  "nidoqueen":  [31,  ["poison", "ground"], 1],

  "nidoranM":   [32,  ["poison"], 3, ["nidorino", 16], 1, 235, "ms"],
  "nidorino":   [33,  ["poison"], 2, ["nidoking", "moon stone"]],
  "nidoking":   [34,  ["poison", "ground"], 1],

  "cleffa":     [173, ["normal"], 2, ["clefairy", "time"], 4, 150, "f"],
  "clefairy":   [35,  ["normal"], 1, ["clefable", "moon stone"]],
  "clefable":   [36,  ["normal"], 0],

  "vulpix":     [37,  ["fire"], 2, ["ninetails", "fire stone"], 5, 190, "mf"],
  "ninetails":  [38,  ["fire"], 1],

  "igglybuff":  [174, ["normal"], 2, ["jigglypuff", "time"], 0, 170, "f"],
  "jigglypuff": [39,  ["normal"], 1, ["wigglytuff", "moon stone"]],
  "wigglytuff": [40,  ["normal"], 0],

  "zubat":      [41,  ["flying", "poison"], 3, ["golbat", 22], 5, 255, "mf"],
  "golbat":     [42,  ["flying", "poison"], 2, ["crobat", "time"]],
  "crobat":     [169, ["poison", "flying"], 1],

  "oddish":     [43,  ["grass", "poison"], 3, ["gloom", 21], 3, 255, "ms"],
  "gloom":      [44,  ["grass", "poison"], 2, [["vileplume", "leaf stone"], ["bellossom", "sun stone"]]],
  "vileplume":  [45,  ["grass", "poison"], 1],
  "bellossom":  [182, ["grass"], 1],

  "paras":      [46,  ["bug", "grass"], 2, ["parasect", 24], 1, 190, "mf"],
  "parasect":   [47,  ["bug", "grass"], 1],



  "venonat":    [48,  ["bug", "poison"], 2, ["venomoth", 31], 4, 190, "mf"],
  "venomoth":   [49,  ["bug", "poison"], 1],

  "diglet":     [50,  ["ground"], 3, ["dugtrio", 26], 5, 255, "mf"],
  "dugtrio":    [51,  ["ground"], 2],

  "meowth":     [52,  ["normal"], 3, ["persian", 28], 5, 255, "mf"],
  "persian":    [53,  ["normal"], 2],

  "psyduck":    [54,  ["water"], 2, ["golduck", 33], 3, 190, "mf"],
  "golduck":    [55,  ["water"], 1],

  "mankey":     [56,  ["fighting"], 2, ["primeape", 28], 1, 190, "mf"],
  "primeape":   [57,  ["fighting"], 1],

  "growlithe":  [58,  ["fire"], 2, ["arcanine", "fire stone"], 1, 190, "s"],
  "arcanine":   [59,  ["fire"], 1],

  "poliwag":    [60,  ["water"], 3, ["poliwhirl", 25], 5, 255, "ms"],
  "poliwhirl":  [61,  ["water"], 2, [["poliwrath", "water stone"], ["politoed"], "king's rock"]],
  "poliwrath":  [62,  ["water", "fighting"], 1],
  "politoed":   [186, ["water"], 1],

  "abra":       [63,  ["psychic"], 3, ["kadabra", 16], 3, 200, "ms"],
  "kadabra":    [64,  ["psychic"], 2, ["alakazam", "time"]],
  "alakazam":   [65,  ["psychic"], 1],

  "machop":     [66,  ["fighting"], 3, ["machoke", 28], 1, 180, "ms"],
  "machoke":    [67,  ["fighting"], 2, ["machamp", "time"]],
  "machamp":    [68,  ["fighting"], 1],

  "bellsprout": [69,  ["grass", "poison"], 3, ["weepinbell", 21], 1, 255, "ms"],
  "weepinbell": [70,  ["grass", "poison"], 2, ["victreebel", "leaf stone"]],
  "victreebel": [71,  ["grass", "poison"], 1],

  "tentacool":  [72,  ["water", "poison"], 2, ["tentacreul", 30], 4, 190, "s"],
  "tentacreul": [73,  ["water", "poison"], 1],

  "geodude":    [74,  ["rock", "ground"], 3, ["graveler", 25], 2, 255, "ms"],
  "graveler":   [75,  ["rock", "ground"], 2, ["golem", "time"]],
  "golem":      [76,  ["rock", "ground"], 1],

  "ponyta":     [77,  ["fire"], 2, ["rapidash", 40], 5, 190, "mf"],
  "rapidash":   [78,  ["fire"], 1],

  "slowpoke":   [79,  ["water", "psychic"], 2, [["slowbro", 37], ["slowking", "king's rock"]], 0, 190, "mf"],
  "slowbro":    [80,  ["water", "psychic"], 1],
  "slowking":   [199, ["water", "psychic"], 1],

  "magnemite":  [81,  ["electric"], 2, ["magneton", 30], 3, 190, "mf"],
  "magneton":   [82,  ["electric"], 1],

  "farfetch'd": [83,  ["normal", "flying"], 1, 1, 45, "mf"],

  "doduo":      [84,  ["normal", "flying"], 2, ["dodrio", 31], 1, 190, "mf"],
  "dodrio":     [85,  ["normal", "flying"], 1],

  "seel":       [86,  ["water"], 2, ["dewgong", 34], 4, 190, "mf"],
  "dewgong":    [87,  ["water", "ice"], 1],

  "grimer":     [88,  ["poison"], 2, ["muk", 38], 0, 190, "mf"],
  "muk":        [89,  ["poison"], 1],

  "shellder":   [90,  ["water"], 2, ["cloyster", "water stone"], 2, 190, "s"],
  "cloyster":   [91,  ["water", "ice"], 1],

  "gastly":     [92,  ["ghost", "poison"], 3, ["haunter", 25], 3, 190, "ms"],
  "haunter":    [93,  ["ghost", "poison"], 2, ["gengar", "time"]],
  "gengar":     [94,  ["ghost", "poison"], 1],

  "onyx":       [95,  ["rock", "ground"], 1, ["steelix", "metal coat"], 2, 45, "mf"],
  "steelix":    [208, ["steel", "ground"], 0],

  "drowzee":    [96,  ["psychic"], 2, ["hypno", 26], 4, 190, "mf"],
  "hypno":      [97,  ["psychic"], 1],

  "krabby":     [98,  ["water"], 2, ["kingler", 28], 1, 225, "mf"],
  "kingler":    [99,  ["water"], 1],

  "voltorb":    [100, ["electric"], 2, ["electrode", 30], 5, 190, "mf"],
  "electrode":  [101, ["electric"], 1],

  "exeggcute":  [102, ["grass", "psychic"], 2, ["exeggutor", "leaf stone"], 2, 90, "s"],
  "exeggutor":  [103, ["grass", "psychic"], 1],

  "cubone":     [104, ["ground"], 2, ["marowak", 28], 2, 190, "mf"],
  "marowak":    [105, ["ground"], 1],

  "tyrogue":    [236, ["fighting"], 1, [["hitmonlee", "random"], ["hitmonchan", "random"], ["hitmontop"], "random"], 1, 75, "mf"],
  "hitmonlee":  [106, ["fighting"], 0],
  "hitmonchan": [107, ["fighting"], 0],
  "hitmontop":  [237, ["fighting"], 0],

  "lickitung":  [108, ["normal"], 1, [], 0, 45, "mf"],

  "koffing":    [109, ["poison"], 2, ["weezing", 35], 2, 190, "mf"],
  "weezing":    [110, ["poison"], 1],

  "ryhorn":     [111, ["ground", "rock"], 2, ["rhydon", 42], 2, 120, "s"],
  "rhydon":     [112, ["ground", "rock"], 1],

  "chansey":    [113, ["normal"], 1, ["blissey", "time"], 0, 30, "f"],
  "blissey":    [242, ["normal"], 0],

  "tangela":    [114, ["grass"], 1, [], 2, 45, "mf"],

  "kangaskhan": [115, ["normal"], 1, [], 0, 45, "mf"],

  "horsea":     [116, ["water"], 3, ["seadra", 32], 3, 225, "mf"],
  "seadra":     [117, ["water"], 2, ["kingdra", "dragon scale"]],
  "kingdra":    [230, ["water", "dragon"], 1],

  "goldeen":    [118, ["water"], 3, ["seaking", 33], 1, 225, "mf"],
  "seaking":    [119, ["water"], 2],

  "staryu":     [120, ["water"], 3, ["starmie", "water stone"], 5, 225, "s"],
  "starmie":    [121, ["water", "psychic"], 2],

  "mr mime":    [122, ["psychic"], 1, [], 4, 45, "mf"],

  "scyther":    [123, ["bug", "flying"], 1, ["scizor", "metal coat"], 1, 45, "mf"],
  "scizor":     [212, ["bug", "steel"], 0],

  "smoochum":   [238, ["ice", "psychic"], 1, ["jynx", 30], 3, 45, "mf"],
  "jynx":       [124, ["ice", "psychic"], 0],

  "elekid":     [239, ["electric"], 1, ["electabuzz", 30], 5, 45, "mf"],
  "electabuzz": [125, ["electric"], 0],

  "magby":      [240, ["fire"], 1, ["magmar", 30], 5, 45, "mf"],
  "magmar":     [126, ["fire"], 0],

  "pinsir":     [127, ["bug"], 1, [], 1, 45, "s"],

  "tauros":     [128, ["normal"], 1, [], 1, 45, "s"],

  "magikarp":   [129, ["water"], 3, ["gyrados", 20], 5, 255, "s"],
  "gyrados":    [130, ["water", "flying"], 2],

  "lapras":     [131, ["water", "ice"], 1, [], 0, 45, "s"],

  "ditto":      [132, ["normal"], 1, [], 0, 35, "mf"],

  "eevee":      [133, ["normal"], 1, [["vaporeon", "water stone"], ["jolteon", "thunder stone"], ["flareon", "fire stone"], ["espeon", "sun stone"], ["umbreon", "moon stone"]], 4, 45, "mf"],
  "vaporeon":   [134, ["water"], 0],
  "jolteon":    [135, ["electric"], 0],
  "flareon":    [136, ["fire"], 0],
  "espeon":     [196, ["psychic"], 0],
  "umbreon":    [197, ["dark"], 0],

  "porygon":    [137, ["normal"], 1, ["porygon2", "upgrade"], 3, 45, "mf"],
  "porygon2":   [233, ["normal"], 0],

  "omanyte":    [138, ["rock", "water"], 1, ["omastar", 40], 2, 45, "mf"],
  "omastar":    [139, ["rock", "water"], 0],

  "kabuto":     [140, ["rock", "water"], 1, ["kabutops", 40], 2, 45, "mf"],
  "kabutops":   [141, ["rock", "water"], 0],

  "aerodactyl": [142, ["rock", "flying"], 1, [], 5, 45, "s"],

  "snorlax":    [143, ["normal"], 1, [], 0, 25, "s"],

  "articuno":   [144, ["ice"], -1, [], 4, 3, "s"],

  "zapdos":     [145, ["electric"], -1, [], 3, 3, "s"],

  "moltres":    [146, ["fire"], -1, [], 3, 3, "s"],

  "dratini":    [147, ["dragon"], 1, ["dragonair", 30], 1, 45, "s"],
  "dragonair":  [148, ["dragon"], 0, ["dragonite", 55]],
  "dragonite":  [149, ["dragon", "flying"], -1],

  "mewtwo":     [150, ["psychic"], -1, [], 0, 3, "s"],

  "mew":        [151, ["psychic"], -2, [], 0, 1, "s"],


  "chikorita":  [152, ["grass"], 2, ["bayleef", 16], 4, 45, "ms"],
  "bayleef":    [153, ["grass"], 1, ["meganium", 32]],
  "meganium":   [154, ["grass"], 0],

  "cyndaquil":  [155, ["fire"], 2, ["quilava", 14], 5, 45, "ms"],
  "quilava":    [156, ["fire"], 1, ["typhlosion", 36]],
  "typhlosion": [157, ["fire"], 0],

  "totodile":   [158, ["water"], 2, ["croconaw", 18], 1, 45, "ms"],
  "croconaw":   [159, ["water"], 1, ["feraligatr", 30]],
  "feraligatr": [160, ["water"], 0],

  "sentret":    [161, ["normal"], 3, ["furret", 15], 1, 255, "mf"],
  "furret":     [162, ["normal"], 2],

  "hoothoot":   [163, ["normal", "flying"], 3, ["noctowl", 20], 5, 255, "mf"],
  "noctowl":    [164, ["normal", "flying"], 2],

  "ledyba":     [165, ["bug", "flying"], 3, ["ledian", 18], 4, 255, "f"],
  "ledian":     [166, ["bug", "flying"], 2],

  "spinarak":   [167, ["bug", "poison"], 3, ["ariados", 22], 1, 255, "f"],
  "ariados":    [168, ["bug", "poison"], 2],

  "chinchou":   [170, ["water", "electric"], 2, ["lanturn", 27], 0, 190, "s"],
  "lanturn":    [171, ["water", "electric"], 1],

  "togepi":     [175, ["normal"], 2, ["togetic", "time"], 4, 190, "f"],
  "togetic":    [176, ["normal", "flying"], 1],

  "natu":       [177, ["psychic", "flying"], 2, ["xatu", 25], 3, 190, "mf"],
  "xatu":       [178, ["psychic", "flying"], 1],

  "mareep":     [179, ["electric"], 3, ["flaaffy", 15], 3, 235, "ms"],
  "flaaffy":    [180, ["electric"], 2, ["ampharos", 30]],
  "ampharos":   [181, ["electric"], 1],

  "marill":     [183, ["water"], 2, ["azumarill", 18], 0, 190, "f"],
  "azumarill":  [184, ["water"], 1],

  "sudowoodo":  [185, ["rock"], 1, 2, 65, "mf"],

  "hoppip":     [187, ["grass", "flying"], 3, ["skiploom", 18], 4, 255, "ms"],
  "skiploom":   [188, ["grass", "flying"], 2, ["jumpluff", 27]],
  "jumpluff":   [189, ["grass", "flying"], 1],

  "aipom":      [190, ["normal"], 1, [], 5, 45, "f"],

  "sunkern":    [191, ["grass"], 3, ["sunflora", "sun stone"], 3, 235, "ms"],
  "sunflora":   [192, ["grass"], 2],

  "yanma":      [193, ["bug", "flying"], 1, [], 5, 75, "mf"],

  "wooper":     [194, ["water", "ground"], 3, ["quagsire", 20], 0, 255, "mf"],
  "quagsire":   [195, ["water", "ground"], 2],

  "murkrow":    [198, ["dark", "flying"], 1, 5, 30, "ms"],

  "misdreavus": [200, ["ghost"], 1, [], 4, 45, "f"],

  "unown":      [201, ["psychic"], 2, [], 3, 225, "mf"],

  "wobuffet":   [202, ["psychic"], 1, [], 0, 45, "mf"],

  "girafarig":  [203, ["normal", "psychic"], 1, [], 3, 60, "mf"],

  "pineco":     [204, ["bug"], 2, ["forretress", 31], 2, 190, "mf"],
  "forretress": [205, ["bug", "steel"], 1],

  "dunsparce":  [206, ["normal"], 2, [], 0, 190, "mf"],

  "gligar":     [207, ["ground", "flying"], 1, 2, 60, "ms"],

  "snubbull":   [209, ["normal"], 2, ["granbull", 23], 1, 190, "f"],
  "granbull":   [210, ["normal"], 1],

  "qwilfish":   [211, ["water", "poison"], 1, [], 1, 45, "mf"],

  "shuckle":    [213, ["bug", "rock"], 2, [], 2, 190, "ms"],

  "heracross":  [214, ["bug", "fight"], 1, [], 1, 45, "s"],

  "sneasel":    [215, ["dark", "ice"], 1, [], 5, 60, "ms"],

  "teddiursa":  [216, ["normal"], 2, ["ursaring", 30], 1, 120, "mf"],
  "ursaring":   [217, ["normal"], 1],

  "slugma":     [218, ["fire"], 2, ["magcargo", 38], 3, 190, "mf"],
  "magcargo":   [229, ["fire", "rock"], 1],

  "swinub":     [220, ["ice", "ground"], 3, ["piloswine", 33], 1, 225, "s"],
  "piloswine":  [221, ["ice", "ground"], 2],

  "corsola":    [222, ["water", "rock"], 1, [], 4, 60, "f"],

  "remoraid":   [223, ["water"], 2, ["octillery", 25], 3, 190, "mf"],
  "octillery":  [224, ["water"], 1],

  "delibird":   [225, ["ice", "flying"], 1, [], 5, 45, "f"],

  "mantine":    [226, ["water", "flying"], 1, [], 4, 25, "s"],

  "skarmory":   [227, ["steel", "flying"], 1, [], 2, 25, "s"],

  "houndour":   [228, ["dark", "fire"], 2, ["houndoom", 24], 3, 120, "s"],
  "houndoom":   [229, ["dark", "fire"], 1],

  "phanpy":     [231, ["ground"], 2, ["donphan", 25], 0, 120, "mf"],
  "donphan":    [232, ["ground"], 1],

  "stanler":    [234, ["normal"], 1, [], 1, 45, "s"],

  "smeargle":   [235, ["normal"], 1, [], 5, 45, "f"],

  "miltank":    [241, ["normal"], 1, [], 2, 45, "s"],

  "raikou":     [243, ["electric"], -1, [], 5, 3, "s"],

  "entei":      [244, ["fire"], -1, [], 1, 3, "s"],

  "suicune":    [245, ["water"], -1, [], 4, 3, "s"],

  "larvitar":   [246, ["rock", "ground"], 1, ["pupitar", 30], 1, 45, "s"],
  "pupitar":    [247, ["rock", "ground"], 0, ["tyranitar", 55]],
  "tyranitar":  [248, ["ground", "dark"], -1],

  "lugia":      [249, ["psychic", "flying"], -1, [], 4, 3, "s"],

  "ho-oh":      [250, ["fire", "flying"], -1, [], 4, 3, "s"],

  "celebi":     [251, ["psychic", "grass"], -2, [], 0, 1, "ms"]
}
console.log("pokedex.js loaded")
