console.log("game.js start")

var Game = function () {
  this.berries = {
    "cheri": new Berry("cheri"),
    "rawst": new Berry("rawst"),
    "yache": new Berry("yache")
  }
  this.pkmn = {}

  this.poke = 0
  this.howMuchBait = 1
  this.bait = new Berry("cheri")
}

var game = new Game()

console.log("game.js end")
