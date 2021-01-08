function createNode(html) {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

function writeToConsole() {
  //Add locations for each of the locations
  const characters = JSON.parse(json_cast);
  const locations = JSON.parse(json_locations);
  const information = JSON.parse(json_info);

  for (let i = 0; i < characters.length; i++){ 
   writeCharacter(i, characters);
  }

  for (let i = 0; i < locations.length; i++) {
    writeLocation(i, locations);
  }

  for (let i = 0; i < information.length; i++) {
    writeInformation(i, information);
  }


}

function output(text) {
  setTimeout (console.log.bind (console, text));
}

function writeCharacter (i, characters) {
  var characterTag = characters[i].tag;
  var characterName = characters[i].name;
  
  var info = Sim.getCharacterInfoByTag(characterTag);
  var infoArr = info.toString().split(',');

  output("{char} " + characterName + " is " + Sim.getCharacterStatusByName(characterName));
  if (Sim.getCharacterOccupationByName(characterName) != "undefined")
     output("{char} " + characterName + " works as a " + Sim.getCharacterOccupationByName(characterName))
  if (Sim.getCharacterFactionByName(characterName) != "undefined")
     output("{char} " + characterName + " is a member of the faction " + Sim.getCharacterFactionByName(characterName))
   // Check if character has any info
  if (infoArr[0] != ""){
    var text = "{char} " + characterName + " knows some information: " 
    for (let k = 0; k < infoArr.length; k++){
      text = text + " {info} " + Sim.getInfoTextByTag(infoArr[k]) 
    }
    output(text);
  }
  if (Sim.getCharacterMetByName(characterName) == "true") {
    output("The party has met " + "{char} " + characterName)
  } else {
    output("The party has not met " + "{char} " + characterName)
  }
}


function writeLocation (i, locations) { 
  var locationTag = locations[i].tag;
  var locationName = locations[i].name;
  
  var npcs = Sim.getLocationNPCsByTag(locationTag);
  var npcArr = npcs.toString().split(',');
  var text = "";

if (Sim.getLocationKnownByName(locationName) == "true") {
    output("The party knows about " + "{loc} " + locationName)
  } else {
    output("The party does not know about " + "{loc} " + locationName)
}

if (npcArr[0] != ""){
  text = "The characters "
    for (let k = 0; k < npcArr.length; k++){
      text = text + "{char} " + Sim.getCharacterNameByTag(npcArr[k]) + " "
    }
    text = text + "are at {loc} " + locationName
    output(text);
    
  } else {
    output("There are no people at " + locationName);
  }
  output("{loc} " + locationName + " is a part of the region " + Sim.getLocationRegionByName(locationName));
  
  if (Sim.getLocationPartyIsAt(locationName) == "true") {
    output("The party is at " + "{loc} " + locationName)
  }
  
  if (Sim.getLocationVisitedByName(locationName) == "true") {
    output("The party has visited " + "{loc} " + locationName)
  }
  
}

function writeInformation (i, information) { 
  var infoTag = information[i].tag;
  var infoName = information[i].text;
  var text = "";

  var locations = Sim.getInfoLocationsByTag(infoTag);
  var locArr = locations.toString().split(',');
  
  var goesTo = Sim.getInfoGoesToByTag(infoTag);
  var goesToArr = goesTo.toString().split(',');


if (Sim.getInfoKnownByTag(infoTag) == "true") {
    output("The party know that " + "{info} " + infoName); 

    if (locArr[0] != ""){
    text = "This will lead the party to finding out about the locations: "
    for (let k = 0; k < locArr.length; k++){
      text = text + "{loc} " + Sim.getLocationNameByTag(locArr[k]) 
    }
    output(text);
    }

    if (Sim.getInfoActedOnByTag(infoTag) == "true") {
      output("The party have acted on this information.")
    }

  } else {
    output("The party do not know that " + "{info} " + infoName)
  }

  if (goesToArr[0] != ""){
    text = "This leads to the info: "
    for (let k = 0; k < goesToArr.length; k++){
      text = text + "{info} " + Sim.getInfoTextByTag(goesToArr[k]) + " "
    }
    output(text);  
  }

  output("This is part of the storyline " + Sim.getInfoStorylineByTag(infoTag));

  



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