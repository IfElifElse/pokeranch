console.log("namegen.js start")

var hallOfFame = ['ondrth'];

var constonants = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w','y','z'];
var vowels = ['a', 'e', 'i', 'o', 'u'];

var doubles = ['b', 'd', 'e', 'f', 'g', 'k', 'l', 'n', 't'];

var goesToC = {
	a: ['b','c','d','f','g','k','l','m','n','p','r','s','t','z'],
	b: ['l', 'r'],
	c: ['h', 'l', 'r'],
	d: ['r', 'w', 'y'],
	e: ['b', 'd', 'g', 'l', 'm', 'n', 'r', 't', 'v', 'x', 'z'],
	f: ['l'],
	g: ['h', 'r'],
	i: ['d', 'g', 'k', 'l', 'm', 'n', 'p', 't', 'z'],
	k: ['l', 'n', 'r'],
	l: ['p', 't', 'v', 'y'],
	m: ['n'],
	n: ['g', 'k', 't'],
	o: ['b', 'c', 'd', 'g', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'w', 'z'],
	p: ['h', 'l', 'y'],
	r: ['v'],
	s: ['h', 'k', 'l', 't'],
	t: ['h', 'l', 'r', 'w'],
	u: ['b', 'd', 'g', 'l', 'm', 'n', 'p', 'r', 't', 'z'],
	v: ['l', 'r'],
	w: ['n', 'r'],
	x: ['y'],
	y: ['k', 'n', 'v'],
};

var goesToV = {
	a: ['i'],
	b: ['a', 'e', 'i', 'o'],
	c: ['e', 'o'],
	d: ['a', 'i', 'o'],
	e: ['a', 'e', 'u'],
	f: ['a', 'i', 'o'],
	g: ['a', 'e', 'o', 'u'],
	h: ['a', 'i', 'o'],
	i: ['e', 'o'],
	j: ['a', 'e', 'i', 'o'],
	k: ['a', 'e', 'i', 'o'],
	l: ['a', 'e', 'i', 'o', 'u'],
	m: ['a', 'e', 'i'],
	n: ['e', 'i', 'o'],
	o: ['a', 'e', 'i'],
	p: ['a', 'i', 'o', 'u'],
	q: ['u'],
	r: ['a', 'e', 'i', 'o'],
	s: ['a', 'e', 'o'],
	t: ['e', 'i', 'o'],
	u: ['e'],
	v: ['a', 'e', 'i', 'o'],
	w: ['a', 'e', 'i', 'o'],
	x: ['a', 'e'],
	y: ['e', 'o'],
	z: ['a', 'e', 'o'],
};

var sequences = {
	c: ['hr'],
	d: ['st'],
	f: ['th'],
	g: ['yp', 'yps'],
	k: ['yl'],
	l: ['ly', 'th', 'dr'],
	n: ['dr', 'ky', 'kr'],
	p: ['py'],
	q: ['ui', 'ue'],
	r: ['ry', 'th', 'ch', 'st'],
	s: ['sy', 'yl'],
	t: ['tr', 'hs', 'hr'],
	w: ['ls'],
	x: ['yl', 'yr'],
};

var incompat = {
	b: ['j', 'k', 'q', 's', 'z'],
	c: ['c', 'f', 'g', 'h', 'j', 'q'],
	d: ['c', 'h', 'j', 'p', 'q', 'w', 'z'],
};

var DEBUG = false;

var debug = function(message) {
	if (!DEBUG) {
		return;
	}
	console.log('    [ ' + message + ' ]');
};
var forIn = function(target, list) {
	for (var i = 0; i < list.length; i++) {
		if (list[i] == target) {
			return true;
		}
	}
	return false;
};
var range = function(low, high, step) {
	//debug( "range: " + low + " " + high )
	if (!step) {
		step = 1;
	}
	var returnValue = [];
	for (var i = low; i < high; i = i + step) {
		//debug( i )
		returnValue.push(i);
	}
	//debug( returnValue )
	return returnValue;
};

var randInt = function(min, max) {
	//stolen from stackexchange
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
var randChoice = function(list) {
	rand = randInt(0, list.length - 1);
	debug('randchoice: ' + rand + ' result: ' + list[rand]);
	return list[rand];
};
var chance = function(within, outof) {
	return forIn(randInt(0, outof), range(0, within));
};

var redoWithout = function(fromlist, without) {
	var choice = 'e'; //if can't find unused letter, defaults to "e"
	var timeout = 0;
	do {
		timeout++;
		choice = randChoice(fromlist);
	} while (forIn(choice, without) && timeout < 200);
	debug('choice: ' + choice + ' from ' + fromlist);
	return choice;
};

var Generator = function() {
	this.name = [randChoice(constonants.concat(vowels))];
	this.consecV = false;
	this.consecC = false;

	this.checkConsec = function() {
		if (forIn(this.name[-1], constonants)) {
			this.consecC++;
		} else if (forIn(this.name[-1], vowels)) {
			this.consecV++;
		}
	};

	this.genLetter = function() {
		last = this.name[this.name.length - 1];
		if (last == 'q') {
			// q must be handled first to rid strange names
			debug('q');
			return redoWithout(sequences['q'], this.name);
		}
		if (forIn(last, doubles) && chance(1, 5) && this.name.length > 2) {
			// double constonants
			debug('double');
			return last;
		}
		if (last in goesToC && forIn(last, constonants) && chance(1, 7) && !this.consec && this.name.length > 2){
			// two consecutive constonants
			debug('consec constonants');
			return redoWithout(goesToC[last], this.name);
		}
		if (last in sequences && chance(1, 10)) {
			// special sequences
			debug('sequences');
			return redoWithout(sequences[last], this.name);
		}
		if (last in goesToV && forIn(last, vowels) && chance(1, 15) && !this.consecV){
			// two consecutive vowels
			debug('consec vowels');
			return redoWithout(goesToV[last], this.name);
		}
		if (forIn(last, vowels)) {
			//switch to constonants
			debug('constonant');
			return redoWithout(constonants, this.name);
		}
		if (forIn(last, constonants)) {
			// switch to vowels
			debug('vowel');
			return redoWithout(vowels, this.name);
		}
	};
};

var nameGenMain = function(gen) {
	length = randInt(3, 5);
	for (var i = 0; i <= length; i++) {
		debug(gen.name);
		char = gen.genLetter();
		debug(char);
		for (var x = 0; x < char.length; x++) {
			gen.name = gen.name + char[x];
		}
		gen.checkConsec();
	}
	return gen.name;
};

nameGenMain(new Generator());

console.log("namegen.js end")
