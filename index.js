console.log("index.js start")
cPkmn = null
cBerry = game.berries["cheri"]

var updateMeta = function () {
  $("td#poke").text("PoKe: " + game.poke)
  $("td#bait").text("Bait: " + game.bait.name + ", " + game.bait.count)
}
var updateBait = function () {
  $("span#buyBait").text("Make " + game.howMuchBait + " bait")
}
var updateBerry = function () {
  updateMeta()
  $("span#berrySell").text("Sell: " + cBerry.count)
  $("td#seedPower").text("Per grow: \n" + cBerry.seedPower)
  $("span#buySeedPower").text("Buy: \n" + cBerry.seedPowerPrice())
  $("td#marketers").text("Marketers: \n" + cBerry.marketers)
  $("span#buyMarketers").text("Buy: \n" + cBerry.marketerPrice())
  updateBait()
}
var updatePkmn = function () {
  var filledXp = 100 * (cPkmn.exp / cPkmn.reqExp)
  $("td#filledXp").css("width", filledXp + "%")
  $("td#unfilledXp").css("width", (100-filledXp) + "%")
  $("td#pkmnLevel").text("level: " + cPkmn.level + "\n(" + cPkmn.growCount + " " + cPkmn.growing + " per 3 seconds)")
}

var berryOwned = function () {
  var selected = $("select#berrySelect option:selected").text()
  if (! (selected in game.berries)) {
    console.log("berry not owned")
    return false
  }
  return game.berries[selected]
}

var oneSecLoop = setInterval(function () {
  Object.keys(game.berries).forEach(function (elem) {
    var berry = game.berries[elem]
    for (var i = 0; i < berry.marketers; i ++) {
      if (berry.count < 1) {continue}
      berry.count --
      game.poke = game.poke + berry.sellPrice
    }
    if (cBerry.name == berry.name) {updateBerry()}
  })
  updateMeta()
}, 1000)
var threeSecLoop = setInterval(function () {
  Object.keys(game.pkmn).forEach(function (elem) {
    var pkmn = game.pkmn[elem]
    if (pkmn.status != "growing") {return false}
    if (! (pkmn.growing in game.berries)) {return false}
    var berry = game.berries[pkmn.growing]
    berry.count = berry.count + pkmn.growCount
    if (cBerry.name == berry.name) {updateBerry()}
  })
}, 3 * 1000)
var quarterMinLoop = setInterval(function () {
  var bait = game.bait
  if (bait.count < 3) {return false}
  bait.count = bait.count - 3
  //if (randInt(0, 500)) {return false} // 1 in 5000 chance every 15 seconds of generating a Pokemon
  var pkmn = new Pokemon(randChoice(Object.keys(pokedex)))
  // cap chance starts at 1 in 100, gets decreased as more factors play in
  var capChance = 100
  capChance = capChance - (bait[pkmn.likes] * 2)
  capChance = capChance + (bait[pkmn.dislikes])
  console.log("attempting a capture with 1/" + capChance)
  if (randInt(0, capChance)) {
    // remove the added pokemon if the capture failed
    var index = game.pkmn.indexOf(pkmn.nickname)
    if (index > -1) {
      game.pkmn.splice(index, 1)
    }
    console.log("capture failed")
    return false
  }
  console.log("capture success, new pkmn " + pkmn.nickname)
}, 15 * 1000)

$("select#berrySelect").change(function () {
  var selected = $("select#berrySelect option:selected").text()
  console.log("changing berry to " + selected)
  var berry = null

  if (selected in game.berries) {
    console.log("berry already obtained")
    berry = game.berries[selected]
    updateBerry(berry)
  } else {
    console.log("berry requires purchase")
    berry = new Berry($("#berrySelect option:selected").text(), owned=false)
    berry.marketers = "Not researched"
    berry.seedPower = "Not researched"
    updateBerry(berry)
    $("span#berrySell").text("Research for " + berry.researchPrice)
  }
  cBerry = berry

  $("td#berryPicture").empty()
  $("td#berryPicture").append($("<img>", {
    id: "berryPicture",
    src: "berrygifs/" + berry.name + ".gif"
  }))
  $("table#berryMain").removeClass()
  $("table#berryUpgrade").removeClass()
  $("table#berryMain").addClass(berry.type)
  $("table#berryUpgrade").addClass(berry.type)
})
$("td#berryPicture").click(function () {
  if (! cBerry.owned) {return false}

  cBerry.count = cBerry.count + cBerry.seedPower
  updateBerry()
})
$("button#berrySell").click(function () {
  if (! cBerry.owned) { //purchase
    console.log("attempting purchase")
    berry = new Berry($("select#berrySelect option:selected").text())
    var cost = berry.researchPrice
    if (game.poke < cost) {console.log("not enough PoKe"); return false}
    game.poke = game.poke - cost
    game.berries[berry.name] = new Berry(berry.name)
    cBerry = game.berries[berry.name]
    updateBerry()
    return false
  }
  if (cBerry.count < 1) {
    console.log("not enough berries")
    return false
  }

  cBerry.count = cBerry.count - 1
  game.poke = game.poke + cBerry.sellPrice
  updateBerry()
})
$("button#buyMarketers").click(function () {
  if (! cBerry.owned) {return false}

  var cost = cBerry.marketerPrice()
  if (game.poke < cost) {
    console.log("not enough money (marketers)")
    return false
  }
  game.poke = game.poke - cost
  cBerry.marketers += 1
  updateBerry()
})
$("button#buySeedPower").click(function () {
  if (! cBerry.owned) {return false}
  var cost = cBerry.seedPowerPrice()
  if (game.poke < cost) {
    console.log("not enough money (seedPower)")
    return false
  }
  game.poke = game.poke - cost
  cBerry.seedPower += 1
  updateBerry()
})
$("button#buyBait").click(function () {
  if (! cBerry.owned) {return false}

  if (cBerry.count < 0) {return false}
  if (game.bait.name != cBerry.name) {
    if (game.bait.count > 0) {return false}
    else {game.bait = new Berry(cBerry.name)}
  }
  if (cBerry.count < game.howMuchBait) {
    game.howMuchBait = cBerry.count
  }
  game.bait.count = game.bait.count + game.howMuchBait
  cBerry.count = cBerry.count - game.howMuchBait
  updateBerry()
})
$("button#allBait").click(function () {
  if (! cBerry.owned) {return false}

  if (game.bait.name != cBerry.name) {
    if (game.bait.count > 0) {return false}
    else {game.bait = new Berry(cBerry.name)}
  }
  game.bait.count = game.bait.count + cBerry.count
  cBerry.count = 0
  updateBerry()
})
$("button#addBait").click(function () {
  game.howMuchBait ++
  updateBait()
})
$("button#subBait").click(function () {
  if (game.howMuchBait <= 1) {return false}
  game.howMuchBait --
  updateBait()
})

$(document).on("click", "button#pkmnSelect", function () {
  $("div#pkmn").html("")
  $("div#pkmn").append(
    "<input id=pkmnSearchbar type=text autocomplete=off />" +
    "<div id=pkmnList></div>"
  )
  Object.keys(game.pkmn).forEach(function (elem) {
    var pkmn = game.pkmn[elem]
    $("div#pkmnList").append(
      "<table id=pkmnModule class=" + pkmn.types[0] + ">" +
        "<tr>" +
          "<td id=pkmnPicture><img id=pkmnPicture src='pkmngifs/" + pkmn.name + ".gif'></img></td>" +
          "<td id=info class=nick>" + pkmn.nickname + "</td>" +
          "<td id=info>level: " + pkmn.level + "</td>" +
          "<td id=info>nature: " + pkmn.nature + "</td>" +
          "<td id=info>status: " + pkmn.status + "</td>" +
        "</tr>" +
      "</table>"
    )
  })
})
$(document).on("click", "table#pkmnModule", function () {
  console.log("clicked table")
  var pkmnNickname = $(this).find("td.nick").text()
  cPkmn = game.pkmn[pkmnNickname]
  $("div#pkmn").html("")
  $("div#pkmn").append(
    "<div id=pkmnMeta>" +
      "<div id=pkmnFullPicture><image id=pkmnFullPicture src='pkmngifs/" + cPkmn.name + ".gif' /></div>" +
      "<table id=nameNickname>" +
        "<td id=pkmnName>" + cPkmn.name + "</td>" +
        "<td id=pkmnNickname>" + cPkmn.nickname + "</td>" +
        "<td id=pkmnNature>" + cPkmn.nature + "</td>" +
      "</table>" +
      "<table id=pkmnStatus>" +
        "<td id=pkmnStatus></td>" +
      "</table>" +
      "<table id=selectRelease>" +
        "<td id=pkmnSelect><button id=pkmnSelect>Select Pokemon</button></td>" +
        "<td id=pkmnRelease><button id=pkmnRelease>Rls</button></td>" +
      "</table>" +
    "</div>" +
    "<div id=pkmnUpgrade>" +
      "<table id=pkmnLevel><td id=pkmnLevel>level: " + cPkmn.level + " (" + cPkmn.growCount + " " + cPkmn.growing + " per 3 seconds)</td></table>" +
      "<table id=pkmnXp>" +
        "<td id=filledXp></td>" +
        "<td id=unfilledXp></td>" +
      "</table>" +
      "<table id=pkmnFeed>" +
        "<td id=pkmnFeed><button id=pkmnFeed>feed</button></td>" +
      "</table>" +
      "<table id=pkmnGrowing>" +
        "<td id=pkmnGrowing><button id=pkmnGrowing>grow</button></td>" +
      "</table>" +
      "<select id=growingBerry></select>" +
      "<table id=pkmnSearch>" +
        "<td id=pkmnSearch><button id=pkmnSearch>search</button></td>" +
      "</table>" +
    "</div>"
  )
  cPkmn.possibleBerries.forEach(function (elem) {
    if (elem in game.berries) {
      $("select#growingBerry").append($("<option>", {
        value: elem,
        text: elem
      }))
    }
  })
  if (cPkmn.growing in game.berries) {
    $("select#growingBerry").val(cPkmn.growing)
    $("select#growingBerry").change()
  } else {
    cPkmn.growing = $("select#growingBerry option:selected").text()
  }
})
$(document).on("click", "button#pkmnFeed", function () {
  if (! cBerry.owned) {return false}
  console.log("attempting to feed " + cPkmn.nickname + " with " + cBerry.name)
  var amount = 1
  cPkmn.feed(berry, amount)
  updatePkmn(pkmn)
  updateBerry(berry)
})

$(document).ready(function () {
  $("select#berrySelect").val("cheri")
  $("select#berrySelect").change()
})

console.log("index.js end")
