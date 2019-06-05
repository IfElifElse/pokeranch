console.log("berrydex.js loading")

berrydex = {
  /*
  taste score =
    s * (1 + (n / 5))
      where s: sum of all values
      where n: number of values equal to zero
 
  berry shop cost =
    floor(t * 12.5)
      where t: taste score
 
  berry sell cost =
    floor((t * .1) / 1.75) + 1
      where t: taste score
 
  berry marketer cost =
    floor((1.2)^xa + a)
      where x: marketers
      where a: berry sell cost
 
  seed power cost =
    floor((.9a)^x + a)
      where x: seed power
      where a: berry sell cost
  
  */

  //hp restore
  "aguav":  [[0, 0, 0, 15, 0],    "dragon"],  //27
  "enigma": [[40, 10, 0, 0, 0],   "bug"],     //  80
  "figy":   [[15, 0, 0, 0, 0],    "bug"],     //27
  "ipapa":  [[0, 0, 0, 0, 15],    "dark"],    //27
  "mago":   [[0, 0, 15, 0, 0],    "ghost"],   //27
  "oran":   [[10, 10, 0, 10, 10], "poison"],  // 48
  "sitrus": [[0, 10, 10, 10, 10], "psychic"], // 48
  "wiki":   [[0, 15, 0, 0, 0],    "rock"],    //27

  //status restore
  "aspear": [[0, 0, 0, 0, 10],    "ice"],      //18
  "cheri":  [[10, 0, 0, 0, 0],    "fire"],     //18
  "chesto": [[0, 10, 0, 0, 0],    "water"],    //18
  "leppa":  [[10, 0, 10, 10, 10], "fighting"], //  48
  "lum":    [[10, 10, 10, 10, 0], "flying"],   //  48
  "pecha":  [[0, 0, 10, 0, 0],    "electric"], //18
  "persim": [[10, 10, 10, 0, 10], "ground"],   //  48
  "rawst":  [[0, 0, 0, 10, 0],    "grass"],    //18

  //stat increase
  "apicot": [[10, 30, 0, 0, 30],   "ground"],   // 98
  "custap": [[0, 0, 40, 10, 0],    "ghost"],    //80
  "ganlon": [[0, 30, 10, 30, 0],   "ice"],      // 98
  "jaboca": [[0, 0, 0, 40, 10],    "dragon"],   //80
  "lansat": [[30, 10, 30, 10, 30], "flying"],   //  110
  "liechi": [[30, 10, 30, 0, 0],   "grass"],    // 98
  "micle":  [[0, 40, 10, 0, 0],    "rock"],     //80
  "petaya": [[30, 0, 0, 30, 10],   "poison"],   // 98
  "rowap":  [[10, 0, 0, 0, 40],    "dark"],     //80
  "salac":  [[0, 0, 30, 10, 30],   "fighting"], // 98
  "starf":  [[30, 10, 30, 10, 30], "psychic"],  //  110

  //supereffective block
  "babiri": [[25, 10, 0, 0, 0], "steel"],    //  56
  "charti": [[10, 20, 0, 0, 0], "rock"],     // 48
  "chilan": [[25, 10, 0, 0, 0], "normal"],   //  56
  "chople": [[15, 0, 0, 10, 0], "fighting"], //40
  "coba":   [[0, 10, 0, 15, 0], "flying"],   //40
  "colbur": [[0, 0, 0, 10, 20], "dark"],     //  56
  "haban":  [[0, 0, 10, 20, 0], "dragon"],   //  56
  "kasib":  [[0, 10, 20, 0, 0], "ghost"],    //  56
  "kebia":  [[0, 15, 0, 0, 10], "poison"],   //40
  "occa":   [[15, 0, 10, 0, 0], "fire"],     //40
  "passho": [[0, 15, 0, 10, 0], "water"],    //40
  "papaya": [[0, 0, 10, 0, 15], "psychic"],  //40
  "rindo":  [[10, 0, 0, 15, 0], "grass"],    //40
  "shuca":  [[10, 0, 15, 0, 0], "ground"],   //40
  "tanga":  [[20, 0, 0, 0, 10], "bug"],      // 48
  "wacan":  [[0, 0, 15, 0, 10], "electric"], //40
  "yache":  [[0, 10, 0, 0, 15], "ice"],      //40

  //pokeblocks
  "belue":  [[10, 0, 0, 0, 30], "electric"], //  64
  "bluk":   [[0, 10, 10, 0, 0], "fire"],     //32
  "cornn":  [[0, 20, 10, 0, 0], "bug"],      // 48
  "durin":  [[0, 0, 0, 30, 10], "water"],    //  64
  "magost": [[0, 0, 20, 10, 0], "rock"],     // 48
  "nanab":  [[0, 0, 10, 10, 0], "water"],    //32
  "nomel":  [[10, 0, 0, 0, 20], "dragon"],   // 48
  "pamtre": [[0, 30, 10, 0, 0], "steel"],    //  64
  "pinap":  [[10, 0, 0, 0, 10], "grass"],    //32
  "rabuta": [[0, 0, 0, 20, 10], "ghost"],    // 48
  "razz":   [[10, 10, 0, 0, 0], "steel"],    //32
  "spelon": [[30, 10, 0, 0, 0], "dark"],     //  64
  "watmel": [[0, 0, 30, 10, 0], "fire"],     //  64
  "wepear": [[0, 0, 0, 10, 10], "electric"], //32

  //friendliness
  "grepa":  [[0, 10, 10, 0, 10], "flying"],   //42
  "hondew": [[10, 10, 0, 10, 0], "ground"],   //42
  "kelpsy": [[0, 10, 0, 10, 10], "fighting"], //42
  "pomeg":  [[10, 0, 10, 10, 0], "ice"],      //42
  "qualot": [[10, 0, 10, 0, 10], "poison"],   //42
  "tamato": [[20, 10, 0, 0, 0],  "psychic"]   // 48
}

console.log("berrydex.js loaded")