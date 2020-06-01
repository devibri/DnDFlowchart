/// HTML include order for sim JS files:
/// datascript
/// util
/// felt
/// {sim,actions,effects,siftpatterns}

window.Sim = (function(){

/// GENERATION FUNCTIONS

function getAllCharacterNames(db) {
  return datascript.q('[:find ?n :where [?c "type" "char"] [?c "name" ?n]]', db).map(vars => vars[0]);
}

function getAllLocationNames(db) {
  return datascript.q('[:find ?n :where [?c "type" "loc"] [?c "name" ?n]]', db).map(vars => vars[0]);
}

function getAllCharacterPairs(db) {
  return datascript.q('[:find ?c1 ?c2 \
                        :where [?c1 "type" "char"] [?c2 "type" "char"] [(not= ?c1 ?c2)]]', db);
}

// Like getAllCharacterPairs, but will only include [1 2] rather than both [1 2] and [2 1].
function getAllCharacterPairsUndirected(db) {
  return datascript.q('[:find ?c1 ?c2 \
                        :where [?c1 "type" "char"] [?c2 "type" "char"] \
                               [(not= ?c1 ?c2)] [(< ?c1 ?c2)]]', db);
}

function getCharacterIDByName(db, name) {
  return datascript.q(`[:find ?c :where [?c "type" "char"] [?c "name" "${name}"]]`, db)[0][0];
}

function getCharacterOccupationByName(db, name) {
  return datascript.q(`[:find ?o :where [?c "type" "char"] [?c "name" "${name}"] [?c "occupation" ?o]]`, db);
}

function getCharacterFactionByName(db, name) {
  return datascript.q(`[:find ?f :where [?c "type" "char"] [?c "name" "${name}"] [?c "faction" ?f]]`, db);
}

function getCharacterStatusByName(db, name) {
  return datascript.q(`[:find ?s :where [?c "type" "char"] [?c "name" "${name}"] [?c "status" ?s]]`, db);
}

function getLocationStateByName(db, name) {
  return datascript.q(`[:find ?o :where [?c "type" "loc"] [?c "name" "${name}"] [?c "known" ?o]]`, db);
}

function getLocationNPCsByName(db, name) {
  return datascript.q(`[:find ?c :where [?l "type" "loc"] [?l "name" "${name}"] [?l "NPCs" ?c]]`, db);
}

function getCharacterNameByTag(db, tag) {
  return datascript.q(`[:find ?n :where [?c "type" "char"] [?c "tag" "${tag}"] [?c "name" ?n]]`, db);
}

function getCharacterInfoByTag(db, tag) {
  return datascript.q(`[:find ?i :where [?c "type" "char"] [?c "tag" "${tag}"] [?c "information" ?i]]`, db);
}

function getInfoTextByTag(db, tag) {
  return datascript.q(`[:find ?t :where [?i "type" "info"] [?i "tag" "${tag}"] [?i "text" ?t]]`, db);
}

function getInfoLocationsByTag(db, tag) {
  return datascript.q(`[:find ?l :where [?i "type" "info"] [?i "tag" "${tag}"] [?i "locations" ?l]]`, db);
}

function getLocationNameByTag(db, tag) {
  return datascript.q(`[:find ?n :where [?l "type" "loc"] [?l "tag" "${tag}"] [?l "name" ?n]]`, db);
}

function getLocationNPCsByTag(db, tag) {
  return datascript.q(`[:find ?c :where [?l "type" "loc"] [?l "tag" "${tag}"] [?l "NPCs" ?c]]`, db);
}

function getNextNodesByTag(db, tag) {
  return datascript.q(`[:find ?n :where [?i "type" "info"] [?i "tag" "${tag}"] [?i "goesTo" ?n]]`, db);
}

function getCharacterNameByInfoTag(db, tag) {
  return datascript.q(`[:find ?c :where [?c "type" "char"] [?i "tag" "${tag}"] [?c "information" ?i]]`, db);
}

function getStorylineByInfoTag(db, tag) {
  return datascript.q(`[:find ?s :where [?i "type" "info"] [?i "tag" "${tag}"] [?i "storyline" ?s]]`, db);
}


// Generate the appropriate objects and put them into the database 
function generateCharacter(db, i, castObjects) {
  var char = Object.values(castObjects)[i];
  const entity = {
    type: 'char',
    tag: `${char.tag}`,
    name: `${char.fields.name}`,
    occupation: `${char.fields.occupation}`,
    faction:  `${char.fields.faction}`,
    status:  `${char.fields.status}`,
    information: `${char.fields.information}`
  };
  return createEntity(db, entity);
}

function generateLocation(db, i, locations) {
  var location = Object.values(locations)[i];
  const entity = {
    type: 'loc', 
    tag: `${location.tag}`,
    name: `${location.fields.name}`, 
    known: `${location.fields.known}`,
    NPCs: `${location.fields.NPCs}`
  }
  return createEntity(db, entity);
}

function generateInfo(db, i, infoObjects) {
  var info = Object.values(infoObjects)[i];
  const entity = {
    type: 'info', 
    tag: `${info.tag}`,
    text: `${info.fields.text}`, 
    known: `${info.fields.known}`,
    locations: `${info.fields.locations}`,
    goesTo: `${info.fields.goesTo}`,
    storyline: `${info.fields.storyline}`
  }
  return createEntity(db, entity);
}


/// INIT DB

let schema = {
  //exampleAttr: {':db/cardinality': ':db.cardinality/many'},
  // character traits
  curse:  {':db/cardinality': ':db.cardinality/many'},
  value:  {':db/cardinality': ':db.cardinality/many'},
  // other stuff
  actor:  {':db/valueType': ':db.type/ref'},
  cause:  {':db/valueType': ':db.type/ref'},
  source: {':db/valueType': ':db.type/ref'},
  target: {':db/valueType': ':db.type/ref'},
  projectContributor: {':db/valueType': ':db.type/ref', ':db/cardinality': ':db.cardinality/many'},
  tag:    {':db/cardinality': ':db.cardinality/many'},
};
let gameDB = datascript.empty_db(schema);

// Add character objects for each character
const characters = JSON.parse(json_cast);
//const castObjects = Object.values(castArray)[0];
for (let i = 0; i < _.size(characters); i++){ 
  gameDB = generateCharacter(gameDB, i, characters);
}

//Add locations for each of the locations
const locations = JSON.parse(json_locations);
for (let i = 0; i < _.size(locations); i++){ 
  gameDB = generateLocation(gameDB, i, locations);
}

//Add info for each of the info pieces
const information = JSON.parse(json_info);
for (let i = 0; i < _.size(information); i++){ 
  gameDB = generateInfo(gameDB, i, information);
}

/// return Sim singleton object

return {
  // Return the current simulation state as a DataScript DB.
  getDB: function() {
    return gameDB;
  },
  // Set the player character's name within the simulation.
  setPlayerName: function(playerName) {
    gameDB = updateProperty(gameDB, 1, 'name', playerName);
  },
  // Get a list of all character names.
  getAllCharacterNames: function () {
    return getAllCharacterNames(gameDB);
  },
  // Get the ID of the character with the specified name.
  getCharacterIDByName: function(name) {
    return getCharacterIDByName(gameDB, name);
  },
  // Get the occupation of the character with the specified name.
  getCharacterOccupationByName: function(name) {
    return getCharacterOccupationByName(gameDB, name);
  },
  // Get the faction of the character with the specified name. 
  getCharacterFactionByName: function(name) {
    return getCharacterFactionByName(gameDB, name);
  },
  // Get the status of the character with the specified name. 
  getCharacterStatusByName: function(name) {
    return getCharacterStatusByName(gameDB, name);
  },
  // Get a list of all location names.
  getAllLocationNames: function() {
    return getAllLocationNames(gameDB);
  },
  // Get the state of the location with the specified name.
  getLocationStateByName: function(name) {
    return getLocationStateByName(gameDB, name);
  },
  // Get the NPCs at the location with the specified name. 
  getLocationNPCsByName: function(name) {
    return getLocationNPCsByName(gameDB, name);
  },
  // Get the character's full name by their tag
  getCharacterNameByTag: function(tag) {
    return getCharacterNameByTag(gameDB, tag);
  }, 
  getCharacterInfoByTag: function(tag) {
    return getCharacterInfoByTag(gameDB, tag);
  },
  getInfoTextByTag: function(tag) {
    return getInfoTextByTag(gameDB, tag);
  },
  getInfoLocationsByTag: function(tag) {
    return getInfoLocationsByTag(gameDB, tag)
  },
  getLocationNameByTag: function(tag) {
    return getLocationNameByTag(gameDB, tag)
  },
  getLocationNPCsByTag: function(tag) {
    return getLocationNPCsByTag(gameDB, tag)
  },
  getNextNodesByTag: function(tag) {
    return getNextNodesByTag(gameDB, tag)
  },
  getCharacterNameByInfoTag: function(tag) {
    return getCharacterNameByInfoTag(gameDB, tag)
  },
  getStorylineByInfoTag: function(tag) {
    return getStorylineByInfoTag(gameDB, tag)
  }
}

})();
