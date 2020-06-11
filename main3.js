function createNode(html) {
  let div = document.createElement('div');
  div.innerHTML = html;
  return div.firstChild;
}

function renderNames() {
  characterList.innerHTML = '';
  // query sim for list of characters
  const npcs = Sim.getAllCharacterNames(); 
  for (let i = 0; i < npcs.length; i++) {
    const npc = npcs[i];
    let html = `<div class="character-list">
      <div class="npc"><h4>${npc}</h4></div>
        <ul>` + getOccupation(npc) + getFaction(npc) + getStatus(npc) + getFamilyOf(npc) + getFriendOf(npc) 
        + `</ul><br>
      </div>`
      const node = createNode(html);
      characterList.appendChild(node);
  }
}

function getOccupation(npc) {
  let occupation = Sim.getCharacterOccupationByName(npc); 
  if (occupation[0] == "undefined") {
    return ``
  }
  else {
    return `<li>
              Occupation:  ${Sim.getCharacterOccupationByName(npc)}
            </li>`
  }
}

function getFaction(npc) {
  let faction = Sim.getCharacterFactionByName(npc); 
  if (faction[0] == "undefined") {
    return ``
  }
  else {
    return `<li>
              Faction:  ${Sim.getCharacterFactionByName(npc)}
            </li>`
  }
}

function getStatus(npc) {
  let faction = Sim.getCharacterStatusByName(npc); 
  if (faction[0] == "undefined") {
    return ``
  }
  else {
    return `<li>
              Status:  ${Sim.getCharacterStatusByName(npc)}
            </li>`
  }
}

function getFamilyOf(npc) {
  let family = Sim.getCharacterFamilyByName(npc); 
  if (family[0] == "undefined") {
    return ``
  }
  else {
    return `<li>
              Family:  ${Sim.getCharacterFamilyByName(npc)}
            </li>`
  }
}

function getFriendOf(npc) {
  let friends = Sim.getCharacterFriendsByName(npc); 
  if (friends[0] == "undefined") {
    return ``
  }
  else {
    return `<li>
              Friends:  ${Sim.getCharacterFriendsByName(npc)}
            </li>`
  }
}

renderNames();