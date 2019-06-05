console.log("pokemon.js start")

var Pokemon = function (name) {
  console.log("\ncreating " + name)
  this.name = name
  do {
    this.nickname = nameGenMain(new Generator())
  } while (this.nickname in game.pkmn)
  console.log(this.name + "'s name is " + this.nickname)
  game.pkmn[this.nickname] = this

  var data = pokedex[this.name]
  console.log(data)
  this.id = data[0]

  this.types = data[1]
  var types = this.types

  // determining nature
  var ev = data[4] // defaults to natural ev
  var searched = chance(70, 100) // 70/100 (70%) change for a natural nature
  if (searched) {
    console.log("nature based on ev")
    // no change needed to ev, defaults to the natural ev of the pokemon
  } else {
    console.log("nature based on random")
    ev = randInt(1, 5) //random ev set
  }
  let possibleNatures = Object.keys(naturedex[ev])
  this.nature = randChoice(possibleNatures) // based on random ev or natural ev
  this.likes = naturedex[ev][this.nature][0]
  this.dislikes = naturedex[ev][this.nature][1]
  console.log(this.nature + ", likes " + this.likes + ", dislikes " + this.dislikes)

  // determining compatible berries
  var possibleBerries = [] // initial list
  Object.keys(berrydex).forEach(function (elem) {
    var berry = new Berry(elem)
    // add to list if the berry's type matches the pokemon's type
    if (search(types, berry.type)) {possibleBerries.push(berry.name)}
  })
  this.possibleBerries = possibleBerries // getting around the inability to use `this` in .forEach
  var selectedBerry = possibleBerries[0] // default selected berry
  Object.keys(this.possibleBerries).forEach(function (index) {
    elem = possibleBerries[index] // index is the position of an element in possibleBerries
    var berry = new Berry(elem)
    // set default selected berry if it matches one that the player has already obtained
    if (berry.name in game.berries) {selectedBerry = elem}
  })
  this.selectedBerry = selectedBerry
  console.log(this.selectedBerry)
  this.status = "growing"

  this.rarity = data[5]

  var fastXP = function (level) { // "f"
    return ((3 / 5) * Math.pow(level, 3)) + 10
  }
  var medFastXP = function (level) { // "mf"
    return ((9 / 10) * Math.pow(level, 3)) + 10
  }
  var medSlowXP = function (level) { // "ms"
    return ((11 / 10) * Math.pow(level, 3)) + 10
  }
  var slowXP = function (level) { // "s"
    return ((7 / 5) * Math.pow(level, 3)) + 10
  }
  var xpFunc
  switch (data[6]) {
    case "f":
      xpFunc = fastXP
      break
    case "mf":
      xpFunc = medFastXP
      break
    case "ms":
      xpFunc = medSlowXP
      break
    case "s":
      xpFunc = slowXP
      break
    default:
      console.log("unknown xp curve " + data[6])
      console.log("defaulting to ms")
      xpFunc = medSlowXP
  }
  this.xpCurve = xpFunc


  this.level = 0
  this.exp = 0
  this.evo = data[2]
  this.evolvesTo = data[3]
  this.growCount = (4 - this.evo) + Math.floor((this.level / 4))

  this.levelUp = function () {
    this.level ++
    this.exp = 0
    this.reqExp = Math.floor(this.xpCurve(this.level))
    console.log(this.name + " xp to next level: " + this.reqExp)
    this.growCount = (4 - this.evo) + Math.floor((this.level / 4))
    // TODO: EVOLUTION CHECK
  }
  this.levelUp()
  console.log(this.growCount)

  this.feed = function (berry, amount) {
    // berry feed xp is based on berry taste
    if (berry.count < 1) {console.log("not enough berries"); return false}
    berry.count = berry.count - amount
    var exp = berry.score
    var like = berry[this.likes]
    var dislike = berry[this.dislikes]
    //console.log(exp + " + (" + this.likes + ") " + like + " - (" + this.dislikes + ") " + dislike)
    exp = Math.floor(exp * (1 + (like * .02)))
    console.log("added like metric to exp " + exp)
    exp = Math.floor(exp * (1 - (dislike * .02)))
    console.log("added dislike metric to exp " + exp)
    console.log(this.name + " gained " + exp + " experience from eating " + berry.name)
    this.exp = this.exp + exp

    if (this.exp >= this.reqExp) {
      this.levelUp()
    }
  }
}

let randomPkmn = new Pokemon(randChoice(Object.keys(pokedex)))
let randomPkmn2 = new Pokemon(randChoice(Object.keys(pokedex)))

console.log("pokemon.js end")
