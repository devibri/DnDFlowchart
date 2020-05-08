// If the party messes things up with someone, they will want to attack them
Felt.registerAction('PartyAttacked', {
  tagline: 'The party is attacked by ?n1',
  where: [
    '(dislikes ?c1 ?c2)',
    '?c1 "name" ?n1',
    '?c2 "name" ?n2',
    '?c1 "type" "char"',
    '?c2 "type" "char"',
    '(not= ?c1 ?c2)'
  ],
  event: (vars) => ({
    actor: vars.c1,
    target: vars.c2,
    effects: [
    ],
    text: `${vars.n2.charAt(0).toUpperCase() + vars.n2.slice(1)} is attacked by ${vars.n1}!`
  })
});

// Hints leading the players to characters with more information, quest hooks
Felt.registerAction('OverhearRumor', {
  tagline: 'The party hears a rumor from ?t1 about ?s1',
  where: [
    '?r1 "type" "rumor"',
    '?r1 "state" "untold"',
    '?r1 "rumorText" ?rt1', 
    '?r1 "teller" ?t1',
    '?r1 "snippet" ?s1'
  ],
  event: (vars) => ({
    effects: [
      {type: 'tellRumor', rumor: vars.r1, newState: 'told'},
    ],
    text: `The party hears a rumor from ${vars.t1}: "${vars.rt1}"`
  })
});

// Things that are bad going on in the world that characters don't like and want dealt with, but not offering full quest/reward
Felt.registerAction('HearComplaintsAbout', {
  tagline: 'The party hears complaints from ?t1 about ?s1',
  where: [
   '?r1 "type" "complaint"', 
   '?r1 "state" "untold"',
   '?r1 "subject" ?rt1', 
   '?r1 "teller" ?t1',
   '?r1 "snippet" ?s1'
  ],
  event: (vars) => ({
    text: `The party hears a complaint from ${vars.t1}: ${vars.rt1}`
  })
});

// Investigate something
Felt.registerAction('HearAboutStrangeOccurences', {
  tagline: 'The party hears from ?t1 about ?s1',
  where: [
   '?r1 "type" "investigation"', 
   '?r1 "state" "untold"',
   '?r1 "subject" ?rt1', 
   '?r1 "teller" ?t1',
   '?r1 "snippet" ?s1'
  ],
  event: (vars) => ({
    text: `The party hears from ${vars.t1} that they want the players to investigate something strange going on in the area: ${vars.rt1}`
  })
});

// Felt.registerAction('SomeoneDoesBadThing', {
//   tagline: 'The party sees someone doing a bad thing...',
//   where: [
//    '?c1 "name" ?n1'
//   ],
//   event: (vars) => ({
//     text: "The party sees someone doing a bad thing..."
//   })
// });

// Felt.registerAction('FindOutSomeoneWasBehind', {
//   tagline: 'The party investigates something and learns that someone is behind it',
//   where: [
//    '?c1 "name" ?n1'
//   ],
//   event: (vars) => ({
//     text: "The party realizes that someone was behind their investigation of..."
//   })
// });