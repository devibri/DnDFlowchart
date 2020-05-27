var json_info = `[
  {
    "tag": "RedbrandHideoutLocation",
    "fields": {
      "text": "The Redbrand hideout is at Tresendar Manor",
      "known": "false", 
      "locations": ["TresendarManor"],
      "goesTo": ["FindRedbrands"]
    }
  },
  {
    "tag": "SecretTunnelLocation",
    "fields": {
      "text": "The Redbrand hideout has a secret tunnel entrance located near Tresendar Manor",
      "known": "false",
      "locations": ["TresendarManor"],
      "goesTo": ["FindRedbrands"]
    }
  },
  {
    "tag": "SecretTunnelKnowledge",
    "fields": {
      "text": "Carp at Alderleaf Farm saw a secret tunnel in the woods; the Redbrands almost caught him",
      "known": "false",
      "locations": ["AlderleafFarm"],
      "goesTo": ["SecretTunnelLocation"]
    }
  },
  {
    "tag": "OrcsTriboarTrail",
    "fields": {
      "text": "The townmaster wants someone to deal with the orcs around Triboar Trail",
      "known": "false",
      "locations": ["OrcCamp"],
      "goesTo": ["RemoveOrcCamp"]
    }
  },
  {
    "tag": "DendrarFamilyKidnapped",
    "fields": {
      "text": "Thal Dendrar stood up to Redbrands; they killed him and kidnapped his family",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"]
    }
  },
  {
    "tag": "RedbrandsAndHalia",
    "fields": {
      "text": "Redbrands don't mess with Halia at Phandalin Miner's Exchange",
      "known": "false",
      "locations": ["PhandalinMinersExchange"],
      "goesTo": ["KillRedbrandLeader", "GoblinCragmawCastle"]
    }
  },
  {
    "tag": "RedbrandHangout",
    "fields": {
      "text": "Redbrands hang out at Sleeping Giant Tap House and they are trouble",
      "known": "false",
      "locations": ["SleepingGiantTapHouse"],
      "goesTo": ["LearnAboutRedbrands"]
    }
  },
  {
    "tag": "SisterGaraeleExhausted",
    "fields": {
      "text": "Sister Garaele recently returned to the Shrine of Luck injured and exhausted",
      "known": "false",
      "locations": ["ShrineOfLuck"],
      "goesTo": ["AskAgathaAboutBook"]
    }
  },
  {
    "tag": "GoblinCragmawCastle",
    "fields": {
      "text": "The goblin working for the Redbrands might know the way to Cragmaw Castle, Halia will leverage this info to get players to accept her quest",
      "known": "false",
      "locations": ["TresendarManor"],
      "goesTo": ["LearnAboutRedbrands"]
    }
  },
  {
    "tag": "KillRedbrandLeader",
    "fields": {
      "text": "Wants players to kill the leader of the Redbrands (she has secret plans to take over)",
      "known": "false",
      "locations": ["TresendarManor"],
      "goesTo": ["LearnAboutRedbrands"]
    }
  },
  {
    "tag": "GetRidOfRedbrands",
    "fields": {
      "text": "Wants players to take out Redbrands",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"]
    }
  },
  {
    "tag": "DiggingOldOwlWell",
    "fields": {
      "text": "QUEST: There is undead and digging at Old Owl Well, used to be magical, want someone to investigate",
      "known": "false",
      "locations": ["OldOwlWell"],
      "goesTo": ["HamunQuest"]
    }
  },
  {
    "tag": "AskAgathaAboutBook",
    "fields": {
      "text": "QUEST: Go to Agatha's Lair with comb, ask Agatha the banshee about wizard book location",
      "known": "false",
      "locations": ["AgathasLair"],
      "goesTo": ["AgathaInfo"]
    }
  },
  {
    "tag": "MissingIarno",
    "fields": {
      "text": "Looking for missing member of order, Iarno (he is secretly new leader of Redbrands)",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"]
    }
  },
  {
    "tag": "TownmasterAndRedbrands",
    "fields": {
      "text": "Townmaster doesn't want players to mess with Redbrands, keep them in jail",
      "known": "false",
      "locations": [],
      "goesTo": []
    }
  },
  {
    "tag": "RedbrandShakedown",
    "fields": {
      "text": "The Redbrands are shaking down local businesses",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"]
    }
  },
  {
    "tag": "ReidothLocation",
    "fields": {
      "text": "A druid named Reidoth can help you find Cragmaw Castle or Wave Echo Cave; they are at ruins of Thundertree",
      "known": "false",
      "locations": ["Thundertree"],
      "goesTo": ["GreenDragon"]
    }
  },
  {
    "tag": "AgathaInfo",
    "fields": {
      "text": "If players are nice to Agatha or give her the comb, she can give them one piece of information",
      "known": "false",
      "locations": ["WaveEchoCave", "CragmawCastle"],
      "goesTo": ["FindCragmawCastle", "FindWaveEchoCave", "LearnTowerMaker"]
    }
  },
  {
    "tag": "GreenDragon",
    "fields": {
      "text": "Wants players to get rid of green dragon in Thundertree in exchange for info on Wave Echo Cave / Cragmaw Castle",
      "known": "false",
      "locations": ["WaveEchoCave", "CragmawCastle"],
      "goesTo": ["FindWaveEchoCave", "FindCragmawCastle"]
    }
  },
  {
    "tag": "WaveEchoCaveMap",
    "fields": {
      "text": "Has a map leading to Wave Echo Cave",
      "known": "false",
      "locations": ["WaveEchoCave"],
      "goesTo": ["FindWaveEchoCave"]
    }
  },
  {
    "tag": "HamunQuest",
    "fields": {
      "text": "Hamun wants you to get rid of the orc camp at Triboar Trail or ask Agatha about who made the magic tower in exchange for the location to Wave Echo Cave",
      "known": "false",
      "locations": ["AgathasLair", "OrcCamp", "WaveEchoCave"],
      "goesTo": ["RemoveOrcCamp", "LearnTowerMaker"]
    }
  },
  {
    "tag": "RedbrandMinionInfo",
    "fields": {
      "text": "You find some bugbears messing with a goblin, Droop. After defeating the bugbears you can interrogate them or get Droop to tell you the location of Cragmaw Castle",
      "known": "false",
      "locations": ["CragmawCastle"],
      "goesTo": ["FindCragmawCastle"]
    }
  },
  {
    "tag": "LearnAboutRedbrands",
    "fields": {
      "text": "Motivate players  to take down Redbrands",
      "goesTo": ["FindRedbrands"]
    }
  },
  {
    "tag": "FindRedbrands",
    "fields": {
      "text": "Find location of and enter Redbrand hideout",
      "goesTo": ["RedbrandMinionInfo"]
    }
  },
  {
    "tag": "FindCragmawCastle",
    "fields": {
      "text": "Find location of Cragmaw Castle",
      "goesTo": ["WaveEchoCaveMap"]
    }
  },
  {
    "tag": "FindWaveEchoCave",  
    "fields": {
      "text": "Explore Wave Echo Cave",
      "goesTo": []
    }
  },
  {
    "tag": "RemoveOrcCamp",  
    "fields": {
      "text": "Players can remove orc camp from Wyvern Tor",
      "goesTo": ["FinishHamunQuest"]
    }
  },
  {
    "tag": "FinishHamunQuest",  
    "fields": {
      "text": "Talk to Hamun about completing one of his tasks",
      "goesTo": ["FindWaveEchoCave"]
    }
  },
  {
    "tag": "LearnTowerMaker",  
    "fields": {
      "text": "Ask Agatha about maker of old magic tower ruin",
      "goesTo": ["FinishHamunQuest"]
    }
  }
]`