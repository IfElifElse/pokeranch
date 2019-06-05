console.log("pythonic.js start")

var randInt = function (min, max) { //stolen from stackexchange
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randChoice = function ( list ) {
  rand = randInt( 0, list.length - 1 )
  return list[rand]
}

var pyRange = function ( low, high ) {
  var returnValue = new Array( )
  for( var i = low; i <= high; i ++ ){
    returnValue.push( i )
  }
  return returnValue
}

var search = function ( list, target ) {
  var found = false
  Array.from(list).forEach( function ( elem ) {
    if (elem == target) { found = true }
  })
  return found
}

var chance = function ( outOf, within ) {
  return search(pyRange(1, outOf), randInt(1, within))
}

console.log("pythonic.js end")