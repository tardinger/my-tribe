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
    character.innerHTML = "character1 text";
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
    character.innerHTML = "character2 text";
  } else {
    // If the current content is text, switch to image
    character.innerHTML = '<img src="img/character2.png">';
  }
}