# takes JSON list and changes it to markdown to generate flowcharts in mermaid

import json
import re
import sqlite3

from sqlite3 import Error


def create_connection(path):

    connection = None

    try:

        connection = sqlite3.connect(path)

        print("Connection to SQLite DB successful")

    except Error as e:

        print(f"The error '{e}' occurred")


    return connection

# file to which we will be writing output
fWrite = open('output.txt', 'w')

# opens the JSON file with the data and saves it to a JSON object
with open('locations.json') as data_file:
    locations = json.load(data_file)
    # dataClean = cleanhtml(data)

# runs through each spell in JSON object and extracts the data, writing it to file
# encodes characters and replaces apostrophes with escape character
for location in locations:
    tag = location["tag"]
    name = location["fields"]["name"]
    npcs = location["fields"]["NPCs"]
    for npc in npcs:  
      fWrite.write(str(tag) + "[" + name + "]-->" + npc + "(" + Sim.getCharacterNameByTag(npc) + ")\n")

fWrite.close()