const container = document.getElementById("game-container");

// List thú cưng dễ thương (ảnh gif hoặc png)
const animals = [
  "img/hi.png", // mèo
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

function spawnAnimal(x, y) {
  const animal = document.createElement("div");
  animal.className = "animal";

  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  animal.style.backgroundImage = `url(${randomAnimal})`;
  animal.style.left = `${x - 40}px`;
  animal.style.top = `${y - 40}px`;
  animal.style.setProperty("--y", `${y}px`);

  container.appendChild(animal);

  setTimeout(() => animal.remove(), 2000);
}

container.addEventListener("pointerdown", (e) => {
  spawnAnimal(e.clientX, e.clientY);
});

container.addEventListener("pointermove", (e) => {
  if (e.pressure > 0) {
    spawnAnimal(e.clientX, e.clientY);
  }
});
let lastSpawn = 0;
const cooldown = 150; // ms

function spawnAnimal(x, y) {
  const now = Date.now();
  if (now - lastSpawn < cooldown) return; // giới hạn thời gian

  lastSpawn = now;

  const animal = document.createElement("div");
  animal.className = "animal";

  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  animal.style.backgroundImage = `url(${randomAnimal})`;
  animal.style.left = `${x - 40}px`;
  animal.style.top = `${y - 40}px`;
  animal.style.setProperty("--y", `${y}px`);

  container.appendChild(animal);

  setTimeout(() => animal.remove(), 2000);
}

const instruction = document.getElementById("instruction");
const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", () => {
  instruction.style.display = "none";
});

// Ẩn khi click vào vùng ngoài chữ
document.addEventListener("pointerdown", (e) => {
  if (!instruction.contains(e.target)) {
    instruction.style.display = "none";
  }
});
