const story = {
  start: {
    text: "start the game",
    choices: ["Start",""],
    consequences: ["continue",""],
    images: ["img1.jpg"]
  },
  continue: {
    text: "",
    choices: ["Take the Path with Sunlight", "Follow the Mysterious Trail"],
    consequences: ["sunlight", "trail"],
    images: ["Take the Path with Sunlight Filtering Through the Leaves.jpg","Follow the Mysterious Trail Covered in Morning Dew.jpg"]

  },
  sunlight: {
    text: "",
    choices: ["Ask the Tree for Guidance", "Thank the Tree and Continue Without Advice"],
    consequences: ["guidance", "noadvice"],
    images: ["Ask the Tree for Guidance.jpg", "Thank the Tree and Continue Without Advice.jpg"]
  },
  trail: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ask the Tree for Guidance", "Thank the Tree and Continue Without Advice"],
    consequences: ["ask", "advice"],
    images: ["Ask the Tree for Guidance.jpg", "Thank the Tree and Continue Without Advice.jpg"]
  },
  guidance: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Follow the Stream Upstream", "Cross the Bridge Over the Stream"],
    consequences: ["upstream", "cross"],
    images: ["Follow the Stream Upstream.jpg.avif", "Cross the Bridge Over the Stream.jpeg"]
  },
  noadvice: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Follow the Stream Upstream", "Cross the Bridge Over the Stream"],
    consequences: ["stream", "bridge"],
    images: ["Follow the Stream Upstream.jpg.avif", "Cross the Bridge Over the Stream.jpeg"]
  },
  ask: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Follow the Stream Upstream", "Cross the Bridge Over the Stream"],
    consequences: ["up", "bri"],
    images: ["Follow the Stream Upstream.jpg.avif", "Cross the Bridge Over the Stream.jpeg"]
  },
  advice: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Follow the Stream Upstream", "Cross the Bridge Over the Stream"],
    consequences: ["follow", "over"],
    images: ["Follow the Stream Upstream.jpg.avif", "Cross the Bridge Over the Stream.jpeg"]
  },
  upstream: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["ins", "rest"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  cross: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["pect", "under"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  stream: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["flowers", "oak"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  bridge: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["clue", "tree"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  up: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["flo", "ok"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  bri: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["wers", "tr"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  follow: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["tt", "un"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  over: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Inspect the Flowers for Clues", "Rest Under the Majestic Oak Tree"],
    consequences: ["rs", "the"],
    images: ["Inspect the Flowers for Clues.jpeg", "Rest Under the Majestic Oak Tree.jpeg"]
  },
  ins: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  rest: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  pect: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  under: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  flowers: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  oak: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  clue: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  tree: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  flo: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  ok: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  wers: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  tr: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  tt: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  un: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  rs: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  the: {
    text: "Entering the cave, you find two passages. Which one will you choose?",
    choices: ["Ascend the Hill for a Panoramic View", "Descend into the Valley with Whispering Winds"],
    consequences: ["win", "win"],
    images: ["Ascend the Hill for a Panoramic View.jpeg", "Descend into the Valley with Whispering Winds.jpeg"]
  },
  win: {
    text: "Congratulations! You've navigated through the Enchanted Forest. Your choices have led you to a place of tranquility and beauty.",
    choices: ["Restart"],
    consequences: ["start"],
    images: ["img1.jpg"]
  }
  // Add more story segments...
};

function startGame() {
  updatePage('start');
}

function updatePage(storyPart) {
  const currentStoryPart = story[storyPart];
  const storyDiv = document.querySelector('.story');
  storyDiv.innerHTML = `<p>${currentStoryPart.text}</p>`;

  const choicesButtons = document.querySelectorAll('.choices button');
  choicesButtons.forEach((button, index) => {
    button.textContent = currentStoryPart.choices[index];
    button.addEventListener('click', () => {
      const nextPart = currentStoryPart.consequences[index];
      updatePage(nextPart);
    });
  });

  const storyImageContainer = document.getElementById('story-image-container');
  storyImageContainer.innerHTML = ''; // Clear existing images

  currentStoryPart.images.forEach((imageSrc, index) => {
    const storyImage = document.createElement('img');
    storyImage.src = imageSrc;
    storyImage.alt = `Image ${index + 1}`; // Assign alt text for accessibility
    storyImageContainer.appendChild(storyImage);
  });
}





function endGame(ending) {
  // Handle game endings
}

window.onload = startGame;
