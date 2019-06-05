console.log("berry.js start")

var Berry = function (name, owned = true) {
  this.name = name
  this.owned = owned
  var data = berrydex[this.name]
  // tastes
  this.spicy = data[0][0]
  this.dry = data[0][1]
  this.sweet = data[0][2]
  this.bitter = data[0][3]
  this.sour = data[0][4]
  // type
  this.type = data[1]
  // taste score
  var total = 0
  var zeroes = 0
  data[0].forEach(function (val) {
    total += val
    if (val === 0) {
      zeroes += 1
    }
  })
  this.score = total * (1 + (zeroes / 5))

  // incremental vars
  this.count = 0
  this.marketers = 0
  this.seedPower = 1

  this.researchPrice = Math.floor(Math.pow(this.score, 2) * 30)
  this.sellPrice = Math.floor((this.score * .1) / 3) + 1

  // changing vars
  this.marketerPrice = function () {
    return Math.floor(
      (2 * this.marketers) + Math.pow(.8 * this.sellPrice * this.marketers, 2) + (3 * this.sellPrice)
    ) //2x + .8ax^2 + 3a
  }
  this.seedPowerPrice = function () {
    return Math.floor(
      (2 * this.seedPower) + Math.pow(2 * this.sellPrice * this.seedPower, 2) + (5 * this.sellPrice)
    ) //2x + 2ax^2 + 5a
  }

  this.grow = function () {
    this.count += this.seedPower
  }
}

console.log("berry.js end")
