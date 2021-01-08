var json_info = `[
  {
    "tag": "RedbrandHideoutLocation",
      "text": "The Redbrand hideout is at Tresendar Manor",
      "known": false, 
      "actedOn": false,
      "locations": ["TresendarManor"],
      "goesTo": ["FindRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "SecretTunnelLocation",
      "text": "The Redbrand hideout has a secret tunnel entrance located near Tresendar Manor",
      "known": false,
      "actedOn": false,
      "locations": ["TresendarManor"],
      "goesTo": ["FindRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "SecretTunnelKnowledge",
      "text": "Carp at Alderleaf Farm saw a secret tunnel in the woods; the Redbrands almost caught him",
      "known": false,
      "actedOn": false,
      "locations": ["AlderleafFarm"],
      "goesTo": ["SecretTunnelLocation"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "OrcsTriboarTrail",
      "text": "The townmaster wants someone to deal with the orcs around Triboar Trail",
      "known": false,
      "actedOn": false,
      "locations": ["OrcCamp"],
      "goesTo": ["RemoveOrcCamp"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "DendrarFamilyKidnapped",
      "text": "Thal Dendrar stood up to Redbrands; they killed him and kidnapped his family",
      "known": false,
      "actedOn": false,
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "RedbrandsAndHalia",
      "text": "Redbrands don't mess with Halia at Phandalin Miner's Exchange",
      "known": false,
      "actedOn": false,
      "locations": ["PhandalinMinersExchange"],
      "goesTo": ["KillRedbrandLeader", "GoblinCragmawCastle"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "RedbrandHangout",
      "text": "Redbrands hang out at Sleeping Giant Tap House and they are trouble",
      "known": false,
      "actedOn": false,
      "locations": ["SleepingGiantTapHouse"],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "SisterGaraeleExhausted",
      "text": "Sister Garaele recently returned to the Shrine of Luck injured and exhausted",
      "known": false,
      "actedOn": false,
      "locations": ["ShrineOfLuck"],
      "goesTo": ["AskAgathaAboutBook"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "GoblinCragmawCastle",
      "text": "The goblin working for the Redbrands might know the way to Cragmaw Castle; Halia will leverage this info to get players to accept her quest",
      "known": false,
      "actedOn": false,
      "locations": ["TresendarManor"],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "CragmawCastleStory"
  },
  {
    "tag": "KillRedbrandLeader",
      "text": "Wants players to kill the leader of the Redbrands (she has secret plans to take over)",
      "known": false,
      "actedOn": false,
      "locations": ["TresendarManor"],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "GetRidOfRedbrands",
      "text": "Wants players to take out Redbrands",
      "known": false,
      "actedOn": false,
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "DiggingOldOwlWell",
      "text": "QUEST: There is undead and digging at Old Owl Well, used to be magical, want someone to investigate",
      "known": false,
      "actedOn": false,
      "locations": ["OldOwlWell"],
      "goesTo": ["HamunQuest"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "AskAgathaAboutBook",
      "text": "QUEST: Go to Agatha's Lair with comb, ask Agatha the banshee about wizard book location",
      "known": false,
      "actedOn": false,
      "locations": ["AgathasLair"],
      "goesTo": ["AgathaInfo"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "MissingIarno",
      "text": "Looking for missing member of order, Iarno (he is secretly new leader of Redbrands)",
      "known": false,
      "actedOn": false,
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "TownmasterAndRedbrands",
      "text": "Townmaster doesn't want players to mess with Redbrands, keep them in jail",
      "known": false,
      "actedOn": false,
      "locations": [],
      "goesTo": [],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "RedbrandShakedown",
      "text": "The Redbrands are shaking down local businesses",
      "known": false,
      "actedOn": false,
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "ReidothLocation",
      "text": "A druid named Reidoth can help you find Cragmaw Castle or Wave Echo Cave; they are at ruins of Thundertree",
      "known": false,
      "actedOn": false,
      "locations": ["Thundertree"],
      "goesTo": ["GreenDragon"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "AgathaInfo",
      "text": "If players are nice to Agatha or give her the comb, she can give them one piece of information",
      "known": false,
      "actedOn": false,
      "locations": ["WaveEchoCave", "CragmawCastle"],
      "goesTo": ["FindCragmawCastle", "FindWaveEchoCave", "LearnTowerMaker"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "GreenDragon",
      "text": "Wants players to get rid of green dragon in Thundertree in exchange for info on Wave Echo Cave / Cragmaw Castle",
      "known": false,
      "actedOn": false,
      "locations": ["WaveEchoCave", "CragmawCastle"],
      "goesTo": ["FindWaveEchoCave", "FindCragmawCastle"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "WaveEchoCaveMap",
      "text": "Has a map leading to Wave Echo Cave",
      "known": false,
      "actedOn": false,
      "locations": ["WaveEchoCave"],
      "goesTo": ["FindWaveEchoCave"],
      "storyline": "WaveEchoCaveStory"
  },
  {
    "tag": "HamunQuest",
      "text": "Hamun wants you to get rid of the orc camp at Triboar Trail or ask Agatha about who made the magic tower in exchange for the location to Wave Echo Cave",
      "known": false,
      "actedOn": false,
      "locations": ["AgathasLair", "OrcCamp", "WaveEchoCave"],
      "goesTo": ["RemoveOrcCamp", "LearnTowerMaker"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "RedbrandMinionInfo",
      "text": "You find some bugbears messing with a goblin, Droop. After defeating the bugbears you can interrogate them or get Droop to tell you the location of Cragmaw Castle",
      "known": false,
      "actedOn": false,
      "locations": ["CragmawCastle"],
      "goesTo": ["FindCragmawCastle"],
      "storyline": "CragmawCastleStory"
  },
  {
    "tag": "LearnAboutRedbrands",
      "text": "Motivate players  to take down Redbrands",
      "known": false,
      "actedOn": false,
      "goesTo": ["FindRedbrands"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "FindRedbrands",
      "text": "Find location of and enter Redbrand hideout",
      "known": false,
      "actedOn": false,
      "goesTo": ["RedbrandMinionInfo"],
      "storyline": "RedbrandStory"
  },
  {
    "tag": "FindCragmawCastle",
      "text": "Find location of Cragmaw Castle",
      "known": false,
      "actedOn": false,
      "goesTo": ["WaveEchoCaveMap"],
      "storyline": "CragmawCastleStory"
  },
  {
    "tag": "FindWaveEchoCave",  
      "text": "Explore Wave Echo Cave",
      "known": false,
      "actedOn": false,
      "goesTo": [],
      "storyline": "WaveEchoCaveStory"
  },
  {
    "tag": "RemoveOrcCamp",  
      "text": "Players can remove orc camp from Wyvern Tor",
      "known": false,
      "actedOn": false,
      "goesTo": ["FinishHamunQuest"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "FinishHamunQuest",  
      "text": "Talk to Hamun about completing one of his tasks",
      "known": false,
      "actedOn": false,
      "goesTo": ["FindWaveEchoCave"],
      "storyline": "EitherLocationStory"
  },
  {
    "tag": "LearnTowerMaker",  
      "text": "Ask Agatha about maker of old magic tower ruin",
      "known": false,
      "actedOn": false,
      "goesTo": ["FinishHamunQuest"],
      "storyline": "EitherLocationStory"
  }
]`