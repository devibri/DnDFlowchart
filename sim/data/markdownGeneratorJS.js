const fs = require('fs');

//remove old contents of file
fs.writeFile('output.txt', '', function(){console.log('done')})

//import { json_locations } from './locations'
var file = require('./locations.js')

//Add locations for each of the locations
console.log("now parsing...");
const locations = JSON.parse(file.json_locations);

for (let i = 0; i < locations.length; i++){ 
  writeLocation(i, locations);
}

function writeLocation(i, locations) {
  console.log(i);
  var tag = locations[i].tag;
  console.log(tag);
    fs.appendFile("output.txt", tag + "\n", function(err){
  if(err) throw err; 
  });
}

