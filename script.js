// Example Data Structure (Editable)
const data = {
  start: [
      { word: 'dog', next: 'bark' },
      { word: 'cat', next: 'meow' },
      { word: 'bird', next: 'chirp' },
  ],
  bark: [
      { word: 'loudly', next: 'final' },
      { word: 'softly', next: 'final' },
      { word: 'frenzied', next: 'final' },
  ],
  meow: [
      { word: 'mildly', next: 'final' },
      { word: 'angrily', next: 'final' },
      { word: 'playfully', next: 'final' },
  ],
  chirp: [
      { word: 'melodiously', next: 'final' },
      { word: 'harshly', next: 'final' },
      { word: 'softly', next: 'final' },
  ],
  final: [
      'a dog in a park',
      'a cat in a house',
      'a bird in the sky',
  ]
};

// Pick a random element from an array
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Main function to generate the sentence
function generateSentence() {
  // First choice (e.g., dog, cat, bird)
  const firstChoice = pickRandom(data.start);
  
  // Second choice (based on first choice - e.g., bark, meow, chirp)
  const secondChoice = pickRandom(data[firstChoice.next]);
  
  // Final sentence construction
  const finalChoice = pickRandom(data.final);

  // Display the sentence
  const sentence = `A ${firstChoice.word} that does ${secondChoice.word} is seen ${finalChoice}.`;
  document.getElementById('result').textContent = sentence;
}

// Event listener to trigger sentence generation on button click
document.getElementById('generate').addEventListener('click', generateSentence);
