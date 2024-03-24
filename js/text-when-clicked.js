function changeFish() {
  var fish15 = document.getElementById("fish15");
  var currentContent = fish15.innerHTML.trim();

  if (currentContent.startsWith("<img")) {
    // If the current content is an image, switch to text
    fish15.innerHTML = "Congrats! You found the fish.";
  } else {
    // If the current content is text, switch to image
    fish15.innerHTML = '<img src="img/fishiconG1.gif" width="150px">';
  }
}

function changeCharacterOne() {
  var character = document.getElementById("character1");
  var currentContent = character.innerHTML.trim();

  if (currentContent.startsWith("<img")) {
    // If the current content is an image, switch to text
    character.innerHTML = "<h1>JOE</h1><h2>skill: gatherer</h2><h2>level: 10</h2><h2>strength: 7</h2>";
  } else {
    // If the current content is text, switch to image
    character.innerHTML = '<img src="img/character1.png">';
  }
}

function changeCharacterTwo() {
  var character = document.getElementById("character2");
  var currentContent = character.innerHTML.trim();

  if (currentContent.startsWith("<img")) {
    // If the current content is an image, switch to text
    character.innerHTML = "<h1>TRISHA</h1><h2>skill: Fisher</h2><h2>level: 8</h2><h2>strength: 9</h2>";
  } else {
    // If the current content is text, switch to image
    character.innerHTML = '<img src="img/character2.png">';
  }
}

function changeCharacterThree() {
  var character = document.getElementById("character3");
  var currentContent = character.innerHTML.trim();

  if (currentContent.startsWith("<img")) {
    // If the current content is an image, switch to text
    character.innerHTML = "<h1>TODD</h1><h2>skill: Medic</h2><h2>level: 4</h2><h2>strength: 8</h2>";
  } else {
    // If the current content is text, switch to image
    character.innerHTML ='<img src="img/character3.png">';
  }
}

function changeCoconut() {
  var coconut4 = document.getElementById("coconut4");
  var currentContent = coconut4.innerHTML.trim();

  if (currentContent.startsWith("<img")) {
    // If the current content is an image, switch to text
    coconut4.innerHTML = "Congrats! You found the fresh coconut.";
  } else {
    // If the current content is text, switch to image
    coconut4.innerHTML = '<img src="img/coconut1.gif" alt="coconut" width="100px">';
  }
}
function changePotion() {
  var potion4 = document.getElementById("potion4");
  var currentContent = potion4.innerHTML.trim();

  if (currentContent.startsWith("<img")) {
    // If the current content is an image, switch to text
    potion4.innerHTML = "Congrats! You found the correct ingredient!.";
  } else {
    // If the current content is text, switch to image
    potion4.innerHTML = '<img src="img/potion.png" alt="potion" width="150px">';
  }
}