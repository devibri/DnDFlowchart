var json_info = `[
  {
    "tag": "RedbrandHideoutLocation",
    "fields": {
      "text": "The Redbrand hideout is at Tresendar Manor",
      "known": "false", 
      "locations": ["TresendarManor"],
      "goesTo": ["FindRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "SecretTunnelLocation",
    "fields": {
      "text": "The Redbrand hideout has a secret tunnel entrance located near Tresendar Manor",
      "known": "false",
      "locations": ["TresendarManor"],
      "goesTo": ["FindRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "SecretTunnelKnowledge",
    "fields": {
      "text": "Carp at Alderleaf Farm saw a secret tunnel in the woods; the Redbrands almost caught him",
      "known": "false",
      "locations": ["AlderleafFarm"],
      "goesTo": ["SecretTunnelLocation"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "OrcsTriboarTrail",
    "fields": {
      "text": "The townmaster wants someone to deal with the orcs around Triboar Trail",
      "known": "false",
      "locations": ["OrcCamp"],
      "goesTo": ["RemoveOrcCamp"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "DendrarFamilyKidnapped",
    "fields": {
      "text": "Thal Dendrar stood up to Redbrands; they killed him and kidnapped his family",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "RedbrandsAndHalia",
    "fields": {
      "text": "Redbrands don't mess with Halia at Phandalin Miner's Exchange",
      "known": "false",
      "locations": ["PhandalinMinersExchange"],
      "goesTo": ["KillRedbrandLeader", "GoblinCragmawCastle"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "RedbrandHangout",
    "fields": {
      "text": "Redbrands hang out at Sleeping Giant Tap House and they are trouble",
      "known": "false",
      "locations": ["SleepingGiantTapHouse"],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "SisterGaraeleExhausted",
    "fields": {
      "text": "Sister Garaele recently returned to the Shrine of Luck injured and exhausted",
      "known": "false",
      "locations": ["ShrineOfLuck"],
      "goesTo": ["AskAgathaAboutBook"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "GoblinCragmawCastle",
    "fields": {
      "text": "The goblin working for the Redbrands might know the way to Cragmaw Castle; Halia will leverage this info to get players to accept her quest",
      "known": "false",
      "locations": ["TresendarManor"],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "CragmawCastleStory"
    }
  },
  {
    "tag": "KillRedbrandLeader",
    "fields": {
      "text": "Wants players to kill the leader of the Redbrands (she has secret plans to take over)",
      "known": "false",
      "locations": ["TresendarManor"],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "GetRidOfRedbrands",
    "fields": {
      "text": "Wants players to take out Redbrands",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "DiggingOldOwlWell",
    "fields": {
      "text": "QUEST: There is undead and digging at Old Owl Well, used to be magical, want someone to investigate",
      "known": "false",
      "locations": ["OldOwlWell"],
      "goesTo": ["HamunQuest"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "AskAgathaAboutBook",
    "fields": {
      "text": "QUEST: Go to Agatha's Lair with comb, ask Agatha the banshee about wizard book location",
      "known": "false",
      "locations": ["AgathasLair"],
      "goesTo": ["AgathaInfo"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "MissingIarno",
    "fields": {
      "text": "Looking for missing member of order, Iarno (he is secretly new leader of Redbrands)",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "TownmasterAndRedbrands",
    "fields": {
      "text": "Townmaster doesn't want players to mess with Redbrands, keep them in jail",
      "known": "false",
      "locations": [],
      "goesTo": [],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "RedbrandShakedown",
    "fields": {
      "text": "The Redbrands are shaking down local businesses",
      "known": "false",
      "locations": [],
      "goesTo": ["LearnAboutRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "ReidothLocation",
    "fields": {
      "text": "A druid named Reidoth can help you find Cragmaw Castle or Wave Echo Cave; they are at ruins of Thundertree",
      "known": "false",
      "locations": ["Thundertree"],
      "goesTo": ["GreenDragon"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "AgathaInfo",
    "fields": {
      "text": "If players are nice to Agatha or give her the comb, she can give them one piece of information",
      "known": "false",
      "locations": ["WaveEchoCave", "CragmawCastle"],
      "goesTo": ["FindCragmawCastle", "FindWaveEchoCave", "LearnTowerMaker"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "GreenDragon",
    "fields": {
      "text": "Wants players to get rid of green dragon in Thundertree in exchange for info on Wave Echo Cave / Cragmaw Castle",
      "known": "false",
      "locations": ["WaveEchoCave", "CragmawCastle"],
      "goesTo": ["FindWaveEchoCave", "FindCragmawCastle"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "WaveEchoCaveMap",
    "fields": {
      "text": "Has a map leading to Wave Echo Cave",
      "known": "false",
      "locations": ["WaveEchoCave"],
      "goesTo": ["FindWaveEchoCave"],
      "storyline": "WaveEchoCaveStory"
    }
  },
  {
    "tag": "HamunQuest",
    "fields": {
      "text": "Hamun wants you to get rid of the orc camp at Triboar Trail or ask Agatha about who made the magic tower in exchange for the location to Wave Echo Cave",
      "known": "false",
      "locations": ["AgathasLair", "OrcCamp", "WaveEchoCave"],
      "goesTo": ["RemoveOrcCamp", "LearnTowerMaker"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "RedbrandMinionInfo",
    "fields": {
      "text": "You find some bugbears messing with a goblin, Droop. After defeating the bugbears you can interrogate them or get Droop to tell you the location of Cragmaw Castle",
      "known": "false",
      "locations": ["CragmawCastle"],
      "goesTo": ["FindCragmawCastle"],
      "storyline": "CragmawCastleStory"
    }
  },
  {
    "tag": "LearnAboutRedbrands",
    "fields": {
      "text": "Motivate players  to take down Redbrands",
      "goesTo": ["FindRedbrands"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "FindRedbrands",
    "fields": {
      "text": "Find location of and enter Redbrand hideout",
      "goesTo": ["RedbrandMinionInfo"],
      "storyline": "RedbrandStory"
    }
  },
  {
    "tag": "FindCragmawCastle",
    "fields": {
      "text": "Find location of Cragmaw Castle",
      "goesTo": ["WaveEchoCaveMap"],
      "storyline": "CragmawCastleStory"
    }
  },
  {
    "tag": "FindWaveEchoCave",  
    "fields": {
      "text": "Explore Wave Echo Cave",
      "goesTo": [],
      "storyline": "WaveEchoCaveStory"
    }
  },
  {
    "tag": "RemoveOrcCamp",  
    "fields": {
      "text": "Players can remove orc camp from Wyvern Tor",
      "goesTo": ["FinishHamunQuest"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "FinishHamunQuest",  
    "fields": {
      "text": "Talk to Hamun about completing one of his tasks",
      "goesTo": ["FindWaveEchoCave"],
      "storyline": "EitherLocationStory"
    }
  },
  {
    "tag": "LearnTowerMaker",  
    "fields": {
      "text": "Ask Agatha about maker of old magic tower ruin",
      "goesTo": ["FinishHamunQuest"],
      "storyline": "EitherLocationStory"
    }
  }
]`