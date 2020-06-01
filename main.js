function createNode(html) {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

function writeToConsole() {
  //Add locations for each of the locations
  const characters = JSON.parse(json_cast);

  for (let i = 0; i < characters.length; i++){ 
   writeCharacter(i, characters);
  }
}

function writeCharacter (i, characters) {
  var characterTag = characters[i].tag;
  var characterName = characters[i].fields.name;
  
  var info = Sim.getCharacterInfoByTag(characterTag);
  var infoArr = info.toString().split(',');
  
  // Check if character has any info
  if (infoArr[0] == ""){
    return;
  } else {
    for (let k = 0; k < infoArr.length; k++){
      var infoPiece = infoArr[k]
      writeIdea(infoPiece, characterTag, characterName);
    }
  }
}

function writeIdea (infoTag, characterTag, characterName) {
  var infoText = Sim.getInfoTextByTag(infoTag);
  log = infoTag + "[\"\<p\>(" + characterName + ") " + infoText + "\<\/p\>\"]:::" + Sim.getStorylineByInfoTag(infoTag);
  setTimeout (console.log.bind (console, log));

  var nextNodes = Sim.getNextNodesByTag(infoTag); 
  var nextNodeArray = nextNodes.toString().split(',');

  // Check if info has anything it connects with
  if (nextNodeArray[0] == ""){
    return;
  } else {
    for (let x = 0; x < nextNodeArray.length; x++){
      var node = nextNodeArray[x]
      writeSecondaryInfo(node);
      writeConnection(node, infoTag);
    }
  }
}

function writeConnection(node, infoTag) {
  log = infoTag + "-->" + node;
  setTimeout (console.log.bind (console, log));
}

function writeSecondaryInfo(infoTag) {
  var infoText = Sim.getInfoTextByTag(infoTag); 
  log = infoTag + "[\"\<p\>" + infoText + "\<\/p\>\"]:::" + Sim.getStorylineByInfoTag(infoTag);
  setTimeout (console.log.bind (console, log));

  var nextNodes = Sim.getNextNodesByTag(infoTag); 
  var nextNodeArray = nextNodes.toString().split(',');

  // Check if info has any locations
  if (nextNodeArray[0] == ""){
    return;
  } else {
    for (let x = 0; x < nextNodeArray.length; x++){
      var node = nextNodeArray[x];
      writeConnection(node, infoTag);
      //writeSecondaryInfo(node);
    }
  }
}

writeToConsole();


//Set it so that each node has line breaks after certain # of words
$("p").each(function() {
  var html = $(this).html().split(" ");
  var slicedHTML = "";
  var i;
  for (i = 0; i <= html.length - 3; i = i + 3) {
    slicedHTML = slicedHTML + html.slice(i, i+3).join(" ") + "<br />";
  }
  slicedHTML = slicedHTML + html.slice(i).join(" ");
  $(this).html(slicedHTML);
});