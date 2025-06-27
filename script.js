const container = document.getElementById("game-container");
const instruction = document.getElementById("instruction");
const closeBtn = document.getElementById("close-btn");

const animals = [
  "img/angry.png",
  "img/axolotl (1).png",
  "img/axolotl.png",
  "img/eat.png",
  "img/full.png",
  "img/happy.png",
  "img/hi.png",
  "img/love (1).png",
  "img/love.png",
  "img/tired.png",
];

let lastSpawn = 0;
const cooldown = 150; // ms

function spawnAnimal(x, y) {
  const now = Date.now();
  if (now - lastSpawn < cooldown) return;
  lastSpawn = now;

  const animal = document.createElement("div");
  animal.className = "animal";

  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  animal.style.backgroundImage = `url(${randomAnimal})`;
  animal.style.left = `${x - 40}px`;
  animal.style.top = `${y - 40}px`;

  container.appendChild(animal);
  setTimeout(() => animal.remove(), 2000);
}

// Hide instruction when tap outside
document.addEventListener("pointerdown", (e) => {
  if (!instruction.contains(e.target)) {
    instruction.style.display = "none";
  }

  spawnAnimal(e.clientX, e.clientY);
});

container.addEventListener("pointermove", (e) => {
  if (e.pressure > 0) {
    spawnAnimal(e.clientX, e.clientY);
  }
});

closeBtn.addEventListener("click", () => {
  instruction.style.display = "none";
});
