// TEMPLATE: You can edit the `data` object below to change the generator logic
const data = {
  start: ['dragon', 'wizard', 'robot'],
  dragon: ['fire', 'ice', 'shadow'],
  wizard: ['arcane', 'necromantic', 'elemental'],
  robot: ['steel', 'plasma', 'quantum'],
  fire: ['mountain', 'volcano'],
  ice: ['glacier', 'tundra'],
  shadow: ['cave', 'forest'],
  arcane: ['tower', 'library'],
  necromantic: ['graveyard', 'crypt'],
  elemental: ['storm', 'rift'],
  steel: ['factory', 'fortress'],
  plasma: ['reactor', 'spaceship'],
  quantum: ['lab', 'dimension']
};

const templates = {
  final: (start, second, third) => `The ${start} used ${second} magic in the ${third}.`
};

function generate() {
  let first = randomPick(data.start);
  let second = randomPick(data[first]);
  let third = randomPick(data[second]);

  let sentence = templates.final(first, second, third);
  document.getElementById('result').textContent = sentence;
}

function randomPick(array) {
  return array[Math.floor(Math.random() * array.length)];
}

document.getElementById('generateBtn').addEventListener('click', generate);
