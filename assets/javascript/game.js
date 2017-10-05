var states = {
  0: {
    name: 'alabama',
    image: 'assets/images/alabama.png'
  },
  1: {
    name: 'alaska',
    image: 'assets/images/alaska.png'
  },
  2: {
    name: 'arizona',
    image: 'assets/images/arizona.png'
  },
  3: {
    name: 'arkansas',
    image: 'assets/images/arkansas.png'
  },
  4: {
    name: 'california',
    image: 'assets/images/california.png'
  },
  5: {
    name: 'colorado',
    image: 'assets/images/colorado.png'
  },
  6: {
    name: 'connecticut',
    image: 'assets/images/connecticut.gif'
  },
  7: {
    name: 'deleware',
    image: 'assets/images/delaware.png'
  },
  8: {
    name: 'florida',
    image: 'assets/images/florida.png'
  },
  9: {
    name: 'georgia',
    image: 'assets/images/georgia.png'
  },
  10: {
    name: 'hawaii',
    image: 'assets/images/hawaii.png'
  },
  11: {
    name: 'idaho',
    image: 'assets/images/idaho.png'
  },
  12: {
    name: 'illinois',
    image: 'assets/images/illinois.png'
  },
  13: {
    name: 'indiana',
    image: 'assets/images/indiana.png'
  },
  14: {
    name: 'iowa',
    image: 'assets/images/iowa.png'
  },
  15: {
    name: 'kansas',
    image: 'assets/images/kansas.gif'
  },
  16: {
    name: 'kentucky',
    image: 'assets/images/kentucky.png'
  },
  17: {
    name: 'louisiana',
    image: 'assets/images/louisiana.png'
  },
  18: {
    name: 'maine',
    image: 'assets/images/maine.png'
  },
  19: {
    name: 'maryland',
    image: 'assets/images/maryland.png'
  },
  20: {
    name: 'massachusetts',
    image: 'assets/images/massachusetts.png'
  },
  21: {
    name: 'michigan',
    image: 'assets/images/michigan.png'
  },
  22: {
    name: 'minnesota',
    image: 'assets/images/minnesota.png'
  },
  23: {
    name: 'mississippi',
    image: 'assets/images/mississippi.png'
  },
  24: {
    name: 'missouri',
    image: 'assets/images/missouri.png'
  },
  25: {
    name: 'montana',
    image: 'assets/images/montana.png'
  },
  26: {
    name: 'nebraska',
    image: 'assets/images/nebraska.png'
  },
  27: {
    name: 'nevada',
    image: 'assets/images/nevada.png'
  },
  28: {
    name: 'new hampshire',
    image: 'assets/images/new_hampshire.gif'
  },
  29: {
    name: 'new jersey',
    image: 'assets/images/new_jersey.png'
  },
  30: {
    name: 'new mexico',
    image: 'assets/images/new_mexico.png'
  },
  31: {
    name: 'new york',
    image: 'assets/images/new_york.png'
  },
  32: {
    name: 'north carolina',
    image: 'assets/images/north_carolina.png'
  },
  33: {
    name: 'north dakota',
    image: 'assets/images/north_dakota.png'
  },
  34: {
    name: 'ohio',
    image: 'assets/images/ohio.png'
  },
  35: {
    name: 'oklahoma',
    image: 'assets/images/oklahoma.png'
  },
  36: {
    name: 'oregon',
    image: 'assets/images/oregon.png'
  },
  37: {
    name: 'pennsylvania',
    image: 'assets/images/pennsylvania.png'
  },
  38: {
    name: 'rhode island',
    image: 'assets/images/rhode_island.png'
  },
  39: {
    name: 'south carolina',
    image: 'assets/images/south_carolina.jpg'
  },
  40: {
    name: 'south dakota',
    image: 'assets/images/south_dakota.png'
  },
  41: {
    name: 'tennessee',
    image: 'assets/images/tennessee.png'
  },
  42: {
    name: 'texas',
    image: 'assets/images/texas.png'
  },
  43: {
    name: 'utah',
    image: 'assets/images/utah.png'
  },
  44: {
    name: 'vermont',
    image: 'assets/images/vermont.png'
  },
  45: {
    name: 'virginia',
    image: 'assets/images/virginia.png'
  },
  46: {
    name: 'washington',
    image: 'assets/images/washington.png'
  },
  47: {
    name: 'west virginia',
    image: 'assets/images/west_virginia.png'
  },
  48: {
    name: 'wisconsin',
    image: 'assets/images/wisconsin.png'
  },
  49: {
    name: 'wyoming',
    image: 'assets/images/wyoming.png'
  },
  length: 50
}

  var currentState;

function newWord() {
  var num = Math.floor(Math.random() * 50);
  currentState = states[num];
  drawStates();
}

function drawStates() {
  var stateImgDiv = document.getElementById('state-img');

  while(stateImgDiv.firstChild){
    stateImgDiv.removeChild(stateImgDiv.firstChild);
  }

  var stateImg = document.createElement('img');
    stateImg.setAttribute('src', currentState.image);

  stateImgDiv.appendChild(stateImg);
}

// need to display image to DOM
// need to display blanks to DOM
// need to check keyboard input
// need to compair to letters in name
// need to restrict from repeat letters
// need success and fail options

// turn object into an array of objects. Remove the property names and use the name property to label them